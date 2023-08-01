console.log('\n/* Ejercicio 6 - Parte A */')

var cantidadDeGatos = 10
var tipoGato = ''

for(contador = 1; contador <= cantidadDeGatos;  contador++) {
            
    if (contador%3 === 1) {
        tipoGato = '😺'
    }

    if (contador%3 === 2) {
        tipoGato = '😸'
    }

    if (contador%3 === 0) {
        tipoGato = '😹'   
    }

var gatos = 'Gato #' + contador + ': ' + tipoGato
console.log(gatos)
}