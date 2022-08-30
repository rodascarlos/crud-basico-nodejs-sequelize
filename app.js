const express = require('express');
const app = express();
const sequelize = require('./database/db');
const User = require('./database/models/User');

//Setting
const PORT = process.env.PORT || 3000;

//Routes
app.get('/', function(req, res){
    User.create({
        name: "Carls",
        birthday: new Date(1990,1,4)
    }).then(user => {
        res.json(user);
    });
});

app.listen(PORT, function(){
  console.log(`Example app listening on port ${PORT}`);

  //Connet to database
  //Force: true: DROP TABLES
  sequelize.sync({force: false}).then(() => {
    console.log("Nos hemos conectado a la base de datos");
  }).catch(error => {
    console.log('Se ha producido un error', error);
  })
});