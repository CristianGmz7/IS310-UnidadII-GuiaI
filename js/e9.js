const frase = new String(prompt('Ingrese una palabra / frase:'));
let numero = true;

for(let i = 0; i <= 0; i++){

    switch(frase[i]){
        case '0':
        break;

        case '1':
        break;

        case '2':
        break;

        case '3':
        break;

        case '4':
        break;

        case '5':
        break;

        case '6':
        break;

        case '7':
        break;

        case '8':
        break;

        case '9':
        break;

        default:
            numero = false;
        break;
    }

}

console.log(frase);
if(numero){
    console.log('Inicia con un numero');
}else{
    console.log('Inicia con una letra');
}