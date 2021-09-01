"use strict" //me cobra as regras

let idDesligar
let idLigar

const lampada = document.getElementById("lampada")

function botoesLigaDesliga (estadoLiga, estadoDesliga, estadoPisca) {
    const botaoLigar = document.getElementById("ligar")
    const botaoDesligar = document.getElementById("desligar") 
    const botaoPiscar = document.getElementById ("piscar") 
    botaoLigar.disabled = estadoLiga
    botaoDesligar.disabled= estadoDesliga
    botaoPiscar.disabled = estadoPisca
}

function lampadaQuebrada (){
    return lampada.src.includes("quebrada") 
    //indexOf | includes -> busca uma palavra e não o endereço todo
}

function ligarLampada() {

    if (!lampadaQuebrada()) {
    lampada.src = "img/ligada.jpg"
    botoesLigaDesliga(true, false)
    }
}

function desligarLampada() {

    if (!lampadaQuebrada()) {
    lampada.src = "img/desligada.jpg"
    botoesLigaDesliga(false, true)

    }
}

function quebrarLampada () {
    lampada.src = "img/quebrada.jpg"
    botoesLigaDesliga(true, true, true)
}

function pararPiscar() {
    clearInterval(idLigar)
    clearInterval(idDesligar)
}

function piscar () {
    const botaoPiscar = document.getElementById("piscar")
    if (botaoPiscar.textContent == "Piscar") {
    idLigar = setInterval(ligarLampada, 500)
    idDesligar = setInterval (desligarLampada, 1000)
    botaoPiscar.textContent = "Parar" 
    } else {
    pararPiscar ()
    botaoPiscar.textContent= "Piscar"

}
}



//eventos
document.getElementById('ligar')
.addEventListener("click", ligarLampada)

document.getElementById('desligar')
.addEventListener("click", desligarLampada)

document.getElementById('lampada')
.addEventListener("mouseover", ligarLampada)

document.getElementById('lampada')
.addEventListener("mouseleave", desligarLampada)

document.getElementById('lampada')
.addEventListener("dblclick", quebrarLampada)

document.getElementById('piscar')
.addEventListener("click", piscar)

//setTimeOut
//setInterval