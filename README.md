# Steve Nene Website

A modern portfolio website built with React, TypeScript, Vite, and ShadCN UI components.

## Docker Setup

This project supports both development and production environments using Docker and Docker Compose.

### Prerequisites

- Docker
- Docker Compose
- pnpm (for local development)

### Development Environment

#### Using Docker Compose (Recommended)

```bash
# Start development server
docker-compose -f docker-compose.dev.yml up

# Start in detached mode
docker-compose -f docker-compose.dev.yml up -d

# Stop the container
docker-compose -f docker-compose.dev.yml down
```

#### Using Docker directly

```bash
# Build development image
docker build --target development -t nene-web-dev .

# Run development container
docker run -p 5173:5173 -v $(pwd):/app -v /app/node_modules nene-web-dev
```

The development server will be available at `http://localhost:5173` with hot reload enabled.

### Production Environment

#### Using Docker Compose (Recommended)

```bash
# Build and start production server
docker compose -f docker-compose.prod.yml up -d

# Stop the container
docker compose -f docker-compose.prod.yml down
```

#### Using Docker directly

```bash
# Build production image
docker build --target production -t nene-web-prod .

# Run production container
docker run -p 80:80 nene-web-prod
```

The production server will be available at `http://localhost`.

### Local Development (Without Docker)

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

### Docker Architecture

- **Multi-stage build**: Optimized for both development and production
- **Development stage**: Includes hot reload and volume mounting
- **Production stage**: Nginx-served static files with optimized caching
- **Security**: Basic security headers and proper file serving

### Useful Commands

```bash
# View logs
docker compose -f docker-compose.dev.yml logs -f

# Rebuild containers
docker-compose -f docker-compose.dev.yml up --build

# Remove containers and volumes
docker-compose -f docker-compose.dev.yml down -v

# Access container shell
docker-compose -f docker-compose.dev.yml exec app sh
```
