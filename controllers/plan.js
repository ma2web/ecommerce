const Plan = require('../models/plan');
const { createValidation } = require('../validators/plan');

module.exports = {
  getAll: async (req, res) => {
    let plans = await Plan.find();

    return res.json(plans);
  },
  create: async (req, res) => {
    let { error } = createValidation(req.body);

    if (error) return res.status(400).send({ message: error.message });

    let plan = new Plan({ ...req.body });

    plan = await plan.save();
    return res.send(plan);
  },
  remove: async (req, res) => {
    let { id } = req.params;

    await Plan.findOneAndRemove(
      {
        _id: id,
      },
      (err, data) => {
        if (err) {
          return res.status(404).send({ message: `Error: ` + err });
        } else {
          if (!data) {
            return res.status(404).send({ message: 'not found' });
          } else {
            return res.send(data);
          }
        }
      }
    );
  },
  update: async (req, res) => {
    let { id } = req.params;

    await Plan.updateOne(
      {
        _id: id,
      },
      {
        $set: req.body,
      },
      (err, data) => {
        if (err) return res.status(404).send({ message: `Error: ` + err });

        return res.send(data);
      }
    );
  },
};
