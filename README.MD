# Backend API for LearnChain

This guide will show you how to set up and test the backend API for the LearnChain using **Node.js** and **Express.js**.

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS version recommended) installed on your system.
- A tool to test APIs (e.g., [Postman](https://www.postman.com/) or [Thunderclient](https://www.thunderclient.com/)).

## Setup Instructions

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Moses-main/LearnChain
   cd LearnChain

   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the application**

   ```bash
   npm run dev
   ```

---

## Testing with the API

### You can equally test the api using the url below. The url below should serve as your root url if you are using the live link.

```

https://learnchain-aj5s.onrender.com

```

### But your localhost:port should serve as the root url when running the api locally.

i.e

```
http://localhost:3000/courses

```

---

### Setup and test locally

4. **Add a Course (POST /courses)**

URL: {root url}/courses

Method: POST
Example body:

```

{
"courseId": "101",
"courseName": "Blockchain Basics",
"reward": 10
}

```

5. **Retrieve All Courses (GET /courses)**

URL: {root url}/courses

Method: GET
Response:

```

{
"courseId": "101",
"courseName": "Blockchain Basics",
"reward": 10
}

```

6. **Update User Progress (POST /progress)**

URL: {root url}/progress

Method: POST

```{
"userId": "123",
"courseId": "101",
"progress": 50
}
```

7. **Get User Progress (GET /progress/{userId})**

URL: {root url}/progress/123

Method: GET

```
  {
    "courseId": "101",
    "courseName": "Blockchain Basics",
    "progress": 50
  }
```
