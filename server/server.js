const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Sample API Routes
app.get("/api/projects", (req, res) => {
  res.json([
    { id: 1, name: "Portfolio Website", description: "React and Node.js app." },
    { id: 2, name: "E-commerce Store", description: "Full-stack application." },
  ]);
});

app.get("/api/blogs", (req, res) => {
  res.json([
    { id: 1, title: "React Best Practices", excerpt: "Tips for writing clean code." },
    { id: 2, title: "Node.js for Beginners", excerpt: "Learn Node.js step by step." },
  ]);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
