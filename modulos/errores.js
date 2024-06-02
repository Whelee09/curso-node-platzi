function otraFuncion(){
    seRompe();
}

function seRompe() {
  return 3 + x;
}

try {
  //otraFuncion();
    seRompeAsincrona((error) =>{
        console.log('hay error');
    });
} catch (error) {
  console.log("Ha habido un error");
  //console.error(error);
  console.error(error.mesaage);
}


function seRompeAsincrona(cb){
    setTimeout(function () {
        try {
            return 3+f;
        } catch (error) {
            console.log(error.message);
            cb(error);
        }
        
    })
}

console.log('algo del final');
//los errores se lanzan hacia arriba en burbuja, y el que lo captura deja de mandarlo hacia arriba

