class User{
    constructor(id, name, password){
        this.id=id;
        this.name=name;
        this.password=password;
    }

    getId(){
        return this.id;
    }
    setId(id){
        this.id=id;
    }
    getName(){
        return this.name;
    }
    setName(name){
        this.name=name;
    }
    getPassword(){
        return this.password;
    }
    setPassword(password){
        this.password=password;
    }
}

module.exports = User;