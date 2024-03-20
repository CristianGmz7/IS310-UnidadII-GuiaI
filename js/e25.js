let a = ['azul', 'amarillo', 'rojo', 'verde', 'cafe', 'rosa'];
let existe = false;
const color1 = prompt('Ingrese un color')

a.forEach(color2 => {
    
    if(color2 === color1){
        existe = true;
    }

});

if(existe){
    console.log(`El color ${color1} existe en el arreglo`);
} else {
    console.log(`El color ${color1} NO existe en el arreglo`);
}