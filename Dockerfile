FROM nginx:alpine

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY nginx/40-log-urls.sh /docker-entrypoint.d/40-log-urls.sh
RUN chmod +x /docker-entrypoint.d/40-log-urls.sh

COPY index.html member.html secret_santa.html shdk.html shdk.js CardWidget.js qr.jpg README.md www/ /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
