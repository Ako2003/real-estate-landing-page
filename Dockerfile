# Use a base node image
FROM node:22-alpine AS base

## Enable corepack for npm management
RUN corepack enable
RUN corepack prepare npm@latest --activate

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json* ./

# Install all dependencies
RUN npm i

# Development image
FROM base AS dev
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build the source code
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Set environment variable to disable Next.js telemetry during build
ENV NEXT_TELEMETRY_DISABLED 1

# Build the application
RUN npm run build

# Production image, setup environment
FROM base AS runner
WORKDIR /app

# Set the NODE_ENV to production
ENV NODE_ENV production

# Create a non-root user and set file ownership
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
COPY --from=builder /app/public ./public

# Copy the build output from builder stage
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Final production image
FROM runner AS production

# Set the working directory
WORKDIR /app

# Install production node_modules
RUN npm install --only=production

# Switch to non-root user
USER nextjs

# Expose the port the app runs on
EXPOSE 3000

# Set environmental variables
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

# Start the application
CMD ["node", "server.js"]