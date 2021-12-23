const User = require('../models/user');
const { loginValidator, registerValidator } = require('../validators/user');
const bcrypt = require('bcrypt');
const { pick } = require('../utils/lodash');
const path = require('path');
var fs = require('fs');
const multer = require('multer');
const NodeCache = require('node-cache');

const myCache = new NodeCache({
  stdTTL: 2 * 60 * 60,
  checkperiod: 5 * 60,
});

let uploadFileSize = 2 * 1024 * 1024;
let fp = (id) => path.join(__dirname, `../public/uploads/user/${id}`);
let destination = (req, file, callback) => {
  let { id } = req.params;
  callback(null, fp(id));
};
let filename = (req, file, callback) => {
  callback(
    null,
    file.fieldname +
      '-' +
      Date.now() +
      file.originalname.substr(file.originalname.lastIndexOf('.') - 1)
  );
};
let fileFilter = (req, file, cb) => {
  [
    'image/jpeg',
    'image/bmp',
    'image/png',
    'image/svg+xml',
    'image/tiff',
    'image/webp',
  ].includes(file.mimetype)
    ? cb(null, true)
    : cb(null, false);
};
let storage = multer.diskStorage({ destination, filename });

module.exports = {
  register: async (req, res) => {
    let { email } = req.body;

    let { error } = registerValidator(req.body);
    if (error) return res.status(400).send({ message: error.message });

    const user = await User.findOne({ email });
    if (user) return res.status(400).send({ message: 'user exists already' });

    let newUser = new User(
      pick(req.body, [
        'first_name',
        'last_name',
        'age',
        'username',
        'email',
        'password',
        'role',
      ])
    );

    const salt = await bcrypt.genSalt(10);
    let saltPass = await bcrypt.hash(req.body.password, salt);

    newUser.password = saltPass;

    await newUser.save();

    const token = newUser.generateAuthToken();

    let data = pick(newUser, [
      '_id',
      'first_name',
      'last_name',
      'age',
      'username',
      'email',
      'password',
      'role',
    ]);

    res.header('x-auth-token', token).send({ ...data, token });
  },
  login: async (req, res) => {
    const { username, password } = req.body;

    const { error } = loginValidator(req.body);
    if (error) return res.status(400).send({ message: error.message });

    const user = await User.findOne({ username });
    if (!user) return res.status(400).send({ message: 'user not exist' });

    const compare = await bcrypt.compare(password, user.password);

    if (!compare)
      return res.status(400).send({ message: 'wrong username or password' });

    const token = user.generateAuthToken();

    let data = pick(user, [
      '_id',
      'first_name',
      'last_name',
      'age',
      'username',
      'email',
      'role',
    ]);

    res.header('x-auth-token', token).send({ ...data, token });
  },
  me: async (req, res) => {
    const id = req.user._id;

    const user = await User.findById(id);

    res.send(user);
  },
  update: async (req, res) => {
    const { id } = req.params;

    if (id !== req.user._id) {
      return res.status(401).send({ message: 'permission denied' });
    }

    await User.updateOne(
      { _id: req.user._id },
      {
        $set: req.body,
      },
      (err, data) => {
        if (err) return res.status(404).send({ message: `Error: ` + err });
        console.log(data);
        return res.send({ message: 'user has been updated' });
      }
    );
  },
  upload: async (req, res) => {
    const { id } = req.params;

    fs.mkdir(path.join(__dirname, `../public/uploads/users/${id}`), (err) => {
      multer({
        storage,
        fileFilter,
        limits: { fileSize: uploadFileSize },
      }).single('avatar')(req, res, (err) => {
        User.findById(id, (err, data) => {
          data.avatar = req.file.filename;

          User.updateOne(
            { _id: id },
            { $set: { avatar: data.avatar } },
            (err, result) => {
              return res.send(req.file);
            }
          );
        });
      });
    });
  },
  getAllUsers: async (req, res) => {
    const result = await User.find();
    res.send(result);
  },
  home: async (req, res) => {
    res.send('Welcome to app');
  },
};
