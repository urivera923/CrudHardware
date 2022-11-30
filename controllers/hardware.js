const Hardware = require("../models/Hardware");

const readHardware = async (_, res) => {
    try {
        const productos = await Hardware.find({});
        if (productos.length === 0) {
            return res.render('index', {ok: false});
        }
        return res.render('index', {ok: true,  productos});
    } catch (error) {
        console.log(error);
        return res.json({ok: false, msg: "Error en el servidor, contactose en el servidor" });
    }
}

const createHardware = async(req, res) => {
    console.log(req.body);
    try {
        const {hardware, nombre, modelo, marca, descripcion, lanzamiento, img} = req.body;
        if (!hardware || !nombre || !modelo || !marca || !descripcion || !lanzamiento || !img) {
            return res.status(400).send({
                success: false,
                msg: "Faltan datos por completar",
            });
        } else {

            const hardware_nuevo = new Hardware(req.body);
            await hardware_nuevo.save();
            return res.redirect("/");
        }
    } catch (error) {
        console.log(error);
        return res.json({ok: false, msg: "Error al registrar la infromación"});
    }
}

const deleteHardware = async(req, res) => {
    const id = req.params.id;
    try {
        await Hardware.findByIdAndDelete(id);

        return res.redirect("/");
    } catch (error) {
        console.log(error);
        return res.json({ok: false, msg: "Error al borrar la información"});
    }
}

const editarHardware = async(req, res) => {
    const id = req.body.edit_id;
    try {
        await Hardware.findByIdAndUpdate(id, req.body)
        return res.redirect("/");
        // return res.status(200).send({
        //     success: true,
        //     msg: "Actualizado",
        // });
    } catch (error) {
        console.log(error);
        return res.json({ok: false, msg: "Error al editar la información"});
    }
}

module.exports = {
    readHardware,
    createHardware,
    deleteHardware,
    editarHardware, 
}