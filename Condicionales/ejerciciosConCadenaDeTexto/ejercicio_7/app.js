var texto;

texto = prompt("ingrese un texto");

function valorAsteriscos( texto )
{
texto.value = texto.value.replace(/./g,"*");
}
alert(texto);