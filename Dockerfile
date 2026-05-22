FROM nginx:alpine

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY nginx/40-log-urls.sh /docker-entrypoint.d/40-log-urls.sh
RUN chmod +x /docker-entrypoint.d/40-log-urls.sh

COPY . /usr/share/nginx/html/

# Map legacy paths referenced in CSS to files we actually have
RUN mkdir -p assets/fonts fonts home/images/about home/images/footer home/images/hot-job www/fonts \
    && cp www/about-us-home.webp home/images/about/about-us-home.webp \
    && cp www/footer-login-bg-2.png home/images/footer/footer-login-bg.png \
    && cp www/footer-login-bg-2.png home/images/hot-job/hot-job-bg.png

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
