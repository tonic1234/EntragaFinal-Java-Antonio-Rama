// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>CONSTANTES>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Elementos del DOM

const comerB = document.querySelector("#comerButton");
const tomarB = document.querySelector("#aguaButton");
const dormirB = document.querySelector("#dormirButton");
const recolectarB = document.querySelector("#recolectarButton");
const fabricarB = document.querySelector("#fabricarButton");
const esperarB = document.querySelector("#esperarButton");
const closeCraft = document.querySelector("#closeIconCraft");
const closeRecollect = document.querySelector("#closeIconRecollect");
const closeMsg = document.querySelector("#closeIconMsg");
const closeInvt = document.querySelector("#closeIconInventory");
const closeEat = document.querySelector("#closeIconEat");
const antorchaB = document.querySelector(".antorchaButton");
const fogataB = document.querySelector(".fogataButton");
const recolectorB = document.querySelector(".recolectorButton");
const trampaB = document.querySelector(".trampButton");
const reStartB = document.querySelector(".reStartButton");
const inventoryB = document.querySelector(".backPackIcon");
const playB = document.querySelector(".startButton");
const foodSlot_1 = document.querySelector(".food_1");
const foodSlot_2 = document.querySelector(".food_2");
const foodSlot_3 = document.querySelector(".food_3");
const foodSlot_4 = document.querySelector(".food_4");
const foodSlot_5 = document.querySelector(".food_5");
const foodSlot_6 = document.querySelector(".food_6");
const foodSlot_7 = document.querySelector(".food_7");
const foodSlot_8 = document.querySelector(".food_8");
const cookSlotB_1 = document.querySelector(".cookIcon_1");
const cookSlotB_2 = document.querySelector(".cookIcon_2");
const cookSlotB_3 = document.querySelector(".cookIcon_3");
const cookSlotB_4 = document.querySelector(".cookIcon_4");
const cookSlotB_5 = document.querySelector(".cookIcon_5");
const cookSlotB_6 = document.querySelector(".cookIcon_6");
const cookSlotB_7 = document.querySelector(".cookIcon_7");
const cookSlotB_8 = document.querySelector(".cookIcon_8");
const recollectDiscart_1 = document.querySelector("#discartRecolectSlot_1");
const recollectDiscart_2 = document.querySelector("#discartRecolectSlot_2");
const recollectDiscart_3 = document.querySelector("#discartRecolectSlot_3");
const inventoryDiscart_1 = document.querySelector("#inventorySlotDiscart_1");
const inventoryDiscart_2 = document.querySelector("#inventorySlotDiscart_2");
const inventoryDiscart_3 = document.querySelector("#inventorySlotDiscart_3");
const inventoryDiscart_4 = document.querySelector("#inventorySlotDiscart_4");
const inventoryDiscart_5 = document.querySelector("#inventorySlotDiscart_5");
const inventoryDiscart_6 = document.querySelector("#inventorySlotDiscart_6");
const inventoryDiscart_7 = document.querySelector("#inventorySlotDiscart_7");
const inventoryDiscart_8 = document.querySelector("#inventorySlotDiscart_8");
const muteB = document.querySelector(".muteIcon");
const unMuteB = document.querySelector(".unMuteIcon");

// Objetos del juego.

const trampa = {
    nombre: "Trampa",
    imagen: '<img src="./imagenes/trampa.png" alt="">',
    tipo: "objeto"
}

const recolector = {
    nombre: "Recolector de Agua",
    imagen: '<img src="./imagenes/recolectordeagua.png" alt="">',
    tipo: "objeto"
}

const fogata = {
    nombre: "Fogata",
    imagen: '<img src="./imagenes/fuego.png" alt="">',
    tipo: "objeto"
}

const antorcha = {
    nombre: "Antorcha",
    imagen: '<img src="./imagenes/antorcha.png" alt="">',
    tipo: "objeto"
}

const hoja = {
    nombre: "Hoja",
    imagen: '<img src="./imagenes/hoja.png" alt="">',
    tipo: "objeto"

}
const palo = {
    nombre: "Palo",
    imagen: '<img src="./imagenes/palo.png" alt="">',
    tipo: "objeto"
}
const piedra = {
    nombre: "Piedra",
    imagen: '<img src="./imagenes/piedra.png" alt="">',
    tipo: "objeto"
}
const botella = {
    nombre: "Botella Vacia",
    imagen: '<img src="./imagenes/botellavacia.png" alt="">',
    tipo: "objeto"
}
const botellaLlena = {
    nombre: "Botella con agua",
    imagen: '<img src="./imagenes/botellallena.png" alt="">',
    tipo: "objeto"
}
const fruta = {
    nombre: "Fruta Silvestre",
    valNut: -10,
    moral: 10,
    sed: -10,
    imagen: '<img src="./imagenes/fruta.png" alt="">',
    tipo: "comida"
}
const gusano = {
    nombre: "Gusano",
    valNut: -5,
    moral: -30,
    sed: 5,
    imagen: '<img src="./imagenes/gusano.png" alt="">',
    tipo: "comida"
}
const conejo = {
    nombre: "Conejo",
    valNut: -15,
    moral: -20,
    sed: -5,
    imagen: '<img src="./imagenes/conejo.png" alt="">',
    tipo: "comida"

}
const carneConejo = {
    nombre: "Carne Cocida de Conejo",
    valNut: -25,
    moral: 30,
    sed: 10,
    imagen: '<img src="./imagenes/carnedeconejo.png" alt="">',
    tipo: "comida"
}

// Arreglo de la mochila del jugador.

let mochila = [];

// Arreglo de los upgrades del camping.

const campingUpGradeFogata = [];
const campingUpGradeRecolector = [];
const campingUpGradeAntorcha = [];
const campingUpGradeTrampa = [];

// Tiempos de los upgrades del camping.

const tiempoFogata = [];
const tiempoRecolector = [];
const tiempoAntorcha = [];
const tiempoReloj = [];
const tiempoTrampa = [];

// Arreglo de frases para la pantalla de espera .

const frasesDeEspera = ["Te sientas bajo un árbol a esperar que pasen algunas horas",
    "Miras las hormigas llevar hojas a su hormiguero para entretenerte algunas horas",
    "Escuchas como los pájaros cantan y esperas que pase el tiempo",
    "Buscas formas en las nubes para pasar el rato",
    "Intentas buscar recuerdos en tu memoria y pasan algunas horas"];

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>NO CONSTANTES>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Stats del personaje

let salud = 70;
let hambre = 30;
let sed = 30;
let cansancio = 10;
let moral = 70;

// Variables de dia y hora cada actividad lleva determinada cantidad de horas y se van sumando.

let hora = 12;
let minutos = 0;
let dias = 0;
let horasTotales = 0;
let minutosTotales = 0;
let clima = Math.ceil(Math.random() * 10);

// Arreglo usado para la recolección y esta formado por
// los elemento que se recolectan en cada iteración.

let recolectado = [];

let alimentos = [];
let noAlimentos = [];

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>FUNCIONES>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Función del progreso del juego

function gameProgress() {
    clock();
    state();
    upGrades();
    shakeIcon();
    trampaRecolect();
    recolectorRecolect();
    statusBar(".statusBarHealth", salud);
    statusBar(".statusBarFatigue", cansancio);
    statusBar(".statusBarHunger", hambre);
    statusBar(".statusBarThirst", sed);
    statusBar(".statusBarMood", moral);
    inventario();
    inventoryLimit();
    cambioDeClima();
    dayNight();
    sunMoon()
}

