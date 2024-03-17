FROM nginx:alpine

RUN rm /etc/nginx/conf.d/*

COPY ./raizapalooza/ /etc/nginx/certs
COPY ./default.conf /etc/nginx/conf.d/
RUN ls /etc/nginx/certs


EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]
