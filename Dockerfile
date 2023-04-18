FROM node:alpine    
EXPOSE 4000

COPY packages/client/stub-server/*.json /server/
RUN yarn global add json-server

CMD ["json-server", "/server/mockData.json", "--port", "4000", "--routes", "/server/routes.json", "--host", "0.0.0.0"]
