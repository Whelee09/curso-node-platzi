//todo sobre el proceseo de node
//const process = require('process');

process.on('beforeExit', () => {
    console.log('el proceso va a terminar');
});

process.on('exit', () => {
    console.log('el proceso acabo');
    setTimeout(() => {
        console.log('esto no se ve nunca');
    },0)
});//nos desconectamos del eventLoop

process.on('uncaughtException', (err,origen) =>{
    console.log('Se nos olvido capturar un error');
    console.error(err);
});

//functionQueNoExiste();
console.log('Si el error no se captura no se ejecuta este log');
//btw este es el prototipo (escrito en js) 
//type UncaughtExceptionListener = (error: Error, origin: UncaughtExceptionOrigin) => void;

//process.on('unhandledRejection')//para capturar promesas rechazadas

