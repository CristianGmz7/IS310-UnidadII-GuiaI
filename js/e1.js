const num1 = parseInt(prompt('Ingrese el primer numero: '));
const num2 = parseInt(prompt('Ingrese el segundo numero: '));

if(num1 < num2) {
    console.log(`num2 ( ${num2} ) es mayor que num1 ( ${num1} )`);
}else{
    if(num2 < num1){
        console.log(`num1 ( ${num1} ) es mayor que num2 ( ${num2} )`);
    }
    else{
        console.log(`num1 ( ${num1} ) es igual que num2 ( ${num2} )`);
    }
}