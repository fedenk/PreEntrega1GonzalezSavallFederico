const descuento = x => x * 0.85;


let precio = parseInt(prompt("Ingrese precio de producto (0 para finalizar)"));

while(precio != 0){
    if(precio >= 10000){
        let nvoPrecio = descuento(precio);
        alert(`El precio del producto es ${nvoPrecio}`);
    }else{
        alert(`El precio del producto es ${precio}`);
    }
    precio = parseInt(prompt("Ingrese precio de producto (0 para finalizar)"));
}