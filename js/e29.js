function calcularPromedio (arreglo) {

    let promedio = 0;
    let suma = 0;

    if(arreglo.length !== 0){

        for (let i = 0; i < arreglo.length; i++) {
            suma += arreglo[i];
        }

        promedio = suma / arreglo.length;

    }
    
    return promedio;

}

let a1 = [];
let resp = 'SI';
let i = 0;
let elemento;

while (resp !== 'NO') {
    

    elemento = prompt('Ingrese un numero:')

    if(elemento !== ''){
        a1.push(parseInt(elemento));
        i++;
    }

    resp = prompt('Ingrese NO si desea de dejar de agregar elementos');
}

if(calcularPromedio(a1) !== 0){
    console.log(`Arreglo ingresado: ${a1}`);
    console.log(`El promedio es ${calcularPromedio(a1).toFixed(4)}`);
} else {
    console.log(0);
}