const express = require("express");
const router = express.Router();
const Servicio = require("../models/Servicio");

// Obtener todos los servicios
router.get("/", async (req, res) => {
  try {
    const servicios = await Servicio.find();
    res.json(servicios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener un servicio por ID
router.get("/:id", async (req, res) => {
  try {
    const servicio = await Servicio.findById(req.params.id);
    if (!servicio) return res.status(404).json({ error: "Servicio no encontrado" });
    res.json(servicio);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Crear servicio
router.post("/", async (req, res) => {
  try {
    const nuevo = new Servicio(req.body);
    await nuevo.save();
    res.json(nuevo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Actualizar servicio
router.put("/:id", async (req, res) => {
  try {
    const actualizado = await Servicio.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(actualizado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Eliminar servicio
router.delete("/:id", async (req, res) => {
  try {
    await Servicio.findByIdAndDelete(req.params.id);
    res.json({ mensaje: "Servicio eliminado" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;