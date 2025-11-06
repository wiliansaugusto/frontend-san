# Stage 1: Build the Angular application
FROM node:20-alpine AS builder

WORKDIR /app

# Install system dependencies for native modules
RUN apk add --no-cache python3 make g++ git

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci

# Copy application files
COPY . .

# Debugging: List files and installed dependencies
RUN ls -la && npm list

# Build the Angular application
RUN npm run build --network=host || (echo "Build failed" && exit 1)

# Stage 2: Serve the SSR application
FROM node:20-alpine

WORKDIR /app

# Copy built files from the builder stage
COPY --from=builder /app/dist/frontend-san ./dist/frontend-san

EXPOSE 4000

# Start the SSR server
CMD ["node", "dist/frontend-san/server/server.mjs"]
