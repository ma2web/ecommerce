const mongoose = require('mongoose');
const { s, rs, n, ref } = require('../utils/mongo');

var schema = new mongoose.Schema(
  {
    name: s,
    description: s,
    parent: s,
    slug: s,
  },
  { timestamps: true }
);

module.exports = mongoose.model('category', schema);
