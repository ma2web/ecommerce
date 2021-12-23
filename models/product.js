const mongoose = require('mongoose');
const { s, rs, n, rb, ref } = require('../utils/mongo');

const schema = new mongoose.Schema(
  {
    name: rs,
    long_description: rs,
    short_description: rs,
    in_stock: { ...rb, default: true },
    brand: s,
    sku: s,
    price: n,
    owner: rs,
    images: [s],
    categories: [ref('category')],
  },
  { timestamps: true }
);

module.exports = mongoose.model('product', schema);
