const mongoose = require("mongoose");

// Le schéma permet de définir à quoi va ressemble notre collection.
// En mongodb, la collection est l'équivalent des tables en SQL.
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  password: {
    type: String,
    required: true,
    // Ici je mets une grande longueur de password car celui-ci va être hâché.
    min: 6,
    max: 1024,
  },
});

module.exports = mongoose.model("User", userSchema);
