const { exec, spawn} = require('child_process');
const { log } = require('console');
const { stdout, stderr } = require('process');
//const exec = require('child_process').exec



// exec('javac modulos/MainJava.java', (error,stdout, stderr) =>{
//     if (error) {
//         console.log(error);
//         return false;
//     }
//     console.log(stdout);
// })

// exec('java modulos/MainJava.java', (error,stdout, stderr) =>{
//     if (error) {
//         console.log(error);
//         return false;
//     }
//     console.log(stdout);
// });


let proceso = spawn('dir'/*,['otro parametro']*/);

console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on('data', function (dato) {
    console.log('Esta muerto?');
    console.log(proceso.killed);
    console.log(dato.toString());
});

proceso.on('exit', () => {
    console.log('El proceso termino');
    console.log(proceso.killed);
})
