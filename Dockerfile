FROM node

WORKDIR /cascagrossa/app

COPY package.json ./

RUN npm i --silent

COPY . .

EXPOSE 3500

CMD npm start