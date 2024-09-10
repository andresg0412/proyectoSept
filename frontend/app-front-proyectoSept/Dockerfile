FROM node:20

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy application code
COPY . .

# Elimina la carpeta 'dist' y el archivo 'tsbuildinfo' si existen
RUN rm -rf dist

# Build the application
RUN npm run build

# Expose the port that the application runs on
EXPOSE 4173

# Start the application in production mode
CMD ["npm", "run", "preview"]
