FROM nginx:alpine
#!/bin/sh

WORKDIR /usr/share/nginx/html

COPY dist/solitaire .
COPY nginx.conf /etc/nginx
EXPOSE 4200 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
