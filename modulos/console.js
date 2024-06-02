console.log("algo");
console.info("algo");
console.error("un error"); //a veces lo pinta distinto
console.warn("una advertencia");

var tabla = [
  {
    a: 1,
    b: "Z",
  },
  {
    a: 2,
    b: "Otra",
  },
];
console.table(tabla); //datos en formas de tablas

console.group("Conversacion");
console.log("Hola");
console.log("blablabla");
console.log("adios");
console.groupEnd();

console.log("otra cosa");

console.count('veces');
console.count('veces');
console.count('veces');
console.countReset('veces');
console.count('veces');



