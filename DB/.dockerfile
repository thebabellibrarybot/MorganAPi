FROM mysql:latest

ENV MYSQL_ROOT_PASSWORD=mysecretpassword
ENV MYSQL_DATABASE=mydatabase
ENV MYSQL_USER=myuser
ENV MYSQL_PASSWORD=mypassword

COPY morgan_data.sql /docker-entrypoint-initdb.d/

EXPOSE 3306
