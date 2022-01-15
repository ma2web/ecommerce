const subCategory = require('../models/subcategory');
const {
  createValidator,
  updateValidator,
} = require('../validators/subcategory');

module.exports = {
  getAll: async (req, res) => {
    const subcategories = await subCategory.find({}).populate('category');
    res.send(subcategories);
  },
  getOne: async (req, res) => {
    const subCategory = await subCategory.findOne({ _id: req.params.id });
    res.send(subCategory);
  },
  create: async (req, res) => {
    let { error } = createValidator(req.body);
    if (error) return res.status(400).send({ message: error.message });
    let newSubCategory;

    newSubCategory = new subCategory({ ...req.body });

    newSubCategory = await newSubCategory.save();
    return res.send(newSubCategory);
  },
  remove: async (req, res) => {
    let { id } = req.params;

    await subCategory.findOneAndRemove(
      {
        _id: id,
      },
      (err, data) => {
        if (err) {
          return res.status(404).send({ message: `Error: ` + err });
        } else {
          if (!data) {
            return res.status(404).send({ message: 'دسته بندی یافت نشد' });
          } else {
            return res.send(data);
          }
        }
      }
    );
  },
  update: async (req, res) => {
    let { id } = req.params;

    let { error } = updateValidator({ ...req.body });
    if (error) return res.status(400).send({ message: error.message });

    await subCategory.updateOne(
      {
        _id: id,
      },
      {
        $set: req.body,
      },
      (err, data) => {
        if (err) return res.status(404).send({ message: `Error: ` + err });

        return res.send({ message: 'sub category has been updated' });
      }
    );
  },
};
