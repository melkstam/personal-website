FROM node:12

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./
RUN yarn

COPY . .
RUN yarn build

CMD [ "yarn", "run", "serve" ]