const express = require('express');
const router = express.Router();
const {
  getAll,
  getOne,
  create,
  update,
  remove,
  getByParent
} = require('../controllers/category');

const auth = require("../middlwares/auth");

router.get('/api/categories', getAll);
router.get('/api/category/:id', getOne);
router.get('/api/category-parent', getByParent);
router.post('/api/category', create);
router.put('/api/category/:id', update);
router.delete('/api/category/:id', remove);

module.exports = router;
