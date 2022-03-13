const mongoose = require('mongoose');
const { s, rs, n, ref } = require('../utils/mongo');

var schema = new mongoose.Schema(
  {
    name: s,
    category: ref('category'),
    values: [
      {
        name: s,
      },
    ],
    children: {
      title: s,
      values: [s],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('filter', schema);
