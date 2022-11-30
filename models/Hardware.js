const { Schema, model } = require("mongoose");

const hardwareSchema = Schema({
    hardware:{
        type: String,
        required: true
    },
    nombre:{
        type: String,
        required: true
    },
    modelo:{
        type: String, 
        required: true
    },
    marca:{
        type: String,
        required: true
    },
    descripcion:{
        type: String,
        required: true
    },
    lanzamiento:{
        type: Date,
        required: true,
        default: Date.now
    },
    img:{
        type: String,
        required: true
    }
});

module.exports = model("Hardware", hardwareSchema); 