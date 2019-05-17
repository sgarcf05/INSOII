
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port= 3000;

const HeroesService = require("./service/heroesService");
const hService = new HeroesService();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//app.use(express.static(__dirname, './public'))

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//GET a http://localhost:3000/heroes -> Devuelve el listado de alumnos registrados
app.get('/heroes', function(req, res) {
  console.log("Getting the list of heroes...\n");
  res.send(hService.heroes);
  
});



app.listen(port, function () {
  console.log('Heroes app listening on port '+port+'!\n\n');
});


