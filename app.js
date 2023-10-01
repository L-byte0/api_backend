import express from "express";
import 'dotenv/config'
import './db/connection.js'
import AuthRouter from "./routes/AuthRouter.js";
const app = express();
const port = 5000 || process.env.PORT;

app.use(express.json())
app.use("/auth", AuthRouter)
app.listen(port, () => console.log("Server funcionando"));