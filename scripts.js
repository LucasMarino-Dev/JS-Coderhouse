let marcaSeleccionada;
let autoSeleccionado;
let precioTotal = 0;
let carrito = [];
const Audi = [
    {
        modelo: "a1",
        año: 2020,
        Kilometros: 40000,
        Transmisión: "Automatica",
        precio: 32000,
    },
    {
        modelo: "a5",
        año: 2012,
        Kilometros: 94000,
        Transmisión: "Manual",
        precio: 22000 
    },
    {
        modelo: "Q5",
        año: 2011,
        Kilometros: 123000,
        Transmisión: "Automatica",
        precio: 16000
    },
]

const Toyota = [
    {
        modelo: "SW4",
        año: 2011,
        Kilometros: 231000,
        Transmisión: "Automatica",
        precio: 24500
    },
    {
        modelo: "Corolla",
        año: 2017,
        Kilometros: 145000,
        Transmisión: "Automatica",
        precio: 15000
    },
    {
        modelo: "Hilux",
        año: 2022,
        Kilometros: 120000,
        Transmisión: "Manual",
        precio: 30000
    }
]

const BMW = [
    {
        modelo: "X6",
        año: 2013,
        Kilometros: 103400,
        Transmisión: "Automatica",
        precio: 50000
    },
    {
        modelo: "X3",
        año: 2020,
        Kilometros: 29000,
        Transmisión: "Automatica",
        precio: 160000
    },
    {
        modelo: "BMW335",
        año: 2013,
        Kilometros: 125000,
        Transmisión: "Automatica",
        precio: 39000
    }
]

const Ford = [
    {
        modelo: "fiesta",
        año: 2014,
        Kilometros: 266000,
        Transmisión: "Manual",
        precio: 7200
    },
    {
        modelo: "Ranger",
        año: 2012,
        Kilometros: 175000,
        Transmisión: "Manual",
        precio: 11000
    },
    {
        modelo: "f150",
        año: 2024,
        Kilometros: 0,
        Transmisión: "Automatica",
        precio: 110000 
    }
]

const seleccionarMarca = () => {
    let catalogo = prompt ('Bienvenido/a. Elija que marca quiere ver (Audi, Toyota, BMW, Ford) o escriba \n "cancelar" para salir ')
    let catalogoMinuscula = catalogo.toLowerCase()

    if (catalogoMinuscula == "audi"){
        console.table(Audi),
        marcaSeleccionada = Audi
        seleccionarAuto()
    } else if (catalogoMinuscula == "toyota") {
        console.table(Toyota)
        marcaSeleccionada = Toyota
        seleccionarAuto()
    } else if (catalogoMinuscula == "bmw") {
        console.table(BMW)
        marcaSeleccionada = BMW
        seleccionarAuto()
    } else if (catalogoMinuscula == "ford") {
        console.table (Ford)
        marcaSeleccionada = Ford
        seleccionarAuto()
    } else if (catalogoMinuscula == "cancelar"){
        alert ("Adios, gracias por consultar con nosotros.")
    } else {
        alert("No tenemos la marca " + catalogo + " en nuestro local \n Vuelva a intentar."),
        seleccionarMarca()
    }
}

let seleccionarAuto = () => {
    let seleccion = parseInt(prompt("Elija un auto para inspeccionar (1 - 3) \n o elija 4 para elegir marca otra vez"))
    
    if (seleccion >= 1 && seleccion <= 3) {
        autoSeleccionado = marcaSeleccionada [seleccion - 1]
        console.log (autoSeleccionado)
        agregarAlCarrito()
    } else if (seleccion === 4){
        seleccionarMarca()
    } else {
        alert("La opción seleccionada es incorrecta \n Vuelva a intentar."),
        seleccionarAuto()
    }
    }


const agregarAlCarrito = () => {
        let comprar = prompt ("Desea agregar el modelo " + autoSeleccionado.modelo + " al carrito \n (si/no)").toLowerCase()
    
    if (comprar === "si"){
        carrito.push(autoSeleccionado)
        precioTotal = precioTotal + autoSeleccionado.precio
        console.table (carrito)
        seguirComprando()
    } else if (comprar === "no"){
        console.log ("No se agregó ningun objeto al carrito."),
        console.log (carrito),
        seleccionarMarca()
    } else {
        alert ("Opción invalida, vuelta a intentar."),
        agregarAlCarrito()
    }
    }

    const seguirComprando = () => {
        let seguirComprando = prompt("¿Desea seguir comprando? (si/no)").toLowerCase()
    
        if (seguirComprando == "si"){
            seleccionarMarca()
        } else if (seguirComprando == "no"){
            console.log (" Gracias por comprar con nosotros, este es su resumen: "),
            console.table (carrito),
            console.log (" Precio total: " + precioTotal)
        }
    }

seleccionarMarca()