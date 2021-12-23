const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

module.exports = {
  createValidator: (data) => {
    const schema = Joi.object({
      name: Joi.string().required(),
      long_description: Joi.string().required(),
      short_description: Joi.string().required(),
      brand: Joi.string(),
      sku: Joi.string(),
      price: Joi.number(),
      owner: Joi.objectId(),
      in_stock: Joi.boolean(),
      images: Joi.array().items(Joi.string()),
      categories: Joi.array().items(Joi.string()),
    });

    return schema.validate(data);
  },
};
