const mongoose = require('mongoose');
const { s, rs, ref } = require('../utils/mongo');

var schema = new mongoose.Schema(
  {
    category: ref('category'),
    name: { ...rs, unique: true },
    description: s,
  },
  { timestamps: true }
);

module.exports = mongoose.model('subcategory', schema);
