const Category = require('../models/category');
const slugify = require('slugify');

const createCategories = (categories, parentId = null) => {
  const categoryList = [];
  let category;

  if (parentId == null) {
    category = categories.filter((c) => c.parent == undefined);
  } else {
    category = categories.filter((c) => c.parent == parentId);
  }

  for (let cat of category) {
    categoryList.push({
      _id: cat._id,
      name: cat.name,
      slug: cat.slug,
      children: createCategories(categories, cat._id),
    });
  }

  return categoryList;
};

module.exports = {
  create: async (req, res) => {
    const { name, description, parent } = req.body;
    const categoryObj = new Category({
      name,
      description,
      parent,
      slug: slugify(name, { lower: true }),
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
      const categories = await Category.find({}).exec((err, categories) => {
        if (err) res.status(500).json(err);

        const categoryList = createCategories(categories);
        res.status(200).json({
          categoryList,
          categories,
        });
      });
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
    const { name, description, parent, slug } = req.body;
    try {
      const categoryObj = await Category.findByIdAndUpdate(id, {
        name,
        description,
        parent,
        slug,
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
};
