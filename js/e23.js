let a = [];
let aleatorio = 0;

for(let i = 0; i < 20; i++){

    aleatorio = Math.floor(Math.random() * (20 - 1));

    a[i] = aleatorio;

}

for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
}