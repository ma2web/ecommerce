const Product = require('../models/product');
const path = require('path');
const fs = require('fs');
const multer = require('multer');

const uploadFileSize = 2 * 1024 * 1024;
const fp = (id) =>
  path.join(__dirname, `../public/uploads/admin/product/${id}`);
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
    const { name, description, price, categories, filters, subFilter } =
      req.body;
    const productObj = new Product({
      user: req.user._id,
      name,
      description,
      price,
      categories,
      filters,
      subFilter,
    });
    try {
      const product = await productObj.save();
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  remove: async (req, res) => {
    const { id } = req.params;
    try {
      const product = await Product.findByIdAndDelete(id);
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  getAll: async (req, res) => {
    try {
      const products = await Product.find()
        .populate('user')
        .populate('categories');
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  getOne: async (req, res) => {
    try {
      const { id } = req.params;
      const product = await Product.findOne({ _id: id }).populate('user');
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  getByCategory: async (req, res) => {
    const category = req.params.category;
    try {
      const products = await Product.find({ categories: category })
        .populate('user')
        .populate('categories');
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  update: async (req, res) => {
    const { id } = req.params;
    const { name, description, price, categories, images, filters, subFilter } =
      req.body;
    try {
      const productObj = await Product.findByIdAndUpdate(id, {
        name,
        description,
        price,
        categories,
        images,
        filters,
        subFilter,
      });
      res.status(200).json(productObj);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  uploadImage: async (req, res) => {
    let { id } = req.params;

    fs.mkdir(
      path.join(__dirname, `../public/uploads/admin/product/${id}`),
      (err) => {
        multer({
          storage,
          fileFilter,
          limits: { fileSize: uploadFileSize },
        }).single('image')(req, res, (err) => {
          Product.findById(id, (err, data) => {
            if (!data.images) {
              data.images = [];
            }
            data.images.push(req.file.filename);
            Product.updateOne(
              { _id: id },
              { $set: { images: data.images } },
              (err, result) => {
                return res.send(req.file);
              }
            );
          });
        });
      }
    );
  },
  filter: async (req, res) => {
    try {
      const { categories, filters } = req.body;

      const filteredFilters = filters.map((filter) => {
        return {
          value: filter,
        }
      })
      
      const products = await Product.find({
        categories: categories,
        filter: {
          $in: filteredFilters,
        },
      });


      res.status(200).json(products);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
