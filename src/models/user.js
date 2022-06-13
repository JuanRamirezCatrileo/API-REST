const mongoose = require("mongoose");

const userSchema = mongoose.Schema({

    nombre: {
        type: String,  
        required: true
    },
    apellido: {
        type: String, 
        required: true
    },
    correo: {
        type: String, 
        required: true
    },
    telefono: {
        type: Number, 
        required: true
    }
});

const reservasSchema = mongoose.Schema({

    fecha: {
        type: Date,  
        required: true
    },
    servicio: {
        type: String, 
        required: true
    },
    hora: {
        type: String, 
        required: true
    },
    cupos: {
        type: Number, 
        required: true
    },
    sobrecupos: {
        type: Number, 
        required: true
    }

});

const reservas_creadasSchema = mongoose.Schema({

    nombre: {
        type: String,  
        required: true
    },
    apellido: {
        type: String, 
        required: true
    },
    correo: {
        type: String, 
        required: true
    },
    telefono: {
        type: Number, 
        required: true
    },
    fecha: {
        type: Date, 
        required: true
    },
    servicio: {
        type: String,
        required: true
    },
    hora: {
        type: String, 
        required: true
    }

});

module.exports = mongoose.model('User' , userSchema);
