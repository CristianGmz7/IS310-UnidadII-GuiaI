const frase = new String(prompt('Ingrese una palabra / frase:'));
let contador = 0;

console.log(frase);

for (let i = 0; i < frase.length; i++) {
    
    if(frase[i] == 'a'){
        contador++;
    }

}

console.log(`La letra 'a' aparece ${contador} veces en la frase: "${frase}"`);