const AboutRouter = require("express").Router();
const AboutService = require("../../../services/about.service");

AboutRouter.route("/info")
    .get((req, res) => {
        const aboutService = new AboutService("Heroe's manager", "This is a collection of heroes");

        res.status(200).json(aboutService.getAbout());
    });

module.exports = AboutRouter;