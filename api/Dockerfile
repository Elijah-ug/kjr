# base image
FROM node:22-alpine
# set working directory
WORKDIR /app
# copy package file first for caching
COPY package*.json ./
# install dependencies
RUN npm install
# copy source code
COPY . .
# expose the port
EXPOSE 3000
# strat the application
CMD [ "node", "src/index.ts" ]