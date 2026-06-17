const express = require('express');
const router = express.Router();

const projectsData = [
  {
    id: 1,
    title: 'Запуск группировки "Связь-2023"',
    status: 'completed',
    statusText: 'Завершен',
    date: 'Янв 2023 — Июн 2023',
    customer: 'РосКосмос',
    image: '/images/project-1.jpg',
    results: ['Успешный вывод 12 спутников на орбиту', 'Точность вывода 99.8%']
  },
  {
    id: 2,
    title: 'Миссия к Луне "Луна-Ресурс"',
    status: 'active',
    statusText: 'В работе',
    date: 'Авг 2024 — Настоящее время',
    customer: 'ИКИ РАН',
    image: '/images/project-2.jpg',
    results: ['Ракета успешно запущена', 'Ожидается посадка в декабре 2026']
  }
  // ... добавьте остальные проекты
];

// GET /api/projects
router.get('/', (req, res) => {
  res.json(projectsData); 
});

module.exports = router;
