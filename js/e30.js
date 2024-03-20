function encontrarMenor (arreglo) {
    return Math.min(... arreglo)
}

let a1 = [];
let resp = 'SI';
let i = 0;

while( resp !== 'NO') {

    a1[i] = parseInt(prompt('Ingrese un numero: '))
    i++;

    resp = prompt('Ingrese "NO" si desea de ingresar elementos: ');
}

console.log(`El arreglo es: ${a1}`);

menor = encontrarMenor(a1);

console.log(`El numero menor es: ${menor}`);
if(menor < 0){
    console.log(`Su valor absoluto es: ${menor *= -1}`);
};