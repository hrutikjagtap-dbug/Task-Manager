import { useState, useEffect } from "react";
import { getTasks, createTask, updateTask, deleteTask } from "../services/api";

export function useTasks() {
  const [tasks,   setTasks]   = useState([]);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState(null);

  const fetchTasks = async (status) => {
    try {
      setLoading(true);
      setError(null);
      const res = await getTasks(status);
      
      // Fallback fallback: check if data is nested inside res.data.data or directly in res.data
      const data = res.data?.data !== undefined ? res.data.data : res.data;
      setTasks(Array.isArray(data) ? data : []);
    } catch (err) {
      setError("Failed to load tasks. Is the backend running?");
      setTasks([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchTasks(); }, []);

  const addTask = async (form) => {
    try {
      const res = await createTask(form);
      const newTask = res.data?.data !== undefined ? res.data.data : res.data;
      
      // 🛡️ Safety Check: Ensure the object exists and has data before inserting
      if (newTask && (newTask._id || newTask.id)) {
        setTasks(t => [newTask, ...t.filter(item => item)]);
      }
    } catch (err) {
      console.error("Create task error:", err);
      setError("Failed to create task.");
    }
  };

  const editTask = async (id, form) => {
    try {
      const res = await updateTask(id, form);
      const updated = res.data?.data !== undefined ? res.data.data : res.data;
      
      // 🛡️ Safety Check: If updated payload comes back invalid, don't break the array item loop
      if (updated && (updated._id || updated.id)) {
        setTasks(t => t.map(tk => (tk && tk._id === id ? updated : tk)).filter(item => item));
      } else {
        // Fallback: If backend sent a simple success message, re-fetch fresh array list from db
        fetchTasks();
      }
    } catch (err) {
      setError("Failed to update task.");
    }
  };

  const removeTask = async (id) => {
    try {
      await deleteTask(id);
      
      // Cleanly filter out the id while purging any stray null/undefined entries simultaneously
      setTasks(prev => prev.filter(t => t && t._id !== id));
    } catch (err) {
      setError("Failed to delete task.");
    }
  };

  return { tasks, loading, error, addTask, editTask, removeTask, fetchTasks };
}