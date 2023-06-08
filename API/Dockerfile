# Use a Node.js base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the application source code to the container
COPY . .

# Expose port 8080
EXPOSE 8080

# Start the Node.js application
CMD ["npm", "start"]
