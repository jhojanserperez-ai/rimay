/* =========================================
   RIMAY
   SISTEMA PRINCIPAL
========================================= */


/* =========================================
   VARIABLES
========================================= */

let idiomaActual = "";
let leccionActual = 1;

let preguntaActual = 0;

let puntos = 0;

let vidas = 3;

let preguntasActuales = [];


/* =========================================
   PREGUNTAS
========================================= */

const lecciones = {

    /* ==============================
       QUECHUA
    ============================== */

    quechua: {

        1: {

            preguntas: [

                {
                    pregunta: '¿Cómo se dice "Hola"?',

                    respuestas: [
                        "Rimaykullayki",
                        "Añay",
                        "Tupananchiskama"
                    ],

                    correcta: "Rimaykullayki"
                },

                {
                    pregunta: '¿Qué significa "Rimaykullayki"?',

                    respuestas: [
                        "Hola",
                        "Gracias",
                        "Adiós"
                    ],

                    correcta: "Hola"
                },

                {
                    pregunta: '¿Cómo se dice "Gracias"?',

                    respuestas: [
                        "Añay",
                        "Wawa",
                        "Ayllu"
                    ],

                    correcta: "Añay"
                },

                {
                    pregunta: '¿Cómo se dice "Adiós"?',

                    respuestas: [
                        "Tupananchiskama",
                        "Añay",
                        "Rimaykullayki"
                    ],

                    correcta: "Tupananchiskama"
                },

                {
                    pregunta: '¿Qué significa "Allin p\'unchay"?',

                    respuestas: [
                        "Buenos días",
                        "Buenas noches",
                        "Gracias"
                    ],

                    correcta: "Buenos días"
                }

            ]

        },


        2: {

            preguntas: [

                {
                    pregunta: '¿Cómo se dice "Uno"?',

                    respuestas: [
                        "Huk",
                        "Iskay",
                        "Kimsa"
                    ],

                    correcta: "Huk"
                },

                {
                    pregunta: '¿Qué número es "Iskay"?',

                    respuestas: [
                        "1",
                        "2",
                        "3"
                    ],

                    correcta: "2"
                },

                {
                    pregunta: '¿Cómo se dice "Tres"?',

                    respuestas: [
                        "Kimsa",
                        "Tawa",
                        "Pichqa"
                    ],

                    correcta: "Kimsa"
                },

                {
                    pregunta: '¿Qué número es "Tawa"?',

                    respuestas: [
                        "3",
                        "4",
                        "5"
                    ],

                    correcta: "4"
                },

                {
                    pregunta: '¿Cómo se dice "Cinco"?',

                    respuestas: [
                        "Pichqa",
                        "Suqta",
                        "Qanchis"
                    ],

                    correcta: "Pichqa"
                }

            ]

        },


        3: {

            preguntas: [

                {
                    pregunta: '¿Qué significa "Mama"?',

                    respuestas: [
                        "Madre",
                        "Padre",
                        "Hermano"
                    ],

                    correcta: "Madre"
                },

                {
                    pregunta: '¿Cómo se dice "Padre"?',

                    respuestas: [
                        "Tayta",
                        "Wawa",
                        "Ayllu"
                    ],

                    correcta: "Tayta"
                },

                {
                    pregunta: '¿Qué significa "Wawa"?',

                    respuestas: [
                        "Niño",
                        "Abuelo",
                        "Padre"
                    ],

                    correcta: "Niño"
                },

                {
                    pregunta: '¿Qué significa "Ayllu"?',

                    respuestas: [
                        "Familia o comunidad",
                        "Animal",
                        "Número"
                    ],

                    correcta: "Familia o comunidad"
                },

                {
                    pregunta: '¿Cómo se dice "Madre"?',

                    respuestas: [
                        "Mama",
                        "Tayta",
                        "Wawa"
                    ],

                    correcta: "Mama"
                }

            ]

        },


        4: {

            preguntas: [

                {
                    pregunta: '¿Qué aprenderemos en esta lección?',

                    respuestas: [
                        "Animales",
                        "Saludos",
                        "Números"
                    ],

                    correcta: "Animales"
                },

                {
                    pregunta: '¿Cuál de estas palabras representa un animal?',

                    respuestas: [
                        "Allqu",
                        "Tayta",
                        "Huk"
                    ],

                    correcta: "Allqu"
                },

                {
                    pregunta: '¿Qué significa "Allqu"?',

                    respuestas: [
                        "Perro",
                        "Gato",
                        "Pájaro"
                    ],

                    correcta: "Perro"
                },

                {
                    pregunta: '¿Cuál tema estás aprendiendo?',

                    respuestas: [
                        "Animales",
                        "Colores",
                        "Comida"
                    ],

                    correcta: "Animales"
                },

                {
                    pregunta: '¿Terminaste la lección?',

                    respuestas: [
                        "Sí",
                        "No"
                    ],

                    correcta: "Sí"
                }

            ]

        }

    },


    /* ==============================
       AIMARA
    ============================== */

    aymara: {

        1: {

            preguntas: [

                {
                    pregunta: '¿Qué aprenderemos primero?',

                    respuestas: [
                        "Saludos",
                        "Animales",
                        "Colores"
                    ],

                    correcta: "Saludos"
                },

                {
                    pregunta: '¿Cuál es una expresión de saludo?',

                    respuestas: [
                        "Kamisaraki",
                        "Uno",
                        "Perro"
                    ],

                    correcta: "Kamisaraki"
                },

                {
                    pregunta: '¿Qué significa aprender un saludo?',

                    respuestas: [
                        "Poder comunicarse",
                        "Contar números",
                        "Nombrar animales"
                    ],

                    correcta: "Poder comunicarse"
                },

                {
                    pregunta: '¿Qué idioma estamos aprendiendo?',

                    respuestas: [
                        "Aimara",
                        "Inglés",
                        "Francés"
                    ],

                    correcta: "Aimara"
                },

                {
                    pregunta: '¿Terminaste la lección?',

                    respuestas: [
                        "Sí",
                        "No"
                    ],

                    correcta: "Sí"
                }

            ]

        },


        2: {

            preguntas: [

                {
                    pregunta: '¿Qué aprenderemos?',

                    respuestas: [
                        "Números",
                        "Animales",
                        "Saludos"
                    ],

                    correcta: "Números"
                },

                {
                    pregunta: '¿Para qué sirven los números?',

                    respuestas: [
                        "Para contar",
                        "Para saludar",
                        "Para dormir"
                    ],

                    correcta: "Para contar"
                },

                {
                    pregunta: '¿Cuál es un número?',

                    respuestas: [
                        "Uno",
                        "Madre",
                        "Perro"
                    ],

                    correcta: "Uno"
                },

                {
                    pregunta: '¿Qué ayuda a aprender números?',

                    respuestas: [
                        "Practicar",
                        "Ignorarlos",
                        "No estudiar"
                    ],

                    correcta: "Practicar"
                },

                {
                    pregunta: '¿Qué idioma estamos aprendiendo?',

                    respuestas: [
                        "Aimara",
                        "Portugués",
                        "Italiano"
                    ],

                    correcta: "Aimara"
                }

            ]

        },


        3: {

            preguntas: [

                {
                    pregunta: '¿Qué aprenderemos?',

                    respuestas: [
                        "Familia",
                        "Animales",
                        "Números"
                    ],

                    correcta: "Familia"
                },

                {
                    pregunta: '¿Quién forma parte de una familia?',

                    respuestas: [
                        "Madre",
                        "Montaña",
                        "Número"
                    ],

                    correcta: "Madre"
                },

                {
                    pregunta: '¿Qué ayuda a aprender vocabulario?',

                    respuestas: [
                        "Repetir",
                        "Olvidar",
                        "No practicar"
                    ],

                    correcta: "Repetir"
                },

                {
                    pregunta: '¿Qué estamos aprendiendo?',

                    respuestas: [
                        "Palabras de la familia",
                        "Solo números",
                        "Solo animales"
                    ],

                    correcta: "Palabras de la familia"
                },

                {
                    pregunta: '¿Terminaste esta lección?',

                    respuestas: [
                        "Sí",
                        "No"
                    ],

                    correcta: "Sí"
                }

            ]

        },


        4: {

            preguntas: [

                {
                    pregunta: '¿Qué aprenderemos?',

                    respuestas: [
                        "Animales",
                        "Saludos",
                        "Números"
                    ],

                    correcta: "Animales"
                },

                {
                    pregunta: '¿Cuál es un animal?',

                    respuestas: [
                        "Perro",
                        "Madre",
                        "Cinco"
                    ],

                    correcta: "Perro"
                },

                {
                    pregunta: '¿Qué ayuda a aprender palabras?',

                    respuestas: [
                        "Escuchar y practicar",
                        "Ignorarlas",
                        "No repetir"
                    ],

                    correcta: "Escuchar y practicar"
                },

                {
                    pregunta: '¿Qué podemos aprender sobre animales?',

                    respuestas: [
                        "Sus nombres",
                        "Solo números",
                        "Solo saludos"
                    ],

                    correcta: "Sus nombres"
                },

                {
                    pregunta: '¿Terminaste la lección?',

                    respuestas: [
                        "Sí",
                        "No"
                    ],

                    correcta: "Sí"
                }

            ]

        }

    },


    /* ==============================
       ASHÁNINKA
    ============================== */

    ashaninka: {

        1: {

            preguntas: [

                {
                    pregunta: '¿Qué aprenderemos primero?',

                    respuestas: [
                        "Saludos",
                        "Números",
                        "Animales"
                    ],

                    correcta: "Saludos"
                },

                {
                    pregunta: '¿Qué es importante para comunicarnos?',

                    respuestas: [
                        "Los saludos",
                        "Los colores",
                        "Las operaciones"
                    ],

                    correcta: "Los saludos"
                },

                {
                    pregunta: '¿Qué idioma estamos aprendiendo?',

                    respuestas: [
                        "Asháninka",
                        "Portugués",
                        "Inglés"
                    ],

                    correcta: "Asháninka"
                },

                {
                    pregunta: '¿Cómo aprendemos mejor una palabra?',

                    respuestas: [
                        "Practicándola",
                        "Ignorándola",
                        "Olvidándola"
                    ],

                    correcta: "Practicándola"
                },

                {
                    pregunta: '¿Terminaste la lección?',

                    respuestas: [
                        "Sí",
                        "No"
                    ],

                    correcta: "Sí"
                }

            ]

        },


        2: {

            preguntas: [

                {
                    pregunta: '¿Qué aprenderemos?',

                    respuestas: [
                        "Naturaleza",
                        "Números",
                        "Saludos"
                    ],

                    correcta: "Naturaleza"
                },

                {
                    pregunta: '¿Qué podemos encontrar en la naturaleza?',

                    respuestas: [
                        "Árboles",
                        "Computadoras",
                        "Autos"
                    ],

                    correcta: "Árboles"
                },

                {
                    pregunta: '¿Qué ayuda a conocer la naturaleza?',

                    respuestas: [
                        "Observar",
                        "Ignorar",
                        "Olvidar"
                    ],

                    correcta: "Observar"
                },

                {
                    pregunta: '¿Cuál pertenece a la naturaleza?',

                    respuestas: [
                        "Río",
                        "Celular",
                        "Teclado"
                    ],

                    correcta: "Río"
                },

                {
                    pregunta: '¿Qué idioma estamos aprendiendo?',

                    respuestas: [
                        "Asháninka",
                        "Inglés",
                        "Francés"
                    ],

                    correcta: "Asháninka"
                }

            ]

        },


        3: {

            preguntas: [

                {
                    pregunta: '¿Qué aprenderemos?',

                    respuestas: [
                        "Familia",
                        "Números",
                        "Animales"
                    ],

                    correcta: "Familia"
                },

                {
                    pregunta: '¿Quién pertenece a una familia?',

                    respuestas: [
                        "Madre",
                        "Montaña",
                        "Número"
                    ],

                    correcta: "Madre"
                },

                {
                    pregunta: '¿Qué ayuda a aprender vocabulario?',

                    respuestas: [
                        "Practicar",
                        "Ignorar",
                        "No repetir"
                    ],

                    correcta: "Practicar"
                },

                {
                    pregunta: '¿Qué estamos aprendiendo?',

                    respuestas: [
                        "Palabras de familia",
                        "Solo animales",
                        "Solo números"
                    ],

                    correcta: "Palabras de familia"
                },

                {
                    pregunta: '¿Terminaste esta lección?',

                    respuestas: [
                        "Sí",
                        "No"
                    ],

                    correcta: "Sí"
                }

            ]

        },


        4: {

            preguntas: [

                {
                    pregunta: '¿Qué aprenderemos?',

                    respuestas: [
                        "Animales",
                        "Saludos",
                        "Números"
                    ],

                    correcta: "Animales"
                },

                {
                    pregunta: '¿Cuál es un animal?',

                    respuestas: [
                        "Perro",
                        "Madre",
                        "Cinco"
                    ],

                    correcta: "Perro"
                },

                {
                    pregunta: '¿Qué ayuda a aprender palabras?',

                    respuestas: [
                        "Escuchar y practicar",
                        "Ignorarlas",
                        "No repetir"
                    ],

                    correcta: "Escuchar y practicar"
                },

                {
                    pregunta: '¿Qué podemos aprender sobre animales?',

                    respuestas: [
                        "Sus nombres",
                        "Solo números",
                        "Solo saludos"
                    ],

                    correcta: "Sus nombres"
                },

                {
                    pregunta: '¿Terminaste la lección?',

                    respuestas: [
                        "Sí",
                        "No"
                    ],

                    correcta: "Sí"
                }

            ]

        }

    }

};


