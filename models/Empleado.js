const mongoose = require("mongoose");

const empleadoSchema = new mongoose.Schema({
  nombre: String,
  servicio: String,
  disponible: Boolean
});

module.exports = mongoose.model("Empleado", empleadoSchema, "Empleados");