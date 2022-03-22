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
    filters: [{
      parent: ref('filter'),
      value: s,
      name: s,
    }],
    subFilter: s
  },
  { timestamps: true }
);

module.exports = mongoose.model('product', schema);
