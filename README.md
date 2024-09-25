Aqui mismo agregaré todas las entregas del curso JavaScript.
Se irá comentando las entregas pasadas y se dejara la entrega actual funcionando.

HTML actual:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aprovados y Reprovados</title>
    <link rel="shortcut icon" href="./img/favicon-vv.png" type="image/x-icon">
    <link rel="stylesheet" href="./estilos/styles.css">
</head>

<body>
    <!--Solo veremos como seleccionar restaurantes aprovados y reprovados para complementar el proyecto de Desarrollo Web de "consultoria gastronómica"-->

    <h1 id="titulo" class="verde principal">Restaurantes <em>aprovados y reprovados</em></h1>
    <p class="parrafo">Que la suerte este <strong>siempre</strong> de su lado</p>
    

    <section id="seccion">

    </section>

    <script src="./js/main.js"></script>
</body>

</html>

CSS actual: No hay aun

JavaScript actual: 

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
