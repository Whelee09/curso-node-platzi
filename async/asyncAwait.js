async function hola(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Hola " + nombre);
      resolve("Wilii");
    }, 1500);
  });
}

async function hablar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Bla, bla,bla...");
      resolve();
      //reject("hay un error");
    }, 3500);
  });
}

async function adios(nombre, otroCallback) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Adios", nombre);
      resolve();
    }, 1000);
  });
}

async function main() {
  let nombre = await hola("carlos");
  await hablar();
  await hablar();
  await hablar();
  await adios(nombre);
  console.log("terminamos el proceso");
}

console.log("empezamos el proceso");
main();
console.log('va a ser la segunda instruccion que se ejecute');
