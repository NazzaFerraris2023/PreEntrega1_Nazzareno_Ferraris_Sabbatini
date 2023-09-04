// const lista_productos=[];
// let productos=parseFloat(prompt("Agregue el valor de su producto"))
// lista_productos.push(productos)
// console.log(lista_productos)

function hola_cliente() {
    let usuario = prompt("Hola, buenos dias, como es tu nombre?")
    alert("Buenos dias " + usuario)
}

function calculo_descuento(total,porcentaje){
    let descuento=total-(porcentaje*total)/100
    return descuento
}
function calculo_recargo(total,porcentaje){
    let recargo=total+(porcentaje*total)/100
    return recargo
}
let decision;
let eleccion_compra;
let monto_final;
let modo_pago;
let confirmacion

do{
    hola_cliente()
    let decision=alert("Elija el producto que desee del 1 al 7. En el caso de querer salir presione la tecla s")
    let eleccion_compra=prompt("Que producto te interesa?")
    let monto_final=parseFloat(prompt("Ingrese el precio de su producto:"))
    let confirmacion=prompt("Quieres algo mas?")
    let modo_pago=prompt("Como vas a pagar?\n1-Efectivo\n2-Debito\n3-Credito")

    if(eleccion_compra==1){
        alert("El producto seleccionado es Notebook Lenovo: $15.000")
    }else if(eleccion_compra==2){
        alert("El producto seleccionado es Playstation 5:$50.000")
    }else if(eleccion_compra==3){
        alert("El producto seleccionado es Playstation 4:$20.000")
    }else if(eleccion_compra==4){
        alert("El producto seleccionado es Macbook air:$30.000")
    }else if(eleccion_compra==5){
        alert("El producto seleccionado es Iphone 13 128gb:$100.000")
    }else if(eleccion_compra==6){
        alert("El producto seleccionado es Televisor Philips 24 pulgadas:$15.000")
    }else if(eleccion_compra==7){
        alert("El producto seleccionado es Notebook Dell:$15.000")
    }else if(decision<=7){
        alert("se repetira el cuestionario")
    }
    else if(decision == "s"){
        alert("Decidiste salir")
    }
    else{
        alert("Error")
    }
    switch(modo_pago){
        case "1":
            let descuento_efectivo=calculo_descuento(monto_final,30)
            alert("Te queda un monto final de $"+descuento_efectivo)
            break
        case"2":
            let descuento_debito=calculo_descuento(monto_final,15)
            alert("Te queda un monto final de $"+descuento_debito)
            break
        case"3":
            let recargo_credito=calculo_recargo(monto_final,20)
            alert("Te queda un monto final de $"+recargo_credito)
            break
        default:
            alert("error")
            break
    }
}while(eleccion_compra!="s")


