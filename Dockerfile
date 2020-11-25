from nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY dist/CLFE-Majob /usr/share/nginx/html


