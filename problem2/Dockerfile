# Use official Node LTS
FROM node:20

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy rest of project
COPY . .

# Generate Prisma client
RUN npm run prisma:generate

# Expose server port
EXPOSE 5002

# Default command: run dev environment
# For production, override CMD in docker-compose
CMD ["sh", "-c", "npm run dev:setup"]

# Production command
# CMD ["sh", "-c", "npm run production:setup"]