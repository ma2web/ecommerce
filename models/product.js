const mongoose = require('mongoose');
const { s, rs, rn, rref, ref, b, n } = require('../utils/mongo');

let schema = new mongoose.Schema(
  {
    user: rref('user'),
    name: rs,
    description: s,
    images: [s],
    price: rn,
    discount: n,
    categories: ref('category'),
    filters: [
      {
        parent: ref('filter'),
        value: s,
        name: s,
      },
    ],
    subFilter: [
      {
        parent: s,
        value: s,
        title: s,
      },
    ],
    published: b,
  },
  { timestamps: true }
);

module.exports = mongoose.model('product', schema);
