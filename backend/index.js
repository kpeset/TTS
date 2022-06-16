const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const successRoute = require("./routes/success")

dotenv.config();

// CONNEXION A LA DATABASE

// ici je fais appel à ma variable d'environnement afin que mon password ne soit pas visible de ceux qui ont accès au code
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () =>
  console.log("La connexion à la base de donnée est faite...")
);

// MIDDLEWARE
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(cookieParser());

// ROUTE DE MON MIDDLEWARE
app.use("/api/user", authRoute);
app.use("/api/posts", postRoute);
app.use("/api/success", successRoute), 

app.listen(4000, () => console.log("Le backend fonctionne parfaitement !"));
