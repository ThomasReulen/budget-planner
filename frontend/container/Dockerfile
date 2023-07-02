FROM node:18

EXPOSE 3000 

RUN mkdir -p /home/node/app/node_modules
RUN chown node:node /home/node/app/node_modules 

ENV NODE_ENV=development

USER node 
#RUN npm install    