// src/services/api.js

const API_BASE_URL = 'http://localhost:5000/api/tasks'; // Update with your actual server URL

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