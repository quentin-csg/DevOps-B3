FROM node:latest AS build

WORKDIR /app
COPY package.json tsconfig.json ./
RUN npm install

COPY src/index.ts .
RUN npx tsc index.ts

FROM node:latest AS runtime

WORKDIR /app
COPY --from=build /app/package.json ./
RUN npm install --only=production

RUN groupadd -g 1002 api-group2 && useradd -m -u 1002 -g api-group2 -s /bin/bash api-user2
RUN chown -R api-user2:api-group2 /app
USER api-user2

CMD ["node", "index.js"]
#sudo docker build -t api2 -f DockerFile2/Dockerfile .
#docker run -p 4444:4444 api2