// Función de mensajes del juego

function message(messageText) {
    document.querySelector(".messageBox").style.display = "flex";
    document.querySelector(".message").innerHTML = messageText
}

// Función de iconos de upgrades
function upGrades() {

    // Reglas de duración de los upGrades del camping

    // La fogata dura 24 horas

    horasTotales - tiempoFogata[0] === 24 && campingUpGradeFogata.shift();

    // La antorcha dura 5 horas

    horasTotales - tiempoAntorcha[0] === 5 && campingUpGradeAntorcha.shift();

    // El recolector 72 horas

    horasTotales - tiempoRecolector[0] === 72 && campingUpGradeRecolector.shift();

    // La trampa 72 horas

    horasTotales - tiempoTrampa[0] === 72 && campingUpGradeTrampa.shift();

    // Reglas de horario para la fogata, piedras de la fogata y destello del fuego

    if (campingUpGradeFogata.length === 0) {
        document.querySelector(".campFire").style.display = "none";
        document.querySelector(".fireRock").style.display = "none";
        document.querySelector(".fireRockNigth").style.display = "none";
        document.querySelector(".fireglow").style.display = "none"
        document.querySelector("#fireplace").pause();
    }

    else if (campingUpGradeFogata.length > 0 && hora >= 6 && hora < 20) {
        document.querySelector(".campFire").style.display = "flex";
        document.querySelector(".fireRock").style.display = "flex";
        document.querySelector(".fireRockNigth").style.display = "none";
        document.querySelector(".fireglow").style.display = "none"
        document.querySelector("#fireplace").play();

    } else if (campingUpGradeFogata.length > 0 && hora >= 20 && hora <= 23 || hora >= 0 && hora <= 6) {
        document.querySelector(".campFire").style.display = "flex";
        document.querySelector(".fireRock").style.display = "none";
        document.querySelector(".fireRockNigth").style.display = "flex";
        document.querySelector(".fireglow").style.display = "flex"
        document.querySelector("#fireplace").play();

    } else if (campingUpGradeFogata.length > 0 && hora >= 0 && hora <= 6) {
        document.querySelector(".campFire").style.display = "flex";
        document.querySelector(".fireRock").style.display = "none";
        document.querySelector(".fireRockNigth").style.display = "flex";
        document.querySelector(".fireglow").style.display = "flex"
        document.querySelector("#fireplace").play();
    }

    else {
        document.querySelector(".campFire").style.display = "none";
        document.querySelector(".fireRock").style.display = "nonen";
        document.querySelector(".fireRockNigth").style.display = "none";
        document.querySelector(".fireglow").style.display = "none"
        document.querySelector("#fireplace").pause();
    }


    campingUpGradeAntorcha.length > 0 ? document.querySelector(".upgradeIconAntorcha").style.display = "flex" : document.querySelector(".upgradeIconAntorcha").style.display = "none";

}

// Función de estados generales

function state() {

    // Si salud llega a cero se recupera el objeto Json y se imprime el nombre

    if (salud == 0) {

        document.querySelector(".statusBarHealth").style.width = "0px";
        document.querySelector(".loseBox").style.display = `flex`;
        player()

        async function player() {
            // Recupero el string del localStorage y lo vuelvo a convertir en objeto con JSON.parse

            const objetoJson = JSON.parse(localStorage.getItem(1))
            let tiempoSobrevivido = horasTotales + " horas"

            // Con un spread de objetos creo un nuevo objeto y le agrego tiempoSobrevivido

            const player = { ...objetoJson, tiempoSobrevivido }
            document.querySelector(".timeScore").innerHTML = player.nombre + " has sobrevivido " + player.tiempoSobrevivido;
      
            let data = [ {
                "Nombre" : player.nombre,
                "Tiempo" : horasTotales
              } ]

            await fetch("https://app.sheetlabs.com/2022/LostGame", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',

                },
                body: JSON.stringify(data)
            })

                .then(response => {
                    if (response.status === 204) {
                        console.log('POST Exitoso!');
                    } else {
                        throw new Error('Algo salio mal!');
                    }
                })
                .catch((error) => {
                    console.error('Error:', error);
                });


            await fetch("https://app.sheetlabs.com/2022/LostGame", {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);

                    data.sort(function (a, b) {
                        if (a.Tiempo > b.Tiempo) {
                          return 1;
                        }
                        if (a.Tiempo < b.Tiempo) {
                          return -1;
                        }
                        // a.tiempo es igual a b tiempo
                        return 0;
                      });

                    let score_1 = data[data.length - 1]
                    let score_2 = data[data.length - 2]
                    let score_3 = data[data.length - 3]
                    let score_4 = data[data.length - 4]
                    let score_5 = data[data.length - 5]
                    let score_6 = data[data.length - 6]
                    let score_7 = data[data.length - 7]
                    let score_8 = data[data.length - 8]
                

                    document.querySelector(".playerName_1").innerHTML = score_1.Nombre;
                    document.querySelector(".playerScore_1").innerHTML = score_1.Tiempo;

                    document.querySelector(".playerName_2").innerHTML = score_2.Nombre;
                    document.querySelector(".playerScore_2").innerHTML = score_2.Tiempo;

                    document.querySelector(".playerName_3").innerHTML = score_3.Nombre;
                    document.querySelector(".playerScore_3").innerHTML = score_3.Tiempo;

                    document.querySelector(".playerName_4").innerHTML = score_4.Nombre;
                    document.querySelector(".playerScore_4").innerHTML = score_4.Tiempo;

                    document.querySelector(".playerName_5").innerHTML = score_5.Nombre;
                    document.querySelector(".playerScore_5").innerHTML = score_5.Tiempo;

                    document.querySelector(".playerName_6").innerHTML = score_6.Nombre;
                    document.querySelector(".playerScore_6").innerHTML = score_6.Tiempo;

                    document.querySelector(".playerName_7").innerHTML = score_7.Nombre;
                    document.querySelector(".playerScore_7").innerHTML = score_7.Tiempo;

                    document.querySelector(".playerName_8").innerHTML = score_8.Nombre;
                    document.querySelector(".playerScore_8").innerHTML = score_8.Tiempo;
            
                })
                .catch((error) => {
                    console.error(error);
                });


        }


    }
    hambre > 80 && salud--;
    hambre < 30 && salud++;
    hambre < 10 && (salud += 2);

    hambre > 100 && (hambre = 100);
    hambre < 0 && (hambre = 0);

    sed > 80 && (salud -= 2);
    sed < 30 && salud++;
    sed < 10 && (salud += 2);

    sed > 100 && (hambre = 100);
    sed < 0 && (hambre = 0);

    campingUpGradeFogata.length > 0 && moral++;

    moral > 100 && (moral = 100);
    moral < 0 && (moral = 0);

    salud > 100 && (hambre = 100);
    salud < 0 && (hambre = 0)

}
// Función hace temblar los iconos de estado si un stats esta al limite 

