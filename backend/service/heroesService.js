const fs = require("fs");
const path = require("path");

class HeroesService {

    constructor(){
        this.heroes = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../config/heroes.json")));
    }

    allHeroes(){
        console.log(this.heroes);
    }
    

}

module.exports = HeroesService;