FROM node:18-slim as builder

WORKDIR /app

COPY . .

RUN npm install

RUN npm start

EXPOSE 3000