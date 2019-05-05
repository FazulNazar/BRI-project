const Joi = require('joi');
const BaseModel = require('../utils/base-model.js');

module.exports = new BaseModel('Student', {
  mail: Joi.string().required(),
  mdp: Joi.string().required(),
  nom: Joi.string(),
  prenom: Joi.string().required(),
  birthday: Joi.string().required(),
  sexe: Joi.string().required(),
  nationalite: Joi.string().required(),
  adresse: Joi.string().required(),
  codePostal: Joi.string().required(),
  ville: Joi.string().required(),
  tel: Joi.string().required(),
  numetudiant: Joi.string().required(),
  filiere: Joi.string().required(),
});
// ozoozoz
