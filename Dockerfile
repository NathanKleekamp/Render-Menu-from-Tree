FROM node:12-alpine
WORKDIR /usr/src/app
COPY editor/package*.json ./
RUN npm install
COPY editor .
CMD [ 'npm', 'start' ]
