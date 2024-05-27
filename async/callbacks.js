function hola(nombre, micallback) {
  setTimeout(function () {
    console.log("Hola " + nombre);
    micallback();
  }, 8000);
}

function adios(nombre, otroCallback) {
  setTimeout(function () {
    console.log("Adios " + nombre);
    otroCallback();
  }, 3000);
}

console.log("Iniciando proceso...");

hola("willi", function () {
  adios("Whelee", function () {
    console.log("Terminando proceso ");
  });
});
