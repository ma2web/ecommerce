const mongoose = require('mongoose');
const { s, rs, rn, rref, ref } = require('../utils/mongo');

let schema = new mongoose.Schema(
  {
    user: rref('user'),
    name: rs,
    description: s,
    images: [s],
    price: rn,
    categories: ref('category'),
  },
  { timestamps: true }
);

module.exports = mongoose.model('product', schema);
