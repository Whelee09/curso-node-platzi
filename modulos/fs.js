const { ifError } = require('assert');
const { log } = require('console')
const fs = require('fs')
//no tenemos que agg algo mas porque viene por defecto en el core de node

// function leer(ruta, cb){
//     fs.readFile(ruta,(err, data) => {
//         //leido
//         console.log(data.toString());
//     })
// }
// leer(__dirname + '/archivo.txt');

function leer(ruta, cb){
    fs.readFile(ruta,(err, data) => {
        //leido
        cb(data.toString());
    })
}
//leer(__dirname + '/archivo1.txt',console.log);


function escribir(ruta, contenido, cb) {
    fs.writeFile(ruta, contenido, function(err){
        if(err){
            console.error('No se ha podido escribir el archivo', err);
        }else{
            console.log('Se ha escrito de manera correcta');
        }
    });
}

//escribir(__dirname + '/archivo1.txt','soy un archivo nuevo!', console.log)

function borrar(ruta,cb){
    fs.unlink(ruta,cb);
}

borrar(__dirname + '/archivo1.txt', console.log);// el null viene porque no hay nigun error

