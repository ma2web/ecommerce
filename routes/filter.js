const express = require('express');
const router = express.Router();
const {
  getAll,
  getOne,
  create,
  update,
  remove,
  getByCategory,
  getByValues,
} = require('../controllers/filter');

const auth = require('../middlwares/auth');

router.get('/api/filters', getAll);
router.get('/api/filter/:id', getOne);
router.get('/api/filter/category/:id', getByCategory);
router.get('/api/filter/category/value/:id/:valueId', getByValues);
router.post('/api/filter', create);
router.put('/api/filter/:id', update);
router.delete('/api/filter/:id', remove);

module.exports = router;
