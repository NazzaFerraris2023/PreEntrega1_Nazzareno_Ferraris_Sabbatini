//funcion de bienvenida
function hola_cliente() {
    let usuario = prompt("Hola, buenos dias, como es tu nombre?")
    alert("Buenos dias " + usuario)
}


function calcular_descuento(total, porcentaje) {
    let descuento = total - (porcentaje*total)/100
    return descuento
}

function calcular_recargo(total, porcentaje) {
    let recargo =total+(porcentaje*total)/100
    return recargo
}
let decision
let eleccion_compra
let monto_final
let modo_pago

do{
    hola_cliente();
    decision = alert("Elegi un numero del 1 al 7 para elegir un producto. Toca s para salir")
    eleccion_compra = prompt("Que producto te interesa?")
    let monto_final= parseFloat(prompt("Ingrese el monto total de su compra"))
    let modo_pago = prompt("Como vas a pagar?\n1-Efectivo\n2-Debito\n3-Credito")


    if (eleccion_compra == 1) {
        alert("El producto seleccionado es una Notebook Lenovo:$15.000")
    } else if (eleccion_compra == 2) {
        alert("El producto seleccionado es una Playstation 5:$50.000")
    } else if (eleccion_compra == 3) {
        alert("El producto seleccionado es una Playstation 4:$20.0000")
    } else if (eleccion_compra == 4) {
        alert("El producto seleccionado es una Macbook air:$30.000")
    } else if (eleccion_compra == 5) {
        alert("El producto seleccionado es un Iphone 13 128gb")
    } else if (eleccion_compra == 6) {
        alert("El producto seleccionado es un Televisor Philips 24 pulgadas:$15.000")
    } else if (eleccion_compra == 7) {
        alert("El producto seleccionado es una Notebook Dell:$15.000")
    } else if (decision <= 7) {
        alert("Se repetira el cuestionario")

    } else if (eleccion_compra == "s") {
        alert("Decidiste salir") 
    } else {
        alert("error")
    }
    switch(modo_pago){
    case"1":
        let descuento_efectivo=calcular_descuento(monto_final,30)
        alert("Te queda un monto final de $"+descuento_efectivo)
        break
    case"2":
        let descuento_debito=calcular_descuento(monto_final,15)
        alert("Te queda un monto final de $"+descuento_debito)
        break
    case"3":
        let recargo_credito=calcular_recargo(monto_final,20)
        alert("Te queda un monto final de $"+recargo_credito)
        break
    default:
        alert("error")
        break

    }
}while(eleccion_compra!="s")
