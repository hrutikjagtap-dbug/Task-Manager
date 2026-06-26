const API_BASE_URL = `${import.meta.env.VITE_API_URL}/api/tasks`;

export const getTasks = () => 
  fetch(API_BASE_URL).then(res => res.json());

export const createTask = (data) => 
  fetch(API_BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then(res => res.json());

export const updateTask = (id, data) => 
  fetch(`${API_BASE_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then(res => res.json());

export const deleteTask = (id) => 
  fetch(`${API_BASE_URL}/${id}`, {
    method: 'DELETE'
  }).then(res => res.json());