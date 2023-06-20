/*
Contador de existencias
Dado un array de nombres, tu objetivo es crear una función que cuente cuántas veces
se repite cada nombre y los represente con asteriscos (*).
Debes implementar la función countNameRepetitions(names), que tomará como
parámetro un array de nombres y devolverá un objeto con los nombres y su
representación de aster*iscos correspondiente.
Ejemplo:
const nombres = ['Juan', 'María', 'Pedro', 'Juan', 'María', 'María'];
Llamada a la función
const resultado = countNameRepetitions(nombres);
Resultado esperado
Juan: '**',
María: '***',
Pedro: '*'
En el ejemplo anterior, se tiene un array de nombres donde 'Juan' se repite dos veces,
'María' se repite tres veces y 'Pedro' se repite una vez.
La función countNameRepetitions debe imprimir los nombres y su representación de
asteriscos correspondiente.
Recuerda que cada vez que un nombre se repite, se debe agregar un asterisco
adicional al valor asociado al nombre en el objeto de resultado.*/

const countNameRepetitions = (names) => {
  const objeto = {};
  for (let i = 0; i < names.length; i++) {
    const element = names[i];

    if (objeto[element]) {
      objeto[element] += "*";
    } else {
      objeto[element] = "*";
    }
  }
  return objeto;
};


const resultado = countNameRepetitions([
    "Mario",
    "Sebastian",
    "Daniel",
    "Mariana",
    "Sebastian",
    "Mario",
    "Mario",
  ]);

