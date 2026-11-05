require("dotenv").config();

const express = require("express");

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

// Home route
app.get("/", (req, res) => {
  res.json({
    message: "My application is running!",
    status: "success"
  });
});

// Health check
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy"
  });
});

// API example
app.get("/api/users", (req, res) => {
  res.json([
    { id: 1, name: "John" },
    { id: 2, name: "Alex" }
  ]);
});

// Start server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});