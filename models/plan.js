const mongoose = require("mongoose");
const { s, ref, rs, rn } = require("../utils/mongo");

var schema = new mongoose.Schema(
  {
    name: rs,
    price: rn,
    description: s,
  },
  { timestamps: true }
);

module.exports = mongoose.model("plan", schema);
