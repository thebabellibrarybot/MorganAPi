# Morgan Library API

This repository contains a Node.js API built with Docker support. It provides a basic structure for creating a Node.js API and running it as a Docker container.

## Prerequisites

- Docker: Make sure you have Docker installed on your machine. You can download and install Docker from the official Docker website: [https://www.docker.com/](https://www.docker.com/)

## Usage

To use the Node.js API locally, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/node-api.git
   ```

2. Navigate to the cloned repository:

   ```bash
   cd node-api
   ```

3. Build the Docker image:

   ```bash
   docker build -t my-node-api .
   ```

4. Run the Docker container:

   ```bash
   docker run -p 8080:8080 --name my-node-api-container -d my-node-api
   ```

   The Node.js API will be accessible at [http://localhost:8080](http://localhost:8080).

## Deployment to AWS ECR

To deploy the Node.js API to AWS ECR, you'll need an AWS account and the AWS CLI configured on your machine. Follow these steps:

1. Build the Docker image as mentioned in the Usage section.

2. Tag the Docker image with your AWS ECR repository URL:

   ```bash
   docker tag my-node-api:latest aws_account_id.dkr.ecr.region.amazonaws.com/my-node-api:latest
   ```

   Replace `aws_account_id`, `region`, and `my-node-api` with your AWS account ID, preferred region, and desired repository name.

3. Log in to your AWS ECR repository:

   ```bash
   aws ecr get-login-password --region region | docker login --username AWS --password-stdin aws_account_id.dkr.ecr.region.amazonaws.com
   ```

   Replace `region` and `aws_account_id` with your preferred region and AWS account ID.

4. Push the Docker image to AWS ECR:

   ```bash
   docker push aws_account_id.dkr.ecr.region.amazonaws.com/my-node-api:latest
   ```

5. The Node.js API Docker image is now available in your AWS ECR repository and can be used in AWS services like ECS (Elastic Container Service) or EKS (Elastic Kubernetes Service).