/* =========================================
   CAMBIAR PANTALLA
========================================= */

function mostrarPantalla(id) {

    const pantallas =
        document.querySelectorAll(".pantalla");


    pantallas.forEach(function(pantalla) {

        pantalla.classList.remove("activa");

    });


    const pantalla =
        document.getElementById(id);


    if (pantalla) {

        pantalla.classList.add("activa");

    }

}


/* =========================================
   INICIO
========================================= */

function mostrarIdiomas() {

    mostrarPantalla("idiomas");

}


function volverInicio() {

    mostrarPantalla("inicio");

}


/* =========================================
   PERFIL
========================================= */

function mostrarPerfil() {

    mostrarPantalla("perfil");

}


function guardarPerfil() {

    const input =
        document.getElementById("nombreInput");


    const nombre =
        input.value.trim();


    if (nombre === "") {

        alert("Escribe tu nombre primero.");

        return;

    }


    localStorage.setItem(
        "nombreUsuario",
        nombre
    );


    document.getElementById(
        "nombreUsuario"
    ).textContent =
        nombre;


    mostrarPantalla("inicio");

}


/* =========================================
   SELECCIONAR IDIOMA
========================================= */

function seleccionarIdioma(idioma) {

    idiomaActual = idioma;

    actualizarMapa(idioma);

    actualizarEstadisticas(idioma);

    mostrarPantalla(idioma);

}


