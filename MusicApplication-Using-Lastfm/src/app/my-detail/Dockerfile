FROM node:9-alpine
WORKDIR /usr/src/app
COPY package.json /usr/src/app
ADD /home/khushbu/Documents/angular/MusicApplication-Using-Lastfm/dist/musichub/index.html    /usr/src/app/dist/musichub
RUN npm install
RUN npm install http-server -g
CMD ["http-server", "-p", "4200"]