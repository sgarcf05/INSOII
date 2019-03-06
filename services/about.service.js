const About = require("../core/about");

class AboutService {
    constructor(name, description) {
        this.about = new About(name, description);
    }

    getAbout() {
        return this.about;
    }
}

module.exports = AboutService;