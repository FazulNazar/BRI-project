const Joi = require('joi');
const BaseModel = require('../utils/base-model.js');

module.exports = new BaseModel('Student', {
  mail: Joi.string().required(),
  birthday: Joi.date(),
  mdp: Joi.string().required(),
  nom: Joi.string().required(),
  prenom: Joi.string().required(),
  sexe: Joi.string().required(),
  nationalite: Joi.string().required(),
  adresse: Joi.string().required(),
  ville: Joi.string().required(),
  tel: Joi.string().required(),
  numetudiant: Joi.string().required(),
  filiere: Joi.string().required(),
});
