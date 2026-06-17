const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health-check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    uptime: `${Math.floor(process.uptime())}s`,
    timestamp: new Date().toISOString()
  });
});

// Главная страница API (информационная)
app.get('/', (req, res) => {
  res.json({
    name: 'Oblivion',
    version: '1.0.0',
    status: 'running',
    uptime: `${Math.floor(process.uptime())}s`,
    endpoints: {
      health: 'GET /api/health',
      news: 'GET /api/news',
      projects: 'GET /api/projects?status=current',
      vacancies: 'GET /api/vacancies',
      contact: 'POST /api/contact',
      search: 'GET /api/search?q=запрос'
    }
  });
});

// заглушки для роутов
app.use('/api/news', require('./routes/news'));
app.use('/api/projects', require('./routes/projects'));
app.use('/api/vacancies', require('./routes/vacancies'));
app.use('/api/contact', require('./routes/contact'));
app.use('/api/search', require('./routes/search'));

// обработка ошибок
app.use((err, req, res, next) => {
  console.error(`[ERROR] ${err.message}`);
  res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
});

app.listen(PORT, () => {
  console.log(` Backend запущен: http://localhost:${PORT}`);
});
