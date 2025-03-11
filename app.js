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
async function insertSuperHero() {
    const hero = new SuperHero({
        nombreSuperHeroe:'Deadpool',
        nombreReal:'Wade Wilson',
        edad:'43',
        planetaOrigen:'Tierra',
        debilidad:'Ninguna (cáncer curado)',
        poderes:['Regeneración', 'Habilidades de combate','Ruptura de la cuarta pared'],
        aliados:['Cable','X-Force'],
        enemigos:['Francis','Ajax'],
        creador:'Tapia Lautaro'
    });
    await hero.save();
    console.log('Superheroe insertado:',hero);
}
insertSuperHero();
async function updateSuperHero(nombreSuperHeroe) {
    const result = await SuperHero.updateOne(
        { nombreSuperHeroe: nombreSuperHeroe},
        { $set: { edad: 26 } } 
    );
    console.log('Resultado de la actualizacion:',result);
}
updateSuperHero('Deadpool');
async function deleteSuperHero(nombreSuperHeroe) {
    const result = await SuperHero.deleteOne({nombreSuperHeroe:nombreSuperHeroe});
    console.log('Super heroe eleminado:',result);
}
deleteSuperHero('Deadpool')