FROM node:lts  
WORKDIR /usr/src/app
RUN npm install --save prop-types
RUN npm install -g create-react-app
