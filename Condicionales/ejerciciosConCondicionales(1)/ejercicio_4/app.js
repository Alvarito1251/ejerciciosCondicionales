var num1;
var num2;
var resultado;

num1 = window.prompt("Ingrese un numero");

num2 = window.prompt("Ingrese otro numero");

resultado = parseInt(num1) + parseInt(num2);

if (resultado%2 == 0 ){
    alert("La suma es par");
} else {
    alert("El numero es impar");
}
