// Primeiro Exercício

var total = 0;
var numeros = [12,6,9,42,11,102,44,15]

for (var i = 0; i < numeros.length; i++ ){
    total += numeros[i]
}
console.log(total)

///////////////////////////////////////////

// Segundo Exercício

for (let index = 0; index < 100; index++) {
    console.log(index)
    if (index / index || index / 1) {
        break
    }
}

for (let index = 0; index < 100; index++) {
    if (index >= 40 && index <= 50) {
        continue;
    }
    console.log(index);
}