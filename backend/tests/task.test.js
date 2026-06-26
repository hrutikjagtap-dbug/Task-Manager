const validateTask = require("../src/middleware/validateTask");

const mockRes = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json   = jest.fn().mockReturnValue(res);
  return res;
};

describe("Task Validation Middleware", () => {
  test("should fail if title is missing or empty", () => {
    const req = { body: { title: "   " } };
    const res = mockRes();
    const next = jest.fn();

    validateTask(req, res, next);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({ success: false })
    );
    expect(next).not.toHaveBeenCalled();
  });

  test("should fail if title exceeds 100 characters", () => {
    const req = { body: { title: "a".repeat(101) } };
    const res = mockRes();
    const next = jest.fn();

    validateTask(req, res, next);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(next).not.toHaveBeenCalled();
  });

  test("should fail if an invalid status is provided", () => {
    const req = { body: { title: "Valid Title", status: "invalid-status-value" } };
    const res = mockRes();
    const next = jest.fn();

    validateTask(req, res, next);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(next).not.toHaveBeenCalled();
  });

  test("should call next() if all data is valid", () => {
    const req = { 
      body: { 
        title: "Complete Assignment", 
        status: "in-progress", 
        priority: "high" 
      } 
    };
    const res = mockRes();
    const next = jest.fn();

    validateTask(req, res, next);

    expect(next).toHaveBeenCalled();
    expect(res.status).not.toHaveBeenCalled();
  });
});