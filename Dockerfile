FROM node:20-slim

# Create and set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to install dependencies first
# This allows Docker to cache your npm modules if they haven't changed
COPY package*.json ./

# Install application dependencies cleanly
RUN npm install --silent

# Copy the rest of your application code into the container
COPY . .

# Run your build step (compiles TypeScript/frontend code if necessary)
RUN npm run build

# Inform Docker that the container listens on port 3000 at runtime
EXPOSE 3000

# Start the application using Node
CMD [ "node", "server.js" ]