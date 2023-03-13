FROM node:18.13.0-alpine3.17
RUN apk update
WORKDIR /app
COPY package*.json . 
RUN npx yarn install --timeout=1000000000
COPY . .
RUN npm run build
CMD ["npm", "run", "start"]