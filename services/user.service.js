const fs = require("fs-extra");
const path = require("path");

class UserService {
    constructor() {
        this.users = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../config/users.json")));
    }

    getUsers() {
        return this.users;
    }
    getUser(name) {
        const user = (this.getUsers()).find((user) => {
            return user.name === name;
        });
        if(!user) throw new Error("Hero not found");
        return user;
    }

    async addUser(user){
        if(!this.isValid(user)) {
            throw new Error("User is not valid");
        } else {
            if(this.exists(user)) {
                throw new Error(`User ${user.name} already exists`);
            }
            console.log(`User ${user.name}`);
            
            this.users.push(user);
            await fs.writeFile((path.resolve(__dirname, 
                "../config/users.json")),JSON.stringify(this.users));                    
            console.log("User saved");
        }
    }
    isValid(user){
        return user.id && user.name && user.password;
    }
    exists(user){
        try {
            return this.getUser(user.name);
        } catch(error) {
            return false;
        }
    }

}

module.exports = UserService;