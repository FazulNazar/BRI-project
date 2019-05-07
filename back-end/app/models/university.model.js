const Joi = require('joi');
const BaseModel = require('../utils/base-model.js');

module.exports = new BaseModel('University', {
  name: Joi.string().required(),
  city: Joi.string().required(),
  majors: Joi.string().required(),
  agreements: Joi.string().required(),
  country: Joi.string().required(),
  id: Joi.number().integer().required(),
  universityId: Joi.number().integer().required(),
  exchangeStudents: Joi.number().integer(),
  note: Joi.string(),
});
