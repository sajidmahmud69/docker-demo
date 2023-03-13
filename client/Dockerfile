# set the base image
FROM node:14-alpine

# Set the working directory
WORKDIR /myProject/app

# copy the package.json type files
COPY package*.json .

# Install all the modules inside the docker container
RUN npm install

# Copy all the files from local dir to docker container
COPY . .

# Expose the port 
EXPOSE 3000

CMD ["npm", "start"]



