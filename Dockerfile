FROM node:7-alpine

RUN apk add yarn --update-cache --repository http://dl-3.alpinelinux.org/alpine/edge/community/ --allow-untrusted

# RUN mkdir app
# RUN cd app
RUN ls
