const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// 🔥 MIDDLEWARES (van primero)
app.use(cors()); // 👈 SOLUCIONA el error CORS
app.use(express.json());

// 🔗 RUTAS
const usuariosRoutes = require("./routes/usuarios");
const empleadosRouter = require("./routes/empleados");
const serviciosRouter = require("./routes/servicios");

app.use("/usuarios", usuariosRoutes);
app.use("/empleados", empleadosRouter);
app.use("/servicios", serviciosRouter);

// 🧪 RUTA DE PRUEBA
app.get("/", (req, res) => {
  res.send("Servidor funcionando 🚀");
});

// 🔌 CONEXIÓN A MONGODB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Conectado a MongoDB Atlas"))
  .catch(err => console.log("❌ Error:", err));

// 🚀 SERVIDOR
app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});