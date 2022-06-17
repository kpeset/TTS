const User = require("../model/User");
const router = require("express").Router();
const verify = require("./verifyToken");

router.get("/", verify, function (req, res) {
  User.find({}, function (err, users) {
    if (err) {
      res.send("Quelque chose ne fonctionne pas !");
      next();
    }
    res.json(users);
  });
});

module.exports = router;
