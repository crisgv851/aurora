
// ELEMENTOS DE LA PÁGINA

const botonAbrir = document.getElementById("abrirCarta");
const portada = document.getElementById("portada");
const regalo = document.getElementById("regalo");
const sobre = document.getElementById("sobre");
const indicacion = document.getElementById("indicacion");
const contenidoCarta = document.getElementById("contenidoCarta");


// ABRIR EL REGALO

botonAbrir.addEventListener("click", function () {

    portada.classList.add("oculto");
    regalo.classList.remove("oculto");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ABRIR EL SOBRE

sobre.addEventListener("click", function () {

    // Evitar que la animación se repita
    if (sobre.classList.contains("abierto")) {
        return;
    }

    // Abrir la solapa
    sobre.classList.add("abierto");

    indicacion.textContent =
        "Un momento... tu sorpresa está llegando. ❤️";

    // Hacer que salga la carta
    setTimeout(function () {

        sobre.classList.add("carta-saliendo");

    }, 700);


    // Mostrar el contenido de la carta
    setTimeout(function () {

        contenidoCarta.classList.remove("oculto");

        indicacion.textContent =
            "Espero que disfrutes cada palabra. ❤️";

        // Desplazarse hasta el comienzo de la carta
        setTimeout(function () {

            contenidoCarta.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }, 300);

    }, 1500);

});


// ANIMACIÓN DE LOS TEXTOS AL DESPLAZARSE

const elementosRevelar = document.querySelectorAll(".revelar");

const observador = new IntersectionObserver(function (elementos) {

    elementos.forEach(function (elemento) {

        if (elemento.isIntersecting) {

            elemento.target.classList.add("visible");

            // Dejar de observar cuando ya apareció
            observador.unobserve(elemento.target);

        }

    });

}, {
    threshold: 0.15
});


// OBSERVAR CADA PÁRRAFO, IMAGEN Y CIERRE

elementosRevelar.forEach(function (elemento) {
    observador.observe(elemento);
});
