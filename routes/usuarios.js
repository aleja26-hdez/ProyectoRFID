const express = require("express");
const router = express.Router();
const Usuario = require("../models/Usuario");

// Crear usuario
router.post("/", async (req, res) => {
  const nuevo = new Usuario(req.body);
  await nuevo.save();
  res.json(nuevo);
});

// Obtener usuarios
router.get("/", async (req, res) => {
  const usuarios = await Usuario.find();
  res.json(usuarios);
});

module.exports = router;