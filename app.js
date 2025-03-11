const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Grupo-13:grupo13@cursadanodejs.ls9ii.mongodb.net/Node-js')
.then(()=> console.log('Conexion exitosa a MongodDb'))
.catch(error=>console.error('Error al conectar a MongoDB'));
