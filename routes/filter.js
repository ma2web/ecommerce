const express = require('express');
const router = express.Router();
const {
  getAll,
  getOne,
  create,
  update,
  remove,
  getByCategory,
} = require('../controllers/filter');

router.get('/api/filters', getAll);
router.get('/api/filter/:id', getOne);
router.get('/api/filter-by-category', getByCategory);
router.post('/api/filter', create);
router.put('/api/filter/:id', update);
router.delete('/api/filter/:id', remove);

module.exports = router;
