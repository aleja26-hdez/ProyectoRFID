const mongoose = require("mongoose");

const turnosClientesSchema = new mongoose.Schema({
  nombre: String,
  apellido: String,
  cedula: String,
  placa: String,
  telefono: String,
  rfid_uid: String
});

module.exports = mongoose.model("TurnosClientes", turnosClientesSchema, "turnos.clientes");
