# Base image
FROM node:14-alpine

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Copy your files
COPY index.js ./
COPY interpreter.js ./
COPY ./var/rinha/source.rinha.json ./var/rinha/source.rinha.json

# Start the app
CMD [ "node", "index.js" ]