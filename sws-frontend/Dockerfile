# node 20.7.0
FROM node:20.7.0-alpine3.17

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# copies both package and package lock
#COPY package.json ./
#COPY package-lock.json ./

COPY . /app

RUN npm install
RUN npm install react-scripts@5.0.1 -g --silent

# add app

# start app
CMD ["npm", "start"]