FROM node:alpine as base

WORKDIR /app

#COPY ./package.json ./yarn.lock ./

#RUN npm install --production

ENTRYPOINT ["./node_modules/.bin/ts-node", "src/Bot.ts"]
