const mongoose = require("mongoose");

const usuarioSchema = new mongoose.Schema({
  nombre: String,
  apellido: String,
  cedula: String,
  placa: String,
  telefono: String,
  rfid_uid: {
    type: String,
    required: false
  }
});

module.exports = mongoose.model("Usuario", usuarioSchema, "turnos.clientes");
//                                                          ↑ este tercer parámetro
//                                                            le dice a Mongoose exactamente
//                                                            en qué colección buscar