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

const sectionVerMapa = document.getElementById('ver-mapa')
const mapa = document.getElementById('mapa')

let jugadorId = null
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
let mascotaJugadorObjeto

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

let lienzo = mapa.getContext("2d")
let intervalo
let mapaBackground = new Image()
mapaBackground.src = './assets/mapa.jpg'
let alturaQueBuscamos 
let anchoDelMapa = window.innerWidth - 20
const anchoMaximodelMapa =350

if(anchoDelMapa > anchoMaximodelMapa){
    anchoDelMapa = anchoMaximodelMapa -20
}
alturaQueBuscamos = anchoDelMapa * 600 / 800

mapa.width = anchoDelMapa
mapa.height = alturaQueBuscamos

class Dinopon{
    constructor(nombre, foto, vida, fotoMapa){
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
        this.ancho = 40
        this.alto = 40
        this.x = aleatorio(0, mapa.width - this.ancho)
        this.y = aleatorio(0, mapa.height - this.alto)
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoMapa
        this.velocidadX = 0
        this.velocidadY = 0
    }
    pintarDinopon(){
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto
        )
    }
}



let hipodoge = new Dinopon('Hipodoge', './assets/hipodoge.png', 3, './assets/avatar-hipodoge.png')
let capipepo = new Dinopon('Capipepo', './assets/capipepo.png', 3, './assets/avatar-capipepo.png')
let ratigueya = new Dinopon('Ratigueya', './assets/ratigueya.png', 3, './assets/avatar-ratigueya.png')
let langostelvis = new Dinopon('Langostelvis', './assets/langostelvis.png', 3, './assets/avatar-langostelvis.png')
let tucapalma = new Dinopon('Tucapalma', './assets/tucapalma.png', 3, './assets/avatar-tucapalma.png')
let pydos = new Dinopon('Pydos', './assets/pydos.png', 3, './assets/avatar-pydos.png')

let hipodogeEnemigo = new Dinopon('Hipodoge', './assets/hipodoge.png', 3, './assets/avatar-hipodoge.png', 80, 120)
let capipepoEnemigo = new Dinopon('Capipepo', './assets/capipepo.png', 3, './assets/avatar-capipepo.png')
let ratigueyaEnemigo = new Dinopon('Ratigueya', './assets/ratigueya.png', 3, './assets/avatar-ratigueya.png')
let langostelvisEnemigo = new Dinopon('Langostelvis', './assets/langostelvis.png', 3, './assets/avatar-langostelvis.png')
let tucapalmaEnemigo = new Dinopon('Tucapalma', './assets/tucapalma.png', 3, './assets/avatar-tucapalma.png')
let pydosEnemigo = new Dinopon('Pydos', './assets/pydos.png', 3, './assets/avatar-pydos.png')

hipodoge.ataques.push(
    { nombre: '💧', id:'boton-agua'},
    { nombre: '💧', id:'boton-agua'},
    { nombre: '💧', id:'boton-agua'},
    { nombre: '🔥', id:'boton-fuego'},
    { nombre: '🌱', id:'boton-tierra'},
)