function shakeIcon() {

    if (salud < 20) {
        document.querySelector(".StatusIconSalud").style.animationName = "heartbeat"
    } else {
        document.querySelector(".StatusIconSalud").style.animationName = ` `
    }
    if (cansancio > 80) {
        document.querySelector(".StatusIconCansancio").style.animationName = "heartbeat"
    } else {
        document.querySelector(".StatusIconCansancio").style.animation = ` `
    }
    if (hambre > 80) {
        document.querySelector(".StatusIconHambre").style.animationName = "heartbeat"
    } else {
        document.querySelector(".StatusIconHambre").style.animation = ` `
    }
    if (sed > 80) {
        document.querySelector(".StatusIconSed").style.animationName = "heartbeat"
    } else {
        document.querySelector(".StatusIconSed").style.animation = ` `
    }
    if (moral < 20) {
        document.querySelector(".StatusIconMoral").style.animationName = "heartbeat"
    } else {
        document.querySelector(".StatusIconMoral").style.animation = ` `
    }

}
// Función que vuelve gris la pantalla si el personaje tiene bajo animo

function grayscale() {

    if (moral <= 25) {
        document.querySelector(".gameBox").style.filter = "grayscale(100%)"
    } else if (moral > 25 && moral <= 35) {
        document.querySelector(".gameBox").style.filter = "grayscale(70%)"
    } else if (moral > 35 && moral <= 40) {
        document.querySelector(".gameBox").style.filter = "grayscale(50%)"
    } else {
        document.querySelector(".gameBox").style.filter = "grayscale(0%)"
    }
}

// Función que vuelve borrosa la pantalla si el personaje tiene mucho cansancio

function blur() {
    if (cansancio > 80) {
        message("Estas muy cansado te estas quedando  dormido");
        document.querySelector("#body").style.filter = "blur(1px)"
    } else if (cansancio <= 80) {
        document.querySelector("#body").style.filter = "blur(0px)"
    } else if (cansancio > 100) {
        dormir()
    } else if (cansancio < 0) {
        cansancio = 100
    }
}
// Función del reloj

function clockPrint() {
    document.querySelector(".timeText").innerHTML = hora + ":" + minutos;
    if (minutos < 10) {
        document.querySelector(".timeText").innerHTML = hora + ":" + "0" + minutos;
    }
    document.querySelector(".dayText1").innerHTML = "Dia " + dias;
}

function clock() {
    if (hora == 24) {
        hora = 0;
        dias += 1;
        clima = Math.ceil(Math.random() * 10);
        clockPrint()
    } else if (hora > 24) {
        let saldoHoras = hora - 24;
        hora = saldoHoras;
        dias += 1;
        clima = Math.ceil(Math.random() * 10);
        clockPrint()
    } else {
        clockPrint()
    }
    if (minutos == 60) {
        minutos == 0;
        hora += 1
        clockPrint()
    } else if (minutos > 60) {
        let difMinutos = minutos - 60
        minutos = difMinutos;
        clockPrint()
    }
    if (minutosTotales == 60) {
        minutosTotales = 0;
        horasTotales += 1
        clockPrint()
    } else if (minutosTotales > 60) {
        let difMinutosTotales = minutosTotales - 60
        minutosTotales = difMinutosTotales;
        clockPrint()
    }
}

// Función del sol y la luna. Funciona con una imagen circular con el sol y la luna de lados opuestos
// que va girando 15 grados según pasa la hora

function sunMoon() {
    let hourDivition = (horasTotales + 12) * 15;
    let hourV = -(hourDivition) + 180;
    document.querySelector(".sunMoonImg").style.transform = 'rotate(' + hourV + 'deg)'
}

// Función de clima

function cambioDeClima() {

    if (clima >= 7) {
        document.querySelector(".rainContainer").style.visibility = "visible"
        document.querySelector("#audioDayRain").play();
        campingUpGradeFogata.shift()
        campingUpGradeAntorcha.shift()
    }
    else {
        document.querySelector(".rainContainer").style.visibility = "hidden"
        document.querySelector("#audioDayRain").pause();
    }
}

// Función de nubes

let cloudSpeed = 50

function clouds(speedIncrement) {
    document.querySelector(".clouds").style.translate = cloudSpeed + "px";
    cloudSpeed += speedIncrement
}

// Función del cielo. cambia cielo y fondo según la hora y modifica el camping 

function dayNight() {
    if (hora >= 6 && hora < 17) {
        document.querySelector("body").style.backgroundImage = "url(../imagenes/cielodiabg.png)";
        document.querySelector(".sky").style.backgroundImage = "url(../imagenes/cielodia.png)";
        document.querySelector(".cloudOne").style.backgroundImage = "url(../imagenes/nubedia1.png)";
        document.querySelector(".cloudTwo").style.backgroundImage = "url(../imagenes/nubedia2.png)";
        document.querySelector(".cloudThree").style.backgroundImage = "url(../imagenes/nubedia3.png)";
        document.querySelector("#audioDaySun").play();
        document.querySelector("#audioNigth").pause();
        document.querySelector(".campingDia").style.visibility = "visible"
        document.querySelector(".campingNoche").style.visibility = "hidden"
        document.querySelector(".campingTarde").style.visibility = "hidden"

    } else if (hora >= 17 && hora <= 19) {
        document.querySelector("body").style.backgroundImage = "url(../imagenes/cielotardebg.png)";
        document.querySelector(".sky").style.backgroundImage = "url(../imagenes/cielotarde.png)";
        document.querySelector(".cloudOne").style.backgroundImage = "url(../imagenes/nubetarde1.png)";
        document.querySelector(".cloudTwo").style.backgroundImage = "url(../imagenes/nubetarde2.png)";
        document.querySelector(".cloudThree").style.backgroundImage = "url(../imagenes/nubetarde3.png)";
        document.querySelector("#audioDaySun").play();
        document.querySelector("#audioNigth").pause();
        document.querySelector(".campingDia").style.visibility = "hidden"
        document.querySelector(".campingNoche").style.visibility = "hidden"
        document.querySelector(".campingTarde").style.visibility = "visible"

    } else {
        document.querySelector("body").style.backgroundImage = "url(../imagenes/cielonochebg.png)";
        document.querySelector(".sky").style.backgroundImage = "url(../imagenes/cielonoche2.png)";
        document.querySelector(".cloudOne").style.backgroundImage = "url(../imagenes/nubenoche1.png)";
        document.querySelector(".cloudTwo").style.backgroundImage = "url(../imagenes/nubenoche2.png)";
        document.querySelector(".cloudThree").style.backgroundImage = "url(../imagenes/nubenoche3.png)";
        document.querySelector("#audioDaySun").pause();
        document.querySelector("#audioNigth").play();
        document.querySelector(".campingDia").style.visibility = "hidden"
        document.querySelector(".campingNoche").style.visibility = "visible"
        document.querySelector(".campingTarde").style.visibility = "hidden"
    }
}

// Función de las barras de de stats. Los parámetros son el selector de la barra en el DOM 
// y el stats es el numero de la stat en el programa

function statusBar(querySelector, stats) {
    let barDivition = stats * 3.30;
    let statusV = barDivition + "px";
    document.querySelector(querySelector).style.width = statusV
}

// Funciones de la acción comer .

