const router = require("express").Router();
const User = require("../model/User");
const {registerValidation} = require('../validation')
const argon2 = require('argon2')

router.post("/register", async (req, res) => {
// La première étape d'enregistrement est de vérifier avec Joi (dans ma fonction registerValidation), si les saisies sont respectées.

const {error} = registerValidation(req.body);

// Si erreur, alors on récupère le message précis de l'erreur)

if (error) return res.status(400).send(`Erreur :` + error.details[0].message);

// Maintenant je vais vérifier que l'émail de l'utilisateur n'est pas déjà dans ma base de donnée.
// findOne est une fonctionalité de mongoose qui permet de chercher une valeur dans la DB.

const emailExist = await User.findOne({email: req.body.email})
if(emailExist) return res.status(400).send("Votre email appartient déjà à un compte.")

// Il est important de hasher le password de l'utilisateur. Je vais utiliser la bibliothèque Argon2 car recommandé par l'OWASP.

const hashingOptions = {
    type: argon2.argon2id,
    memoryCost: 2 ** 16,
    timeCost: 5,
    parallelism: 1
  };
  
const hashedPassword = await argon2.hash(req.body.password, hashingOptions);
  
  
// Si il n'y a pas d'erreur suite à la vérification via Joi alors il passe à l'étape suivante qui est de créer le user en question
  const user = new User({
    email: req.body.email,
    password: hashedPassword
  });
  try {
    const savedUser = await user.save();
// Je l'ui demande d'afficher dans postman UNIQUEMENT l'id de l'utilisateur
    res.send({user: user._id});
    console.log("L'utilisateur a bien été ajouté à la base de données !");
  } catch (err) {
    res.status(400).send(err)
  }
});

// PARTIE LOGIN


module.exports = router;
