let n = parseInt(prompt('Ingrese un numero (n): '));
let m = parseInt(prompt('Ingrese un numero mayor al anterior (m): '));
let i = n, suma = 0;

while(m <= n){
    m = parseInt(prompt('Ingrese un numero mayor al anterior (m): '));
}

while(i <= m){

    if(i % 2 === 0){
        suma += i;
    }

    i++;

}

console.log(`Suma de numeros pares entre ${n} y ${m} es igual a ${suma}`);