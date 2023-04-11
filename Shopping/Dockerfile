FROM node

WORKDIR /app/Shopping

COPY package.json .

RUN npm install

COPY . .

CMD["npm", start]