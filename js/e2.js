const num1 = parseInt(prompt('Ingrese el primer numero: '));
const num2 = parseInt(prompt('Ingrese el segundo numero: '));
const num3 = parseInt(prompt('Ingrese el tercer numero: '));

if(num1 > num2 && num1 > num3){
    console.log(`${num1} es el numero mayor: num1`);
} else {
    if(num2 > num1 && num2 > num3){
        console.log(`${num2} es el numero mayor: num2`);
    } else { 
        if(num3 > num1 && num3 > num2){
            console.log(`${num3} es el numero mayor: num3`);
        }
        else{
            console.log(`${num1} es el mismo numero`);
        }
    }
}