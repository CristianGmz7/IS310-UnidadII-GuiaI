console.log('Ingrese 1. Para mostrar los numeros desde 1 hasta n de 1 en 1');
console.log('Ingrese 2. Para mostrar los numeros desde 1 hasta n de 2 en 2');
console.log('Ingrese 3. Para mostrar los numeros desde n hasta 1 de 2 en 2');
console.log('Ingrese 4. Para mostrar la tabla de multiplicacion de un numero hasta 12');
console.log('Ingrese 5. Para mostrar la suma de numeros pares entre n y m');
let n = 0, i = 0, m = 0, suma = 0;

let opc = parseInt(prompt('Ingrese su opcion (leer consola para ver opciones)'))

console.log('\n\n');
switch(opc){

    case 1:

        n = parseInt(prompt('Ingrese un numero:'));

        for(i = 1; i <= n; i++){
            console.log(i);
        }

    break;

    case 2:

        n = parseInt(prompt('Ingrese un numero:'));

        for(i = 1; i <= n; i+=2){
            console.log(i);
        }

    break;

    case 3:

        n = parseInt(prompt('Ingrese un numero:'));

        for(n; n >= 1; n--){
            console.log(n);
        }

    break;

    case 4:

        n = parseInt(prompt('Ingrese un numero:'));

        for(i = 1; i <= 12; i++){
            console.log(`${n} * ${i} = ${n * i}`);
        }

    break;

    case 5:

        n = parseInt(prompt('Ingrese un numero (n): '));
        m = parseInt(prompt('Ingrese un numero mayor al anterior (m): '));

        while(m <= n){
            m = parseInt(prompt('Ingrese un numero mayor al anterior (m): '));
        }

        for(i = n; i <= m; i++){
            
            if(i % 2 === 0){
                suma += i;
            }

        }

        console.log(`Suma de numeros pares entre ${n} y ${m} es igual a ${suma}`);

    break;

    default:
        console.log('Opcion ingresada no valida');
    break;
}