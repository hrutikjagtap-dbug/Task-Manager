const express    = require("express");
const cors       = require("cors");
const taskRoutes = require("./routes/taskRoutes");

const app = express();

// 🔌 FIX: Configure CORS dynamically so your deployed frontend can communicate with it
app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:3000", // Fallback to local port during testing
  credentials: true
}));

app.use(express.json());

// Main Task API Endpoint Route
app.use("/api/tasks", taskRoutes);

// Fallback 404 handler for unmatched routes
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

// 🛡️ ADDED: Global Error-Handling Middleware
// This catches unexpected errors across routes and ensures proper HTTP status codes are returned
app.use((err, req, res, next) => {
  console.error("Server Error:", err.stack);
  
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error"
  });
});

module.exports = app;