console.log(global);

let i = 0;
let intervalo = setInterval(() => {
  console.log("Hola");

  if (i == 3) {
    clearInterval(intervalo);
  }
  i++;
}, 1000);

setImmediate(function(){
    console.log("HII");
});

//console.log(process);

console.log(__dirname);
console.log(__filename);

//crear varibales globales
//prferiblemente no  hacerlo
global.miVariable = 'elValor';
console.log(miVariable);

