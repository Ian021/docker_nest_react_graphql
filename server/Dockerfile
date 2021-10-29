FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./
RUN yarn
RUN yarn add global nodemon

COPY . .

EXPOSE 4000

CMD [ "yarn", "dev" ]
