function hola(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Hola " + nombre);
      //   micallback();
      //en vez de ejecutar un callback ejecutamos el resolvert
      resolve("Wilii");
    }, 1500);
  });
}

function hablar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Bla, bla,bla...");
      //resolve(nombre);
      reject('hay un error')
    }, 1000);
  });
}

function adios(nombre, otroCallback) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Adios", nombre);
      resolve();
    }, 1000);
  });
}

//--
console.log("Iniciando el proceso...");

hola("Willi")
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then(adios) //(nombre) => {
  //     return adios(nombre)
  // })

  .then(() => {
    console.log("Terminado el proceso");
  })
  .catch(error => {
    console.error("ha habido un error: " + error);
  })