hipodogeEnemigo.ataques.push(
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

ratigueyaEnemigo.ataques.push(
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

langostelvisEnemigo.ataques.push(
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

tucapalmaEnemigo.ataques.push(
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

pydosEnemigo.ataques.push(
    { nombre: '🔥', id:'boton-agua'},
    { nombre: '🔥', id:'boton-agua'},
    { nombre: '🔥', id:'boton-agua'},
    { nombre: '💧', id:'boton-fuego'},
    { nombre: '🌱', id:'boton-tierra'},
)

dinopones.push(hipodoge,capipepo,ratigueya,langostelvis,tucapalma,pydos)

function iniciarPartida(){
    sectionVerMapa.style.display = 'none'
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

    unirseAlJuego()
}

function unirseAlJuego(){
    fetch("http://localhost:8080/unirse")
    .then(function (res){
        console.log(res)
        if (res.ok){
            res.text()
            .then(function (respuesta){
                console.log(respuesta)
                jugadorId = respuesta
            })
        }
    })
}

function SeleccionarMascotaJugador(){

    sectionSeleccionarMascota.style.display  ='none'

    //movimientos del personaje
    sectionVerMapa.style.display = 'flex'

    //validación de personajes
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

    seleccionarDinopon(mascotaJugador)

    extraerAtaques(mascotaJugador)
    sectionVerMapa.style.display = 'flex'
    iniciarMapa()
    
}

function seleccionarDinopon(mascotaJugador){
    fetch(`http://localhost:8080/dinopon/${jugadorId}`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify({
            dinopon: mascotaJugador
        })
    })
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

function pintarCanvas(){
    mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX
    mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY
    lienzo.clearRect(0, 0, mapa.width, mapa.height)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )
    mascotaJugadorObjeto.pintarDinopon()

    enviarPosicion(mascotaJugadorObjeto.x, mascotaJugadorObjeto.y)

    hipodogeEnemigo.pintarDinopon()
    capipepoEnemigo.pintarDinopon()
    ratigueyaEnemigo.pintarDinopon()
    langostelvisEnemigo.pintarDinopon()
    tucapalmaEnemigo.pintarDinopon()
    pydosEnemigo.pintarDinopon()

    if (mascotaJugadorObjeto.velocidadX !== 0 || mascotaJugadorObjeto.velocidadY !== 0) {
        revisarColision(hipodogeEnemigo)
        revisarColision(capipepoEnemigo)
        revisarColision(ratigueyaEnemigo)
    }
 }

function enviarPosicion(x,y){
    fetch(`http://localhost:8080/dinopon/${jugadorId}/posicion`,{
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            x,
            y
        })
    })
}
 
function moverDerecha(){
    mascotaJugadorObjeto.velocidadX = 5
}

function moverIzquierda(){
    mascotaJugadorObjeto.velocidadX = -5
}
function moverAbajo(){
    mascotaJugadorObjeto.velocidadY = 5
}
function moverArriba(){
    mascotaJugadorObjeto.velocidadY = -5
}

function detenerMovimiento(){
    mascotaJugadorObjeto.velocidadX = 0
    mascotaJugadorObjeto.velocidadY = 0
}

function sePresionoUnaFlecha(event){
    switch (event.key) {
        case 'ArrowUp':
            moverArriba()
            break
        case 'ArrowDown':
            moverAbajo()
            break
        case 'ArrowLeft':
            moverIzquierda()
            break
        case 'ArrowRight':
            moverDerecha()
            break
        default:
            break
    }
}

function sePresionoUnaTecla(event){
    switch (event.key) {
        case 'w':
            moverArriba()
            break
        case 's':
            moverAbajo()
            break
        case 'a':
            moverIzquierda()
            break
        case 'd':
            moverDerecha()
            break
        default:
            break
    }
}

function iniciarMapa(){
    mascotaJugadorObjeto = obtenerObjetoMascota(mascotaJugador)
    intervalo = setInterval(pintarCanvas, 50)

    window.addEventListener('keydown', sePresionoUnaFlecha)
    window.addEventListener('keydown', sePresionoUnaTecla)
    window.addEventListener('keyup', detenerMovimiento)
}

function obtenerObjetoMascota(){
    for (let i = 0; i < dinopones.length; i++){
        if (mascotaJugador === dinopones[i].nombre){
            return dinopones[i]
        }
    }
}

function revisarColision(enemigo){
    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const derechaEnemigo = enemigo.x + enemigo.ancho
    const izquierdaEnemigo = enemigo.x 

    const arribaMascota = mascotaJugadorObjeto.y
    const abajoMascota = mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto
    const derechaMascota = mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho
    const izquierdaMascota = mascotaJugadorObjeto.x 

    if(
        abajoMascota < arribaEnemigo ||
        arribaMascota > abajoEnemigo ||
        derechaMascota < izquierdaEnemigo ||
        izquierdaMascota > derechaEnemigo
    ) {
        return
    }
    detenerMovimiento()
    clearInterval(intervalo)
    sectionSeleccionarAtaque.style.display = 'flex'
    sectionVerMapa.style.display= 'none'
    seleccionarMascotaEnemigo(enemigo)
}

window.addEventListener('load', iniciarPartida)