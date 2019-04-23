const Joi = require('joi');
const BaseModel = require('../utils/base-model.js');

module.exports = new BaseModel('University', {
  nom: Joi.string().required(),
  ville: Joi.string().required(),
  filieres: Joi.string().required(),
  accord: Joi.string().required(),

});
