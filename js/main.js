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

function ingresarNotas() {
    let restaurantes = [];
    let continuar = true;

    while (continuar === true) {
        const nombre = prompt("Ingresa el nombre del restaurante");
        const nota = parseFloat(prompt("Ingresa la nota del restaurante"));

        if (isNaN(nota) || nota < 0 || nota > 100) {
            alert("Ingresa una nota válida entre 0 y 100.");
        } else {
            restaurantes.push({nombre: nombre, nota: nota});
        }

        const respuesta = prompt("¿Quieres agregar otro restaurante? Si/No").toLowerCase();
        if (respuesta === "si") {
            continuar = true;
        } else {
            continuar = false;
        }
    }

    return restaurantes;
}

// CALCULAR EL RESULTADO DE LOS RESTAURANTES

restaurantes = [
    {
        nombre: "Resta el Viktor",
        nota: 100
    },
    {
        nombre: "Tikal",
        nota: 50
    },
    {
        nombre: "El Almacen del Bife",
        nota: 80
    },
    {
        nombre: "La Tita",
        nota: 40
    },
    {
        nombre: "Carrera Moto",
        nota: 90
    },
]

// CALCULA EL PROMEDIO DE LOS RESTAURANTES

function calcularPromedio(restaurantes) {
    const suma = restaurantes.reduce((acc, restaurante) => acc + restaurante.nota, 0);
    const promedio = suma / restaurantes.length;
    return promedio;
}

// LOS MEJORES RESTAURANTES

function mejoresRestaurantes(restaurantes) {
    let mejorNota = restaurantes[0].nota;

    restaurantes.forEach(restaurante => {
        if (restaurante.nota > mejorNota) {
            mejorNota = restaurante.nota
        }
    });

    let mejores = restaurantes.filter((restaurante) => restaurante.nota === mejorNota);

    return mejores;
}

// LOS PEORES RESTAURANTES

function peoresRestaurantes(restaurantes) {
    let peorNota = restaurantes[0].nota;

    restaurantes.forEach(restaurante => {
        if (restaurante.nota < peorNota) {
            peorNota = restaurante.nota;
        }
    });

    let peores = restaurantes.filter((restaurante) => restaurante.nota === peorNota);

    return peores;
}

// APROVADOS Y REPROVADOS

function mostrarAprovadosYDesaprovados(restaurantes) {
    let aprovados = [];
    let reprovados = [];

    restaurantes.forEach((restaurante) => {
        if (restaurante.nota >= 60) {
            aprovados.push(restaurante);
        } else {
            reprovados.push(restaurante);
        }
    });

    console.log("***Restaurantes aprovados***");
    aprovados.forEach((restaurante) => {
        console.log(restaurante.nombre + " con nota de " + restaurante.nota);
    })
    
    console.log("***Restaurantes reprovados***");
    reprovados.forEach((restaurante) => {
        console.log(restaurante.nombre + " con nota de " + restaurante.nota);
    })
}

mostrarAprovadosYDesaprovados(restaurantes);