require('dotenv').config();

const express = require("express");
const dbconexion = require("../database/config");
const app = express();

dbconexion();

app.set("view engine", "pug");
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use("/static", express.static("./public"));
app.use(require("../routes/hardware"));


app.listen(process.env.PORT, () => {
    console.log(`App escuchado en http://localhost:${process.env.PORT}`);
});