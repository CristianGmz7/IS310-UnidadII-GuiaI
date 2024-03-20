const palabra = new String(prompt('Ingrese una palabra:'));
const primerLetra = palabra.charAt(0);
let mayuscula = true;

console.log(palabra);

for(let i = 0; i <= 0; i++){

    if(primerLetra !== palabra[0].toUpperCase()){
        mayuscula = false;
    }

}

if(mayuscula){
    console.log('La palabra inicia con mayuscula');
}else{
    console.log('La palabra no inicia con mayuscula');
}