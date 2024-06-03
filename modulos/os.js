const os = require('os');

//console.log(os.arch()); //32-64
//console.log(os.platform());//la platafomra donde ando corriendo el codigo
//console.log(os.cpus());
//console.table(os.cpus())
//console.log(os.cpus().length);

//console.log(os.constants);
// const SIZE = 1024
// function kb(bytes){
//     return bytes/SIZE;
// }
// function mb(bytes){
//     return kb(bytes)/SIZE;
// }
// function gb(bytes){
//     return mb(bytes)/SIZE;
// }
// console.log(os.freemem());//memoria libre
// console.log(kb(os.freemem));
// console.log(mb(os.freemem));
// console.log(gb(os.freemem));

// console.log(gb(os.totalmem()));//memoria total

// console.log(os.homedir());
// console.log(os.tmpdir());//para temp

// console.log(os.hostname());
console.log(os.networkInterfaces());
