FROM node:14-alpine AS builder
ENV NODE_ENV production
WORKDIR /hn_app
COPY package*.json ./
RUN npm  ci --silent
COPY . ./

RUN npm run build

FROM nginx:stable-alpine
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
