const UserRouter = require("express").Router();
const UserService = require("../../../services/user.service");

const userService = new UserService();

UserRouter.route("/")
    .get((req, res) => {
        res.status(200).json(userService.getUsers());
    })
    .post((req, res) => {
        try {
            userService.addUser(req.body);
            res.status(200).end();
        } catch(error) {
            console.log("there was an error adding new hero", error);
            res.status(500).end();
        }
    });

UserRouter.route("/:name")
    .get(async (req, res) => {
         try{
              res.status(200).json(userService.getUser(req.params.name));
         }catch(error) {
              res.status(404).end();
              console.log("there was an error getting a hero", error);
        }
    });

module.exports = UserRouter;