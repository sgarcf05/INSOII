
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port= 3000;

const HeroesService = require("./service/heroesService");
const hService = new HeroesService();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//app.use(express.static(__dirname, './public'))


//GET a http://localhost:3000/heroea -> Devuelve el listado de alumnos registrados
app.get('/heroes', function(req, res) {
  console.log("Getting the list of heroes...\n");
  res.send(hService.heroes);
});


//POST a http://localhost:3000/alumnos -> Almacena los datos del alumno que se envíe en el body
app.post('/alumnos', function(req, res) {
  
  console.log("Posting alumns...\n")
  try {
    let newAlumn=req.body.nombre;
    //let nameNewAlumn = newAlumn['nombre'];
    fs.appendFileSync(pathOfTxt, "\n" + newAlumn);
  
    res.send("¡The alumn is saved in alumnos.txt!");
  } catch (error) {
    res.status(500).end("Internal Error");
  }
});



app.listen(port, function () {
  console.log('Heroes app listening on port '+port+'!\n\n');
});


