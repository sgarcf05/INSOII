const ApiRouter = require("express").Router();

ApiRouter.use("/about", require("./about"));
ApiRouter.use("/users", require("./users"));

module.exports = ApiRouter;