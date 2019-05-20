const fs = require("fs");
const path = require("path");

class HeroesService {

    constructor(){
        this.heroes = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../config/heroes.json")));
    }

    allHeroes(){
        console.log(this.heroes);
    }
    getHero(name) {
        const hero = this.heroes.find((hero) => {
            return hero.name === name;
        });
        if(!hero) throw new Error("Hero not found");
        return hero;
    }



    deleteHero(hero) {
		
        const heroToDelete = this.getHero(hero);
    
        if(!heroToDelete) {
    
            throw new Error(`Hero ${hero} does not exist and it won't be deleted`);
    
        } else {
    
            const indexToDelete = this.heroes.findIndex((heroToDelete) => {
    
                return heroToDelete.name === hero;
    
            });
    
            //this.allHeroes().splice(indexToDelete, 1);
    
            let heroDeleted= this.heroes.splice(indexToDelete, 1);
            console.log("BORRADO", heroDeleted);

            console.log(`Heroes sin ${heroToDelete.name} :  ${this.heroes}`);

            return heroDeleted;
        }
    
    }

    addHero(hero) {
        if(!this.isValidHero(hero)) {
            throw new Error("Hero is not valid");
        } else {
            if(this.exists(hero)) {
                throw new Error(`Hero ${hero.name} already exists`);
            }
            this.heroes.push(hero);

            console.log(this.heroes.push(hero));

        }
    }

    isValidHero(hero) {
        return hero.name && hero.biography && hero.avatar && hero.birth && hero.creator;
    }

    exists(hero) {
        try {
            return this.getHero(hero.name);
        } catch(error) {
            return false;
        }
    }

}

module.exports = HeroesService;
