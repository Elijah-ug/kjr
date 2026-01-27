# base image
FROM node:22-alpine
# set working directory
WORKDIR /app
# compy package file
COPY package*.json ./
# install all the necessary dependencies
RUN npm install
# copy source code
COPY . .
# build vite app
RUN npm run build



# expose the port
EXPOSE 5173
# start the app
CMD [ "npm", "run", "dev", "--", "--host" ]
