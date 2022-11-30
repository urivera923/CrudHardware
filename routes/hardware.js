const { Router } = require("express");
const { readHardware, createHardware, deleteHardware, editarHardware } = require("../controllers/hardware");



const router = Router();

router.get("/", readHardware);
router.post("/create", createHardware);
router.get("/delete/:id", deleteHardware);
router.post("/update", editarHardware);



module.exports = router;