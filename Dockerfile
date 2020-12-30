FROM node:15.5.0-alpine

WORKDIR /app
COPY . .

RUN npm install
RUN npm run build

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=80

CMD [ "npm", "run" "start" ]
