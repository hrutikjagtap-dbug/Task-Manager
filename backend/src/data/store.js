const tasks = [
  {
    id: "t001",
    title: "Design homepage layout",
    description: "Create wireframes and mockups for the main landing page",
    status: "completed",
    priority: "high",
    createdAt: "2026-06-01T09:00:00Z",
    updatedAt: "2026-06-03T11:00:00Z"
  },
  {
    id: "t002",
    title: "Setup Express server",
    description: "Initialize Node.js project with Express and basic middleware",
    status: "completed",
    priority: "high",
    createdAt: "2026-06-02T10:00:00Z",
    updatedAt: "2026-06-02T15:00:00Z"
  },
  {
    id: "t003",
    title: "Build task API endpoints",
    description: "Create GET, POST, PUT, DELETE routes for tasks",
    status: "completed",
    priority: "high",
    createdAt: "2026-06-03T08:30:00Z",
    updatedAt: "2026-06-04T10:00:00Z"
  },
  {
    id: "t004",
    title: "Setup React project with Vite",
    description: "Initialize frontend with Vite, Tailwind CSS and folder structure",
    status: "completed",
    priority: "medium",
    createdAt: "2026-06-04T09:00:00Z",
    updatedAt: "2026-06-04T12:00:00Z"
  },
  {
    id: "t005",
    title: "Create TaskForm component",
    description: "Build reusable form for creating and editing tasks with validation",
    status: "in-progress",
    priority: "high",
    createdAt: "2026-06-05T10:00:00Z",
    updatedAt: "2026-06-06T09:00:00Z"
  },
  {
    id: "t006",
    title: "Build TaskList table view",
    description: "Display all tasks in a table with status and priority badges",
    status: "in-progress",
    priority: "high",
    createdAt: "2026-06-06T08:00:00Z",
    updatedAt: "2026-06-07T10:00:00Z"
  },
  {
    id: "t007",
    title: "Add filter by status feature",
    description: "Allow users to filter tasks by pending, in-progress, completed",
    status: "in-progress",
    priority: "medium",
    createdAt: "2026-06-07T11:00:00Z",
    updatedAt: "2026-06-08T09:00:00Z"
  },
  {
    id: "t008",
    title: "Write unit tests for validation",
    description: "Test task title, description, status and priority validation logic",
    status: "pending",
    priority: "medium",
    createdAt: "2026-06-08T09:00:00Z",
    updatedAt: "2026-06-08T09:00:00Z"
  },
  {
    id: "t009",
    title: "Handle loading and error states",
    description: "Show spinner while fetching and error message if API fails",
    status: "pending",
    priority: "medium",
    createdAt: "2026-06-09T10:00:00Z",
    updatedAt: "2026-06-09T10:00:00Z"
  },
  {
    id: "t010",
    title: "Add delete confirmation dialog",
    description: "Show a confirmation popup before permanently deleting a task",
    status: "pending",
    priority: "low",
    createdAt: "2026-06-10T08:00:00Z",
    updatedAt: "2026-06-10T08:00:00Z"
  },
  {
    id: "t011",
    title: "Make UI responsive for mobile",
    description: "Ensure the layout works well on small screens using Tailwind breakpoints",
    status: "pending",
    priority: "medium",
    createdAt: "2026-06-11T09:30:00Z",
    updatedAt: "2026-06-11T09:30:00Z"
  },
  {
    id: "t012",
    title: "Add input validation on backend",
    description: "Return meaningful error messages and correct HTTP status codes",
    status: "completed",
    priority: "high",
    createdAt: "2026-06-12T10:00:00Z",
    updatedAt: "2026-06-13T08:00:00Z"
  },
  {
    id: "t013",
    title: "Connect frontend to backend API",
    description: "Replace fake data with real fetch calls using api.js service file",
    status: "in-progress",
    priority: "high",
    createdAt: "2026-06-13T09:00:00Z",
    updatedAt: "2026-06-14T10:00:00Z"
  },
  {
    id: "t014",
    title: "Write README documentation",
    description: "Add setup steps, how to run tests and known limitations",
    status: "pending",
    priority: "low",
    createdAt: "2026-06-14T11:00:00Z",
    updatedAt: "2026-06-14T11:00:00Z"
  },
  {
    id: "t015",
    title: "Push project to GitHub",
    description: "Create public repo, push code and share link before deadline",
    status: "pending",
    priority: "high",
    createdAt: "2026-06-15T08:00:00Z",
    updatedAt: "2026-06-15T08:00:00Z"
  }
];

module.exports = tasks;