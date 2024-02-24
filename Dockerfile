FROM node:18.18-alpine

WORKDIR /site

EXPOSE 8080

ADD ./site/ /site/

RUN npm i

CMD [ "npm", "run", "dev" ]