const mongoose = require("mongoose");

const registroSchema = new mongoose.Schema({
  uid: String,
  fecha: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Registro", registroSchema);