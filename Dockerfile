FROM node:7.4.0

RUN mkdir /src

RUN npm install nodemon -g

WORKDIR /src
ADD package.json package.json
RUN npm install

ADD nodemon.json nodemon.json