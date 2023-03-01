"use strict";(self.webpackChunkwww_cloudcarbonfootprint_org=self.webpackChunkwww_cloudcarbonfootprint_org||[]).push([[487],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),f=o,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||a;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7625:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={id:"performance-considerations",title:"Performance Considerations",slug:"/performance-considerations",sidebar_position:2},i=void 0,l={unversionedId:"ConfigurationOptions/performance-considerations",id:"ConfigurationOptions/performance-considerations",title:"Performance Considerations",description:"Options to Improve Query Performance",source:"@site/docs/ConfigurationOptions/PerformanceConsiderations.md",sourceDirName:"ConfigurationOptions",slug:"/performance-considerations",permalink:"/docs/performance-considerations",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"performance-considerations",title:"Performance Considerations",slug:"/performance-considerations",sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"Data Persistence and Caching",permalink:"/docs/data-persistence-and-caching"},next:{title:"Tagging",permalink:"/docs/tagging"}},s={},p=[{value:"Options to Improve Query Performance",id:"options-to-improve-query-performance",level:3},{value:"Date Range",id:"date-range",level:4},{value:"Group By Timestamp in Queries",id:"group-by-timestamp-in-queries",level:4}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"options-to-improve-query-performance"},"Options to Improve Query Performance"),(0,o.kt)("p",null,"When running very large amounts of data with the default configuration of querying each day for the previous year, we have noticed that the time it takes to start the app increases significantly. We have added optional configuration to help with this performance issue to query and date filter in a few different ways:"),(0,o.kt)("h4",{id:"date-range"},"Date Range"),(0,o.kt)("p",null,"In your ",(0,o.kt)("inlineCode",{parentName:"p"},"packages/client/.env")," file, you can provide the following variables for a custom date range:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"REACT_APP_DATE_RANGE_TYPE")," (example values: day(s), week(s), month(s), etc..)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"REACT_APP_DATE_RANGE_VALUE")," (example values: number correlating to day/week/month etc..)")),(0,o.kt)("h4",{id:"group-by-timestamp-in-queries"},"Group By Timestamp in Queries"),(0,o.kt)("p",null,"In your ",(0,o.kt)("inlineCode",{parentName:"p"},"packages/client/.env")," file, you can provide the following variable for a custom query option to group the data by date type:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"REACT_APP_GROUP_BY")," (example values: day, week, month, quarter, year)")),(0,o.kt)("p",null,"Please Note: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Data grouped by time periods other than days will usually honor the time period of the grouping over a specific date range that falls within the range. For example, when data is grouped by month and the dates Oct. 18 - Nov. 12 are requested, the API and UI will return one data point for November that includes all available data for the month of November (1st - 30th). Behavior when requesting specific dates including portions of the group by period may not be consistent due to caching.")))}d.isMDXComponent=!0}}]);