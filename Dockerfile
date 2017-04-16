FROM node:7-alpine

RUN apk add yarn --update-cache --repository http://dl-3.alpinelinux.org/alpine/edge/community/ --allow-untrusted

COPY . /app/

WORKDIR app

RUN yarn

CMD yarn start:dev

EXPOSE 3000