function foodImg() {

    let [alimento_1, alimento_2, alimento_3, alimento_4, alimento_5, alimento_6, alimento_7, alimento_8] = alimentos

    if (alimento_1 != undefined && alimento_1 == conejo) {
        document.querySelector(".food_1").innerHTML = alimento_1.imagen;
        document.querySelector(".cookIcon_1").style.display = "flex";
    } else if (alimento_1 != undefined && alimento_1 != conejo) {
        document.querySelector(".food_1").innerHTML = alimento_1.imagen;
        document.querySelector(".cookIcon_1").style.display = "none";
    } else {
        document.querySelector(".food_1").innerHTML = " ";
        document.querySelector(".cookIcon_1").style.display = "none";
    }

    if (alimento_2 != undefined && alimento_2 == conejo) {
        document.querySelector(".food_2").innerHTML = alimento_2.imagen;
        document.querySelector(".cookIcon_2").style.display = "flex";
    }
    else if (alimento_2 != undefined && alimento_2 != conejo) {
        document.querySelector(".food_2").innerHTML = alimento_2.imagen;
        document.querySelector(".cookIcon_2").style.display = "none";
    }
    else {
        document.querySelector(".food_2").innerHTML = " ";
        document.querySelector(".cookIcon_2").style.display = "none";
    }

    if (alimento_3 != undefined && alimento_3 == conejo) {
        document.querySelector(".food_3").innerHTML = alimento_3.imagen;
        document.querySelector(".cookIcon_3").style.display = "flex";
    } else if (alimento_3 != undefined && alimento_3 != conejo) {
        document.querySelector(".food_3").innerHTML = alimento_3.imagen;
        document.querySelector(".cookIcon_3").style.display = "none";
    } else {
        document.querySelector(".food_3").innerHTML = " ";
        document.querySelector(".cookIcon_3").style.display = "none";
    }

    if (alimento_4 != undefined && alimento_4 == conejo) {
        document.querySelector(".food_4").innerHTML = alimento_4.imagen;
        document.querySelector(".cookIcon_4").style.display = "flex";
    } else if (alimento_4 != undefined && alimento_4 != conejo) {
        document.querySelector(".food_4").innerHTML = alimento_4.imagen;
        document.querySelector(".cookIcon_4").style.display = "none";
    } else {
        document.querySelector(".food_4").innerHTML = " ";
        document.querySelector(".cookIcon_4").style.display = "none";
    }

    if (alimento_5 != undefined && alimento_5 == conejo) {
        document.querySelector(".food_5").innerHTML = alimento_5.imagen;
        document.querySelector(".cookIcon_5").style.display = "flex";
    } else if (alimento_5 != undefined && alimento_5 != conejo) {
        document.querySelector(".food_5").innerHTML = alimento_5.imagen;
        document.querySelector(".cookIcon_5").style.display = "none";
    } else {
        document.querySelector(".food_5").innerHTML = " ";
        document.querySelector(".cookIcon_5").style.display = "none";
    }

    if (alimento_2 != undefined && alimento_6 == conejo) {
        document.querySelector(".food_6").innerHTML = alimento_6.imagen;
        document.querySelector(".cookIcon_6").style.display = "flex";
    } else if (alimento_6 != undefined && alimento_6 != conejo) {
        document.querySelector(".food_6").innerHTML = alimento_6.imagen;
        document.querySelector(".cookIcon_6").style.display = "none";
    } else {
        document.querySelector(".food_6").innerHTML = " ";
        document.querySelector(".cookIcon_6").style.display = "none";
    }

    if (alimento_7 != undefined && alimento_7 == conejo) {
        document.querySelector(".food_3").innerHTML = alimento_7.imagen;
        document.querySelector(".cookIcon_3").style.display = "flex";
    } else if (alimento_7 != undefined && alimento_7 != conejo) {
        document.querySelector(".food_7").innerHTML = alimento_7.imagen;
        document.querySelector(".cookIcon_7").style.display = "none";
    } else {
        document.querySelector(".food_7").innerHTML = " ";
        document.querySelector(".cookIcon_7").style.display = "none";
    }

    if (alimento_8 != undefined && alimento_8 == conejo) {
        document.querySelector(".food_8").innerHTML = alimento_8.imagen;
        document.querySelector(".cookIcon_8").style.display = "flex";
    } else if (alimento_8 != undefined && alimento_8 != conejo) {
        document.querySelector(".food_8").innerHTML = alimento_8.imagen;
        document.querySelector(".cookIcon_8").style.display = "none";
    } else {
        document.querySelector(".food_8").innerHTML = " ";
        document.querySelector(".cookIcon_8").style.display = "none";
    }
}

function comerSlot_1() {
    document.querySelector("#eatAudio").play();
    hambre += alimentos[0].valNut;
    cansancio += 15;
    sed += alimentos[0].sed;
    moral += alimentos[0].moral;
    minutos += 30;
    minutosTotales += 30;
    alimentos.splice(0, 1);
    foodImg()
    gameProgress()
}
function cookSlot_1() {
    document.querySelector("#cookAudio").play();
    cansancio += 15;
    hora += 1;
    horasTotales += 1;
    document.querySelector(".food_1").innerHTML = `<lottie-player src="./imagenes/redDots.json" speed="1" loop autoplay>
    </lottie-player>`;
    setTimeout(function () {
        alimentos.splice(0, 1, carneConejo);
        foodImg()
    }, 2500);
    gameProgress()
}
function comerSlot_2() {
    document.querySelector("#eatAudio").play();
    hambre += alimentos[1].valNut;
    cansancio += 15;
    sed += alimentos[1].sed;
    moral += alimentos[1].moral;
    minutos += 30;
    minutosTotales += 30;
    alimentos.splice(1, 1);
    foodImg()
    gameProgress()
}
function cookSlot_2() {
    document.querySelector("#cookAudio").play();
    cansancio += 15;
    hora += 1;
    horasTotales += 1;
    document.querySelector(".food_2").innerHTML = `<lottie-player src="./imagenes/redDots.json" speed="1" loop autoplay>
    </lottie-player>`;
    setTimeout(function () {
        alimentos.splice(1, 1, carneConejo);
        foodImg()
    }, 2500);
    gameProgress()
}
function comerSlot_3() {
    document.querySelector("#eatAudio").play();
    hambre += alimentos[2].valNut;
    cansancio += 15;
    sed += alimentos[2].sed;
    moral += alimentos[2].moral;
    minutos += 30;
    minutosTotales += 30;
    alimentos.splice(2, 1);
    foodImg()
    gameProgress()
}
function cookSlot_3() {
    document.querySelector("#cookAudio").play();
    cansancio += 15;
    hora += 1;
    horasTotales += 1;
    document.querySelector(".food_3").innerHTML = `<lottie-player src="./imagenes/redDots.json" speed="1" loop autoplay>
    </lottie-player>`;
    setTimeout(function () {
        alimentos.splice(2, 1, carneConejo);
        foodImg()
    }, 2500);
    gameProgress()
}
function comerSlot_4() {
    document.querySelector("#eatAudio").play();
    hambre += alimentos[3].valNut;
    cansancio += 15;
    sed += alimentos[3].sed;
    moral += alimentos[3].moral;
    minutos += 30;
    minutosTotales += 30;
    alimentos.splice(3, 1);
    foodImg()
    gameProgress()
}
function cookSlot_4() {
    document.querySelector("#cookAudio").play();
    cansancio += 15;
    hora += 1;
    horasTotales += 1;
    document.querySelector(".food_4").innerHTML = `<lottie-player src="./imagenes/redDots.json" speed="1" loop autoplay>
    </lottie-player>`;
    setTimeout(function () {
        alimentos.splice(3, 1, carneConejo);
        foodImg()
    }, 2500);
    gameProgress()
}
function comerSlot_5() {
    document.querySelector("#eatAudio").play();
    hambre += alimentos[4].valNut;
    cansancio += 15;
    sed += alimentos[4].sed;
    moral += alimentos[4].moral;
    minutos += 30;
    minutosTotales += 30;
    alimentos.splice(4, 1);
    foodImg()
    gameProgress()
}
function cookSlot_5() {
    document.querySelector("#cookAudio").play();
    cansancio += 15;
    hora += 1;
    horasTotales += 1;
    document.querySelector(".food_5").innerHTML = `<lottie-player src="./imagenes/redDots.json" speed="1" loop autoplay>
    </lottie-player>`;
    setTimeout(function () {
        alimentos.splice(4, 1, carneConejo);
        foodImg()
    }, 2500);
    gameProgress()
}
function comerSlot_6() {
    document.querySelector("#eatAudio").play();
    hambre += alimentos[5].valNut;
    cansancio += 15;
    sed += alimentos[5].sed;
    moral += alimentos[5].moral;
    minutos += 30;
    minutosTotales += 30;
    alimentos.splice(5, 1);
    foodImg()
    gameProgress()
}
function cookSlot_6() {
    document.querySelector("#cookAudio").play();
    cansancio += 15;
    hora += 1;
    horasTotales += 1;
    document.querySelector(".food_6").innerHTML = `<lottie-player src="./imagenes/redDots.json" speed="1" loop autoplay>
    </lottie-player>`;
    setTimeout(function () {
        alimentos.splice(5, 1, carneConejo);
        foodImg()
    }, 2500);
    gameProgress()
}
function comerSlot_7() {
    document.querySelector("#eatAudio").play();
    hambre += alimentos[6].valNut;
    cansancio += 15;
    sed += alimentos[6].sed;
    moral += alimentos[6].moral;
    minutos += 30;
    minutosTotales += 30;
    alimentos.splice(6, 1);
    foodImg()
    gameProgress()
}
function cookSlot_7() {
    document.querySelector("#cookAudio").play();
    cansancio += 15;
    hora += 1;
    horasTotales += 1;
    document.querySelector(".food_7").innerHTML = `<lottie-player src="./imagenes/redDots.json" speed="1" loop autoplay>
    </lottie-player>`;
    setTimeout(function () {
        alimentos.splice(6, 1, carneConejo);
        foodImg()
    }, 2500);
    gameProgress()
}
function comerSlot_8() {
    document.querySelector("#eatAudio").play();
    hambre += alimentos[7].valNut;
    cansancio += 15;
    sed += alimentos[7].sed;
    moral += alimentos[7].moral;
    minutos += 30;
    minutosTotales += 30;
    alimentos.splice(7, 1);
    foodImg()
    gameProgress()
}
function cookSlot_8() {
    document.querySelector("#cookAudio").play();
    cansancio += 15;
    hora += 1;
    document.querySelector(".food_8").innerHTML = `<lottie-player src="./imagenes/redDots.json" speed="1" loop autoplay>
    </lottie-player>`;
    setTimeout(function () {
        alimentos.splice(7, 1, carneConejo);
        foodImg()
    }, 2500);
    gameProgress()
}

