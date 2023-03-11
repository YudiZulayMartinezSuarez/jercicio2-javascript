let nombre1 = prompt("didite el 1 nombre: ");
let edad1 = Number(prompt("digite la 1 edad:  "));

let nombre2 = prompt("didite el 2 nombre: ");
let edad2 = Number(prompt("digite la 2 edad:  "));

let nombre3 = prompt("didite el 3 nombre: ");
let edad3 = Number(prompt("digite la 3 edad:  "));

let maximo = Math.max(edad1, edad2, edad3);

if(maximo == edad1){
    alert("el mayor es: nombre1");
}

if(maximo == edad2){
    alert("el mayor es: nombre2");
}

if(maximo == edad3){
    alert("el mayor es: nombre3");
}