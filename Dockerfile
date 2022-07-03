FROM node:alpine as base

WORKDIR /src/Bot

COPY ./package.json ./yarn.lock ./

RUN yarn install --frozen-lockfile && yarn cache clean

COPY . .

CMD ["node", "start"]