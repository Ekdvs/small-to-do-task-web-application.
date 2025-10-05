FROM node:20-bullseye

# Install PostgreSQL client
RUN apt-get update && \
    apt-get install -y postgresql-client && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package*.json ./

# Install dependencies reliably
RUN npm set fetch-retries 5 \
    && npm set fetch-retry-factor 2 \
    && npm set fetch-timeout 120000 \
    && npm ci --registry=https://registry.npmjs.org/

COPY . .

RUN npx prisma generate

EXPOSE 4000

CMD ["npm", "run", "dev"]
