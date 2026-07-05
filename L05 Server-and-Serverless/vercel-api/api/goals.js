// Vercel Serverless Function — handles all CRUD methods for /api/goals
// Note: In-memory state resets between cold starts (expected for tutorial demo)

let goals = [
  { id: 1, title: 'Complete FED Tutorial 5', completed: false },
  { id: 2, title: 'Deploy to Vercel', completed: false }
];
let nextId = 3;

export default function handler(req, res) {
  const method = req.method;

  // GET /api/goals — return all goals
  if (method === 'GET') {
    return res.status(200).json(goals);
  }

  // POST /api/goals — create a new goal
  if (method === 'POST') {
    const { title } = req.body || {};
    if (!title || title.trim() === '') {
      return res.status(400).json({ error: 'Title is required' });
    }
    const goal = { id: nextId++, title: title.trim(), completed: false };
    goals.push(goal);
    return res.status(201).json(goal);
  }

  // PUT /api/goals — update a goal by id in body
  if (method === 'PUT') {
    const { id, title, completed } = req.body || {};
    const goal = goals.find(g => g.id === Number(id));
    if (!goal) return res.status(404).json({ error: 'Goal not found' });
    if (title !== undefined) goal.title = title.trim();
    if (completed !== undefined) goal.completed = Boolean(completed);
    return res.status(200).json(goal);
  }

  // DELETE /api/goals — delete a goal by id in body
  if (method === 'DELETE') {
    const { id } = req.body || {};
    const index = goals.findIndex(g => g.id === Number(id));
    if (index === -1) return res.status(404).json({ error: 'Goal not found' });
    goals.splice(index, 1);
    return res.status(200).json({ message: `Goal ${id} deleted` });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
