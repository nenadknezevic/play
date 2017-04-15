FROM node:7-alpine

RUN apk add yarn --update-cache --repository http://dl-3.alpinelinux.org/alpine/edge/community/ --allow-untrusted

COPY * /app/

WORKDIR app

# CMD yarn

RUN yarn

RUN ls

# EXPOSE 3000
