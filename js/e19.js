let num = parseInt(prompt('Ingrese un numero: '));
let num1 = num, suma = 0;

let divisores = [];
let divisor;

divisores.push(1);
for(let i = 2; i <= num1; i++){

    if((num % i === 0)){

        divisor = i;
        divisores.push(divisor);

    }

}

for (let i = 0; i < (divisores.length - 1); i++) {
    suma += divisores[i];
}

if(suma === num){
    console.log(`El numero ${num} es un numero perfecto`);
}else{
    console.log(`El numero ${num} NO es un numero perfecto`);
}

for(let i = 0; i < (divisores.length - 1); i++){
    console.log(` + ${divisores[i]}`);
}

console.log(` = ${suma}`);