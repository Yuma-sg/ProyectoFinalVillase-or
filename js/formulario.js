function jugarAdivinarNumero() {
    const numeroAleatorio = Math.floor(Math.random() * 100 + 1);

    let intentos = 0;
    let adivinado = false;

    while (adivinado === false) {

        const intento = parseInt(prompt("Intenta adivinar que número estoy pensando del 1 al 10"));
        intentos++;
        
        if (intento === numeroAleatorio) {
            alert("¡Si, me ganaste en solo " + intentos + " intentos!");
            adivinado = true;

            let juguemos = prompt("¿Jugamos?");
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