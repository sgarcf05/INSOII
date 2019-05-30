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
  // Request methods you wish to allow
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});



////////////////////////////////////////////////////////////////DATA BASE///////////////////////////////////////////////////////
//POST http://localhost:3000/heroe/:name -> Añade el heroe pasado en la URL
app.post('/heroe/:name',function (req, res){

  const userName = req.body.params.ID;
  const hero = req.params.name;
  console.log(JSON.stringify('Lets try to add hero: '+ hero ));
  let errorAddingH = 'error';

  Hero.findAll({
    where: {
      name: hero
    }
  }).then(() =>{
    HeroUser.findAll({
      where: {
        heroName: hero
      }
    }).then(()=>{
        HeroUser.create({userNameID: userName, heroName: hero 
          
        }).then(() => {
          res.status(200).send('Hero has been added!');
        }).catch(err => {
          res.status(500).send("the hero that you are triying to add does not exist in our DataBase " + err);
        });
      
    });   
  }).catch(err =>{
    res.send(errorAddingH);
    res.status(404).send(hero+ " not found in the global DB  -->" + err);

  });
});



//DELETE http://localhost:3000/heroe/:name -> Borra el heroe pasado en la URL
app.delete('/heroe/:name',function (req, res){

  const name = req.params.name;
  console.log(JSON.stringify('Lets try to delete hero: '+ name ));
  let errordeleting = 'error';


  HeroUser.findAll({
    where: {
      heroName: name
    }
  }).then(data =>{
    if(isEmpty(data)==true || data === undefined){
      console.log("There was an error with the hero deleted on DB");
        res.send(errordeleting);
        res.status(500).end();
    }else{
      HeroUser.destroy({
        where: { heroName: name , userNameID: req.query.user }
      }).then(() => {
        res.status(200).send('Hero has been deleted!');
      }).catch(err => {
        res.status(500).send("There was an Error deleting hero -> " + err);
      });
      
    }
  });
});

//EDITAR EL HEROE http://localhost:3000/heroe/:name -> modifica el campo updatedAt
app.put('/heroe/:name',function (req, res)  {
  console.log('Lets update the comic fav which appears: '+req.body.params.name)



      Hero.update( { creator: req.body.params.edit}, 
         { where: {name: req.body.params.name} }       
         ).then(res => {
            console.log('Se ha modificado correctamente')
            res.send(res);
            res.status(200).send(res);
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
      { model: HeroUser, where:{ userNameID: req.query.user}}
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
  console.log(JSON.stringify('Searching the hero: '+ req.params.name));

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