function comer() {
    if (hambre < 20) {

        message("No puedes comer, no tienes hambre")

    }
    else if (mochila.some(element => element.tipo == "comida") === true) {

        alimentos = mochila.filter(element => element.tipo == "comida");
        noAlimentos = mochila.filter(element => element.tipo != "comida");
        mochila = [];
        Array.prototype.push.apply(mochila, noAlimentos);
        document.querySelector(".eatBox").style.display = "flex";

        foodImg()
    }
}
// Función tomar agua

function tomarAgua() {

    mochila.some(objeto => objeto === botellaLlena) || message("No tienes agua para beber")

    if (sed <= 20) {
        message("No puedes beber agua, no tienes sed")
    }

    else if (mochila.some(bebida => bebida.nombre == "Botella con agua") === true) {
        document.querySelector("#drinkAudio").play();
        sed -= 20;
        cansancio -= 5;
        moral += 10;
        minutos += 15;
        horasTotales += 0;
        minutosTotales += 15;
        clouds(50)
        let filtrados = mochila.filter(element => element !== botellaLlena);
        let noFiltrados = mochila.filter(element => element === botellaLlena);

        // Vació el arreglo mochila

        mochila = [];

        // Pongo los elementos del arreglo filtrados dentro de arreglo mochila

        Array.prototype.push.apply(mochila, filtrados);


        for (let index = 0; index < noFiltrados.length - 1; index++) {
            mochila.push(botellaLlena)
        }

        gameProgress()
    }
}

// Función de la acción dormir .

function dormir() {
    if (cansancio <= 30) {
        message("No puedes dormir, no tienes sueño")

    } else {
        document.querySelector("#sleepAudio").play();


        // En las actividades que llevan mas de una hora las horas iteran para pasar por los estados
        // de cada hora y que no se salteen 

        for (let index = 0; index < 8; index++) {
            cansancio -= 7;
            hora += 1
            horasTotales += 1;
            hambre += 1;
            sed += 1;
            moral += 3;
            clouds(8)
            gameProgress()

        }
    }
}

// Función de la acción esperar.

function esperar() {


    for (let index = 0; index < 3; index++) {
        hora += 1
        horasTotales += 1;
        sed += 1;
        cansancio += 2;
        hambre += 1;
        moral -= 3;
        clouds(33)
        gameProgress()
    }

    let frase = Math.ceil(Math.random() * frasesDeEspera.length - 1);
    message(frasesDeEspera[frase]);
}

// Función de la acción inventario .

function inventario() {


    // cada elemento del inventario aparece en la mochila y también en el menu inventario
    // de donde se pueden tirar y dejan libre el lugar

    // Desestructuramos el arreglo mochila para obtener sus propiedades mas directamente

    let [inventorySlot_1, inventorySlot_2, inventorySlot_3, inventorySlot_4, inventorySlot_5,
        inventorySlot_6, inventorySlot_7, inventorySlot_8] = mochila;

    if (inventorySlot_1 != undefined) {
        document.querySelector("#inventorySlot_1").innerHTML = inventorySlot_1.imagen;
        document.querySelector("#inventorySlotDiscart_1").style.display = "flex";
    }
    else {
        document.querySelector("#inventorySlot_1").innerHTML = " ";
        document.querySelector("#inventorySlotDiscart_1").style.display = "none";
    }
    if (inventorySlot_2 != undefined) {
        document.querySelector("#inventorySlot_2").innerHTML = inventorySlot_2.imagen;
        document.querySelector("#inventorySlotDiscart_2").style.display = "flex";

    }
    else {
        document.querySelector("#inventorySlot_2").innerHTML = " ";
        document.querySelector("#inventorySlotDiscart_2").style.display = "none";
    }

    if (inventorySlot_3 != undefined) {
        document.querySelector("#inventorySlot_3").innerHTML = inventorySlot_3.imagen;
        document.querySelector("#inventorySlotDiscart_3").style.display = "flex";

    }
    else {
        document.querySelector("#inventorySlot_3").innerHTML = " ";
        document.querySelector("#inventorySlotDiscart_3").style.display = "none";
    }

    if (inventorySlot_4 != undefined) {
        document.querySelector("#inventorySlot_4").innerHTML = inventorySlot_4.imagen;
        document.querySelector("#inventorySlotDiscart_4").style.display = "flex";

    }
    else {
        document.querySelector("#inventorySlot_4").innerHTML = " ";
        document.querySelector("#inventorySlotDiscart_4").style.display = "none";
    }

    if (inventorySlot_5 != undefined) {
        document.querySelector("#inventorySlot_5").innerHTML = inventorySlot_5.imagen;
        document.querySelector("#inventorySlotDiscart_5").style.display = "flex";

    }
    else {
        document.querySelector("#inventorySlot_5").innerHTML = " ";
        document.querySelector("#inventorySlotDiscart_5").style.display = "none";
    }

    if (inventorySlot_6 != undefined) {
        document.querySelector("#inventorySlot_6").innerHTML = inventorySlot_6.imagen;
        document.querySelector("#inventorySlotDiscart_6").style.display = "flex";

    }
    else {
        document.querySelector("#inventorySlot_6").innerHTML = " ";
        document.querySelector("#inventorySlotDiscart_6").style.display = "none";
    }

    if (inventorySlot_7 != undefined) {
        document.querySelector("#inventorySlot_7").innerHTML = inventorySlot_7.imagen;
        document.querySelector("#inventorySlotDiscart_7").style.display = "flex";

    }
    else {
        document.querySelector("#inventorySlot_7").innerHTML = " ";
        document.querySelector("#inventorySlotDiscart_7").style.display = "none";
    }
    if (inventorySlot_8 != undefined) {
        document.querySelector("#inventorySlot_8").innerHTML = inventorySlot_8.imagen;
        document.querySelector("#inventorySlotDiscart_8").style.display = "flex";

    }
    else {
        document.querySelector("#inventorySlot_8").innerHTML = " ";
        document.querySelector("#inventorySlotDiscart_8").style.display = "none";
    }

    let imagenObjeto = mochila.map((element) => element.imagen);
    document.querySelector(".backPackimg").innerHTML = imagenObjeto
}

