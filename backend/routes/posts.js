const router = require("express").Router();
const verify = require("./verifyToken");

router.get("/", verify, (req, res) => {
  res.json({
    posts: {
      title: "Endroit privé",
      description: "Mais vous y avez accès !",
    },
  });
});

module.exports = router;
