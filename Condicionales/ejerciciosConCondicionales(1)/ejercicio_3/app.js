let sabores;
let coberturaChocolate;
sabores = prompt('Ingrese sus sabores de helado');
coberturaChocolate = prompt('¿Quiere cobertura de chocolate?');
if(coberturaChocolate === "Si" || coberturaChocolate=="si"){
    alert('Su helado sabor ' + sabores + " " + 'con cobertura de chocolate cuesta $180');
}else{
    alert('Su helado sabor ' + sabores + " " + 'cuesta $150');
}