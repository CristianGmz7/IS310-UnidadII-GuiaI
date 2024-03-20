let variable = new String(prompt('Ingrese un numero:'));
const numeros = '1 2 3 4 5 6 7 8 9 0'
//const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
let contador = 0;
//console.log(variable);

recibir(variable);

function recibir(vari) {

    for(let i = 0; i < vari.length; i++){

        //console.log(`Valor del string varible: ${vari[i]}`);
        for(let j = 0; j < 19; j++){
            
            //console.log(`Valor del string numeros: ${numeros[j]}`);
            if(vari[i] == numeros[j]){
                contador++;
            }

        }

    }

    return contador;

}


if(variable.length === contador){
    console.log('El valor ingresado es un numero');
    parseInt(variable);
}else{
    console.log('ERROR!!!\nEl valor ingresado NO es un numero');
}

//console.log(`Contador = ${contador}`);
console.log(`Variable: ${variable}`);
//console.log(`Tipo de variables: ${typeof(variable)}`);