let texto;

texto = prompt("ingrese un texto");

if (texto.includes("a") == true || texto.includes("A")){
    alert("este texto contiene la letra");
} else {
    alert("no contiene la letra a");
}