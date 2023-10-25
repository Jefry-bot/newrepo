FROM node:18-slim as builder

WORKDIR /app

COPY . .

RUN npm install

CMD [ "npm", "start" ]

EXPOSE 3001