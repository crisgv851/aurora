
// ========================================
// PROYECTO AURORA - DIA 5
// SI PUDIERA REGALARTE ALGO
// ========================================

document.addEventListener("DOMContentLoaded", () => {

    const obtener = (id) => document.getElementById(id);

    // ========================================
    // ELEMENTOS
    // ========================================

    const portada = obtener("portada");
    const introduccion = obtener("introduccion");
    const regalos = obtener("regalos");
    const final = obtener("final");

    const comenzar = obtener("comenzar");
    const verRegalos = obtener("verRegalos");

    const modal = obtener("modalRegalo");
    const cerrarModal = obtener("cerrarModal");

    const numeroModal = obtener("numeroModal");
    const emojiModal = obtener("emojiModal");
    const tituloModal = obtener("tituloModal");
    const mensajeModal = obtener("mensajeModal");
    const siguienteRegalo = obtener("siguienteRegalo");

    const progresoRegalos = obtener("progresoRegalos");
    const contadorTexto = obtener("contadorTexto");

    const cajaFinal = obtener("cajaFinal");
    const instruccionCaja = obtener("instruccionCaja");
    const mensajeCaja = obtener("mensajeCaja");

    // ========================================
    // CONTENIDO DE LOS CINCO REGALOS
    // ========================================

    const contenidoRegalos = [

        {
            numero: "REGALO 01",
            emoji: "🫂",
            titulo: "Un abrazo",

            mensaje: `Si pudiera regalarte algo en este momento, sería un abrazo de esos que hacen que por un instante todo lo demás deje de importar.

Uno en el que no tengas que explicar cómo te sientes, ni fingir que todo está bien, ni encontrar las palabras correctas.

Me gustaría que supieras que mereces sentirte acompañada, querida y comprendida. Que incluso en esos días en los que las cosas no salen como esperabas, recuerdes que eres una persona valiosa y que no tienes que poder con todo siempre.

Si pudiera, te regalaría todos los abrazos que no puedo darte físicamente y haría que cada uno te recordara lo especial que eres para mí. ♡`
        },

        {
            numero: "REGALO 02",
            emoji: "🏡",
            titulo: "Un lugar seguro",

            mensaje: `Te regalaría un lugar donde pudieras ser completamente tú.

Un espacio en el que no tuvieras que medir tus palabras, esconder tus emociones o sentir miedo de mostrar tus partes más sensibles.

Un lugar donde tus alegrías fueran celebradas, tus preocupaciones escuchadas y tus silencios también fueran respetados.

No quiero ser alguien que te quite la tranquilidad. Si algún día tengo la oportunidad de compartir nuevamente mi vida contigo, quisiera ser una persona que aporte paz, que sepa escuchar, que comprenda y que también aprenda a reconocer sus errores.

Porque para mí querer a alguien no consiste solamente en decir cosas bonitas, sino en hacer que esa persona se sienta respetada y valorada.`
        },

        {
            numero: "REGALO 03",
            emoji: "🌷",
            titulo: "Un día perfecto",

            mensaje: `Te regalaría un día entero sin preocupaciones.

Me gustaría empezar con algo tan sencillo como saludarte con una sonrisa, preguntarte cómo amaneciste y compartir contigo esas pequeñas conversaciones que a veces terminan siendo los mejores momentos.

Después me gustaría salir contigo, caminar sin mirar demasiado el reloj, comer algo que nos guste, reírnos de cualquier tontería y hablar de todo un poco.

Tal vez terminaríamos hablando de fútbol, aunque seguramente no estaríamos de acuerdo en todos los gustos, y eso también tendría su encanto.

No necesitaríamos un plan extraordinario ni un lugar costoso. Me bastaría con disfrutar de tu compañía y crear un recuerdo bonito contigo.

Porque muchas veces los mejores días no son los que tienen los planes más grandes, sino los que compartimos con las personas que queremos.`
        },

        {
            numero: "REGALO 04",
            emoji: "✨",
            titulo: "Un deseo",

            mensaje: `Si pudiera pedir un deseo para ti, no sería solamente que tuvieras días felices.

Desearía que encontraras motivos para sonreír incluso cuando las cosas se compliquen, que nunca dudes de lo mucho que vales y que siempre tengas oportunidades para cumplir aquello que sueñas.

Deseo que la vida te sorprenda de maneras bonitas, que puedas sentirte orgullosa de todo lo que eres y de todo lo que vas consiguiendo.

Que nunca te falten personas que te respeten, que te escuchen y que sepan apreciar esa forma tan tuya de ser.

Y si algún día nuestros caminos vuelven a caminar juntos, también desearía que pudiéramos construir recuerdos de los que ambos nos sintamos orgullosos.

Pero, sobre todo, quiero que seas feliz, porque tu felicidad importa.`
        },

        {
            numero: "REGALO 05",
            emoji: "🎀",
            titulo: "Una promesa",

            mensaje: `Este es probablemente el regalo más importante de todos.

No quiero regalarte una promesa llena de palabras bonitas que después se queden en el aire.

Si pudiera prometerte algo, sería mi intención de aprender, de mejorar y de demostrar con acciones que los sentimientos también necesitan responsabilidad.

Sé que querer a alguien no significa que todo sea sencillo, que nunca existan desacuerdos o que uno jamás se equivoque.

También sé que las palabras no borran lo que haya pasado y que recuperar la confianza requiere tiempo, paciencia y hechos.

Pero quiero que sepas que, cuando digo que eres una mujer por la que vale la pena luchar, lo digo porque realmente lo siento.

Mi corazón quiere estar contigo, elegirte y construir algo bonito a tu lado. No quiero que tengas que creerlo solamente porque lo digo; me gustaría tener la oportunidad de demostrártelo.

Sin presionarte, sin exigirte nada y respetando siempre lo que tú sientas.`
        }

    ];

    // ========================================
    // PARTICULAS DECORATIVAS
    // ========================================

    const particulas = obtener("particulas");

    if (particulas) {

        for (let i = 0; i < 65; i++) {

            const punto = document.createElement("span");

            punto.className = "particula";
            punto.style.left = Math.random() * 100 + "%";
            punto.style.top = Math.random() * 100 + "%";

            punto.style.setProperty(
                "--tiempo",
                (2 + Math.random() * 5) + "s"
            );

            punto.style.animationDelay =
                Math.random() * 5 + "s";

            particulas.appendChild(punto);
        }
    }

    // ========================================
    // PETALOS FLOTANTES
    // ========================================

    const petalos = obtener("petalos");

    function crearPetalo() {

        if (!petalos) return;

        const petalo = document.createElement("span");

        petalo.className = "petalo";
        petalo.textContent = Math.random() > 0.5 ? "✿" : "♡";

        petalo.style.left = Math.random() * 100 + "%";
        petalo.style.fontSize = (12 + Math.random() * 12) + "px";

        petalo.style.setProperty(
            "--caida",
            (10 + Math.random() * 10) + "s"
        );

        petalos.appendChild(petalo);

        setTimeout(() => petalo.remove(), 21000);
    }

    if (petalos) {
        setInterval(crearPetalo, 1400);
    }

    // ========================================
    // NAVEGACION DE LA EXPERIENCIA
    // ========================================

    comenzar.addEventListener("click", () => {

        portada.classList.add("oculto");
        introduccion.classList.remove("oculto");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

    verRegalos.addEventListener("click", () => {

        introduccion.classList.add("oculto");
        regalos.classList.remove("oculto");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

    // ========================================
    // CONTROL DE REGALOS DESCUBIERTOS
    // ========================================

    const descubiertos = new Set();

    const botonesRegalo = document.querySelectorAll(".regalo");

    function actualizarProgreso() {

        const cantidad = descubiertos.size;

        progresoRegalos.style.width =
            (cantidad / contenidoRegalos.length * 100) + "%";

        contadorTexto.textContent =
            `Has descubierto ${cantidad} de 5 regalos`;

        if (cantidad === contenidoRegalos.length) {

            final.classList.remove("oculto");

            setTimeout(() => {

                final.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }, 500);

        }
    }

    // ========================================
    // ABRIR UN REGALO
    // ========================================

    function abrirRegalo(indice) {

        const regalo = contenidoRegalos[indice];

        if (!regalo) return;

        numeroModal.textContent = regalo.numero;
        emojiModal.textContent = regalo.emoji;
        tituloModal.textContent = regalo.titulo;
        mensajeModal.textContent = regalo.mensaje;

        modal.classList.remove("oculto");

        document.body.style.overflow = "hidden";

        descubiertos.add(indice);

        botonesRegalo[indice].classList.add("descubierto");

        actualizarProgreso();

    }

    botonesRegalo.forEach((boton) => {

        boton.addEventListener("click", () => {

            const indice = Number(boton.dataset.regalo);

            abrirRegalo(indice);

        });

    });

    // ========================================
    // CERRAR MODAL
    // ========================================

    function cerrarVentana() {

        modal.classList.add("oculto");
        document.body.style.overflow = "";

    }

    cerrarModal.addEventListener("click", cerrarVentana);

    siguienteRegalo.addEventListener("click", cerrarVentana);

    modal.addEventListener("click", (evento) => {

        if (evento.target === modal) {
            cerrarVentana();
        }

    });

    document.addEventListener("keydown", (evento) => {

        if (evento.key === "Escape") {
            cerrarVentana();
        }

    });

    // ========================================
    // ABRIR LA CAJA FINAL
    // ========================================

    let cajaAbierta = false;

    cajaFinal.addEventListener("click", () => {

        if (cajaAbierta) return;

        cajaAbierta = true;

        cajaFinal.classList.add("abierta");

        instruccionCaja.textContent =
            "Un último detalle, preparado para ti ♡";

        setTimeout(() => {

            mensajeCaja.classList.remove("oculto");

            instruccionCaja.textContent =
                "Espero que este regalo te haya gustado";

            mensajeCaja.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }, 900);

    });

    // ========================================
    // FINAL
    // ========================================

    console.log("Proyecto Aurora - Día 5");
    console.log("Cinco regalos preparados con cariño ♡");

});
