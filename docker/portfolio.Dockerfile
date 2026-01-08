
FROM node:20-alpine

WORKDIR /app

# Install pnpm globally
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy only package files first for better caching
COPY pnpm-workspace.yaml ./
COPY package.json ./
COPY apps/portfolio/package.json ./apps/portfolio/
COPY packages ./packages

# Install dependencies with frozen lockfile for reproducibility
RUN pnpm install --frozen-lockfile

# Copy the rest of the source
COPY . .

WORKDIR /app/apps/portfolio

EXPOSE 3000

CMD ["pnpm", "dev"]