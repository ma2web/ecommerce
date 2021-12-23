const Product = require('../models/product');
const { createValidator } = require('../validators/product');
const bcrypt = require('bcrypt');
const { pick } = require('../utils/lodash');
const path = require('path');
var fs = require('fs');
const multer = require('multer');

const uploadFileSize = 2 * 1024 * 1024;
const fp = (id) => path.join(__dirname, `../public/uploads/user/${id}`);
const destination = (req, file, callback) => {
  const { id } = req.params;
  callback(null, fp(id));
};
const filename = (req, file, callback) => {
  callback(
    null,
    file.fieldname +
      '-' +
      Date.now() +
      file.originalname.substr(file.originalname.lastIndexOf('.') - 1)
  );
};
const fileFilter = (req, file, cb) => {
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
const storage = multer.diskStorage({ destination, filename });

module.exports = {
  create: async (req, res) => {
    const { error } = createValidator(req.body);
    if (error) return res.status(400).send({ message: error.message });

    const newProduct = new Product(
      pick(req.body, [
        'name',
        'long_description',
        'short_description',
        'brand',
        'sku',
        'price',
        'owner',
      ])
    );

    await newProduct.save();

    const data = pick(newProduct, [
      '_id',
      'name',
      'long_description',
      'short_description',
      'brand',
      'sku',
      'price',
      'owner',
    ]);

    res.send(data);
  },
  upload: async (req, res) => {
    const { id } = req.params;

    fs.mkdir(
      path.join(__dirname, `../public/uploads/products/${id}`),
      (err) => {
        multer({
          storage,
          fileFilter,
          limits: { fileSize: uploadFileSize },
        }).single('image')(req, res, (err) => {
          Product.findById(id, (err, data) => {
            data.image = req.file.filename;

            User.updateOne(
              { _id: id },
              { $set: { image: data.image } },
              (err, result) => {
                return res.send(req.file);
              }
            );
          });
        });
      }
    );
  },
};
