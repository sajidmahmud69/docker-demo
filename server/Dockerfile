FROM node:14-alpine
WORKDIR /server/app
COPY package*.json .
RUN npm install
COPY . .
EXPOSE 8000
CMD ["npm", "start"]


