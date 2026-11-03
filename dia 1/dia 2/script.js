// ======================================
// PROYECTO AURORA
// ======================================


// 1. CREAR ESTRELLAS DEL FONDO

const fondoEstrellas = document.getElementById("estrellasFondo");

if (fondoEstrellas) {
    for (let i = 0; i < 110; i++) {
        const estrella = document.createElement("span");

        estrella.className = "estrella-fondo";

        const tamano = Math.random() * 2.5 + 1;

        estrella.style.width = `${tamano}px`;
        estrella.style.height = `${tamano}px`;

        estrella.style.left = `${Math.random() * 100}%`;
        estrella.style.top = `${Math.random() * 100}%`;

        estrella.style.setProperty(
            "--duracion",
            `${Math.random() * 4 + 3}s`
        );

        estrella.style.setProperty(
            "--retraso",
            `${Math.random() * 5}s`
        );

        fondoEstrellas.appendChild(estrella);
    }
}


// 2. BOTON PARA COMENZAR LA HISTORIA

const botonComenzar = document.getElementById("comenzar");

if (botonComenzar) {
    botonComenzar.addEventListener("click", () => {
        document.getElementById("historia").scrollIntoView({
            behavior: "smooth"
        });
    });
}


// 3. ANIMACION DE APARICION DE LAS SECCIONES

const elementosRevelar = document.querySelectorAll(".revelar");

if ("IntersectionObserver" in window) {

    const observador = new IntersectionObserver((entradas, observer) => {

        entradas.forEach((entrada) => {

            if (entrada.isIntersecting) {
                entrada.target.classList.add("visible");

                observer.unobserve(entrada.target);
            }

        });

    }, {
        threshold: 0.12
    });

    elementosRevelar.forEach((elemento) => {
        observador.observe(elemento);
    });

} else {

    elementosRevelar.forEach((elemento) => {
        elemento.classList.add("visible");
    });

}


// 4. CORAZONES FLOTANTES

function crearCorazon() {

    const corazon = document.createElement("span");

    corazon.className = "corazon-flotante";

    const simbolos = ["♡", "🤍", "♥"];

    corazon.textContent =
        simbolos[Math.floor(Math.random() * simbolos.length)];

    corazon.style.left = `${Math.random() * 100}%`;

    corazon.style.fontSize =
        `${Math.random() * 13 + 12}px`;

    document.body.appendChild(corazon);

    setTimeout(() => {
        corazon.remove();
    }, 8000);

}

// Aparecen de forma pausada para no saturar la pantalla.

setInterval(crearCorazon, 2600);


// 5. ESTRELLAS INTERACTIVAS

const estrellasRecuerdo = document.querySelectorAll(
    ".estrella-recuerdo"
);

const tituloEstrella = document.getElementById("tituloEstrella");

const textoEstrella = document.getElementById("textoEstrella");

const mensajeEstrella = document.querySelector(".mensaje-estrella");


estrellasRecuerdo.forEach((estrella) => {

    estrella.addEventListener("click", () => {

        // Quitar selección anterior.

        estrellasRecuerdo.forEach((otraEstrella) => {
            otraEstrella.classList.remove("activa");
        });

        // Activar la estrella seleccionada.

        estrella.classList.add("activa");

        // Obtener el título y mensaje.

        const nuevoTitulo = estrella.dataset.titulo;
        const nuevoMensaje = estrella.dataset.mensaje;

        // Animar el cambio de mensaje.

        if (mensajeEstrella) {
            mensajeEstrella.style.animation = "none";

            void mensajeEstrella.offsetWidth;

            mensajeEstrella.style.animation =
                "aparecerMensaje .5s ease";
        }

        tituloEstrella.textContent = nuevoTitulo;
        textoEstrella.textContent = nuevoMensaje;

    });

});


// 6. ABRIR Y CERRAR LA CARTA

const botonAbrirCarta = document.getElementById("abrirCarta");

const botonCerrarCarta = document.getElementById("cerrarCarta");

const modalCarta = document.getElementById("modalCarta");


function abrirModalCarta() {

    modalCarta.classList.add("abierta");

    modalCarta.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";

    botonCerrarCarta.focus();

}


function cerrarModalCarta() {

    modalCarta.classList.remove("abierta");

    modalCarta.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";

    botonAbrirCarta.focus();

}


if (botonAbrirCarta && modalCarta && botonCerrarCarta) {

    botonAbrirCarta.addEventListener("click", abrirModalCarta);

    botonCerrarCarta.addEventListener("click", cerrarModalCarta);

    // Cerrar al hacer clic fuera de la carta.

    modalCarta.addEventListener("click", (evento) => {

        if (evento.target === modalCarta) {
            cerrarModalCarta();
        }

    });

    // Cerrar con Escape.

    document.addEventListener("keydown", (evento) => {

        if (
            evento.key === "Escape" &&
            modalCarta.classList.contains("abierta")
        ) {
            cerrarModalCarta();
        }

    });

}


// 7. MENSAJE SORPRESA

const botonSorpresa = document.getElementById("botonSorpresa");

const mensajeSorpresa = document.getElementById("mensajeSorpresa");


if (botonSorpresa && mensajeSorpresa) {

    botonSorpresa.addEventListener("click", () => {

        mensajeSorpresa.classList.toggle("visible");

        if (mensajeSorpresa.classList.contains("visible")) {

            botonSorpresa.textContent = "Cerrar mensaje ♡";

            mensajeSorpresa.scrollIntoView({
                behavior: "smooth",
                block: "nearest"
            });

        } else {

            botonSorpresa.textContent =
                "Leer mis últimas palabras 🤍";

        }

    });

}


// 8. ANIMACION SUAVE DEL SATURNO AL DESPLAZARSE

const saturno = document.querySelector(".saturno");

window.addEventListener("scroll", () => {

    if (!saturno) return;

    const desplazamiento = window.scrollY;

    // Movimiento muy suave para no distraer.

    const movimiento = Math.min(desplazamiento * 0.04, 35);

    saturno.style.marginTop = `${movimiento}px`;

});


// 9. REPRODUCTOR DE MUSICA

const cancion = document.getElementById("cancion");

if (cancion) {

    cancion.addEventListener("error", () => {
        console.warn(
            "No se pudo cargar la canción. Revisa Imagenes/cancion.mp3"
        );
    });

}