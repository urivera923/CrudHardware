const mongoose = require("mongoose");

const dbconexion = async() => {
    try {
        await mongoose.connect(process.env.MONGOURI);
        console.log("Base de datos conectada");
    } catch (error) {
        console.log(error);
        throw new Error("Error al conectar en la base de datos"); 
    }
}

module.exports = dbconexion;