import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Mock In-Memory Database
let files = {
  'welcome': { id: 'welcome', title: 'Welcome', content: '', type: 'welcome' }
};

// API Endpoints
app.get('/api/files', (req, res) => {
  res.json(Object.values(files));
});

app.post('/api/files', (req, res) => {
  const { id, title, content, type } = req.body;
  files[id] = { id, title, content: content || '', type: type || 'editor' };
  res.json(files[id]);
});

app.put('/api/files/:id', (req, res) => {
  const { id } = req.params;
  const { content } = req.body;
  if (files[id]) {
    files[id].content = content;
    res.json(files[id]);
  } else {
    res.status(404).json({ error: 'File not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
