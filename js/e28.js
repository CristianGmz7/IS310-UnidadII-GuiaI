function inicialVocal (arreglo) {

    let a3 = [];
    let inicial;

    for(let i = 0; i < arreglo.length; i++){
        inicial = arreglo[i][0];

        switch(inicial){

            case 'a': a3.push(arreglo[i]); break;
            case 'e': a3.push(arreglo[i]); break;
            case 'i': a3.push(arreglo[i]); break;
            case 'o': a3.push(arreglo[i]); break;
            case 'u': a3.push(arreglo[i]); break;
            case 'A': a3.push(arreglo[i]); break;
            case 'E': a3.push(arreglo[i]); break;
            case 'I': a3.push(arreglo[i]); break;
            case 'O': a3.push(arreglo[i]); break;
            case 'U': a3.push(arreglo[i]); break;
            default: break;

        };

    };

    return a3;

};

let a1 = [];
let a2 = [];
let i = 0;
let palabra;

while(palabra !== 'NO'){

    palabra = prompt('Ingrese una palabra (Ingrese NO para dejar de ingresar palabras)');

    if(palabra !== 'NO'){
        a1[i] = palabra;
    }

    i++;
};

a2 = inicialVocal(a1);

console.log(a1);
console.log(a2);