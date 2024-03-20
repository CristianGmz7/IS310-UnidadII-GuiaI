function obtenerNumerosPares(arreglo) {

    return arreglo.reduce((acumulador, numero) => {

        if (numero % 2 === 0) {
            acumulador.push(numero);
        }

        return acumulador;
        
    }, []);         //acumulador tendra el tipo de dato de un arreglo
}

let a1 = [];
let a2 = [];
let resp = 'SI'
let i = 0;

while (resp !== 'NO') {
    
    a1[i] = parseInt(prompt('Ingrese un numero: '))

    resp = prompt('Ingrese NO si desea de dejar de agregar elementos');
    i++;
}

a2 = obtenerNumerosPares(a1);

for (let i = 0; i < a2.length; i++) {
    console.log(a2[i]);
} 