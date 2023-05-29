function texto(num){
    let str = num.toStirng();
    let alReves = str.split("").reverse().join("");
    return str === alReves
}

function next_pal(numero){
    for (let i = numero + 1; ; i++) {
        
        if (texto(i)) {
            return i
        }
    }
}