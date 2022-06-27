const express = require('express');
const router = express.Router();
const {
  uploadImage,
  create,
  remove,
  getAll,
  getOne,
  update,
  getByCategory,
  filter,
  getAllUserProduct,
} = require('../controllers/product');

const auth = require('../middlwares/auth');
const admin = require('../middlwares/admin');

router.post('/api/product', auth, create);
router.delete('/api/product/:id', remove);
router.get('/api/products', getAll);
router.get('/api/products/:id', getAllUserProduct);
router.get('/api/product/:id', getOne);
router.put('/api/product/:id', update);
router.get('/api/products/category/:category', getByCategory);
router.post('/api/product/upload/:id', uploadImage);
router.post('/api/product/filter', filter);

module.exports = router;