/* =========================================
   INICIAR LECCIÓN
========================================= */

function iniciarLeccion(idioma, numero) {

    if (numero > 1) {

        const anterior =
            localStorage.getItem(
                idioma +
                "_leccion_" +
                (numero - 1)
            );


        if (anterior !== "completada") {

            alert(
                "🔒 Primero debes completar la lección anterior."
            );

            return;

        }

    }


    idiomaActual = idioma;

    leccionActual = numero;

    preguntaActual = 0;

    puntos = 0;

    vidas = 3;


    preguntasActuales =
        lecciones[idioma][numero].preguntas;


    document.getElementById(
        "vidas"
    ).textContent =
        vidas;


    document.getElementById(
        "xpLeccion"
    ).textContent =
        puntos;


    document.getElementById(
        "totalPreguntas"
    ).textContent =
        preguntasActuales.length;


    document.getElementById(
        "continuarBtn"
    ).style.display =
        "none";


    mostrarPantalla("leccion");

    mostrarPregunta();

}


/* =========================================
   MOSTRAR PREGUNTA
========================================= */

function mostrarPregunta() {

    const datos =
        preguntasActuales[preguntaActual];


    if (!datos) {

        terminarLeccion();

        return;

    }


    document.getElementById(
        "pregunta"
    ).textContent =
        datos.pregunta;


    document.getElementById(
        "numeroPregunta"
    ).textContent =
        preguntaActual + 1;


    const porcentaje =
        (preguntaActual /
        preguntasActuales.length) * 100;


    document.getElementById(
        "progreso"
    ).style.width =
        porcentaje + "%";


    const contenedor =
        document.getElementById(
            "respuestas"
        );


    contenedor.innerHTML = "";


    datos.respuestas.forEach(
        function(respuesta) {

            const boton =
                document.createElement("button");


            boton.textContent =
                respuesta;


            boton.onclick =
                function() {

                    responder(
                        respuesta,
                        boton
                    );

                };


            contenedor.appendChild(boton);

        }
    );


    document.getElementById(
        "mensaje"
    ).textContent =
        "";


    document.getElementById(
        "continuarBtn"
    ).style.display =
        "none";

}


