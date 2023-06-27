function drawX(tamano) {
  // Verificar que el tamaño sea válido
  if (tamano % 2 === 0) {
    console.log("El tamaño debe ser un número impar");
    return;
  }
  
  // Dibujar la X
  for (let i = 0; i < tamano; i++) {
    let linea = "";
    
    for (let a = 0; a < tamano; a++) {
      if (a === i || a === tamano - 1 - i) {
        linea += "*";
      } else {
        linea += " ";
      }
    }
    
    console.log(linea);
  }
}

// Ejemplo de uso
drawX(5);