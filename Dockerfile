FROM node:16.20.1-alpine

ENV NODE_OPTIONS=--max_old_space_size=8192
WORKDIR /app
COPY . /app/
RUN yarn && yarn build-storybook

EXPOSE 80

RUN yarn start