/* =========================================
   RESPONDER
========================================= */

function responder(
    respuesta,
    botonSeleccionado
) {

    const datos =
        preguntasActuales[preguntaActual];


    const botones =
        document.querySelectorAll(
            "#respuestas button"
        );


    botones.forEach(
        function(boton) {

            boton.disabled = true;

        }
    );


    const mensaje =
        document.getElementById(
            "mensaje"
        );


    if (
        respuesta === datos.correcta
    ) {

        puntos += 10;


        botonSeleccionado.classList.add(
            "correcta"
        );


        mensaje.textContent =
            "✅ ¡Correcto! +10 XP";


        document.getElementById(
            "xpLeccion"
        ).textContent =
            puntos;

    } else {

        vidas--;


        botonSeleccionado.classList.add(
            "incorrecta"
        );


        botones.forEach(
            function(boton) {

                if (
                    boton.textContent ===
                    datos.correcta
                ) {

                    boton.classList.add(
                        "correcta"
                    );

                }

            }
        );


        document.getElementById(
            "vidas"
        ).textContent =
            vidas;


        if (vidas <= 0) {

            mensaje.textContent =
                "💔 Te quedaste sin vidas. Reinicia la lección.";

        } else {

            mensaje.textContent =
                "❌ Incorrecto. La respuesta correcta era: " +
                datos.correcta;

        }

    }


    document.getElementById(
        "continuarBtn"
    ).style.display =
        "block";

}


