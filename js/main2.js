console.log('\n/* Ejercicio 6 - Parte B */')

var cantidadDeGatos = 5;
var cantidadDePasos = 3;

for(contador = 1; contador <= cantidadDeGatos;  contador++) {
    pasos =''
    for(contador2 = 1; contador2 <= cantidadDePasos;  contador2++) {
        
        pasos = '🐾' + pasos
       
    }

var gatos = 'Gato #' + contador + ': ' + '🐈' + pasos
console.log(gatos)
}


