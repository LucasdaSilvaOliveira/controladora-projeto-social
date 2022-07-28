let txt1 = document.getElementById('texto-interativo1')
let txt2 = document.getElementById('texto-interativo2')
let telaint1 = document.querySelector(".telainterativa1")
let telaint2 = document.querySelector(".telainterativa2")

function ligar() {
    txt1.innerHTML = '<p>Seja bem vindo (a) !</p><p>Aperte "Next" para as próximas opções !</p>'
    txt2.innerHTML = '<p>Seja bem vindo (a) !</p><p>Aperte "Next" para as próximas opções !</p>'
    txt1.style.display = 'inline'
    txt2.style.display = 'inline'
    telaint1.style.backgroundColor = '#153c69'
    telaint2.style.backgroundColor = '#153c69'
}

function desligar() {
    txt1.innerHTML = ''
    txt2.innerHTML = ''
    txt1.style.display = 'none'
    txt2.style.display = 'none'
    telaint1.style.backgroundColor = 'black'
    telaint2.style.backgroundColor = 'black'
}

const nxt1 = () => {txt1.innerHTML = 'Esse é o display das minhas músicas favoritas !'}
const nxt2 = () => {txt1.innerHTML = 'Teste'}

const funções = [nxt1, nxt2]
let c = 0
document.getElementById('next1').addEventListener("click",funções[0]);



/*
function next1() {
    txt1.innerHTML = 'Esse é o display das minhas músicas favoritas !'
}
function next2() {
    txt1.innerHTML = 'Teste'
}
*/