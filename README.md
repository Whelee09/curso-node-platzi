# curso-node-platzi
entorno de ejecucion de js , orientado a servidores

es monohilo de entradas y salidas asincronas. Un proceso por cada nucleo del procesador.
Es orientado a eventos, nos permite programar de forma reactiva.

monohilo?

variables de entorno
mas informacion de una menjor manera de pasar las variables de entorno por consola es de usando dotenv 
https://www.npmjs.com/package/dotenv

NODEMON
recomendada para desarrollo

para correr con nodemon ejecutas en bash: 
nodemon rutaArchivo 

en powershell haces npx nodemon rutaArchivo

PM2
recomendada para produccion

actualizacion: node ahora tiene algo como nodemon pero de forma nativa


//promesas vs callbacks


modulos globales
global es el objeto global de node desde el cual accededemos a funciones basicas como el console.log o el setInterval

para mas informacion visitar: https://nodejs.org/docs/latest/api/globals.html

procesos hijos:
exec y spawn
basicamente exec es para ejecutar 'cosas sencillas', mientras si queremsos algo mas elaborado es mas recoemndable
usar spawn, aqui un link donde ver algunas diferecnias https://yosoy.dev/diferencia-entre-spawn-y-exec-de-child_process-de-nodejs/, y la documentacion de node: https://nodejs.org/docs/latest/api/child_process.html

addon:
leer mas aqui, pero basicamente es correr modulos de c++,ya que este es mas rapido.
Para hacer esto necestiamos instalat gyp, https://www.npmjs.com/package/node-gyp
que por cierto nos indica que debemos tener python instalado, ademas un compilador para c++, 
automaticamente nos recomienda usar el de vs(el de 10gb), sin embargo debe existirt la forma de hacerlo con
otros compiladores pero habria que configurarle los PATH y eso, tal cual lo hacen los usarios de linux.
La documentacion para addon de node es: https://nodejs.org/docs/latest/api/addons.html. Un video de yt que lo 
explica https://www.youtube.com/watch?v=CJqERG2rBaU


para el http 

https://medium.com/@officialrahulmandal/adding-routes-and-logic-to-a-pure-node-js-server-9f995298d984

recurso que explica los status code con gatos https://http.cat/






