const express = require('express');
const res = require('express/lib/response');
const mongoose = require("mongoose");
require("dotenv").config();
const  userRoutes = require("./routes/user.js");

const app = express();
const port = process.env.PORT || 9000;

//middelware

app.use(express.json());

app.use('/api',  userRoutes);

//routes
app.get("/", (req, res)=>{
    res.send('Bienvenido Juan Ramirez');
});

// Conexion a mongoDB
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Conexion Lista a MongoDB"))
    .catch((error)=> console.error(error));

app.listen(port, () => console.log("Servidor conectado al puerto", port));