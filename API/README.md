# Morgan Library API with Dockerized MySQL Database:

This is a basic Node.js API that is dockerized and designed to work with a MySQL database. It provides a simple interface to interact with the database using HTTP requests.

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

Once the database container is up and running, start the Node API container:

```perl
docker run -p 8080:8080 --name my-node-api my-node-api-container --link my-mysql-container:mysql -d my-node-api
```

This command links the Node API container with the MySQL container using Docker networking.

The Node API should now be running and accessible at http://localhost:8080.

### API Usage:
The API provides several endpoints to interact with the database. Below are the available routes:

`GET /api/books`: Retrieves all books from the database.
`GET /api/books/`:id: Retrieves a specific book by its ID.
`POST /api/books`: Creates a new book in the database.
`PUT /api/books/:id`: Updates an existing book by its ID.
`DELETE /api/books/:id`: Deletes a book from the database by its ID.
Make HTTP requests to the above endpoints using tools like cURL or Postman to interact with the API and perform CRUD operations on the database.

#### License:
This project is licensed under the MIT License.

#### Stack:
Node.js
Express
MySQL
Docker