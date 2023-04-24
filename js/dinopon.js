const sectionSeleccionarAtaque = document.getElementById('selecciona-ataque')
const sectionReiniciar= document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('boton-dinomascota')

const botonReiniciar = document.getElementById('boton-reiniciar')

const sectionSeleccionarMascota = document.getElementById('selecciona-mascota')

const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const sectionMensajes = document.getElementById('resultado')
const ataqueDelJugador = document.getElementById('ataque-del-jugador')
const ataqueDelEnemigo = document.getElementById('ataque-del-enemigo')
const contenedorTarjetas = document.getElementById('contenedorTarjetas')
const contenedorAtaques = document.getElementById('contenedorAtaques')

let dinopones = []

let ataqueJugador = []
let ataqueEnemigo = []

let opcionDeDinopones

let inputHipodoge
let inputCapipepo 
let inputRatigueya 
let inputLangostelvis
let inputTucapalma 
let inputPydos 

let mascotaJugador

let ataquesDinopon 
let ataquesDinoponEnemigo

let botonFuego
let botonAgua
let botonTierra
let botones = []

let indexAtaqueJugador
let indexAtaqueEnemigo

let victoriasJugador = 0
let victoriasEnemigo = 0

let vidasJugador = 5
let vidasEnemigo = 5

class Dinopon{
    constructor(nombre, foto, vida){
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let hipodoge = new Dinopon('Hipodoge', './assets/hipodoge.webp', 3)
let capipepo = new Dinopon('Capipepo', './assets/capipepo.webp', 3)
let ratigueya = new Dinopon('Ratigueya', './assets/ratigueya.webp', 3)
let langostelvis = new Dinopon('Langostelvis', './assets/langostelvis.jpg', 3)
let tucapalma = new Dinopon('Tucapalma', './assets/tucapalma-.jpg', 3)
let pydos = new Dinopon('Pydos', './assets/pydos.webp', 3)

hipodoge.ataques.push(
    { nombre: '💧', id:'boton-agua'},
    { nombre: '💧', id:'boton-agua'},
    { nombre: '💧', id:'boton-agua'},
    { nombre: '🔥', id:'boton-fuego'},
    { nombre: '🌱', id:'boton-tierra'},
)

capipepo.ataques.push(
    { nombre: '🌱', id:'boton-agua'},
    { nombre: '🌱', id:'boton-agua'},
    { nombre: '🌱', id:'boton-agua'},
    { nombre: '💧', id:'boton-fuego'},
    { nombre: '🔥', id:'boton-tierra'},
)

ratigueya.ataques.push(
    { nombre: '🔥', id:'boton-agua'},
    { nombre: '🔥', id:'boton-agua'},
    { nombre: '🔥', id:'boton-agua'},
    { nombre: '💧', id:'boton-fuego'},
    { nombre: '🌱', id:'boton-tierra'},
)

langostelvis.ataques.push(
    { nombre: '💧', id:'boton-agua'},
    { nombre: '💧', id:'boton-agua'},
    { nombre: '💧', id:'boton-agua'},
    { nombre: '🔥', id:'boton-fuego'},
    { nombre: '🌱', id:'boton-tierra'},
)

tucapalma.ataques.push(
    { nombre: '🌱', id:'boton-agua'},
    { nombre: '🌱', id:'boton-agua'},
    { nombre: '🌱', id:'boton-agua'},
    { nombre: '💧', id:'boton-fuego'},
    { nombre: '🔥', id:'boton-tierra'},
)

pydos.ataques.push(
    { nombre: '🔥', id:'boton-agua'},
    { nombre: '🔥', id:'boton-agua'},
    { nombre: '🔥', id:'boton-agua'},
    { nombre: '💧', id:'boton-fuego'},
    { nombre: '🌱', id:'boton-tierra'},
)

dinopones.push(hipodoge,capipepo,ratigueya,langostelvis,tucapalma,pydos)

function iniciarPartida(){
    sectionSeleccionarAtaque.style.display ='none'

    dinopones.forEach((dinopon) => {
        opcionDeDinopones = `          
        <input type="radio" name="dinomascota" id="${dinopon.nombre}"/>
        <label class ="tarjeta-de-dino" for="${dinopon.nombre}">
            <p>${dinopon.nombre}</p>
            <img src="${dinopon.foto}" alt="${dinopon.nombre}">
        </label>
`
        contenedorTarjetas.innerHTML += opcionDeDinopones

        inputHipodoge = document.getElementById('Hipodoge')
        inputCapipepo = document.getElementById('Capipepo')
        inputRatigueya = document.getElementById('Ratigueya')
        inputLangostelvis = document.getElementById('Langostelvis')
        inputTucapalma = document.getElementById('Tucapalma')
        inputPydos = document.getElementById('Pydos')
        spanMascotaJugador = document.getElementById('mascota-jugador')
    })
    
    sectionReiniciar.style.display ='none '
    botonMascotaJugador.addEventListener('click', SeleccionarMascotaJugador)

    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function SeleccionarMascotaJugador(){
    let sectionSeleccionarMascota = document.getElementById('selecciona-mascota')

    
    let sectionSeleccionarAtaque = document.getElementById('selecciona-ataque')

    sectionSeleccionarMascota.style.display  ='none'
    sectionSeleccionarAtaque.style.display  ='flex'

    if (inputHipodoge.checked){
        spanMascotaJugador.innerHTML = inputHipodoge.id
        mascotaJugador = inputHipodoge.id
    } else if (inputCapipepo.checked){
        spanMascotaJugador.innerHTML = inputCapipepo.id
        mascotaJugador = inputCapipepo.id
    } else if (inputRatigueya.checked){
        spanMascotaJugador.innerHTML = inputRatigueya.id
        mascotaJugador = inputRatigueya.id
    } else if (inputLangostelvis.checked){
        spanMascotaJugador.innerHTML = inputLangostelvis.id
        mascotaJugador = inputLangostelvis.id
    } else if (inputTucapalma.checked){
        spanMascotaJugador.innerHTML = inputTucapalma.id
        mascotaJugador = inputTucapalma.id
    } else if (inputPydos.checked){
        spanMascotaJugador.innerHTML = inputPydos.id
        mascotaJugador = inputPydos.id
    }
    else {
        alert('Selecciona un dinomascota')
    }
    extraerAtaques(mascotaJugador)
    seleccionarMascotaEnemigo()
}

function extraerAtaques(mascotaJugador){
    let ataques
    for (let i = 0; i < dinopones.length; i++){
        if (mascotaJugador === dinopones[i].nombre){
            ataques = dinopones[i].ataques
        }
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques){
    ataques.forEach((ataque) => {
        ataquesDinopon = `
        <button id=${ataque.id} class="boton-ataque BAtaque">${ataque.nombre}</button>`

        contenedorAtaques.innerHTML += ataquesDinopon
    })

    botonFuego = document.getElementById('boton-fuego')
    botonAgua  = document.getElementById('boton-agua')
    botonTierra = document.getElementById('boton-tierra')
    botones = document.querySelectorAll('.BAtaque')

}

function secuenciaAtaque(){
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            if (e.target.textContent === '🔥'){
                ataqueJugador.push('Fuego 🔥')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true
            } else if (e.target.textContent === '💧'){
                ataqueJugador.push('Agua 💧')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true
            } else {
                ataqueJugador.push('Tierra 🌱')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true
        }
        ataqueAleatorioEnemigo()
        })
    })
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(0, dinopones.length -1)

