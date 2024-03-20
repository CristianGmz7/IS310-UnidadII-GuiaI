const array = [1, 2, 3, 4, 5, 6];
let array2 = [];
let i = 0, suma = 0;

console.log('iterar todos los elementos dentro del array usando while:\n');
while (i < array.length){
    console.log(array[i]);
    i++;
}

console.log('\niterar todos los elementos dentro del array usando for:\n');
for(i = 0; i < array.length; i++){
    console.log(array[i]);
}

i = 0; console.log('\niterar todos los elementos dentro del array usando forEach:\n');
array.forEach((item) => {
    console.log(item);
});

console.log('\nmostrar todos los elementos dentro del array sumandole uno a cada uno:\n');
array.forEach((item) => {
    console.log(`antes: ${item}\tdespues: ${item + 1}`);
})

console.log('\ngenerar una copia del array pero todos los elementos incrementados en 1:\n');
for(i = 0; i < array.length; i++){
    array2[i] = array[i] + 1;
}

array2.forEach((item) => {
    console.log(item);
});

console.log('\ncalcular promedio:\n');
array.forEach((item) => {
    suma += item;
});

suma /= array.length;

console.log(`El promedio es: ${suma.toFixed(4)}`);