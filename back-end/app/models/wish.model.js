const Joi = require('joi');
const BaseModel = require('../utils/base-model.js');

module.exports = new BaseModel('Wish', {
  id: Joi.number().integer().required(),
  universityId: Joi.number().integer().required(),
  semester: Joi.string().required(),
  diploma: Joi.string().required(),
  agreementCompleted: Joi.boolean(),
  courses: Joi.string(),
  studentID: Joi.number(),
  // courses: Joi.array().items(Joi.object().keys({
  //   title: Joi.string(),
  //   code: Joi.number().integer,
  //   credits: Joi.number().integer
  //   }))
});
