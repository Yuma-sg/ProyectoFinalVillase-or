/*********************
// Primera Entrega "juego de numeros al azar"
/********************* */

/*function jugarNumerología() {
    const numeroAleatorio = Math.floor(Math.random() * 100 + 1);

    let intentos = 0;
    let adivinado = false;

    while (adivinado === false) {

        const intento = parseInt(prompt("Adivina que número estoy pensando del 1 al 10."));
        intentos++;
        
        if (intento === numeroAleatorio) {
            alert("¡Si, el número era " + numeroAleatorio + ". Me ganaste en solo " + intentos + " intentos!");
            adivinado = true;

            let juguemos = confirm("¿Jugamos?");
            if (juguemos === true) {
                jugarAdivinarNumero();
            } else {
                alert ("Gracias por jugar conmigo");
            }

        } else if (intento < numeroAleatorio) {
            alert("Fallaste mi chavo, es mas, inténtalo otra vez.");
        } else if (intento > numeroAleatorio) {
            alert("Te pasaste, es menos, siguelo intentando.");
        } else {
            alert("Eso no es válido, intenta con números por favor.");
        }
    }   
}

jugarNumerología();*/

/*********************
// Segunda Entrega "Restaurantes aprovados o reprovados"
/********************* */

//function ingresarNotas() {
  //  let restaurantes = [];
    //let continuar = true;

    //while (continuar === true) {
      //  const nombre = prompt("Ingresa el nombre del restaurante");
        //const nota = parseFloat(prompt("Ingresa la nota del restaurante"));

        //if (isNaN(nota) || nota < 0 || nota > 100) {
          //  alert("Ingresa una nota válida entre 0 y 100.");
        //} else {
          //  restaurantes.push({nombre: nombre, nota: nota});
        //}

        //const respuesta = prompt("¿Quieres agregar otro restaurante? Si/No").toLowerCase();
        //if (respuesta === "si") {
          //  continuar = true;
        //} else {
          //  continuar = false;
        //}
    //}

    //return restaurantes;
//}

// CALCULAR EL RESULTADO DE LOS RESTAURANTES

//restaurantes = [
  //  {
    //    nombre: "Resta el Viktor",
      //  nota: 100
    //},
    //{
      //  nombre: "Tikal",
        //nota: 50
    //},
    //{
      //  nombre: "El Almacen del Bife",
        //nota: 80
    //},
    //{
      //  nombre: "La Tita",
        //nota: 40
    //},
    //{
      //  nombre: "Carrera Moto",
        //nota: 90
    //},
//]

// CALCULA EL PROMEDIO DE LOS RESTAURANTES

//function calcularPromedio(restaurantes) {
  //  const suma = restaurantes.reduce((acc, restaurante) => acc + restaurante.nota, 0);
    //const promedio = suma / restaurantes.length;
    //return promedio;
//}

// LOS MEJORES RESTAURANTES

//function mejoresRestaurantes(restaurantes) {
  //  let mejorNota = restaurantes[0].nota;

    //restaurantes.forEach(restaurante => {
      //  if (restaurante.nota > mejorNota) {
        //    mejorNota = restaurante.nota
        //}
    //});

    //let mejores = restaurantes.filter((restaurante) => restaurante.nota === mejorNota);

    //return mejores;
//}

// LOS PEORES RESTAURANTES

//function peoresRestaurantes(restaurantes) {
  //  let peorNota = restaurantes[0].nota;

    //restaurantes.forEach(restaurante => {
      //  if (restaurante.nota < peorNota) {
        //    peorNota = restaurante.nota;
        //}
    //});

    //let peores = restaurantes.filter((restaurante) => restaurante.nota === peorNota);

    //return peores;
//}

// APROVADOS Y REPROVADOS

//function mostrarAprovadosYDesaprovados(restaurantes) {
  //  let aprovados = [];
    //let reprovados = [];

    //restaurantes.forEach((restaurante) => {
      //  if (restaurante.nota >= 60) {
        //    aprovados.push(restaurante);
        //} else {
          //  reprovados.push(restaurante);
        //}
    //});

    //console.log("***Restaurantes aprovados***");
    //aprovados.forEach((restaurante) => {
      //  console.log(restaurante.nombre + " con nota de " + restaurante.nota);
    //})
    
    //console.log("***Restaurantes reprovados***");
    //reprovados.forEach((restaurante) => {
      //  console.log(restaurante.nombre + " con nota de " + restaurante.nota);
    //})
