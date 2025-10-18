FROM node:22
WORKDIR /the/workdir/path
COPY package*.json .
RUN npm install -g nodemon
RUN npm install
COPY . .
EXPOSE 5000
CMD ["nodemon","index.js"]