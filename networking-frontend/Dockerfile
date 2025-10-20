# FROM node:22
# WORKDIR /react-app
# COPY package*.json .
# RUN npm install
# COPY . .
# ARG VITE_API_URL
# ENV VITE_API_URL=$VITE_API_URL
# RUN npm run build
# EXPOSE 5173
# CMD ["npm","run","dev"]

FROM node:22

WORKDIR /react-app

COPY package*.json ./
RUN npm install

COPY . .

# Pass the API URL build arg
ARG VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL

# Expose the Vite port
EXPOSE 5173

# Run Vite and bind it to all interfaces
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
