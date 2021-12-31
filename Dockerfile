FROM node:14

RUN mkdir /ec_frontend

WORKDIR /ec_frontend

COPY ./package.json /ec_frontend

COPY . /ec_frontend

RUN npm install

RUN npm rebuild node-sass

RUN npm run build

CMD [ "npm", "run", "start" ]


