function invertirNumeros(arreglo) {
    
    let a2 = [];

    for (let i = 0; i < arreglo.length; i++) {
        
        a2.push(arreglo[(arreglo.length - i - 1)])

    }

    return a2
}

let a1 = [];
let invertido;
let resp = 'SI';
let i = 0;
let elemento = 0;

while( resp !== 'NO') {

    elemento = prompt('Ingrese un numero:')

    if(elemento !== ''){
        a1.push(parseInt(elemento));
        i++;
    }

    resp = prompt('Ingrese "NO" si desea de ingresar elementos: ');
}

console.log(`Arreglo ingresado: ${a1}`);
invertido = invertirNumeros(a1);
console.log(`Arreglo invertido: ${invertido}`);