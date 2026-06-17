const express = require('express');
const router = express.Router();

// GET /api/vacancies
router.get('/', (req, res) => {
  res.json({ 
    message: 'Vacancies API - в разработке',
    data: [] 
  });
});

// POST /api/vacancies/apply - откликнуться
router.post('/apply', (req, res) => {
  res.json({ 
    message: 'Application submitted - в разработке',
    data: req.body 
  });
});

module.exports = router;