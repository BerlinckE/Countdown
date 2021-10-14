import Countdown from "./countdown.js"

const tempoParaAlgumaCoisa = new Countdown("25 December 2021 00:00:00 GMT-0300");

const tempos = document.querySelectorAll("[data-time]");

function mostrarTempo() {
    tempos.forEach((tempo, index) => {
        tempo.innerHTML = tempoParaAlgumaCoisa.total[index];
    })
}

mostrarTempo();
setInterval(mostrarTempo, 1000);