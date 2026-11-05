
// ========================================
// PROYECTO AURORA - DIA 3 Y 4
// VERSION CORREGIDA
// ========================================

document.addEventListener("DOMContentLoaded", () => {

    const obtener = (id) => document.getElementById(id);

    const sobreContenedor = obtener("sobreContenedor");
    const botonAbrir = obtener("botonAbrir");
    const portada = obtener("portada");
    const seccionCarta = obtener("seccionCarta");
    const seccionMusica = obtener("seccionMusica");
    const botonIrMusica = obtener("irMusica");

    const particulas = obtener("particulas");
    const contenedorPetalos = obtener("petalos");

    // ========================================
    // COMPROBAR ELEMENTOS PRINCIPALES
    // ========================================

    if (!botonAbrir || !portada || !seccionCarta) {
        console.error("No se encontraron los elementos de apertura de la carta.");
        return;
    }

    // ========================================
    // CREAR PARTICULAS
    // ========================================

    if (particulas) {
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
    }

    // ========================================
    // PETALOS FLOTANTES
    // ========================================

    function crearPetalo() {
        if (!contenedorPetalos) return;

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

        setTimeout(() => petalo.remove(), 20000);
    }

    if (contenedorPetalos) {
        setInterval(crearPetalo, 1200);
    }

    // ========================================
    // ABRIR LA CARTA - CORREGIDO
    // ========================================

    let cartaAbierta = false;

    botonAbrir.addEventListener("click", () => {

        if (cartaAbierta) return;

        cartaAbierta = true;

        botonAbrir.disabled = true;
        botonAbrir.textContent = "Abriendo tu carta...";

        if (sobreContenedor) {
            sobreContenedor.classList.add("abierto");
        }

        // Ocultar la portada
        portada.classList.add("oculto");

        // Mostrar la carta inmediatamente
        seccionCarta.classList.remove("oculto");

        // Asegurar que el papel sea visible
        const papel = seccionCarta.querySelector(".papel");

        if (papel) {
            papel.classList.add("visible");
            papel.style.opacity = "1";
            papel.style.visibility = "visible";
            papel.style.transform = "translateY(0)";
        }

        // Mostrar la carta desde el principio
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        console.log("La carta se ha abierto correctamente ♡");
    });

    // ========================================
    // IR A LA CANCION
    // ========================================

    if (botonIrMusica && seccionMusica) {

        botonIrMusica.addEventListener("click", () => {

            seccionMusica.classList.remove("oculto");

            setTimeout(() => {
                seccionMusica.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }, 100);

        });
    }

    // ========================================
    // REPRODUCTOR MUSICAL
    // ========================================

    const cancion = obtener("cancion");
    const botonReproducir = obtener("botonReproducir");
    const iconoPlay = obtener("iconoPlay");
    const disco = obtener("disco");
    const barraProgreso = obtener("barraProgreso");
    const tiempoActual = obtener("tiempoActual");
    const duracion = obtener("duracion");
    const estadoMusica = obtener("estadoMusica");

    function formatoTiempo(segundos) {
        if (!Number.isFinite(segundos)) return "0:00";

        const minutos = Math.floor(segundos / 60);
        const segundosRestantes = Math.floor(segundos % 60);

        return `${minutos}:${String(segundosRestantes).padStart(2, "0")}`;
    }

    if (botonReproducir && cancion) {

        botonReproducir.addEventListener("click", async () => {

            if (cancion.paused) {

                try {
                    await cancion.play();

                    if (iconoPlay) iconoPlay.textContent = "Ⅱ";
                    if (disco) disco.classList.add("girando");

                    if (estadoMusica) {
                        estadoMusica.textContent = "Reproduciendo nuestra canción ♡";
                    }

                } catch (error) {

                    if (estadoMusica) {
                        estadoMusica.textContent =
                            "No se pudo reproducir el audio comprueba que el archivo exista";
                    }

                    console.error("Error al reproducir:", error);
                }

            } else {

                cancion.pause();

                if (iconoPlay) iconoPlay.textContent = "▶";
                if (disco) disco.classList.remove("girando");

                if (estadoMusica) {
                    estadoMusica.textContent = "Canción pausada";
                }
            }
        });

        cancion.addEventListener("loadedmetadata", () => {
            if (duracion) {
                duracion.textContent = formatoTiempo(cancion.duration);
            }
        });

        cancion.addEventListener("timeupdate", () => {

            if (tiempoActual) {
                tiempoActual.textContent = formatoTiempo(cancion.currentTime);
            }

            if (barraProgreso && Number.isFinite(cancion.duration) && cancion.duration > 0) {
                barraProgreso.value =
                    (cancion.currentTime / cancion.duration) * 100;
            }
        });

        if (barraProgreso) {
            barraProgreso.addEventListener("input", () => {

                if (Number.isFinite(cancion.duration) && cancion.duration > 0) {
                    cancion.currentTime =
                        (barraProgreso.value / 100) * cancion.duration;
                }
            });
        }

        cancion.addEventListener("ended", () => {

            if (iconoPlay) iconoPlay.textContent = "▶";
            if (disco) disco.classList.remove("girando");
            if (barraProgreso) barraProgreso.value = 0;

            if (estadoMusica) {
                estadoMusica.textContent =
                    "Espero que hayas disfrutado esta canción ♡";
            }
        });

        cancion.addEventListener("error", () => {

            if (estadoMusica) {
                estadoMusica.textContent =
                    "No se encontró la canción revisa la carpeta Imagenes";
            }
        });
    }

    // ========================================
    // ANIMACIONES AL DESPLAZARSE
    // ========================================

    const elementos = document.querySelectorAll(
        ".papel, .tarjeta-musica, .dedicatoria-musica, .mensaje-final"
    );

    if ("IntersectionObserver" in window) {

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

    } else {
        elementos.forEach((elemento) => {
            elemento.classList.add("visible");
        });
    }

    console.log("Proyecto Aurora - Una carta para ti ♡");
    console.log("Hecho con mucho cariño.");

});
