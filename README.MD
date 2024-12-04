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

## Testing the API

### You can equally test the api using the url below

```

```

4. **Add a Course (POST /courses)**

URL: http://localhost:3000/courses

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

URL: http://localhost:3000/courses

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

URL: http://localhost:3000/progress

Method: POST

```{
"userId": "123",
"courseId": "101",
"progress": 50
}
```

7. **Get User Progress (GET /progress/{userId})**

URL: http://localhost:3000/progress/123

Method: GET

```
  {
    "courseId": "101",
    "courseName": "Blockchain Basics",
    "progress": 50
  }
```
