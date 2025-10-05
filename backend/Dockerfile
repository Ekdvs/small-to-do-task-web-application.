# Use Debian-based Node image for better Prisma compatibility
FROM node:20-bullseye

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Expose backend port
EXPOSE 4000

# Run backend
CMD ["npm", "run", "dev"]
