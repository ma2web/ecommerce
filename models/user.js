const mongoose = require('mongoose');
const { s, rs, rn, n } = require('../utils/mongo');
const config = require('config');
const jwt = require('jsonwebtoken');

const schema = new mongoose.Schema(
  {
    first_name: s,
    last_name: s,
    age: n,
    username: {
      ...s,
      unique: true,
    },
    email: {
      ...s,
      unique: true,
    },
    password: s,
    role: {
      ...s,
      default: 'user',
      enum: ['super_admin', 'admin', 'user'],
    },
    socket_id: s,
    avatar: s,
  },
  { timestamps: true }
);

schema.methods.generateAuthToken = function () {
  const data = {
    _id: this._id,
    first_name: this.first_name,
    last_name: this.last_name,
    age: this.age,
    username: this.username,
    email: this.email,
    role: this.role,
    socket_id: this.socket_id,
    avatar: this.avatar,
  };

  return jwt.sign(data, config.get('jwtSecret'));
};

module.exports = mongoose.model('user', schema);
