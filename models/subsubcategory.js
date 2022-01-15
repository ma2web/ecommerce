const mongoose = require('mongoose');
const { s, rs, ref } = require('../utils/mongo');

var schema = new mongoose.Schema(
  {
    subCategory: ref('subcategory'),
    name: { ...rs, unique: true },
    description: s,
  },
  { timestamps: true }
);

module.exports = mongoose.model('subsubcategory', schema);
