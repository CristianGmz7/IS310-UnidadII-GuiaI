let num = parseInt(prompt('Ingrese un numero: '));
let num1 = num;

let divisores = [];
let divisor;

divisores.push(1);
for(let i = 2; i <= num; i++){

    if(num % i === 0){

        divisor = i;
        divisores.push(divisor);   

    }

}

console.log(`Los divisores del numero ${num} son los siguientes`);
for (let i = 0; i < divisores.length; i++) {
    console.log(`${divisores[i]}`);
}