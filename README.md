# Task API

## Getting Started

1. Build the Docker images:

   ```bash
   docker-compose build
   ```

2. Start the Docker containers:

   ```bash
   docker-compose up
   ```

3. Access the API at `http://localhost:3000`.

## API Endpoints

### Create a Task

- **URL:** `/task`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "name": "Task Name",
    "description": "Task Description"
  }
  ```
- **Responses:**
  - **200 OK**
    ```json
    {
      "message": "Task created successfully"
    }
    ```
  - **404 Not Found**
    ```json
    {
      "message": "Task not found"
    }
    ```

### Get All Tasks

- **URL:** `/task`
- **Method:** `GET`
- **Response:**
  ```json
  [
    {
      "id": 1,
      "name": "Task Name",
      "description": "Task Description"
    },
    {
      "id": 2,
      "name": "Another Task",
      "description": "Another Description"
    }
  ]
  ```

### Get Task by ID

- **URL:** `/task/:id`
- **Method:** `GET`
- **Responses:**
  - **200 OK**
    ```json
    {
      "id": 1,
      "name": "Task Name",
      "description": "Task Description"
    }
    ```
  - **404 Not Found**
    ```json
    {
      "message": "Task not found"
    }
    ```

### Update Task by ID

- **URL:** `/task/:id`
- **Method:** `PUT`
- **Request Body:**
  ```json
  {
    "name": "Updated Task Name",
    "description": "Updated Task Description"
  }
  ```
- **Responses:**
  - **200 OK**
    ```json
    {
      "message": "Task updated successfully"
    }
    ```
  - **404 Not Found**
    ```json
    {
      "message": "Task not found"
    }
    ```

### Delete Task by ID

- **URL:** `/task/:id`
- **Method:** `DELETE`
- **Response:**
  - **200 OK**
    ```json
    {
      "message": "Task deleted successfully"
    }
    ```
  - **404 Not Found**
    ```json
    {
      "message": "Task not found"
    }
    ```