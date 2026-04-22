const express = require("express");
const router = express.Router();

const Registro = require("../models/Registro");

// ✅ RUTA GET (para probar en navegador)
router.get("/", (req, res) => {
  res.send("Ruta RFID funcionando");
});

// ✅ RUTA POST (la importante para el ESP32)
router.post("/", async (req, res) => {
  try {
    const { uid } = req.body;

    if (!uid) {
      return res.status(400).json({ error: "UID requerido" });
    }

    const nuevoRegistro = new Registro({ uid });

    await nuevoRegistro.save();

    res.json({ mensaje: "UID guardado correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al guardar UID" });
  }
});

module.exports = router;