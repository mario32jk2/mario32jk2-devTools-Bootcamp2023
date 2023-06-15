/*
?Escribe una función que acepte un array con 10 números enteros positivos
?(entre 0 y 9) y devuelva una cadena de texto con esos números en forma de
?número de teléfono.
Ejemplo:
*-createPhoneNumber([5, 5, 5, 1, 3, 4, 7, 8, 9, 0]) => devuelve "(555) 134-
*7890"
*-createPhoneNumber([3, 0, 5, 1, 2, 7, 7, 2, 4, 9]) => devuelve "(305) 127-
*7249
El formato del número de teléfono devuelto debe ser correcto para completar
este desafío. ¡No olvides el espacio después del paréntesis de cierre!*/
const createPhoneNumbe = (number) =>{

if (number.length !== 10) {
    return "error en la cantidad de numeros ingresados"
}

const number2 = number.slice(0,11)

const number3 = number2.splice(0,0,"(")
const number4 = number2.splice(4,0,")")
const number5 = number2.splice(8,0,"-")

const str = number2.toString()
let resultadoFinal = number2.join("")
return resultadoFinal
}
createPhoneNumbe([3, 0, 0, 6, 3, 1, 0, 2, 5, 5])
