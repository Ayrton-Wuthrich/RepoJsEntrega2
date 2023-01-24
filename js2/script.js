// DATOS DE LA PERSONA

let nombreCompleto = ""
nombreCompleto = prompt("Ingrese su nombre completo")

while (nombreCompleto == ""){
    alert("Ingrese un nombre valido")
    nombreCompleto = prompt("Ingrese su nombre completo")
}
let titulo = document.getElementById("titulo")
titulo.innerHTML = "Bienvenido/a "+nombreCompleto+" a nuestra pagina de compra y ventas de bicicletas."
console.log ("El cliente "+nombreCompleto+" acaba de ingresar.")




//VENTA DE BICICLETAS

const venta = document.getElementById("venta")
venta.innerHTML = "VENTA DE BICICLETAS"

let compraVenta = ""
compraVenta= prompt("Si usted quiere vender su bicicleta ingrese VENDER, y si usted quiere comprar una bicicleta por favor ingrese COMPRAR. Si quiere solamente ingresar al sitio, no hace falta ingresar nada. GRACIAS.").toUpperCase()



let total = 0
let cantidad_bicicletas = ""

if(compraVenta == "VENDER"){
    cantidad_bicicletas = Number(prompt("¿Cuantas bicicletas quiero vender? ESC para salir cuando desee"))
    for (let documento = 1; documento<= cantidad_bicicletas; documento++){
        if(cantidad_bicicletas=="ESC".toUpperCase()) {
            break
            }
        let marcaBicicleta = ""
        marcaBicicleta = prompt("Ingrese la marca de la bicicleta")
        if(marcaBicicleta=="ESC".toUpperCase()) {
            break
            }
        let monto = ""
        monto = Number(prompt("Ingrese el valor de su bicicleta"))
        if(monto=="ESC".toUpperCase()) {
            break
            }
        let totalIndividual = 0
        let envio = 500
        totalIndividual = totalIndividual + monto + envio
        total = total + totalIndividual

        let costoBici = document.getElementById("costoBici")
        costoBici.innerHTML = `El total de todas las ventas es de ${total} con envio incluido en el precio total.`

        console.log(`Bicicleta ${documento} marca ${marcaBicicleta} con un valor de ${monto}. El total de la bicicleta es de ${totalIndividual} con envio.`)
        
    }
    console.log(`El total de todas las ventas es de ${total}.`)
}




//COMPRA DE BICICLETAS

const compra = document.getElementById("compra")
compra.innerHTML = "COMPRA DE BICICLETAS"



if(compraVenta == "COMPRAR"){
    let marca = ""
    marca = prompt("Ingrese la marca de la bicicleta")
    let color = ""
    color = prompt("Color de la bicicleta a gusto")
    let rodado = ""
    rodado = Number(prompt("Ingrese el rodado que usted quiera"))
    let precio = ""
    precio = Number(prompt("Ingrese el valor deseado a gastar"))
}

class Bicicleta{
    constructor(marcaBicicleta, colorBicicleta, rodadoBicicleta, precioBicicleta){
        this.marcaBicicleta = marcaBicicleta;
        this.colorBicicleta = colorBicicleta;
        this.rodadoBicicleta = rodadoBicicleta;
        this.precioBicicleta = precioBicicleta;
    }
    sumaIva(){
        this.precioBicicleta = this.precioBicicleta * 1.21
    }
}

const bicicletas = [];
bicicletas.push(new Bicicleta("vairo", "rojo", "29", "66000"))
bicicletas.push(new Bicicleta("vairo", "azul", "26", "45000"));
bicicletas.push(new Bicicleta("raleigh", "negro", "26", "48000"));
bicicletas.push(new Bicicleta("firebird", "negro", "29", "60000"));
bicicletas.push(new Bicicleta("moove", "azul", "29", "62000"));
bicicletas.push(new Bicicleta("vairo", "blanco", "29", "66000"));
bicicletas.push(new Bicicleta("moove", "negro", "26", "37000"));
bicicletas.push(new Bicicleta("raleigh", "rojo", "29", "72000"));
bicicletas.push(new Bicicleta("slp", "naranja", "29", "67000"));
bicicletas.push(new Bicicleta("vairo", "rosa", "26", "45000"));
bicicletas.push(new Bicicleta("raleigh", "negro", "29", "72000"));
bicicletas.push(new Bicicleta("colner", "verde", "29", "85000"));
bicicletas.push(new Bicicleta("colner", "negro", "29", "85000"));
bicicletas.push(new Bicicleta("scott", "celeste", "26", "40000"));
bicicletas.push(new Bicicleta("trek", "amarillo", "29", "82000"));


const bici29 = bicicletas.find((bicicompleta)=>bicicompleta.rodadoBicicleta === "29")
console.log(bici29)
const marcaVairo = bicicletas.filter((marca)=> marca.marcaBicicleta.includes("vairo"))
console.log (marcaVairo)
const colores = bicicletas.map((color)=>color.colorBicicleta)
console.log(colores)




for (const Bicicleta of bicicletas)
    Bicicleta.sumaIva();

function recibir(){
    let marcaBici = document.getElementById("marcaBici").value;
    let colorBici = document.getElementById("colorBici").value;
    let rodadoBici = document.getElementById("rodadoBici").value;
    rodadoBici = parseInt(rodadoBici)
    let precioBici = document.getElementById("precioBici").value;
    precioBici = parseInt(precioBici)
    document.write("La marca es: "+ marcaBici + "<br> El color elegido es: "+colorBici + "<br> El rodado ingresado es: "+ rodadoBici+ "<br> El precio ingresado es: " + precioBici);
}