# Use an official Node.js runtime as the base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json (or yarn.lock) files to the container
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the entire application to the container
COPY . .

# Build the React application
RUN npm run build

# Set the command to start the server
CMD ["npm", "start"]
