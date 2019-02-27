FROM node:10
WORKDIR /usr/src/app
RUN mkdir -p /usr/src/app/file-uploads
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5000

CMD ["npm", "start"]
