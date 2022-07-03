FROM node:alpine as base

WORKDIR /src/Bot

COPY ./package.json ./

RUN npm install --production

COPY . .

CMD ["node", "start"]