/*const { log } = require('console');
const http = require('http');

//como crear un servidor?
http.createServer(router).listen(3000);//escuchadno en el puerto 3000

function router(req, res){
        console.log('nueva peticion');
        console.log(req.url);//la peticion que estan llamadno
    
        switch (req.url) {
            case '/hola':
                res.write('Hola, que tal');
                res.end();
                break;
        
            default:
                res.write('Error 404: no se lo q quieres');
                res.end();
                break;
        }
        // res.writeHead(201,{
        //     'content-type': 'text/pla'
        // })
        // //escribir respuesta al usuario
        // res.write('Hola, ya se usar http de NodeJs')
    
        // res.end();//termianr la peticino
}

console.log('Escuchadno http en el puerto 3000');*/


//otra manera

const { info } = require('console');
const {createServer} = require('http');

const port = 3000;

function router(req,res){
    switch (req.url) {
        case '/':
            res.end('<h1>HOLAA!!</h1>');
            break;
    
        default:
            res.write('404, url no encontrada')
            res.end();
            break;
    }
}

const server = createServer(router);

server.listen(port, (err) =>{
    if(err){
        console.log('No se pudo establecer conexion con el servidor');
        console.error(err.message);
    }
    console.info(`> Listo en http//localhost:${port}`);
});