// Función que elimina el primer elemento del inventario si la cantidad
// de elementos del mismo es superada

function inventoryLimit() {
    if (mochila.length >= 9) {
        mochila.shift()
        gameProgress()
    }
}

// Función de la acción recolectar .

function recolectImg() {

    if (recolectado.length === 0) {
        document.querySelector(".recollect_1").innerHTML = "";
        document.querySelector(".recollect_2").innerHTML = "";
        document.querySelector(".recollect_3").innerHTML = "";
    }
    if (recolectado.length === 1) {
        document.querySelector(".recollect_1").innerHTML = recolectado[0].imagen;
        document.querySelector(".recollect_2").innerHTML = "";
        document.querySelector(".recollect_3").innerHTML = "";
    }
    if (recolectado.length === 2) {
        document.querySelector(".recollect_1").innerHTML = recolectado[0].imagen;
        document.querySelector(".recollect_2").innerHTML = recolectado[1].imagen;
        document.querySelector(".recollect_3").innerHTML = ""
    }
    if (recolectado.length === 3) {
        setTimeout(function () {
            document.querySelector(".recollect_1").innerHTML = recolectado[0].imagen;
        }, 700);
        setTimeout(function () {
            document.querySelector(".recollect_2").innerHTML = recolectado[1].imagen;
        }, 1400);
        setTimeout(function () {
            document.querySelector(".recollect_3").innerHTML = recolectado[2].imagen
        }, 2100);
    }
}

function recolectar() {

    // Solo se puede recolectar si es de dia


    if (hora >= 6 && hora < 19 || campingUpGradeAntorcha.length > 0) {
        document.querySelector("#recolectAudio").play();

        recolectado = [];

        // Se recolectan  3 objetos al azar según chance

        for (let index = 0; index < 3; index++) {
            let chance = Math.ceil(Math.random() * 12);

            if (chance >= 0 && chance <= 2) {
                recolectado.push(hoja)
            } else if (chance >= 3 && chance <= 5) {
                recolectado.push(palo)
            } else if (chance >= 6 && chance <= 7) {
                recolectado.push(piedra)
            } else if (chance >= 8 && chance <= 9) {
                recolectado.push(gusano)
            } else if (chance >= 10 && chance <= 11) {
                recolectado.push(fruta)
            } else if (chance == 12) {
                recolectado.push(botella)
            }
            hora += 1;
            horasTotales += 1;
            moral += 1;
            cansancio += 8;

        }
        recolectImg()
    }

    else {
        document.querySelector(".recollectBox").style.display = "none";
        message("Necesitas algo que te ilumine para poder recolectar de noche")
    }
}

// Función de la acción fabricar .

