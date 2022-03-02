const Filter = require('../models/filter');
const slugify = require('slugify');

module.exports = {
  create: async (req, res) => {
    try {
      const { name, category, values } = req.body;
      const filterObj = new Filter({
        name,
        category,
        values,
      });
      const filter = await filterObj.save();
      res.status(200).json(filter);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  getAll: async (req, res) => {
    try {
      const filters = await Filter.find({}).exec((err, filters) => {
        if (err) res.status(500).json(err);

        const filterList = createFilters(filters);
        res.status(200).json({
          filterList,
          filters,
        });
      });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  getOne: async (req, res) => {
    const { id } = req.params;
    try {
      const filter = await Filter.findById(id);
      res.status(200).json(filter);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  getByCategory: async (req, res) => {
    try {
      const filters = await Filter.find({ category: req.query.parent });
      res.status(200).json(filters);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  update: async (req, res) => {
    const { id } = req.params;
    const { name, category, values } = req.body;
    try {
      const filterObj = await Filter.findByIdAndUpdate(id, {
        name,
        category,
        values,
      });
      res.status(200).json(filterObj);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  remove: async (req, res) => {
    const { id } = req.params;
    try {
      const filter = await Filter.findByIdAndDelete(id);
      res.status(200).json(filter);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
