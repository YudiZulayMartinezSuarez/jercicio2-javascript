let nombre = prompt("nombre: ");

let nota1 = parseFloat(prompt("nota1: "));
let nota2 = parseFloat(prompt("nota2: "));
let nota3 = parseFloat(prompt("nota3: "));

let maximo = (nota1 +nota2 +nota3)/3;

if (maximo>=3.9){
    console.log("su nota es : " +maximo+ " becado");
}else{
    console.log("su nota es : " +maximo+ " estudie ");
}