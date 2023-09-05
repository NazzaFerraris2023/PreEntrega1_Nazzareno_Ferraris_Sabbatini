
function hola_cliente() {
    let usuario = prompt("Hola, buenos días, ¿cómo es tu nombre?");
    alert("Buenos días, " + usuario + "!");
}

function suma_precios() {
    const productos = []; 

    while (true) {
        const valor = parseFloat(prompt("Ingrese el precio del producto:"));

        if (!isNaN(valor)) {
            productos.push(valor);
        } else {
            alert("Por favor, ingrese un precio válido.");
        }

        const continuar = prompt("¿Quieres ingresar otro producto? (Sí/No)").toLowerCase();

        if (continuar !== "si") {
            if (continuar === "no") {
                break; 
            } else {
                alert("Respuesta no válida. Por favor, responda con 'Sí' o 'No'.");
            }
        }
    }

    const suma = productos.reduce((a, b) => a + b, 0);
    return suma;
}

hola_cliente();

do {
    const resultado = suma_precios();
    alert(`La suma de los precios ingresados es: ${resultado}`);

    const eleccion_usuario = prompt("¿Quieres hacer algo más? (S/N)").toLowerCase();
    
    if (eleccion_usuario !== "s") {
        break; 
    }
} while (true);