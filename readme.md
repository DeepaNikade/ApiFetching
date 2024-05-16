# Random Image and Joke API

## Project Overview
This project is a simple RESTful API built with Node.js and Express.js that fetches random images from Unsplash and random jokes from the Ninja API.

## Table of Contents
- [Project Overview](#project-overview)
- [Setup and Installation](#setup-and-installation)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Testing the API](#testing-the-api)
- [Challenges Encountered](#challenges-encountered)

## Setup and Installation

### Prerequisites
- Node.js installed on your machine.
- An API key for Unsplash.
- An API key for the Ninja API.

### Installation Steps
1. **Clone the repository:**
    ```bash
    git clone (https://github.com/DeepaNikade/ApiFetching)
    cd ApiFetching
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Create an `.env` file in the root directory and add your API keys:**
    ```plaintext
    UNSPLASH_API_KEY=your_unsplash_api_key
    NINJA_API_KEY=your_ninja_api_key
    ```

4. **Start the server:**
    ```bash
    node index.js
    ```

## Environment Variables
The following environment variables need to be set in your `.env` file:

- `UNSPLASH_API_KEY`: Your Unsplash API key.
- `NINJA_API_KEY`: Your Ninja API key.

## API Endpoints

### GET /randomImages
Fetches a random image from Unsplash.

**Response:**
- `200 OK` with a JSON object containing the image data.

### GET /randomJokes
Fetches a random joke from the Ninja API.

**Response:**
- `200 OK` with the joke text.

## Testing the API
You can test the API endpoints using tools like Postman or cURL.

### Example Requests:

#### Fetch a Random Image
```bash
curl -X GET http://localhost:4000/randomImages
