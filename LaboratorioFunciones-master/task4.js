/*
Ejercicio 4: Calcular Promedio de Notas
- Plataforma educativa.
Crea una función calcularPromedio(notas) que reciba un array de notas dado por el usuario
(separadas por comas) y retorne el promedio (redondeado a 2 decimales).
*/

const prompt = require("prompt-sync")();
function calcularPromedio(notas){
    let suma = 0;
    for (let i = 0; i < notas.length; i++) {
        suma = suma + notas[i]
    }
    let promedio = suma / notas.length
    let promedioDecimal = Math.floor(promedio * 100) / 100
    return promedioDecimal
}
let numeroEstudiantes = Number(prompt("Introduzca cuántos estudiantes va a calificar: "))
let listaNotas = []
for (let i = 0; i < numeroEstudiantes; i++) {
    let nota = prompt("Ingrese la nota del estudiante: ");
    nota = Number(nota);
    if (nota || nota === 0) {
        listaNotas.push(nota);

let resultado = calcularPromedio(listaNotas);

console.log("El promedio de las notas es:", resultado)}
}

