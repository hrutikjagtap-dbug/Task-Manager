const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
      maxlength: [100, "Title must be max 100 characters"]
    },
    description: {
      type: String,
      trim: true,
      maxlength: [500, "Description must be max 500 characters"],
      default: ""
    },
    status: {
      type: String,
      enum: ["pending", "in progress", "completed"],
      default: "pending"
    },
    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "medium"
    }
  },
  { 
    timestamps: true 
  }
);

module.exports = mongoose.model("Task", taskSchema);