const app = require("./app");

// Get port for environment and store it in Express
const port = process.env.PORT || "3000";

app.get('/', function (req, res) {
    res.send('Hello World!');
  });
  
app.listen(port, async () => {
    console.log("Connected");
});