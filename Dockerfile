FROM node:17

WORKDIR /src/index

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "npm", "run", "start" ]
