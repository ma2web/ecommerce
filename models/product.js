const mongoose = require('mongoose');
const { s, rs, rn } = require('../utils/mongo');

let schema = new mongoose.Schema(
  {
    name: rs,
    description: s,
    images: [s],
    price: rn,
    categories: s,
  },
  { timestamps: true }
);

module.exports = mongoose.model('product', schema);
