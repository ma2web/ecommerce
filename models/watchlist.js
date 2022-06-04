const mongoose = require("mongoose");
const { s, rs, rref, ref } = require("../utils/mongo");

var schema = new mongoose.Schema(
  {
    user: ref("user"),
    product: ref("product"),
  },
  { timestamps: true }
);

module.exports = mongoose.model("watchlist", schema);
