const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

module.exports = {
  loginValidator: (data) => {
    const schema = Joi.object({
      username: Joi.string().required(),
      password: Joi.string().required(),
    });

    return schema.validate(data);
  },
  registerValidator: (data) => {
    const schema = Joi.object({
      first_name: Joi.string().required(),
      last_name: Joi.string().required(),
      email: Joi.string().required(),
      username: Joi.string().required(),
      password: Joi.string().required(),
    });

    return schema.validate(data);
  },
};
