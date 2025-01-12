# Base Image
FROM node:lts


# Working Directory
WORKDIR /app

COPY ./package*.json ./

RUN npm install

COPY . .

EXPOSE 8000

CMD ["npm", "run", "dev"]
