let aleatorio = Math.floor(Math.random() * (11 - 1) + 1);

let numero = -1;

while(numero !== aleatorio){
    numero = parseInt(prompt('Ingrese el numero'));

    if(numero !== aleatorio){
        console.log('Vuelva a intentarlo');
    }
}

console.log('Buen trabajo');
console.log(`El numero aleatorio era ${aleatorio}`);