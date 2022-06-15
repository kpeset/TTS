const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth')

dotenv.config();

// CONNEXION A LA DATABASE

// ici je fais appel à ma variable d'environnement afin que mon password ne soit pas visible de ceux qui ont accès au code
mongoose.connect(process.env.DB_CONNECT, {useNewUrlParser: true},
() => console.log('La connexion à la base de donnée est faite...'));

// MIDDLEWARE
app.use(express.json())


// ROUTE DE MON MIDDLEWARE
app.use('/api/user', authRoute)

app.listen(4000, () => console.log('Le backend fonctionne parfaitement !'));