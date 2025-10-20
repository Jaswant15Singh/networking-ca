# FROM node:22
# WORKDIR /the/workdir/path
# COPY package*.json .
# RUN npm install -g nodemon
# RUN npm install
# COPY . .
# EXPOSE 5000
# CMD ["nodemon","index.js"]

FROM node:20

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

EXPOSE 5000

CMD ["node", "index.js"]
