---
id: performance-considerations
title: Performance Considerations
slug: /performance-considerations
sidebar_position: 2
---

## Options to Improve Query Performance

When running very large amounts of data with the default configuration of querying each day for the previous year, we have noticed that the time it takes to start the app increases significantly. We have added optional configuration to help with this performance issue to query and date filter in a few different ways:

### Date Range

In your `packages/client/.env` file, you can provide the following variables for a custom date range:

- `REACT_APP_DATE_RANGE_TYPE` (example values: day(s), week(s), month(s), etc..)
- `REACT_APP_DATE_RANGE_VALUE` (example values: number correlating to day/week/month etc..)

### Group By Timestamp in Queries

In your `packages/client/.env` file, you can provide the following variable for a custom query option to group the data by date type:

- `REACT_APP_GROUP_BY` (example values: day, week, month, quarter, year)

Please Note:

- Data grouped by time periods other than days will usually honor the time period of the grouping over a specific date range that falls within the range. For example, when data is grouped by month and the dates Oct. 18 - Nov. 12 are requested, the API and UI will return one data point for November that includes all available data for the month of November (1st - 30th). Behavior when requesting specific dates including portions of the group by period may not be consistent due to caching.

## Azure Performance Considerations

When fetching usage data from Azure, we take a different approach from the other cloud providers in which we query the Consumption Management API in order to fetch usage data. This is because Azure currently does not provide a way to execute large SQL queries
against an exported billing table. As a result, we query the UsageDetails endpoint of the [Azure Consumption API](https://learn.microsoft.com/en-us/rest/api/consumption/) to gather usage data for each subscription in the provided account.

### Rate Limit and Retry Logic

Due to the required frequency for fetching this amount of data from the API, requests may be subject to API throttling and rate limiting. We have added some logic to help with this issue, but it is important to note that the more subscriptions you have in your Azure account, the more requests will be made to the API and the more likely you are to encounter rate limit warnings.

In the chance of exceeding rate limits, we have implemented retry logic for each subscription in which we wait the required amount of time specified in the response error before retrying the request again (usually 60 seconds). When this issue is encountered, you will see the following warning logged in the console:

``` zsh
[ConsumptionManagement] warn: Azure ConsumptionManagementClient UsageDetailRow paging for time range [startDate] to [endDate] failed. Reason: Too many requests. Please retry after 60 seconds.
```

In this instance, no action is needed and usage data will be fetched after the retry period has passed. However, each subscription can only attempt a *maximum of 10 retries* before it will be skipped and excluded from the calculated estimates. When this occurs, a relevant warning will be logged to the console with details on which subscription was affected. If you encounter this issue, we recommend making a separate request for the affected subscription(s) or to explore one of the configuration options below to reduce the scope of the request.

### Configuration Options

#### Date Chunking

To aid the frequency of encountered rate limits for a *single* subscription, you can split the date range for the requests into smaller chunks. To enable this feature, we've added a configuration option to do this in your `packages/api/.env` and `packages/cli/.env` files by assigning a number to the `AZURE_CONSUMPTION_CHUNKS_DAYS` variable.

In doing so, this will split the requests into smaller chunks of specified days (i.e. assigning a value of 3 will make a request for every 3 days in the requested date range). When enabled, you will see the following log confirming the chunk size:

``` zsh
Time range will be requested in chunks of [chunk size] days.
```

...in addition to a similar log for each chunk to indicate the request progress:

``` zsh
[ConsumptionManagement] debug: Querying consumption usage details from 2023-02-28T00:00:00.000Z to 2023-03-01T23:59:59.999Z
```

##### Multiple Subscriptions

You may use this feature with multiple subscriptions, but when doing so, usage data for each subscription will be requested synchronously. This is because making parallel requests would cause rate limits to be encountered more frequently since the chunked requests would be asynchronously made for each subscription -- thus multiplying the number of requests made to the API.

You are welcome to use this option if exceeding rate limits for large requests still pose an issue for you. Just be aware that the synchronous nature of the requests will increase the time it takes to fetch usage data for your subscriptions, in exchange for less rate limits errors and retry attempts.