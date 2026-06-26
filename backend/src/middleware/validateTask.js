const VALID_STATUS   = ["pending", "in progress", "completed"];
const VALID_PRIORITY = ["low", "medium", "high"];

const validateTask = (req, res, next) => {
  const { title, description, status, priority } = req.body;
  const errors = [];

  if (!title || !title.trim()) {
    errors.push("Title is required");
  } else if (title.length > 100) {
    errors.push("Title must be max 100 characters");
  }

  if (description && description.length > 500) {
    errors.push("Description must be max 500 characters");
  }

  if (status && !VALID_STATUS.includes(status)) {
    errors.push(`Status must be one of: ${VALID_STATUS.join(", ")}`);
  }

  if (priority && !VALID_PRIORITY.includes(priority)) {
    errors.push(`Priority must be one of: ${VALID_PRIORITY.join(", ")}`);
  }

  if (errors.length > 0) {
    return res.status(400).json({ success: false, errors });
  }

  next();
};

module.exports = validateTask;