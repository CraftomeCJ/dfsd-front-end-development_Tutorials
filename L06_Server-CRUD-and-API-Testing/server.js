const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// In-memory data store
let goals = [
  { id: 1, title: 'Learn Express' },
  { id: 2, title: 'Build a CRUD API' }
];
let nextId = 3;

// GET / — health check
app.get('/', (req, res) => {
  res.json({ message: 'Goals API is running' });
});

// GET /goals — retrieve all goals
app.get('/goals', (req, res) => {
  res.json(goals);
});

// POST /goals — create a new goal
app.post('/goals', (req, res) => {
  const { title } = req.body;
  if (!title || title.trim() === '') {
    return res.status(400).json({ error: 'Title is required' });
  }
  const goal = { id: nextId++, title: title.trim() };
  goals.push(goal);
  res.status(201).json(goal);
});

// PUT /goals/:id — update a goal using findIndex and spread syntax
app.put('/goals/:id', (req, res) => {
  const id = parseInt(req.params.id);
  let index = goals.findIndex(g => g.id === id);

  if (index !== -1) {
    goals[index] = { ...goals[index], ...req.body };
    res.json(goals[index]);
  } else {
    res.status(404).json({ error: 'Goal not found' });
  }
});

// DELETE /goals/:id — remove a goal
app.delete('/goals/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = goals.findIndex(g => g.id === id);

  if (index !== -1) {
    goals.splice(index, 1);
    res.json({ message: `Goal ${id} deleted` });
  } else {
    res.status(404).json({ error: 'Goal not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
