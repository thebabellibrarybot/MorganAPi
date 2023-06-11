# Morgan Library API with Dockerized MySQL Database:

This is a basic Node.js API that is dockerized with a MySQL database. It provides a simple interface to interact with the database using HTTP requests.

### Getting Started:

To run the Node API and connect it to the Dockerized MySQL database, follow the steps below:

#### Prerequisites:

Docker: Make sure you have Docker installed on your system.
Setup
Clone the repository:

```shell
git clone https://github.com/thebabellibrarybot/MorganAPi.git

cd MorganAPi
```

Build the Docker image for the Node API:

```shell
docker build -t my-node-api .
```

Start the Docker container for the MySQL database using Docker Compose:

```shell
docker-compose up -d
``` 

The Node API should now be running and accessible at http://localhost:8080.

### API Usage:
The API provides several endpoints to interact with the database. Below are the available routes:

`GET /api/books`: Retrieves all books from the database.

`GET /api/books/:id` Retrieves a specific book by its ID.

`GET /api/pages`: Retrives all pages from the database.

`GET /api/pages/:id`: Retrives a specific page by its ID.

Make HTTP requests to the above endpoints using tools like cURL or Postman to interact with the API and perform CRUD operations on the database.

#### License:
This project is licensed under the MIT License.

#### Stack:
Node.js
Express
MySQL
Docker
