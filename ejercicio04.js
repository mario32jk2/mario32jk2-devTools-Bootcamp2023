const fizzBuzz = (num) => {
    const resultado = []
for (let i = 1; i <= num; i++) {
    
    if(i % 3 === 0 && i % 5 === 0){
        resultado.push( "fizzBuzz")
    }else if(i % 5 === 0){
        resultado.push("Buzz")
    }else if(i % 3 === 0 ){
        resultado.push("Fizz")
    }else{
        resultado.push(i) 
    }
    
}
return resultado
}


console.log(fizzBuzz(16))