    spanMascotaEnemigo.innerHTML = dinopones[mascotaAleatoria].nombre

    ataquesDinoponEnemigo = dinopones[mascotaAleatoria].ataques
    secuenciaAtaque()
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(0, ataquesDinoponEnemigo.length -1)

    if(ataqueAleatorio == 0 || ataqueAleatorio == 1){
        ataqueEnemigo.push('Fuego 🔥') 
    } else if (ataqueAleatorio == 3 || ataqueAleatorio == 4){
        ataqueEnemigo.push('Agua 💧')
    } else {
        ataqueEnemigo.push('Tierra 🌱')
    }
    console.log(ataqueEnemigo)
    iniciarPelea()
}

function iniciarPelea(){
    if (ataqueJugador.length === 5){
        combate()
    }
}

function indexAmbosOponentes(jugador, enemigo){
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

function combate() {
    for(let index = 0; index < ataqueJugador.length; index++){
        if(ataqueJugador[index] === ataqueEnemigo[index]){
            indexAmbosOponentes(index,index)
            crearMensaje("EMPATE")
        } else if (ataqueJugador[index] === 'FUEGO' && ataqueEnemigo[index] === 'TIERRA') {
            indexAmbosOponentes(index,index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[index] === 'AGUA' && ataqueEnemigo[index] === 'FUEGO') {
            indexAmbosOponentes(index,index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[index] === 'TIERRA' && ataqueEnemigo[index] === 'AGUA') {
            indexAmbosOponentes(index,index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else {
            indexAmbosOponentes(index,index)
            crearMensaje("PERDISTE")
            victoriasEnemigo++
            spanVidasEnemigo.innerHTML = victoriasEnemigo
        }
    }

    revisarVictorias()
}

function revisarVictorias(){
    if (victoriasJugador === victoriasEnemigo){
     crearMensajeFinal("¡EMPATE!")
    } else if (victoriasJugador > victoriasEnemigo){
    crearMensajeFinal("¡FELICITACIONES GANASTE!")
    } else {
        crearMensajeFinal("¡LO LAMENTO PERDISTE!")
    }
}

function crearMensaje(resultado){
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo

    ataqueDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataqueDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal){
    sectionMensajes.innerHTML =  resultadoFinal
    sectionReiniciar.style.display ='block'
}

function reiniciarJuego(){
    location.reload()
}

function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
 }

window.addEventListener('load', iniciarPartida)