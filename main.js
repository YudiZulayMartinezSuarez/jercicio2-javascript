let numero = prompt("digite un numero: ");

let resultado = ImparPar(numero);
alert("el numero "+numero+ " es " +resultado);

function ImparPar(numero){
    if(numero % 2 == 0){
        return "Par";
    }else {
        return "Impar";
    }
}