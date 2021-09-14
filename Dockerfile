FROM node:13.12.0-alpine
WORKDIR /gjw-web
# add `/app/node_modules/.bin` to $PATH
ENV PATH /gjw-web/node_modules/.bin:$PATH

COPY package.json package-lock.json ./
RUN npm install --silent

COPY . .

# start app
CMD ["npm" , "start"]