//Validation des informations de l'utilisateur
const Joi = require("joi");

// Ici je vais créer une fonction validation d'enregistrement de user ?
// Pourquoi ? Car imaginons qu'à d'autre moments j'ai besoin de procéder à une autre étape de validation...
// Exemple : modification d'un profil... Mais aussi pour se logger

const registerValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().min(6).max(255).required(),
    password: Joi.string().min(6).max(1024).required(),
  });
  //VALIDATION DES DONNEES AVANT DE CREER L'UTILISATEUR
  return schema.validate(data);
};

const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().min(6).max(255).required(),
    password: Joi.string().min(6).max(1024).required(),
  });
  //VALIDATION DES DONNEES AVANT DE CREER L'UTILISATEUR
  return schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
