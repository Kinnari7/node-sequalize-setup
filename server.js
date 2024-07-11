// Create express app
var express = require("express")
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes");
var corsOptions = {
    origin: "http://localhost:8081"
};

var app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const db = require("./app/models");
db.sequelize.sync();    

app.use("/", routes);

const PORT =  8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});