FROM node:20

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy application code
COPY . .

# Elimina la carpeta 'dist' y el archivo 'tsbuildinfo' si existen
RUN rm -rf dist tsconfig.tsbuildinfo

# Compila la aplicación con TypeScript
RUN npm run build

# Expose port
EXPOSE 3001

# Start the application
CMD ["npm", "run", "start:dev"]
