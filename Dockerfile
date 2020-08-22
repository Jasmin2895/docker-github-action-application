#Dockerfile

FROM node:latest

WORKDIR /docker-github-action-application

COPY . .

ENV PORT=3000

RUN npm install 

EXPOSE ${PORT}

ENTRYPOINT [ "npm", "start" ]