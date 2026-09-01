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
                    pregunta: '¿Qué significa "Allin tuta"?',

                    respuestas: [
                        "buenos dias",
                        "buenas tardes",
                        "buenas noches"
                    ],

                    correcta: "buenas noches"
                },

                {
                    pregunta: '¿Cómo se dice "Gracias"?',

                    respuestas: [
                        "wawa",
                        "Ayllu",
                        "Añay"
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
                        "Buenos noches",
                        "Buenos dias",
                        "Gracias"
                    ],

                    correcta: "Buenos dias"
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
                    pregunta: '¿A partir de que numero se comienza decir "Chunka"?',

                    respuestas: [
                        "25",
                        "9",
                        "10"
                    ],

                    correcta: "10"
                },

                {
                    pregunta: '¿Cómo se dice "100"?',

                    respuestas: [
                        "Chunka",
                        "Pachak",
                        "Pichqa"
                    ],

                    correcta: "Pachak"
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
                    pregunta: '¿A partir del numero "1 000" como se comienza a decir?',

                    respuestas: [
                        "Chunka",
                        "Waranqa",
                        "Pachak"
                    ],

                    correcta: "Waranqa"
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
                        "Ayllu",
                        "Wawa",
                        "Tayta"
                    ],

                    correcta: "Tayta"
                },

                {
                    pregunta: '¿Qué significa "Wawa"?',

                    respuestas: [
                        "abuelo",
                        "Niño",
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
                    pregunta: '¿Cómo se dice "abuela"?',

                    respuestas: [
                        "Hatun tayta",
                        "Tayta",
                        "Hatun mama"
                    ],

                    correcta: "Hatun mama"
                }

            ]

        },


        4: {

            preguntas: [

                {
                    pregunta: '¿como se diria "perro"?',

                    respuestas: [
                        "Michi",
                        "Allqu",
                        "Kawallu"
                    ],

                    correcta: "Allqu"
                },

                {
                    pregunta: '¿Cuál de estas palabras representa un animal?',

                    respuestas: [
                        "tayta",
                        "Taruka",
                        "Huk"
                    ],

                    correcta: "Taruka"
                },

                {
                    pregunta: '¿Qué significa "Taruka"?',

                    respuestas: [
                        "Perro",
                        "venado",
                        "venado andino"
                    ],

                    correcta: "venado andino"
                },

                {
                    pregunta: '¿como dirias "gato"?',

                    respuestas: [
                        "Michi",
                        "Allqu",
                        "Taruka"
                    ],

                    correcta: "Michi"
                },

                {
                    pregunta: '¿segun lo aprendido "perro" se dise "Allqu"?',

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
                    pregunta: '¿Qué significa “Kamisaraki”?',

                    respuestas: [
                        "Hola",
                        "Gracias",
                        "Hasta mañana"
                    ],

                    correcta: "Hola"
                },

                {
                    pregunta: '¿Qué significa “Kunjamasktasa”?',

                    respuestas: [
                        "¿Cómo estás?",
                        "¿Dónde vives?",
                        "¿Cómo te llamas?"
                    ],

                    correcta: "¿Cómo estás?"
                },

                {
                    pregunta: '¿Qué significa “Naya walkistwa”?',

                    respuestas: [
                        "Yo soy estudiante",
                        "Yo estoy cansado",
                        "Yo estoy bien"
                    ],

                    correcta: "Yo estoy bien"
                },

                {
                    pregunta: '¿Qué expresión del material se utiliza para saludar?',

                    respuestas: [
                        "Kamisaraki",
                        "Achachila",
                        "Kimsa"
                    ],

                    correcta: "Kamisaraki"
                },

                {
                    pregunta: '¿Cuál de estas expresiones significa “Yo estoy bien” en aimara?',

                    respuestas: [
                        "Naya walkistwa",
                        "Kamisaraki"
                    ],

                    correcta: "Naya walkistwa"
                }

            ]

        },


        2: {

            preguntas: [

                {
                    pregunta: '¿Qué significa “maya” en aimara?',

                    respuestas: [
                        "Uno",
                        "Dos",
                        "Tres"
                    ],

                    correcta: "Uno"
                },

                {
                    pregunta: '¿Qué significa “paya” en aimara?',

                    respuestas: [
                        "Tres",
                        "Dos",
                        "Cinco"
                    ],

                    correcta: "Dos"
                },

                {
                    pregunta: '¿Qué significa “kimsa” en aimara?',

                    respuestas: [
                        "Uno",
                        "Siete",
                        "Tres"
                    ],

                    correcta: "Tres"
                },

                {
                    pregunta: '¿Qué significa “suxta” en aimara?',

                    respuestas: [
                        "Diez",
                        "Ocho",
                        "Seis"
                    ],

                    correcta: "Seis"
                },

                {
                    pregunta: '¿Qué significa “kimsaqallqu” en aimara?',

                    respuestas: [
                        "Ocho",
                        "Siete",
                        "Nueve"
                    ],

                    correcta: "Ocho"
                }

            ]

        },


        3: {

            preguntas: [

                {
                    pregunta: '¿Qué significa “achachila” en aimara?',

                    respuestas: [
                        "Abuelo",
                        "Padre",
                        "Hermano"
                    ],

                    correcta: "Abuelo"
                },

                {
                    pregunta: '¿Qué significa “awicha” en aimara?',

                    respuestas: [
                        "Madre",
                        "Abuela",
                        "Hija"
                    ],

                    correcta: "Hija"
                },

                {
                    pregunta: '¿Qué significa “tayka” en aimara?',

                    respuestas: [
                        "Madre",
                        "Hija",
                        "Hermana"
                    ],

                    correcta: "Madre"
                },

                {
                    pregunta: '¿Qué significa “yuqa” en aimara?',

                    respuestas: [
                        "Padre",
                        "Abuelo",
                        "Hijo"
                    ],

                    correcta: "Hijo"
                },

                {
                    pregunta: '¿Qué significa “ipasiri” en aimara?',

                    respuestas: [
                        "Sobrina",
                        "hijastra"
                    ],

                    correcta: "Sobrina"
                }

            ]

        },


        4: {

            preguntas: [

                {
                    pregunta: '¿Qué significa “anu” en aimara?',

                    respuestas: [
                        "Gato",
                        "Perro",
                        "Zorro"
                    ],

                    correcta: "Perro"
                },

                {
                    pregunta: '¿Qué significa “misi” en aimara?',

                    respuestas: [
                        "Perro",
                        "Gato",
                        "Llama"
                    ],

                    correcta: "Gato"
                },

                {
                    pregunta: '¿Qué significa “k`usillu” en aimara?',

                    respuestas: [
                        "Gavilan",
                        "Zorzal",
                        "Mono titi"
                    ],

                    correcta: "Mono titi"
                },

                {
                    pregunta: '¿Qué significa “chiwanku” en aimara?',

                    respuestas: [
                        "Gallina",
                        "Zorzal",
                        "Gato"
                    ],

                    correcta: "Zorzal"
                },

                {
                    pregunta: '¿Qué significa “allqamari” en aimara?',

                    respuestas: [
                        "Gavilan de campo",
                        "Perro"
                    ],

                    correcta: "Gavilan de campo"
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
                    pregunta: '¿que significa "Aviro"?',

                    respuestas: [
                        "Hola",
                        "Chao",
                        "buenos dias"
                    ],

                    correcta: "Hola"
                },

                {
                    pregunta: '¿que singnifica "Kitaiteri "?',

                    respuestas: [
                        "buenos dias",
                        "buenas tardes",
                        "buenas noches"
                    ],

                    correcta: "buenos dias"
                },

                {
                    pregunta: '¿que es "Shabiniji"?',

                    respuestas: [
                        "buenos dias ",
                        "buenas tardes",
                        "buenas noches"
                    ],

                    correcta: "buenas tardes"
                },

                {
                    pregunta: '¿que significa"Tsitenitaji"?',

                    respuestas: [
                        "buenos dias",
                        "buenas tardes",
                        "buenas noches"
                    ],

                    correcta: "buenas noches"
                },

                {
                    pregunta: '¿como dirias "hasta mañana"',

                    respuestas: [
                        "Amaanje",
                        "Nojataje"
                    ],

                    correcta: "Amaanje"
                }

            ]

        },


        2: {

            preguntas: [

                {
                    pregunta: '¿Qué significa “pankirentsiyetatsiri” en asháninka?',

                    respuestas: [
                        "Plantas",
                        "Animales",
                        "Rios"
                    ],

                    correcta: "Plantas"
                },

                {
                    pregunta: '¿Qué significa “shonkarontsi” en asháninka?',

                    respuestas: [
                        "Movimiento de la tierra",
                        "Lluvia",
                        "Viento"
                    ],

                    correcta: "Movimiento de la tierra"
                },

                {
                    pregunta: '¿Como se dise "arbol"?',

                    respuestas: [
                        "hinchato",
                        "pooroki",
                        "matsiki"
                    ],

                    correcta: "hinchato"
                },

                {
                    pregunta: '¿como se dice "Agua"?',

                    respuestas: [
                        "Nijaato",
                        "nija ",
                        "Nijaki"
                    ],

                    correcta: "nija "
                },

                {
                    pregunta: '¿Que como se dise 'Tierra"?,

                    respuestas: [
                        "tampea",
                        "paamari",
                        "kipatsi"
                    ],

                    correcta: "kipatsi"
                }

            ]

        },


        3: {

            preguntas: [

                {
                    pregunta: '¿Cómo se dice “mamá” en asháninka?',

                    respuestas: [
                        "Ina",
                        "Apa",
                        "Isha"
                    ],

                    correcta: "Ina"
                },

                {
                    pregunta: '¿Cómo se dice “papá” en asháninka?',

                    respuestas: [
                        "Chaine",
                        "Apa",
                        "Iye"
                    ],

                    correcta: "Apa"
                },

                {
                    pregunta: '¿Cómo se dice “abuela” en asháninka?',

                    respuestas: [
                        "Ina",
                        "Isha",
                        "Tsio"
                    ],

                    correcta: "Isha"
                },

                {
                    pregunta: '¿Cómo se dice “abuelo” en asháninka?',

                    respuestas: [
                        "Iye",
                        "Chaine",
                        "Apa"
                    ],

                    correcta: "Chaine"
                },

                {
                    pregunta: '¿Cómo se dice “hermano” en asháninka?',

                    respuestas: [
                        "Iye",
                        "Tsio"
                    ],

                    correcta: "Iye"
                }

            ]

        },


        4: {

            preguntas: [

                {
                    pregunta: '¿Qué significa “koshiri” en asháninka?',

                    respuestas: [
                        "Venado",
                        "Mono",
                        "Tortuga"
                    ],

                    correcta: "Mono"
                },

                {
                    pregunta: '¿Qué significa “maniro” en asháninka?',

                    respuestas: [
                        "Venado",
                        "Tigre",
                        "Nutria"
                    ],

                    correcta: "Venado"
                },

                {
                    pregunta: '¿Qué significa “konoya” en asháninka?',

                    respuestas: [
                        "Sachavaca",
                        "Tortuga",
                        "Mono"
                    ],

                    correcta: "Tortuga"
                },

                {
                    pregunta: '¿Qué significa “parari” en asháninka?',

                    respuestas: [
                        "Venado",
                        "Tigre",
                        "Nutria"
                    ],

                    correcta: "Nutria"
                },

                {
                    pregunta: '¿Qué significa “kemari” en asháninka?',

                    respuestas: [
                        "Sachavaca",
                        "Mono"
                    ],

                    correcta: "Sachavaca"
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