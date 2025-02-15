FROM node:latest
WORKDIR /app
COPY package.json .
RUN npm install

COPY src/index.ts .

RUN groupadd -g 1001 api-group && useradd -m -u 1001 -g api-group -s /bin/bash api-user
RUN chown -R api-user:api-group /app
USER api-user

RUN npx tsc index.ts
CMD [ "node", "index.js" ]

# docker build -t node .
# docker run -p 2222:2222 node