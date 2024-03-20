let texto = prompt('Ingrese palabras separadas por coma (procure colocar una coma "," al final del texto)');
let a = [];
let palabra, reiniciar = false;
pos1 = 0;
posComa = 0;


for(let i = 0; i < texto.length; i++){

    if(texto[i] === ','){
        posComa = i;
        palabra = texto.substring(pos1, (posComa));
        a.push(palabra);
        pos1 = posComa + 1;
    }

}

for (let i = 0; i < a.length; i++) {
     console.log(`${a[i]}, `);
 }