# ---- Build stage ----
# Build the React app with Node, output static files to /app/dist.
FROM node:22-alpine AS build
WORKDIR /app

# Copy lockfile separately so `npm install` is cached when only source changes.
COPY package.json package-lock.json* ./
RUN npm install

COPY . .
RUN npm run build

# ---- Runtime stage ----
# Serve the built static files with nginx.
FROM nginx:alpine
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
