const express = require("express");
const router = express.Router();
const TurnosClientes = require("../models/TurnosClientes");

// Obtener todos los clientes
router.get("/", async (req, res) => {
  try {
    const clientes = await TurnosClientes.find();
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener un cliente por ID
router.get("/:id", async (req, res) => {
  try {
    const cliente = await TurnosClientes.findById(req.params.id);
    if (!cliente) return res.status(404).json({ error: "Cliente no encontrado" });
    res.json(cliente);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Buscar cliente por cédula
router.get("/cedula/:cedula", async (req, res) => {
  try {
    const cliente = await TurnosClientes.findOne({ cedula: req.params.cedula });
    if (!cliente) return res.status(404).json({ error: "Cliente no encontrado" });
    res.json(cliente);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Buscar cliente por RFID
router.get("/rfid/:rfid_uid", async (req, res) => {
  try {
    const cliente = await TurnosClientes.findOne({ rfid_uid: req.params.rfid_uid });
    if (!cliente) return res.status(404).json({ error: "Cliente no encontrado" });
    res.json(cliente);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Crear cliente
router.post("/", async (req, res) => {
  try {
    const nuevo = new TurnosClientes(req.body);
    await nuevo.save();
    res.json(nuevo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Actualizar cliente
router.put("/:id", async (req, res) => {
  try {
    const actualizado = await TurnosClientes.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(actualizado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Eliminar cliente
router.delete("/:id", async (req, res) => {
  try {
    await TurnosClientes.findByIdAndDelete(req.params.id);
    res.json({ mensaje: "Cliente eliminado" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
