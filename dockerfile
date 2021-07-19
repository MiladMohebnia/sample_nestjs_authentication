FROM node:latest
RUN npm install -g npm@7.20.0
WORKDIR /home/app
COPY package-lock.json .
COPY package.json .
RUN npm install
COPY . .
RUN npm run build
CMD npm run start:prod