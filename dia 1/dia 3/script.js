
// ========================================
// PROYECTO AURORA - DIA 3 Y 4
// ========================================

const sobreContenedor = document.getElementById("sobreContenedor");
const botonAbrir = document.getElementById("botonAbrir");
const portada = document.getElementById("portada");
const seccionCarta = document.getElementById("seccionCarta");
const seccionMusica = document.getElementById("seccionMusica");
const botonIrMusica = document.getElementById("irMusica");

// ========================================
// CREAR PARTICULAS DE LUZ
// ========================================

const particulas = document.getElementById("particulas");

for (let i = 0; i < 75; i++) {
    const particula = document.createElement("span");

    particula.classList.add("particula");

    particula.style.left = Math.random() * 100 + "%";
    particula.style.top = Math.random() * 100 + "%";
    particula.style.setProperty(
        "--duracion",
        (2 + Math.random() * 5) + "s"
    );

    particula.style.animationDelay = Math.random() * 5 + "s";

    particulas.appendChild(particula);
}

// ========================================
// PETALOS FLOTANTES
// ========================================

const contenedorPetalos = document.getElementById("petalos");

function crearPetalo() {
    const petalo = document.createElement("span");

    petalo.classList.add("petalo");
    petalo.textContent = Math.random() > 0.5 ? "✿" : "♡";

    petalo.style.left = Math.random() * 100 + "%";
    petalo.style.setProperty(
        "--caida",
        (9 + Math.random() * 10) + "s"
    );

    petalo.style.fontSize = (10 + Math.random() * 13) + "px";

    contenedorPetalos.appendChild(petalo);

    setTimeout(() => {
        petalo.remove();
    }, 20000);
}

setInterval(crearPetalo, 1200);

// ========================================
// ABRIR EL SOBRE Y MOSTRAR LA CARTA
// ========================================

let cartaAbierta = false;

botonAbrir.addEventListener("click", () => {
    if (cartaAbierta) return;

    cartaAbierta = true;

    sobreContenedor.classList.add("abierto");

    botonAbrir.disabled = true;
    botonAbrir.textContent = "Preparando algo para ti...";

    setTimeout(() => {
        portada.style.transition = "opacity 1s ease";
        portada.style.opacity = "0";

        setTimeout(() => {
            portada.classList.add("oculto");
            seccionCarta.classList.remove("oculto");

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }, 1000);

    }, 1000);
});

// ========================================
// IR A LA CANCION
// ========================================

botonIrMusica.addEventListener("click", () => {

    seccionMusica.classList.remove("oculto");

    setTimeout(() => {
        seccionMusica.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }, 100);

});

// ========================================
// REPRODUCTOR MUSICAL
// ========================================

const cancion = document.getElementById("cancion");
const botonReproducir = document.getElementById("botonReproducir");
const iconoPlay = document.getElementById("iconoPlay");
const disco = document.getElementById("disco");
const barraProgreso = document.getElementById("barraProgreso");
const tiempoActual = document.getElementById("tiempoActual");
const duracion = document.getElementById("duracion");
const estadoMusica = document.getElementById("estadoMusica");

function formatoTiempo(segundos) {
    if (!Number.isFinite(segundos)) return "0:00";

    const minutos = Math.floor(segundos / 60);
    const segundosRestantes = Math.floor(segundos % 60);

    return `${minutos}:${String(segundosRestantes).padStart(2, "0")}`;
}

botonReproducir.addEventListener("click", async () => {

    if (cancion.paused) {
        try {
            await cancion.play();

            iconoPlay.textContent = "Ⅱ";
            disco.classList.add("girando");
            estadoMusica.textContent = "Reproduciendo nuestra canción ♡";

        } catch (error) {
            estadoMusica.textContent =
                "No se pudo reproducir el audio comprueba que el archivo exista";
            console.error("Error al reproducir:", error);
        }

    } else {
        cancion.pause();

        iconoPlay.textContent = "▶";
        disco.classList.remove("girando");
        estadoMusica.textContent = "Canción pausada";
    }
});

// Actualizar duración

cancion.addEventListener("loadedmetadata", () => {
    duracion.textContent = formatoTiempo(cancion.duration);
});

// Actualizar barra de progreso

cancion.addEventListener("timeupdate", () => {

    tiempoActual.textContent = formatoTiempo(cancion.currentTime);

    if (Number.isFinite(cancion.duration) && cancion.duration > 0) {
        barraProgreso.value =
            (cancion.currentTime / cancion.duration) * 100;
    }
});

// Permitir avanzar o retroceder

barraProgreso.addEventListener("input", () => {

    if (Number.isFinite(cancion.duration) && cancion.duration > 0) {
        cancion.currentTime =
            (barraProgreso.value / 100) * cancion.duration;
    }

});

// Cuando termina la canción

cancion.addEventListener("ended", () => {

    iconoPlay.textContent = "▶";
    disco.classList.remove("girando");
    barraProgreso.value = 0;

    estadoMusica.textContent =
        "Espero que hayas disfrutado esta canción ♡";

});

// Si el archivo no se encuentra

cancion.addEventListener("error", () => {

    estadoMusica.textContent =
        "No se encontró la canción revisa la carpeta Imagenes";

});

// ========================================
// ANIMACION DE APARICION AL DESPLAZARSE
// ========================================

const elementos = document.querySelectorAll(
    ".papel, .tarjeta-musica, .dedicatoria-musica, .mensaje-final"
);

const observador = new IntersectionObserver((entradas) => {

    entradas.forEach((entrada) => {

        if (entrada.isIntersecting) {
            entrada.target.classList.add("visible");
        }

    });

}, {
    threshold: 0.12
});

elementos.forEach((elemento) => {
    observador.observe(elemento);
});

// ========================================
// MENSAJE DE BIENVENIDA EN CONSOLA
// ========================================

console.log("Proyecto Aurora - Una carta para ti ♡");
console.log("Hecho con mucho cariño.");
