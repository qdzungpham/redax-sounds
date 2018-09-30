FROM node:10.7.0

# Copy app source
COPY . /src

# Set work directory to /src
WORKDIR /src

# Install app dependencies
RUN npm install

# Build for production
RUN npm run build

# Expose port to outside world
EXPOSE 8080

# Start command as per package.json
CMD ["npm", "start"]