/* =========================================
   SIGUIENTE PREGUNTA
========================================= */

function siguientePregunta() {

    if (vidas <= 0) {

        iniciarLeccion(
            idiomaActual,
            leccionActual
        );

        return;

    }


    preguntaActual++;


    if (
        preguntaActual >=
        preguntasActuales.length
    ) {

        terminarLeccion();

        return;

    }


    mostrarPregunta();

}


/* =========================================
   TERMINAR LECCIÓN
========================================= */

function terminarLeccion() {

    // Completar barra

    document.getElementById(
        "progreso"
    ).style.width =
        "100%";


    // Guardar lección

    localStorage.setItem(

        idiomaActual +
        "_leccion_" +
        leccionActual,

        "completada"

    );


    // Mostrar XP final

    document.getElementById(
        "xpFinal"
    ).textContent =
        puntos;


    /*
       PRIMERO mostramos el resultado.
       Esto evita que una actualización
       secundaria deje la pantalla en blanco.
    */

    mostrarPantalla("resultado");


    // Después actualizamos datos

    actualizarXP();

    actualizarMapa(idiomaActual);

    actualizarEstadisticas(idiomaActual);

}


/* =========================================
   ACTUALIZAR XP
========================================= */

function actualizarXP() {

    const xpAnterior =
        Number(
            localStorage.getItem(
                idiomaActual + "_xp"
            )
        ) || 0;


    /*
       Evita sumar XP varias veces
       si por error se llama nuevamente
       a terminarLeccion.
    */

    const claveResultado =
        idiomaActual +
        "_leccion_" +
        leccionActual +
        "_xp_guardado";


    const yaGuardado =
        localStorage.getItem(
            claveResultado
        );


    if (yaGuardado === "si") {

        return;

    }


    const nuevoXP =
        xpAnterior + puntos;


    localStorage.setItem(

        idiomaActual + "_xp",

        nuevoXP

    );


    localStorage.setItem(
        claveResultado,
        "si"
    );

}


