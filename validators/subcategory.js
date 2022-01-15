const Joi = require('joi');

Joi.objectId = require('joi-objectid')(Joi);

module.exports = {
  createValidator: (data) => {
    const schema = Joi.object({
      category: Joi.objectId(),
      name: Joi.string().required(),
      description: Joi.string(),
    });

    return schema.validate(data);
  },
  updateValidator: (data) => {
    const schema = Joi.object({
      category: Joi.objectId(),
      name: Joi.string().required(),
      description: Joi.string(),
    });

    return schema.validate(data);
  },
};
