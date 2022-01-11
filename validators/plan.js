const Joi = require('joi');

Joi.objectId = require('joi-objectid')(Joi);

module.exports = {
  createValidation: (data) => {
    const schema = Joi.object({
      name: Joi.string().required(),
      price: Joi.number().required(),
      description: Joi.string(),
    });

    return schema.validate(data);
  },
  updateValidator: (data) => {
    const schema = Joi.object({
      name: Joi.string().required(),
      price: Joi.number().required(),
      description: Joi.string(),
    });

    return schema.validate(data);
  },
};
