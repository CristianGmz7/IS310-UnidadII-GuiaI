const frase = new String(prompt('Ingrese una palabra / frase:'));
let contador1 = 0;
let contador2 = 0;
let contador3 = 0;
let contador4 = 0;
let contador5 = 0;

for (let i = 0; i < frase.length; i++) {
    
    switch(frase[i]){
        case 'a':
            contador1++;
        break;

        case 'e':
            contador2++;
        break;

        case 'i':
            contador3++;
        break;

        case 'o':
            contador4++;
        break;

        case 'u':
            contador5++;
        break;

        default:
        break;
    }

}

console.log(frase);
console.log(`La vocal 'a' aparece: ${contador1} veces`);
console.log(`La vocal 'e' aparece: ${contador2} veces`);
console.log(`La vocal 'i' aparece: ${contador3} veces`);
console.log(`La vocal 'o' aparece: ${contador4} veces`);
console.log(`La vocal 'u' aparece: ${contador5} veces`);