FROM node:7.4.0

# RUN mkdir /src

# RUN npm install nodemon -g

# WORKDIR /src
# ADD package.json package.json
# RUN npm install

# ADD nodemon.json

RUN useradd --user-group --create-home --shell /bin/false app

ENV HOME=/home/app

COPY package.json $HOME/desafio/
RUN chown -R app:app $HOME/*

USER app
WORKDIR $HOME/desafio
RUN npm cache clean && npm install --silent --progress=false

USER root
COPY . $HOME/desafio
RUN chown -R app:app $HOME/*
USER app

CMD ["npm", "start"]