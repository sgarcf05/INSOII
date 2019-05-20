
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
//GET a http://localhost:3000/heroes/:name of hero -> Devuelve el heroe que metas en la URL
app.get('/heroes/:name', function(req, res) {
  console.log(`Getting hero: ${req.params.name}\n`)
  try{
    res.status(200).json(hService.getHero(req.params.name));
  }catch(error) {
    res.status(404).end("Hero not found");
    console.log("There was an error getting a hero", error);
  }
  
});

//POST http://localhost:3000/heroes/addHero -> Añade el heroe 
app.post('/heroes', function(req, res) {
  
  console.log("Posting Hero...\n")
  try {
    hService.addHero(req.body);
    console.log(hService.getHero(req.body.name));
    res.status(200).end();
} catch(error) {
    console.log("there was an error adding new hero", error);
    res.status(500).end();
}
});

//DELETE http://localhost:3000/heroes/:name -> Borra el heroe pasado en la URL
app.delete('/heroes/:name',function (req, res){

  console.log(`Deleting hero: ${req.params.name} \n`);

  const name = req.params.name;

  try{
      const heroToDelete = hService.deleteHero(name);
      //console.log(heroToDelete);
      res.status(200).json(heroToDelete);
  }catch(error){
      res.status(404).end(`${req.params.name} doesn't exist`);
      console.log("there was an error deleting a hero", error);
  }

});



app.listen(port, function () {
  console.log('Heroes app listening on port '+port+'!\n\n');
});


