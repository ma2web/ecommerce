const Category = require('../models/category');

module.exports = {
  create: async (req, res) => {
    const { name, description, parent, category } = req.body;
    const categoryObj = new Category({
      name,
      description,
      parent,
      category,
    });
    try {
      const category = await categoryObj.save();
      res.status(200).json(category);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  getAll: async (req, res) => {
    try {
      const categories = await Category.find();
      res.status(200).json(categories);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  getOne: async (req, res) => {
    const { id } = req.params;
    try {
      const category = await Category.findById(id);
      res.status(200).json(category);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  getByParent: async (req, res) => {
    try {
      const categories = await Category.find({ parent: req.query.parent });
      res.status(200).json(categories);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  update: async (req, res) => {
    const { id } = req.params;
    const { name, description, parent, category } = req.body;
    try {
      const categoryObj = await Category.findByIdAndUpdate(id, {
        name,
        description,
        parent,
        category,
      });
      res.status(200).json(categoryObj);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  remove: async (req, res) => {
    const { id } = req.params;
    try {
      const category = await Category.findByIdAndDelete(id);
      res.status(200).json(category);
    } catch (err) {
      res.status(500).json(err);
    }
  },
}
