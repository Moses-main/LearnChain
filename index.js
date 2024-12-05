const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory datastore
const courses = {};
const userProgress = {};

const github_repo = "https://github.com/Moses-main/LearnChain";
// route endpoint
app.get("/", (req, res) => {
  res.send(
    `Welcome to Learn Chain please visit ${github_repo} for instruction on how to use the api`
  );
});

// Endpoint to add a new course
app.post("/courses", (req, res) => {
  const { courseId, courseName, reward } = req.body;

  if (!courseId || !courseName || !reward) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  if (courses[courseId]) {
    return res.status(400).json({ message: "Course already exists" });
  }

  courses[courseId] = { courseName, reward };
  res.status(201).json({ message: "Course added successfully." });
});

// Endpoint to retrieve all courses
app.get("/courses", (req, res) => {
  const courseList = Object.entries(courses).map(([courseId, details]) => ({
    courseId,
    ...details,
  }));
  res.status(200).json(courseList);
});

// Endpoint to update a user's course progress
app.post("/progress", (req, res) => {
  const { userId, courseId, progress } = req.body;

  if (!userId || !courseId || typeof progress !== "number") {
    return res.status(400).json({ message: "Missing required fields" });
  }

  if (!courses[courseId]) {
    return res.status(404).json({ message: "Course not found" });
  }

  if (!userProgress[userId]) {
    userProgress[userId] = {};
  }

  userProgress[userId][courseId] = progress;
  res.status(200).json({ message: "Progress updated successfully." });
});

// Endpoint to get a user's progress
app.get("/progress/:userId", (req, res) => {
  const { userId } = req.params;

  if (!userProgress[userId]) {
    return res.status(404).json({ message: "User progress not found" });
  }

  const progressList = Object.entries(userProgress[userId]).map(
    ([courseId, progress]) => ({
      courseId,
      courseName: courses[courseId]?.courseName || "Unknown Course",
      progress,
    })
  );

  res.status(200).json(progressList);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
