const Joi = require('joi');
const BaseModel = require('../utils/base-model.js');

module.exports = new BaseModel('Student', {
  mail: Joi.string().required(),
  password: Joi.string().required(),
  name: Joi.string(),
  firstname: Joi.string().required(),
  birthday: Joi.string().required(),
  gender: Joi.string().required(),
  nationality: Joi.string().required(),
  address: Joi.string().required(),
  zip: Joi.string().required(),
  city: Joi.string().required(),
  phone: Joi.string().required(),
  studentNumber: Joi.string().required(),
  educationStream: Joi.string().required(),
});