/* =========================================
   ACTUALIZAR MAPA
========================================= */

function actualizarMapa(idioma) {

    for (
        let numero = 2;
        numero <= 4;
        numero++
    ) {

        const boton =
            document.getElementById(
                idioma + numero
            );


        if (!boton) {

            continue;

        }


        const anterior =
            localStorage.getItem(

                idioma +
                "_leccion_" +
                (numero - 1)

            );


        if (
            anterior === "completada"
        ) {

            boton.classList.remove(
                "bloqueado"
            );


            boton.classList.add(
                "activo-nodo"
            );


            boton.textContent =
                "▶";

        } else {

            boton.classList.add(
                "bloqueado"
            );


            boton.classList.remove(
                "activo-nodo"
            );


            boton.textContent =
                "🔒";

        }

    }

}


/* =========================================
   ESTADÍSTICAS
========================================= */

function actualizarEstadisticas(idioma) {

    const xp =
        Number(
            localStorage.getItem(
                idioma + "_xp"
            )
        ) || 0;


    let nombreXP = "";

    let nombreNivel = "";


    if (idioma === "quechua") {

        nombreXP =
            "xpQuechua";

        nombreNivel =
            "nivelQuechua";

    }


    if (idioma === "aymara") {

        nombreXP =
            "xpAymara";

        nombreNivel =
            "nivelAymara";

    }


    if (idioma === "ashaninka") {

        nombreXP =
            "xpAshaninka";

        nombreNivel =
            "nivelAshaninka";

    }


    const elementoXP =
        document.getElementById(
            nombreXP
        );


    const elementoNivel =
        document.getElementById(
            nombreNivel
        );


    if (elementoXP) {

        elementoXP.textContent =
            xp;

    }


    /*
       Cada 100 XP sube un nivel
    */

    const nivel =
        Math.floor(xp / 100) + 1;


    if (elementoNivel) {

        elementoNivel.textContent =
            nivel;

    }

}


/* =========================================
   VOLVER AL MAPA
========================================= */

function volverMapa() {

    actualizarMapa(
        idiomaActual
    );


    actualizarEstadisticas(
        idiomaActual
    );


    mostrarPantalla(
        idiomaActual
    );

}


/* =========================================
   CARGAR DATOS
========================================= */

window.addEventListener(

    "load",

    function() {

        const nombre =
            localStorage.getItem(
                "nombreUsuario"
            );


        if (nombre) {

            document.getElementById(
                "nombreUsuario"
            ).textContent =
                nombre;

        }


        const idiomas = [

            "quechua",

            "aymara",

            "ashaninka"

        ];


        idiomas.forEach(
            function(idioma) {

                actualizarMapa(idioma);

                actualizarEstadisticas(idioma);

            }
        );

    }

);