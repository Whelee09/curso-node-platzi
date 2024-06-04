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

--------------------------------
Comando más usados de npm

#Iniciar un proyecto
npm init

#Iniciar un proyecto con configuración automática
npm init -y

#Instalar dependencias para producción
npm install nombreDelPaquete --save

#Alternativa 2 de Instalar dependencias para producción o desarrollo
npm i nombreDelPaquete -S 

#Instalar dependencias para desarrollo
npm install nombreDelPaquete --save-dev # npm i nombreDelPaquete -D

#Instalar dependencias de manera global
npm install -g nombreDelPaquete # npm i -g nombreDelPaquete

#Instalar una versión especifica de una dependencia
npm install -g nombreDelPaquete@1.0.0 

#Desinstalar dependencias 
npm uninstall nombreDelPaquete

#Ver dependencias desactualizadas
npm outdate

#Actualizar las dependencias desactualizadas
npm update





Apuntes de un compa;ero: https://www.notion.so/Fundamentos-de-Node-js-3d1041ef2a7e4835a10838a0c6553ee8#ca7a7f205fd546418c7ba70a3fbaa4ea


Como usar nuestros propios imports??

los puedes exports de la manera tradicional y hacer el require, sin embargo se puede hacer 
de la 'nueva forma', en la cual debemos hacer esto:
import NombreDelModulo from 'ruta' o hacer el export nombrado,  import {funciona, propiedad, otra cosa} from 'ruta'
guardar los archivos como .mjs o en el archio json de configuracion agregar "type": "module"


Modulos utiles

