const express = require("express");
const app = express();
const port = 4000;
const cowsay = require("cowsay");

app.listen(port, (err) => {
  if (err) {
    console.error("Le serveur ne fonctionne pas");
  } else {
    console.log(
      cowsay.say({
        text: `Le serveur backend fonctionne sur le serveur ${port}`,
        e: "oO",
        T: "U ",
      })
    );
  }
});
