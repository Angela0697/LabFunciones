/*
Ejercicio 1: Calculadora de Propinas
- Una app para calcular propinas en restaurantes.
Crea una función calcularPropina(total, porcentaje) que reciba el total de la cuenta y el porcentaje de
propina, y retorne el monto final a pagar (total + propina).
*/
const prompt = require("prompt-sync")();

let precio = Number(prompt("El precio de su comida sin propina es: "))
let porcentaje = Number(prompt("Que porcentaje le gustaría dar de propina: "))

function calculadorapropina(precio, porcentaje){
    const propinaAplicada = precio * (porcentaje / 100);
    const precioTotal = precio + propinaAplicada;
    return precioTotal;
}

const total = calculadorapropina(precio, porcentaje);
console.log(`Total a pagar es: $${total}`);

