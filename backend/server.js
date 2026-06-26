require("dotenv").config();
const mongoose = require("mongoose");
const app      = require("./src/app");

const PORT      = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URL;

if (!MONGO_URI) {
  console.error("CRITICAL ERROR: MONGO_URL is undefined in process.env!");
  process.exit(1);
}

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB successfully");
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Database connection failed:", err.message);
  });