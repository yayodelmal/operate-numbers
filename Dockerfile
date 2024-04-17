FROM node:lts-alpine3.18

WORKDIR /app

COPY package*.json ./

COPY tsconfig.json ./

RUN npm install

EXPOSE 3000

COPY . .

CMD ["npm", "run", "start"]