FROM mysql:latest

# Set MySQL environment variables
ENV MYSQL_DATABASE=morgan
ENV MYSQL_USER=mumbot
ENV MYSQL_PASSWORD=123456
# Copy the SQL file to the Docker container
COPY database_backup.sql /docker-entrypoint-initdb.d/

# Expose MySQL port
EXPOSE 3306

# Start MySQL server
CMD ["mysqld"]
