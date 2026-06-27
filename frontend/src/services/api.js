const API_BASE_URL = 'https://task-manager-0-o8mv.onrender.com/api'; // Remove '/tasks' from here

export const getTasks = () => 
  fetch(`${API_BASE_URL}/tasks`).then(res => res.json());

export const createTask = (data) => 
  fetch(`${API_BASE_URL}/tasks`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then(res => res.json());

export const updateTask = (id, data) => 
  fetch(`${API_BASE_URL}/tasks/${id}`, { 
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then(res => res.json());

export const deleteTask = (id) => 
  fetch(`${API_BASE_URL}/tasks/${id}`, {
    method: 'DELETE'
  }).then(res => res.json());