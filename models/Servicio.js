const mongoose = require("mongoose");

const servicioSchema = new mongoose.Schema({
  nombre: String,
  descripcion: String
});

module.exports = mongoose.model("Servicio", servicioSchema, "Servicios");