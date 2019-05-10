const Joi = require('joi');
const BaseModel = require('../utils/base-model.js');

module.exports = new BaseModel('Wish', {
  id: Joi.number().integer().required(),
  universityId: Joi.number().integer().required(),
  semester:Joi.string().required(),
  diploma: Joi.string().required(),
  agreementCompleted: Joi.boolean(),
});
