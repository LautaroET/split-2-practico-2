const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Grupo-13:grupo13@cursadanodejs.ls9ii.mongodb.net/Node-js')
.then(()=> console.log('Conexion exitosa a MongodDb'))
.catch(error=>console.error('Error al conectar a MongoDB'));
const superheroSchema = new mongoose.Schema({
    nombreSuperHeroe:{type:String,require:true},
    nombreReal:{type:String,require:true},
    edad:{type:Number,min:0},
    planetaOrigen:{type:String,default:'Desconocido'},
    debilidad:String,
    poderes:[String],
    aliados:[String],
    enemigos:[String],
    createdAt:{type:Date,default:Date.now},
    creador:String
},{collection:'Grupo-13'});
const SuperHero = mongoose.model('SuperHero',superheroSchema);