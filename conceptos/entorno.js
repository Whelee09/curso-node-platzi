let nombre = process.env.NOMBRE || 'sin nombre'
console.log('holaa ' + nombre);

//como le digo a nodejs desde 'afuera cual es la variable nombre?'
// la podemos pasar desde afuera en este caso: NOMBRE=elNombreQueQueremos Node conceptos/entorno.js 
//ojo, no funciona en la temrminal de powershell pero si en la de bash,
// por eso es recomendable buscar el dotenv

//para introducir las varibles no conbash sino con powershell hay que primero definirlas de la siguiente manera:
//$env:NOMBRE_DE_LA_VARIABLE = " el nombre", y luego si ejecutar el comando node nombreArchivo.js