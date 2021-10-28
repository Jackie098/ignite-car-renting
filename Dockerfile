# FROM serve to download a specific image
FROM node:latest 

# WORKDIR is where the app will be downloaded on the machine
WORKDIR /usr/app

# COPY will copy the json file to the image we are creating
COPY package.json ./

# RUN will run the application inside the container. 
# We are using NPM to avoid possible bugs as not all libs work with YARN
RUN npm install

# COPY copies everything inside the project's root folder, 
# except what we declared in ".dockerignore"
COPY . .

# EXPOSE runs the project on the specified port
EXPOSE 3333

# CMD receives an array and it is from this command that we will start 
# the application server
CMD ["npm", "run", "dev"] 

# The 'docker build -t <name-image> <where it is>' is the command for generate the build
# This command will be looking for "Dockerfile" as a pattern 
# Ex:
# "docker build -t rentx ."

# The 'docker run -p 3333:3333 rentx' is the command for created and run the application
# On the example above
  # 1) '-p' is to map the container port with the user port 
  # 2) '3333:3333' 
        # first - port of the user port 
        # second - port of the container
  # 3) Finally, we put the name of the image we want to run