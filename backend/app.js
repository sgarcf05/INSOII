
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port= 3000;

const HeroesService = require("./service/heroesService");
const hService = new HeroesService();

const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const sequelize = new Sequelize('heroesdatabasefinal', 'samuel', '1234', {
  host: '192.168.1.137',
  dialect: 'mysql'
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  const Model = Sequelize.Model;
  class User extends Model {}
  User.init({
    // attributes
    nameID: {
      type: Sequelize.STRING,
      primaryKey: true,
      allowNull: false
    },
    pass: {
      type: Sequelize.STRING
      // allowNull defaults to true
    }
  }, {
    sequelize,
    modelName: 'user'
    // options
  });
  

  class Hero extends Model {}
  Hero.init({
    // attributes
    name: {
      type: Sequelize.STRING,
      primaryKey: true,
      allowNull: false
    },
    biography: {
      type: Sequelize.STRING,
      allowNull: false
    },
    avatar: {
      type: Sequelize.STRING,
      allowNull: false

      // allowNull defaults to true
    }, 
    birth: {
      type: Sequelize.STRING,
      allowNull: false

      // allowNull defaults to true
    },
    category: {
      type: Sequelize.STRING,
      allowNull: false

      // allowNull defaults to true
    },
    creator: {
      type: Sequelize.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'hero'
    // options
  });

  class HeroUser extends Model {}
  HeroUser.init({
    // attributes
  }, {
    sequelize,
    modelName: 'heroUser'
    // options
  });

  User.hasMany(HeroUser);
  Hero.hasMany(HeroUser);
  //HeroUser.belongsTo(Hero);

  sequelize.sync({force: false});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//app.use(express.static(__dirname, './public'))

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//GET a http://localhost:3000/heroes -> Devuelve el listado de alumnos registrados
// app.get('/heroes', function(req, res) {
//   console.log("Getting the list of heroes...\n");
//   res.send(hService.heroes);
// });


//GET a http://localhost:3000/heroes/:name of hero -> Devuelve el heroe que metas en la URL
app.get('/heroes/:name', function(req, res) {
  console.log(`Getting hero: ${req.params.name}\n`)
  try{
    res.status(200).json(hService.getHero(req.params.name));
    console.log(hService.getHero(req.params.name));
  }catch(error) {
    res.status(404).end("Hero not found");
    console.log("There was an error getting a hero", error);
  }
  
});

// //POST http://localhost:3000/heroes/addHero -> Añade el heroe 
// app.post('/heroes', function(req, res) {
  
//   console.log("Posting Hero...\n")
//   try {
//     hService.addHero(req.body);
//     console.log(hService.getHero(req.body.name));
//     res.status(200).end();
// } catch(error) {
//     console.log("there was an error adding new hero", error);
//     res.status(500).end();
// }
// });



////////////////////////////////////////////////////////////////DATA BASE///////////////////////////////////////////////////////

//DELETE http://localhost:3000/heroe/:name -> Borra el heroe pasado en la URL
app.delete('/heroe/:name',function (req, res){

  const name = req.params.name;
  console.log('Deleting hero:'+ name );
  HeroUser.destroy({
    where: { name: name }
  }).then(() => {
    res.status(200).send('Hero has been deleted!');
  }).catch(err => {
    res.status(500).send("There was an Error deleting hero -> " + err);
  });
 

});

//EDITAR EL HEROE
app.put('/heroe/:name',function (req, res)  {
  var heroe= req.body;
  const name = req.params.name;
  HeroUser.update( { biography: req.body.biography, birth: req.body.birth}, 
            { where: {name: name} }
           ).then(() => {
            res.status(200).send(heroe);
           }).catch(err => {
            res.status(500).send("Error -> " + err);
           })
});

//GET a http://localhost:3000/heroes -> Devuelve el listado de Heroes registrados
app.get('/heroes', function(req, res){
  console.log("Let's see the hero's list...");
  try{
    Hero.findAll().then(heroes=>{
      res.status(200).send(heroes);
    })
  }catch(error){
      res.status(404).end(`Heroes not found`);
      console.log("there was an error searching the heros", error);
  }
  
});

//GET a http://localhost:3000/heroesUser -> Devuelve el listado de Heroes registrados
app.get('/heroesUser', function(req, res){
  console.log("Let's see the User hero's list...");
  try{
    Hero.findAll(
      {include: [
      { model: HeroUser, where:{ userNameID: 'kevin'}}
    ]}
   ).then(heroesUser=>{
      res.status(200).send(heroesUser);
    })
  }catch(error){
      res.status(404).end(`Heroes not found`);
      console.log("there was an error searching the heros", error);
  }
});

//GET http://localhost:3000/heroe/:name -> busca el heroe pasado en la URL
app.get('/heroe/:name', function(req, res){
  console.log('Searching the hero: '+ req.body);

  try{
    Hero.findOne({
      where:{
        name: req.params.name
      }
    }).then(hero => {
      res.send(hero);
      //res.status(200).end();
    });
  }catch(error){
    res.status(404).end(`${req.params.name} not found`);
    console.log(`there was an error searching, maybe ${req.params.name} isn't in DB`, error);
}

});

//POST http://localhost:3000/heroes/addHero -> Añade el heroe a la base de datos
app.post('/perfectHero', function(req, res) {
  
  console.log("Posting Hero of DB...\n")
  try {
    console.log(req.body);
    Hero.create({
      name : req.body.name,
      biography : req.body.biography,
      avatar : req.body.avatar,
      birth : req.body.birth,
      category : req.body.category,
      creator : req.body.creator
    }).then(data => {
      res.send(data)
      console.log("Traza->", data)
    })
    .catch(err => {
      res.json('error: ' +err);
    })
} catch(error) {
    console.log("there was an error adding the perfect hero on DB", error);
    res.status(500).end();
}
});

//USER
//POST http://localhost:3000/user -> Busca si el Usuario esta ya loggeado
app.get('/user', function(req,res){
  
  console.log("USER LOGIN \n");

  let errorLogin = 'error';

  User.findAll({
      where: {
        nameID: req.query.ID
      }
    }).then(data =>{
      if(isEmpty(data)==true || data === undefined){
        console.log("There was an error with the user logged in DB");
        res.send(errorLogin);
        res.status(500).end();
      }else{
        res.send(data);
        console.log("--->",data);
      }
     
    })
});



//POST http://localhost:3000/register -> Registra el Usuario en la lista 
app.post('/register', function(req,res){
  console.log("REGISTER... \n")
  console.log(req.body)

  let errorLogin = 'error';


  User.findAll({
    where: {
      nameID: req.body.name
    }
  }).then(data =>{
    if(isEmpty(data)==true || data === undefined){

      User.create({
          nameID : req.body.name,
          pass: req.body.password
      }).then(data => {
        res.send(data)
        console.log("Traza Register ->", data)
      })
      .catch(err => {
        res.send()
        console.log("There was an error registering the user on DB", err);
        res.status(500).end();   
       })  

    }else{
      res.send(errorLogin)
      console.log("The user is already registered");
      res.status(500).end();   
    }
   
  })

 
});

app.listen(port, function () {
  console.log('Heroes app listening on port '+port+'!\n\n');
});


function isEmpty(obj) {
  for(let key in obj) {
      if(obj.hasOwnProperty(key))
          return false;
  }
  return true;
}