function fabricar() {

    let palos = mochila.filter(element => element == palo);
    let hojas = mochila.filter(element => element == hoja);
    let piedras = mochila.filter(element => element == piedra);
    let botellas = mochila.filter(element => element == botella)

    function fabricarRecolector() {

        message("Fabricaste un recolector");
        tiempoRecolector.push(horasTotales);
        campingUpGradeRecolector.push(recolector);
        document.querySelector(".craftingBox").style.display = "none";
        clouds(80)
        const noFiltrados = mochila.filter(element => element != hoja && element != botella);
        const hojasFiltradas = mochila.filter(element => element == hoja);
        const botellasFiltrados = mochila.filter(element => element == botella);

        // Vació el arreglo mochila

        mochila = [];

        // Pongo los elementos del arreglo filtrados dentro de arreglo mochila

        Array.prototype.push.apply(mochila, noFiltrados);

        for (let index = 0; index < hojasFiltradas.length - 4; index++) {
            mochila.push(hoja)
        }

        for (let index = 0; index < botellasFiltrados.length - 1; index++) {
            mochila.push(botella)
        }

        fogataB.removeEventListener('click', fabricarFogata);
        antorchaB.removeEventListener('click', fabricarAntorcha);
        recolectorB.removeEventListener('click', fabricarRecolector);


        for (let index = 0; index < 2; index++) {
            hora += 1;
            horasTotales += 1;
            cansancio += 10;
            sed += 5;
            hambre += 5;
            moral += 10;
            gameProgress()
        }
    }

    function fabricarAntorcha() {
        message("Fabricaste una antorcha");
        tiempoAntorcha.push(horasTotales);
        document.querySelector(".craftingBox").style.display = "none";
        campingUpGradeAntorcha.push(antorcha);
        clouds(50)

        const noFiltrados = mochila.filter(element => element != hoja && element != palo);
        const hojasFiltradas = mochila.filter(element => element == hoja);
        const palosFiltrados = mochila.filter(element => element == palo);

        // Vació el arreglo mochila

        mochila = [];

        // Pongo los elementos del arreglo filtrados dentro de arreglo mochila

        Array.prototype.push.apply(mochila, noFiltrados);

        for (let index = 0; index < hojasFiltradas.length - 2; index++) {
            mochila.push(hoja)
        }
        for (let index = 0; index < palosFiltrados.length - 1; index++) {
            mochila.push(palo)
        }
        fogataB.removeEventListener('click', fabricarFogata);
        antorchaB.removeEventListener('click', fabricarAntorcha);
        recolectorB.removeEventListener('click', fabricarRecolector);
        trampaB.removeEventListener('click', fabricarTrampa);


        for (let index = 0; index < 1; index++) {
            hora += 1;
            horasTotales += 1;
            cansancio += 3;
            sed += 3;
            hambre += 3;
            moral += 10;
            gameProgress()
        }

    }

    function fabricarFogata() {

        message("Fabricaste una fogata");
        tiempoFogata.push(horasTotales);
        document.querySelector(".craftingBox").style.display = "none";
        campingUpGradeFogata.push(fogata);
        clouds(70)

        const noFiltrados = mochila.filter(element => element != piedra && element != palo);
        const piedrasFiltradas = mochila.filter(element => element == piedra);
        const palosFiltrados = mochila.filter(element => element == palo);

        // Vació el arreglo mochila

        mochila = [];

        // Pongo los elementos del arreglo filtrados dentro de arreglo mochila

        Array.prototype.push.apply(mochila, noFiltrados);

        for (let index = 0; index < piedrasFiltradas.length - 2; index++) {
            mochila.push(piedra)
        }

        for (let index = 0; index < palosFiltrados.length - 3; index++) {
            mochila.push(palo)
        }

        fogataB.removeEventListener('click', fabricarFogata);
        antorchaB.removeEventListener('click', fabricarAntorcha);
        recolectorB.removeEventListener('click', fabricarRecolector);
        trampaB.removeEventListener('click', fabricarTrampa);



        for (let index = 0; index < 2; index++) {
            hora += 1;
            horasTotales += 1;
            cansancio += 15;
            sed += 5;
            hambre += 5;
            moral += 10;
            gameProgress()
        }
    }
    function fabricarTrampa() {

        message("Fabricaste una Trampa");
        tiempoTrampa.push(horasTotales);
        document.querySelector(".craftingBox").style.display = "none";
        campingUpGradeTrampa.push(trampa);
        clouds(70)
        gameProgress()

        const noFiltrados = mochila.filter(element => element != hoja && element != palo);
        const hojasFiltradas = mochila.filter(element => element == hoja);
        const palosFiltrados = mochila.filter(element => element == palo);

        // Vació el arreglo mochila

        mochila = [];

        // Pongo los elementos del arreglo filtrados dentro de arreglo mochila

        Array.prototype.push.apply(mochila, noFiltrados);

        for (let index = 0; index < hojasFiltradas.length - 2; index++) {
            mochila.push(hoja)
        }

        for (let index = 0; index < palosFiltrados.length - 2; index++) {
            mochila.push(palo)
        }

        fogataB.removeEventListener('click', fabricarFogata);
        antorchaB.removeEventListener('click', fabricarAntorcha);
        recolectorB.removeEventListener('click', fabricarRecolector);
        trampaB.removeEventListener('click', fabricarTrampa);


        for (let index = 0; index < 2; index++) {
            hora += 1;
            horasTotales += 1;
            cansancio += 15;
            sed += 5;
            hambre += 5;
            moral += 10;
            gameProgress()
        }
    }
    // Reglas del menu de fabricar

    if (botellas.length >= 1 && hojas.length >= 4) {
        document.querySelector(".recolectorButton").style.filter = `grayscale(0%)`;
        document.querySelector(".recolectorButton").style.opacity = `100%`;
        recolectorB.addEventListener('click', fabricarRecolector)
    } else {
        document.querySelector(".recolectorButton").style.filter = `grayscale(100%)`;
        document.querySelector(".recolectorButton").style.opacity = `30%`;
        recolectorB.removeEventListener('click', fabricarRecolector)
    }
    if (palos.length >= 1 && hojas.length >= 2) {
        document.querySelector(".antorchaButton").style.filter = `grayscale(0%)`;
        document.querySelector(".antorchaButton").style.opacity = `100%`;
        antorchaB.addEventListener('click', fabricarAntorcha)
    } else {
        document.querySelector(".antorchaButton").style.filter = `grayscale(100%)`;
        document.querySelector(".antorchaButton").style.opacity = `30%`;
        antorchaB.removeEventListener('click', fabricarAntorcha)
    }
    if (palos.length >= 3 && piedras.length >= 2) {
        document.querySelector(".fogataButton").style.filter = `grayscale(0%)`;
        document.querySelector(".fogataButton").style.opacity = `100%`;
        fogataB.addEventListener('click', fabricarFogata)
    } else {
        document.querySelector(".fogataButton").style.filter = `grayscale(100%)`;
        document.querySelector(".fogataButton").style.opacity = `30%`;
        fogataB.removeEventListener('click', fabricarFogata)
    }

    if (palos.length >= 2 && hojas.length >= 2) {
        document.querySelector(".trampButton").style.filter = `grayscale(0%)`;
        document.querySelector(".trampButton").style.opacity = `100%`;
        trampaB.addEventListener('click', fabricarTrampa)
    } else {
        document.querySelector(".trampButton").style.filter = `grayscale(100%)`;
        document.querySelector(".trampButton").style.opacity = `30%`;
        trampaB.removeEventListener('click', fabricarTrampa)
    }
}


function trampaRecolect() {

    let difTiempoTrampa = horasTotales - tiempoTrampa[0]

    if (campingUpGradeTrampa.length > 0 && difTiempoTrampa % 24 == 0) {
        mochila.push(conejo);
    }
    else if (campingUpGradeTrampa.length > 0) {
        document.querySelector(".upgradeIconTrampa").style.display = "flex";
    }

    else {
        document.querySelector(".upgradeIconTrampa").style.display = "none"
    }
}

function recolectorRecolect() {
    if (campingUpGradeRecolector.length > 0) {
        document.querySelector(".upgradeIconRecolector").style.display = "flex";

        let difTiempoRecolector = horasTotales - tiempoRecolector[0];

        if (campingUpGradeRecolector.length > 0 && difTiempoRecolector % 24 == 0) {
            mochila.push(botellaLlena);
        }

        else if (campingUpGradeRecolector.length > 0) {
            document.querySelector(".upgradeIconRecolector").style.display = "flex";
        }
        else {
            document.querySelector(".upgradeIconRecolector").style.display = "none";
        }
    }
}


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>INICIO DEL PROGRAMA>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//Pantalla de carga


setTimeout(function () {
    document.querySelector(".loadScreen").style.backgroundImage = "url(../imagenes/cielodiabg.png)"
}, 2500);

setTimeout(function () {
    document.querySelector(".loadScreen").style.backgroundImage = "url(../imagenes/cielotardebg.png)"
}, 3500);

setTimeout(function () {
    document.querySelector(".loadScreen").style.backgroundImage = "url(../imagenes/cielonochebg.png)"
}, 4500);

setTimeout(function () {
    document.querySelector(".loadScreen").style.opacity = "0"
}, 7500);

setTimeout(function () {
    document.querySelector(".loadScreen").style.display = "none"
}, 10000);

//Botones de la interfaz

playB.addEventListener('click', function () {
    document.querySelector("#click").play();
    document.querySelector("#audioDaySun").play();

    if (clima >= 7) {
        document.querySelector("#audioDayRain").play();

    }
    let jugador = document.querySelector(".nameBox").value;
    const player = {
        nombre: jugador
    }

    //Se pide el nombre del jugador y luego se guarda en el local Storage para ser utilizado después

    localStorage.setItem(1, JSON.stringify(player));
    document.querySelector(".menuBg").classList.toggle('menuBgOut');


    setTimeout(function () {
        document.querySelector(".menuBg").style.display = "none";
    }, 2500);

});

clima = Math.ceil(Math.random() * 10);



message(`Te despiertas en un bosque junto a una carpa, tienes un gran
dolor de cabeza y no recuerdas nada, absolutamente nada.
En el suelo, a pocos metros de ti, hay una mochila. La agarras,
tiene una botella vacía, algunas hojas con instrucciones para fabricar
elementos de supervivencia y un reloj que funciona pero tiene la correa rota.`)

gameProgress();

tomarB.addEventListener('click', function () {
    document.querySelector("#click").play();
    tomarAgua()
});
dormirB.addEventListener('click', function () {
    document.querySelector("#click").play();
    dormir()
});

esperarB.addEventListener('click', function () {
    document.querySelector("#click").play();
    esperar()
});

