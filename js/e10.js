const ang1 = parseFloat(prompt('Ingrese el primer angulo: '));
const ang2 = parseFloat(prompt('Ingrese el segundo angulo: '));
const ang3 = parseFloat(prompt('Ingrese el tercer angulo: '));

if((ang1 + ang2 + ang3 === 180) && (ang1 !== 0 && ang2 !== 0 && ang3 !== 0)){
    console.log('El triangulo es valido');
}else{
    console.log('El triangulo NO es valido');
}

console.log(` ${ang1}\n+${ang2}\n+${ang3}\n=${ang1+ang2+ang3}`);