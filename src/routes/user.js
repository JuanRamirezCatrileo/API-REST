const express = require("express");
const userSchema = require("../models/user");
const router = express.Router();

// crear usuario

router.post("/users", (req, res) => {
    const user = userSchema (req.body);
    user
    .save()
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message: error }) );
});

// get todos los usuarios
router.get("/users", (req, res) => {
    userSchema
    .find()
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message: error }) );
});

// get a 1 usuarios
router.get("/users/:id", (req, res) => {
    const { id } = req.params;
    userSchema
    .findById(id)
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message: error }) );
});

// actualizar 1 usuarios
router.put("/users/:id", (req, res) => {
    const { id } = req.params;
    const { nombre, apellido, correo, telefono} = req.body;
    userSchema
    .updateOne({_id: id}, {$set: {nombre, apellido, correo, telefono}})
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message: error }) );
});

// eliminar 1 usuarios
router.delete("/users/:id", (req, res) => {
    const { id } = req.params;
    userSchema
    .remove({_id: id})
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message: error }) );
});

// get todos las reservas
router.get("/reservas", (req, res) => {
    reservasSchemas
    .find()
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message: error }) );
});

module.exports = router;