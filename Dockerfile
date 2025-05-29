# Use official Node.js LTS image as the base
FROM node:18-alpine

# Set working directory inside container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) first for better caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app source code
COPY . .

# Build the Next.js app
RUN npm run build

# Expose port the app will run on
EXPOSE 3000

# Start the Next.js production server
CMD ["npm", "start"]
