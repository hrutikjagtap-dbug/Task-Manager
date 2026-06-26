# Task Manager

A full-stack Task Manager web application built with React and Node.js. It allows users to create, view, update, and delete tasks with status and priority tracking.

---

## Tech Stack

**Frontend:** React, Tailwind CSS, Axios  
**Backend:** Node.js, Express.js, MongoDB, Mongoose  
**Auth:** Passport.js (Local Strategy), Express Session, bcryptjs  
**Testing:** Jest  

---

## Features

- Create, edit, and delete tasks
- Filter tasks by status (Pending, In Progress, Completed)
- Stats bar showing total, pending, in-progress, and completed counts
- Input validation on both frontend and backend
- Loading and error states handled in the UI
- Responsive layout for mobile and desktop
- MongoDB for persistent data storage


---

## Project Structure

```
task-manager/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── authController.js
│   │   │   └── taskController.js
│   │   ├── data/
│   │   │   └── store.js
│   │   ├── middleware/
│   │   │   ├── isAuthenticated.js
│   │   │   └── validateTask.js
│   │   ├── models/
│   │   │   └── Task.js
│   │   ├── routes/
│   │   │   ├── authRoutes.js
│   │   │   └── taskRoutes.js
│   │   ├── app.js
│   │   └── passport.js
│   ├── tests/
│   │   └── task.test.js
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Badge.js
│   │   │   ├── ConfirmDialog.js
│   │   │   ├── FilterTabs.js
│   │   │   ├── Modal.js
│   │   │   ├── StatsBar.js
│   │   │   ├── TaskForm.js
│   │   │   ├── TaskList.js
│   │   │   └── TaskRow.js
│   │   ├── hooks/
│   │   │   ├── useAuth.js
│   │   │   └── useTasks.js
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── index.css
│   │   └── index.js
│   └── package.json
│
└── README.md
```

---

## Getting Started

### Prerequisites

- Node.js v18+
- MongoDB (local or MongoDB Atlas)
- npm

---

### 1. Clone the Repository

```bash
git clone https://github.com/hrutikjagtap-dbug/Task-Manager.git
cd Task-Manager
```

---

### 2. Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend/` folder:

```env
PORT=5000
MONGO_URL=your_mongodb_connection_string
```

Start the backend server:

```bash
node server.js
```

Or with nodemon for development:

```bash
nodemon server.js
```

Backend will run at: `http://localhost:5000`

---

### 3. Setup Frontend

```bash
cd frontend
npm install
npm start
```

Frontend will run at: `http://localhost:3000`

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/tasks | Fetch all tasks (supports ?status= filter) |
| GET | /api/tasks/:id | Fetch a single task by ID |
| POST | /api/tasks | Create a new task |
| PUT | /api/tasks/:id | Update an existing task |
| DELETE | /api/tasks/:id | Delete a task |
| POST | /api/auth/register | Register a new user |
| POST | /api/auth/login | Login a user |
| POST | /api/auth/logout | Logout a user |
| GET | /api/auth/me | Get current logged in user |

---

## Task Object Structure

```json
{
  "id": "string (auto-generated)",
  "title": "string (required, max 100 chars)",
  "description": "string (optional, max 500 chars)",
  "status": "pending | in-progress | completed",
  "priority": "low | medium | high",
  "createdAt": "ISO date string",
  "updatedAt": "ISO date string"
}
```

---

## Running Tests

```bash
cd backend
npm test
```

Tests are written using **Jest** and cover:
- Validation fails when title is missing
- Validation fails when title exceeds 100 characters
- Validation passes when task data is valid

---

## Design Decisions

- **MongoDB** was used instead of in-memory storage for data persistence across server restarts
- **Passport.js** with local strategy was used for session-based authentication
- **Tailwind CSS** was chosen for fast, responsive, and clean UI styling
- **Component-based architecture** was followed with reusable components like `Badge`, `Modal`, and `TaskForm`
- All API calls are centralised in `services/api.js` and state is managed via custom hooks in `hooks/useTasks.js`

---



---

## Author

**Hrutik Jagtap**  
GitHub: [hrutikjagtap-dbug](https://github.com/hrutikjagtap-dbug)
