const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// 🔥 MIDDLEWARES
app.use(cors());
app.use(express.json());

// 🔗 RUTAS
const usuariosRoutes = require("./routes/usuarios");
const empleadosRouter = require("./routes/empleados");
const serviciosRouter = require("./routes/servicios");
const turnosClientesRouter = require("./routes/turnosclientes"); // 👈 agregado aquí

app.use("/usuarios", usuariosRoutes);
app.use("/empleados", empleadosRouter);
app.use("/servicios", serviciosRouter);
app.use("/turnosclientes", turnosClientesRouter); // 👈 agregado aquí

// 🧪 RUTA DE PRUEBA
app.get("/", (req, res) => {
  res.send("Servidor funcionando 🚀");
});

// 🔌 CONEXIÓN A MONGODB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Conectado a MongoDB Atlas"))
  .catch(err => console.log("❌ Error:", err));

// 🚀 SERVIDOR
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});