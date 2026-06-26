import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { useTasks } from "./hooks/useTasks";
import StatsBar from "./components/StatsBar";
import FilterTabs from "./components/FilterTabs";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import ConfirmDialog from "./components/ConfirmDialog";
import Modal from "./components/Modal";

function App() {
  const { tasks, loading, error, addTask, editTask, removeTask } = useTasks();
  const [filter,      setFilter]     = useState("all");
  const [showCreate, setShowCreate] = useState(false);
  const [editTarget, setEditTarget] = useState(null);
  const [deleteId,   setDeleteId]   = useState(null);

  // 🔌 FIX: Normalizes both hyphens and spaces so the tab filter matches perfectly
  const filtered = filter === "all"
    ? tasks.filter(t => t && t._id)
    : tasks.filter(t => {
        if (!t || !t.status) return false;
        const cleanTaskStatus = t.status.replace(/[\s-]/g, "").toLowerCase();
        const cleanFilterStatus = filter.replace(/[\s-]/g, "").toLowerCase();
        return cleanTaskStatus === cleanFilterStatus;
      });

  const handleCreate = async (form) => {
    await addTask(form);
    setShowCreate(false);
  };

  const handleEdit = async (form) => {
    if (editTarget?._id) {
      await editTask(editTarget._id, form);  
    }
    setEditTarget(null);
  };

  const handleDelete = async () => {
    if (deleteId) {
      await removeTask(deleteId);
    }
    setDeleteId(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        
        {/* Top Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">Task Manager</h1>
            <p className="text-sm text-gray-500 mt-0.5">{tasks.filter(t => t).length} tasks total</p>
          </div>
          <button
            onClick={() => setShowCreate(true)}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2.5 sm:py-2 rounded-xl transition-colors shadow-sm"
          >
            <span className="text-lg leading-none">+</span> New Task
          </button>
        </div>

        {/* Global Error Banner */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-3 rounded-xl mb-6">
            {error}
          </div>
        )}

        {/* Dashboard Content Stream */}
        {loading ? (
          <div className="text-center py-20 text-gray-400 text-sm">Loading tasks...</div>
        ) : (
          <>
            <StatsBar tasks={tasks} />
            <FilterTabs filter={filter} setFilter={setFilter} tasks={tasks} />
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <TaskList
                tasks={filtered}
                onEdit={setEditTarget}
                onDelete={setDeleteId}
              />
            </div>
          </>
        )}
      </div>

      {/* Creation Modal */}
      {showCreate && (
        <Modal title="Create New Task" onClose={() => setShowCreate(false)}>
          <TaskForm onSubmit={handleCreate} onCancel={() => setShowCreate(false)} />
        </Modal>
      )}

      {/* Editing Modal */}
      {editTarget && (
        <Modal title="Edit Task" onClose={() => setEditTarget(null)}>
          <TaskForm initial={editTarget} onSubmit={handleEdit} onCancel={() => setEditTarget(null)} />
        </Modal>
      )}

      {/* Deletion Warning Pop-up */}
      {deleteId && (
        <ConfirmDialog
          message="Are you sure you want to delete this task? This action cannot be undone."
          onConfirm={handleDelete}
          onCancel={() => setDeleteId(null)}
        />
      )}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);