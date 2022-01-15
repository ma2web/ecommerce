const express = require('express');
const router = express.Router();
const {
  getAll,
  getOne,
  create,
  update,
  remove,
} = require('../controllers/subcategory');

router.get('/api/sub-categories', getAll);
router.get('/api/sub-category/:id', getOne);
router.post('/api/sub-category', create);
router.put('/api/sub-category/:id', update);
router.delete('/api/sub-category/:id', remove);

module.exports = router;
