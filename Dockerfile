FROM node:alpine as base

WORKDIR /src/Bot

COPY ./package.json ./yarn.lock ./

RUN npm install --production

COPY . .

CMD ["node", "./src/Bot.ts"]