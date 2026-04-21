const express = require("express");
const router = express.Router();
const Empleado = require("../models/Empleado");

// Obtener todos los empleados
router.get("/", async (req, res) => {
  try {
    const empleados = await Empleado.find();
    res.json(empleados);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener un empleado por ID
router.get("/:id", async (req, res) => {
  try {
    const empleado = await Empleado.findById(req.params.id);
    if (!empleado) return res.status(404).json({ error: "Empleado no encontrado" });
    res.json(empleado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Crear empleado
router.post("/", async (req, res) => {
  try {
    const nuevo = new Empleado(req.body);
    await nuevo.save();
    res.json(nuevo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Actualizar empleado
router.put("/:id", async (req, res) => {
  try {
    const actualizado = await Empleado.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(actualizado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Eliminar empleado
router.delete("/:id", async (req, res) => {
  try {
    await Empleado.findByIdAndDelete(req.params.id);
    res.json({ mensaje: "Empleado eliminado" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;