//}

//mostrarAprovadosYDesaprovados(restaurantes);

/*let carrito = [];*/
//**********AQUI INICIA PREENTREGA3VILLASEÑOR DEL CURSO DE JS PARA SECCION DE CARRITO DE LOS CUCHILLOS GASTRONOMICOS VILCHES ***************//

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const productos = [
    {
        id: "abrigo-a",
        titulo: "Cuchillo A",
        precio: 2000,
        img: "./img/cuchillo-a.jpg",
    },
    {
        id: "abrigo-b",
        titulo: "Cuchillo B",
        precio: 4000,
        img: "./img/cuchillo-b.jpg",
    },
    {
        id: "abrigo-c",
        titulo: "Cuchillo C",
        precio: 6000,
        img: "./img/cuchillo-c.jpg",
    }
];

const contenedorProductos = document.querySelector("#productos");
const carritoVacio = document.querySelector("#carrito-vacio");
const carritoComprado = document.querySelector("#carrito-comprado");
const carritoProductos = document.querySelector("#carrito-productos");
const carritoTotal = document.querySelector("#carrito.total");

/******ESTO SOLO ES REFERENCIA DEL HTML QUE SE PASO A JS*****/
/* 
            <div class="producto">
                <img class="producto-img" src="./img/cuchillo-a.jpg" alt="">
                <h3>Cuchillo A</h3>
                <p>$2000</p>
                <button class="producto-btn">Agregar al carrito</button>
            </div>
*/

productos.forEach((producto) => {
    let div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
        <img class="producto-img" src=${producto.img}>
        <h3>${producto.titulo}</h3>
        <p>${producto.precio}</p>
    `;

    let button = document.createElement("button");
    button.classList.add("producto-btn");
    button.innerText = "Agregar al carrito";
    button.addEventListener("click", () => {
        agregarAlCarrito(producto);
    })

    div.append(button);

    contenedorProductos.append(div);
});

function actualizarCarrito() {
    if (carrito.length === 0) {
        carritoVacio.classList.remove("d-none");
        carritoProductos.classList.add("d-none");
    } else {
        carritoVacio.classList.add("d-none");
        carritoProductos.classList.remove("d-none");

        carritoProductos.innerHTML = "";
        carrito.forEach((producto) => {
            let div = document.createElement("div");
            div.classList.add("carrito-producto");
            div.innerHTML = `
                <h3>${producto.titulo}</h3>
                <p>${producto.precio}</p>
                <p>Cant: ${producto.cantidad}</p>
                <p>Subt: $${producto.precio * producto.cantidad}</p>
            `;

            let button = document.createElement("button");
            button.classList.add("carrito-producto-btn");
            button.innerText = "✖️";
            button.addEventListener("click", () => {
                borrarDelCarrito(producto);
            });

            div.append(button);
            carritoProductos.append(div);
        });
    }
    actualizarTotal();
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

/******ESTO SOLO ES REFERENCIA DEL HTML QUE SE PASO A JS*****/
/* 
    <div class="carrito-producto">
        <h3>Cuchillo A</h3>
        <p>$2000</p>
        <button class="carrito-producto-btn">✖️</button>
    </div> 
*/

function agregarAlCarrito(producto) {
    let itemEncontrado = carrito.find((item) => item.id === producto.id);

    if (itemEncontrado) {
        itemEncontrado.cantidad++;
    } else {
        carrito.push({...producto, cantidad: 1});
    }

    actualizarCarrito();
}

function borrarDelCarrito(producto) {
        let indice = carrito.findIndex((item) => item.id === producto.id);
        carrito.splice(indice, 1);

        actualizarCarrito();
}

function actualizarTotal() {
    let total = carrito.reduce((acc, prod) => acc + (prod.precio * prod.cantidad), 0);
    carritoTotal.innerText = `$${total}`;
}

actualizarCarrito();