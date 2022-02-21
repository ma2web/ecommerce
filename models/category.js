const mongoose = require('mongoose');
const { s, rs, n, ref } = require('../utils/mongo');

var schema = new mongoose.Schema(
  {
    user: ref('user'),
    name: { ...rs, unique: true },
    description: s,
    parent: rs,
    category: rs,
  },
  { timestamps: true }
);

module.exports = mongoose.model('category', schema);
