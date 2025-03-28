/*
Ejercicio 2: Validar Contraseña
- Formulario de registro.
Crea una función validarContraseña(contraseña) que retorne true si:
- Tiene al menos 8 caracteres.
- Incluye un número.
- Incluye una mayúscula.

*/


const prompt = require("prompt-sync")();
contrasena = prompt("Ingresa tu clave: ");

function validarContrasena(contrasena){
    
    if (contrasena.length <= 8){
        return false
    }
    return true

    for(let i = 0; i < contrasena.length; i++){
        if(contrasena[i] >= 'A' && clave[i] <= 'Z'){
            return true
        }
        return false
    }

    for(let i = 0; i < contrasena.length; i++){
        if(contrasena[i] >= '0' && clave[i] <= '9'){
            return true
        }
        return false
    }
}
console.log(validarContrasena(contrasena));