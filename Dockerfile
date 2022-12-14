FROM node:18.12-alpine3.17

WORKDIR /app

COPY . .

RUN npm init -y

RUN npm install

EXPOSE 3000

CMD ["node", "app.js"]