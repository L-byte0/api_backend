import mongoose from "mongoose";

try {
    await mongoose.connect(process.env.URI_MONGO);
    console.log('DB Funcionando 🎆')
  } catch (error) {
    console.log("Error de conexion" + error)
  }