fabricarB.addEventListener('click', function () {
    document.querySelector("#click").play();
    document.querySelector(".craftingBox").style.display = "flex";
    fabricar()
});

inventoryB.addEventListener('click', function () {
    document.querySelector("#backPackAudio").play();
    document.querySelector(".inventoryBox").style.display = "flex"
});

closeMsg.addEventListener('click', function () {
    document.querySelector("#click").play();
    document.querySelector(".messageBox").style.display = "none"
});

closeCraft.addEventListener('click', function () {
    document.querySelector("#click").play();
    document.querySelector(".craftingBox").style.display = "none";

});

closeInvt.addEventListener('click', function () {
    document.querySelector("#click").play();
    document.querySelector(".inventoryBox").style.display = "none"
});

reStartB.addEventListener('click', function () {
    document.querySelector("#click").play();
    window.location.reload()
});

function botonRecolectar() {
    document.querySelector(".recollectBox").style.display = "flex";
    recolectar()
}
recolectarB.addEventListener('click', botonRecolectar);
closeRecollect.addEventListener('click', function () {
    document.querySelector(".recollectBox").style.display = "none";
    recoleccion = [];
});

recollectDiscart_1.addEventListener('click', function () {
    document.querySelector("#discartAudio").play();
    recolectado.splice(0, 1);
    recolectImg()
    gameProgress()
});
recollectDiscart_2.addEventListener('click', function () {
    document.querySelector("#discartAudio").play();
    recolectado.splice(1, 1);
    recolectImg()
    gameProgress()
});
recollectDiscart_3.addEventListener('click', function () {
    document.querySelector("#discartAudio").play();
    recolectado.splice(2, 1);
    recolectImg()
    gameProgress()
});
closeRecollect.addEventListener('click', function () {
    document.querySelector("#click").play();
    Array.prototype.push.apply(mochila, recolectado);
    document.querySelector(".recollectBox").style.display = "none"
    document.querySelector(".recollect_1").innerHTML =
        `<lottie-player class="loadRecollect" src="./imagenes/loaddots.json" speed="1" loop autoplay></lottie-player>`
    document.querySelector(".recollect_2").innerHTML =
        `<lottie-player class="loadRecollect" src="./imagenes/loaddots.json" speed="1" loop autoplay></lottie-player>`
    document.querySelector(".recollect_3").innerHTML =
        `<lottie-player class="loadRecollect" src="./imagenes/loaddots.json" speed="1" loop autoplay></lottie-player>`
    gameProgress()
});
inventoryDiscart_1.addEventListener('click', function () {
    document.querySelector("#discartAudio").play();
    mochila.splice(0, 1);
    document.querySelector("#inventorySlot_1").innerHTML = "";
    minutos += 5;
    minutosTotales += 5;
    gameProgress()
});
inventoryDiscart_2.addEventListener('click', function () {
    document.querySelector("#discartAudio").play();
    mochila.splice(1, 1);
    document.querySelector("#inventorySlot_2").innerHTML = "";
    minutos += 5;
    minutosTotales += 5;
    gameProgress()
});
inventoryDiscart_3.addEventListener('click', function () {
    document.querySelector("#discartAudio").play();
    mochila.splice(2, 1);
    document.querySelector("#inventorySlot_3").innerHTML = "";
    minutos += 5;
    minutosTotales += 5;
    gameProgress()
});
inventoryDiscart_4.addEventListener('click', function () {
    document.querySelector("#discartAudio").play();
    mochila.splice(3, 1);
    document.querySelector("#inventorySlot_4").innerHTML = "";
    minutos += 5;
    minutosTotales += 5;
    gameProgress()
});
inventoryDiscart_5.addEventListener('click', function () {
    document.querySelector("#discartAudio").play();
    mochila.splice(4, 1);
    document.querySelector("#inventorySlot_5").innerHTML = "";
    minutos += 5;
    minutosTotales += 5;
    gameProgress()
});
inventoryDiscart_6.addEventListener('click', function () {
    document.querySelector("#discartAudio").play();
    mochila.splice(5, 1);
    document.querySelector("#inventorySlot_6").innerHTML = "";
    minutos += 5;
    minutosTotales += 5;
    gameProgress()
});
inventoryDiscart_7.addEventListener('click', function () {
    document.querySelector("#discartAudio").play();
    mochila.splice(6, 1);
    document.querySelector("#inventorySlot_7").innerHTML = "";
    minutos += 5;
    minutosTotales += 5;
    gameProgress()
});
inventoryDiscart_8.addEventListener('click', function () {
    document.querySelector("#discartAudio").play();
    mochila.splice(7, 1);
    document.querySelector("#inventorySlot_8").innerHTML = "";
    minutos += 5;
    minutosTotales += 5;
    gameProgress()
});

comerB.addEventListener('click', function () {
    document.querySelector("#click").play();
    document.querySelector(".eatBox").style.display = "flex";
    comer()
});

closeEat.addEventListener('click', function () {
    document.querySelector("#click").play();
    document.querySelector(".eatBox").style.display = "none";
    Array.prototype.push.apply(mochila, alimentos);
    gameProgress()
});

foodSlot_1.addEventListener('click', comerSlot_1);
foodSlot_2.addEventListener('click', comerSlot_2);
foodSlot_3.addEventListener('click', comerSlot_3);
foodSlot_4.addEventListener('click', comerSlot_4);
foodSlot_5.addEventListener('click', comerSlot_5);
foodSlot_6.addEventListener('click', comerSlot_6);
foodSlot_7.addEventListener('click', comerSlot_7);
foodSlot_8.addEventListener('click', comerSlot_8);

cookSlotB_1.addEventListener('click', cookSlot_1);
cookSlotB_2.addEventListener('click', cookSlot_2);
cookSlotB_3.addEventListener('click', cookSlot_3);
cookSlotB_4.addEventListener('click', cookSlot_4);
cookSlotB_5.addEventListener('click', cookSlot_5);
cookSlotB_6.addEventListener('click', cookSlot_6);
cookSlotB_7.addEventListener('click', cookSlot_7);
cookSlotB_8.addEventListener('click', cookSlot_8);

muteB.addEventListener('click', function () {
    document.querySelector("#audioDaySun").pause();
    document.querySelector("#audioDayRain").pause();
    document.querySelector("#audioNigth").pause();
    document.querySelector("#fireplace").pause();
    document.querySelector(".muteIcon").style.visibility = "hidden"
});
unMuteB.addEventListener('click', function () {
    document.querySelector("#audioDaySun").play();
    if (clima >= 5) {
        document.querySelector("#audioDayRain").play();
    }
    if (hora >= 19 && hora <= 23 || hora >= 0 && hora <= 5)
        document.querySelector("#audioNigth").play();

    if (campingUpGradeFogata.length > 0) {
        document.querySelector("#fireplace").play();
    }
    document.querySelector(".muteIcon").style.visibility = "visible"
});

// Hacer guia de juego
// arreglar info de los botones

// eventos aleatorios
// mejora de Audio
// audio a cada comida

// dividir en módulos
// corregir faltas

// arreglar sistema de cocinar
// sistema de variables que afecten las estadisticas

// moral baja = tiempos de acción mayores
// engripado = cansancio mayor y salud menor
// enfermo = no puedes comer aun con hambre y sed baja mas rapido

// agregar estado enfermo
// agregar estado engripado al salir con lluvia
// si te engripas o estas enfermo no puedes recolectar

// free fav icon maker
