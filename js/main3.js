console.log('\n/* Ejercicio 6 - Parte C */')

var cantidadDeGatos = 10;
var cantidadDePasos = 4;

for(contador = 1; contador <= cantidadDeGatos;  contador++) {
    pasos =''
    for(contador2 = 1; contador2 <= cantidadDePasos;  contador2++) {
        
        pasos = '🐾' + pasos
       
    }

var gatos = 'Gato #' + contador + ': ' + '🐈' + (contador%2 == 0? '⬛' : '') + pasos
console.log(gatos)
}
