let txt1 = document.getElementById('texto-interativo1')
let txt2 = document.getElementById('texto-interativo2')
let telaint1 = document.querySelector(".telainterativa1")
let telaint2 = document.querySelector(".telainterativa2")
let tracknam = document.querySelector(".trackname1")
let p1 = document.getElementById('play1')
let txt1p = document.getElementById('texto-interativoprimeiro')
let txt1s = document.getElementById('texto-interativosegundo')
let txt1t = document.getElementById('texto-interativoterceiro')
let txt1q = document.getElementById('texto-interativoquarto')
let online = document.querySelector(".button-ligar")
let offline = document.querySelector(".button-desligar")
let buttontrack1 = document.getElementById('track1-1')
let buttontrack2 = document.getElementById('track1-2')
let buttontrack3 = document.getElementById('track1-3')
let buttontrack4 = document.getElementById('track1-4')

function ligar() {
    txt1.innerHTML = '<p>Seja bem vindo (a) !</p><p>Aperte "Info" para mais informações !</p>'
    txt2.innerHTML = '<p>Seja bem vindo (a) !</p><p>Aperte "Info" para mais informações !</p>'
    txt1.style.display = 'inline'
    txt1p.style.display = 'inline'
    txt1s.style.display = 'inline'
    txt1t.style.display = 'inline'
    txt1q.style.display = 'inline'
    txt2.style.display = 'inline'
    online.style.backgroundColor = '#00800094'
    offline.style.backgroundColor = '#4b6368fb'
    telaint1.style.backgroundColor = '#153c69'
    telaint2.style.backgroundColor = '#153c69'
    txt1.style.top = '25%'
    txt2.style.top = '25%'
    txt2.style.left = '10%'
    tracknam.innerHTML = ''
    txt1s.innerHTML = ''
    txt1t.innerHTML = ''
    txt1q.innerHTML = ''
    txt1p.innerHTML = ''
    buttontrack1.style.backgroundColor = ''
    buttontrack1.style.boxShadow = ''
    buttontrack2.style.backgroundColor = ''
    buttontrack2.style.boxShadow = ''
    buttontrack3.style.backgroundColor = ''
    buttontrack3.style.boxShadow = ''
    buttontrack4.style.backgroundColor = ''
    buttontrack4.style.boxShadow = ''
}

function desligar() {
    txt1.innerHTML = ''
    txt2.innerHTML = ''
    txt1p.style.display = 'none'
    txt1.style.display = 'none'
    txt1s.style.display = 'none'
    txt1t.style.display = 'none'
    txt1q.style.display = 'none'
    online.style.backgroundColor = ''
    offline.style.backgroundColor = '#ff000088'
    telaint1.style.transition = 'none'
    telaint2.style.transition = 'none'
    txt2.style.display = 'none'
    telaint1.style.backgroundColor = 'black'
    telaint2.style.backgroundColor = 'black'
    tracknam.innerHTML = ''
    txt1s.innerHTML = ''
    txt1t.innerHTML = ''
    txt1q.innerHTML = ''
    txt1p.innerHTML = ''
    buttontrack1.style.backgroundColor = ''
    buttontrack1.style.boxShadow = ''
    buttontrack2.style.backgroundColor = ''
    buttontrack2.style.boxShadow = ''
    buttontrack3.style.backgroundColor = ''
    buttontrack3.style.boxShadow = ''
    buttontrack4.style.backgroundColor = ''
    buttontrack4.style.boxShadow = ''

}

document.getElementById('info1').addEventListener("click", info1)

function info1() {
    txt1.innerHTML = 'Esse é o display das minhas músicas preferidas ! Escolha abaixo uma das 4 e dê play para ouvi-las !'
    txt1.style.top = '12%'
    telaint1.style.backgroundColor = '#153c69'
    tracknam.innerHTML = ''
    txt1s.innerHTML = ''
    txt1t.innerHTML = ''
    txt1q.innerHTML = ''
    txt1p.innerHTML = ''
    buttontrack1.style.backgroundColor = ''
    buttontrack1.style.boxShadow = ''
    buttontrack2.style.backgroundColor = ''
    buttontrack2.style.boxShadow = ''
    buttontrack3.style.backgroundColor = ''
    buttontrack3.style.boxShadow = ''
    buttontrack4.style.backgroundColor = ''
    buttontrack4.style.boxShadow = ''
}

document.getElementById('track1-1').addEventListener("click", track1s1)

function track1s1() {
    buttontrack1.style.backgroundColor = '#ffff002f'
    buttontrack1.style.boxShadow = '-1px 1px 0px black, 1px 1px 0px black'

    buttontrack2.style.backgroundColor = ''
    buttontrack2.style.boxShadow = ''
    buttontrack3.style.backgroundColor = ''
    buttontrack3.style.boxShadow = ''
    buttontrack4.style.backgroundColor = ''
    buttontrack4.style.boxShadow = ''
    tracknam.style.display = 'inline'
    txt1.style.top = '30%'
    txt1p.innerHTML = 'Alan Walker - Sing Me To Sleep (OutCast & OnlyBeat REMIX)'
    txt1s.innerHTML = ''
    txt1t.innerHTML = ''
    txt1q.innerHTML = ''
    txt1.innerHTML = ''
}

document.getElementById('track1-2').addEventListener("click", track1s2)

function track1s2() {
    buttontrack2.style.backgroundColor = '#ffff002f'
    buttontrack2.style.boxShadow = '-1px 1px 0px black, 1px 1px 0px black'

    buttontrack1.style.backgroundColor = ''
    buttontrack1.style.boxShadow = ''
    buttontrack3.style.backgroundColor = ''
    buttontrack3.style.boxShadow = ''
    buttontrack4.style.backgroundColor = ''
    buttontrack4.style.boxShadow = ''

    tracknam.style.display = 'inline'
    txt1.style.top = '30%'
    txt1s.innerHTML = 'Jilax Parra Nebula Kleysky - Mystique (Harlekin Remix)'
    txt1.innerHTML = ''
    txt1p.innerHTML = ''
    txt1t.innerHTML = ''
    txt1q.innerHTML = ''
}

document.getElementById('track1-3').addEventListener("click", track1s3)

function track1s3() {
    buttontrack3.style.backgroundColor = '#ffff002f'
    buttontrack3.style.boxShadow = '-1px 1px 0px black, 1px 1px 0px black'

    buttontrack1.style.backgroundColor = ''
    buttontrack1.style.boxShadow = ''
    buttontrack2.style.backgroundColor = ''
    buttontrack2.style.boxShadow = ''
    buttontrack4.style.backgroundColor = ''
    buttontrack4.style.boxShadow = ''
    tracknam.style.display = 'inline'
    txt1.style.top = '30%'
    txt1t.innerHTML = 'MEIS & Mahori - Down The Street'
    txt1.innerHTML = ''
    txt1p.innerHTML = ''
    txt1s.innerHTML = ''
    txt1q.innerHTML = ''
}

document.getElementById('track1-4').addEventListener("click", track1s4)

function track1s4() {
    buttontrack4.style.backgroundColor = '#ffff002f'
    buttontrack4.style.boxShadow = '-1px 1px 0px black, 1px 1px 0px black'

    buttontrack1.style.backgroundColor = ''
    buttontrack1.style.boxShadow = ''
    buttontrack2.style.backgroundColor = ''
    buttontrack2.style.boxShadow = ''
    buttontrack3.style.backgroundColor = ''
    buttontrack3.style.boxShadow = ''
    tracknam.style.display = 'inline'
    txt1.style.top = '30%'
    txt1q.innerHTML = 'PhaZed & Azkaban - Spartan Odyssey'
    txt1.innerHTML = ''
    txt1p.innerHTML = ''
    txt1s.innerHTML = ''
    txt1t.innerHTML = ''
}

document.getElementById('play1').addEventListener("click", tocar)

function tocar() {
    if (txt1p.innerHTML.length > 1) {
        tracknam.innerHTML = '<audio src="audios/Alan Walker - Sing Me To Sleep (OutCast & OnlyBeat REMIX).mp3" controls autoplay></audio>'
        telaint1.style.backgroundColor = '#8a51c0'
        telaint1.style.transition = 'all 1.00s ease-in-out'
    } else if (txt1s.innerHTML.length > 1) {
        tracknam.innerHTML = '<audio src="audios/Jilax Parra Nebula Kleysky - Mystique (Harlekin Remix)  �� CONTEST WINNER ��.mp3" controls autoplay></audio>'
        telaint1.style.backgroundColor = '#418099'
        telaint1.style.transition = 'all 1.00s ease-in-out'
    } else if (txt1t.innerHTML.length > 1) {
        tracknam.innerHTML = '<audio src="audios/MEIS & Mahori - Down The Street.mp3" controls autoplay></audio>'
        telaint1.style.backgroundColor = '#939b4f'
        telaint1.style.transition = 'all 1.00s ease-in-out'
    } else if (txt1q.innerHTML.length > 1) {
        tracknam.innerHTML = '<audio src="audios/PhaZed & Azkaban - Spartan Odyssey (FREE DOWNLOAD).mp3" controls autoplay></audio>'
        telaint1.style.backgroundColor = '#468146'
        telaint1.style.transition = 'all 1.00s ease-in-out'
    }
}
document.getElementById('stop1').addEventListener("click", parar)

function parar() {
    tracknam.innerHTML = ''
    telaint1.style.backgroundColor = '#153c69'
}

document.getElementById('info2').addEventListener("click", info2)

let social1 = document.getElementById('button-social1')
let social2 = document.getElementById('button-social2')
let social3 = document.getElementById('button-social3')
let social4 = document.getElementById('button-social4')

function info2() {
    txt2.innerHTML = 'Esse é o display das minhas redes sociais ! Escolha abaixo e clique na tela para me conhecer melhor !'
    telaint2.style.backgroundColor = '#153c69'
    txt2.style.top = '15%'
    txt2.style.left = '6%'
}

social1.addEventListener("click", facebook1)

function facebook1() {
    txt2.innerHTML = '<a href="https://www.facebook.com/profile.php?id=100001716380388" target="_blank"><img src="imagens/facebook.jpg" alt="facebook" id="face"></a>'
    txt2.style.top = '0%'
    txt2.style.left = '0%'
    txt2.style.height = '100%'
    txt2.style.width = '100%'

}

social2.addEventListener("click", instagram2)

function instagram2() {
    txt2.innerHTML = '<a href="https://www.instagram.com/lucksilva01/" target="_blank"><img src="imagens/instagram.jpg" alt="instagram" id="insta"></a>'
    txt2.style.top = '0%'
    txt2.style.left = '0%'
    txt2.style.height = '100%'
    txt2.style.width = '100%'
}

social3.addEventListener("click", github3)

function github3() {
    txt2.innerHTML = '<a href="https://github.com/LucasdaSilvaOliveira" target="_blank"><img src="imagens/GitHub.jpg" alt="Github" id="git"></a>'
    txt2.style.top = '0%'
    txt2.style.left = '0%'
    txt2.style.height = '100%'
    txt2.style.width = '100%'
}

social4.addEventListener("click", linkedin4)

function linkedin4() {
    txt2.innerHTML = '<a href="https://www.linkedin.com/in/lucas-da-silva-12154a240/" target="_blank"><img src="imagens/linkedin.png" alt="linkedin" id="linked"></a>'
    txt2.style.top = '0%'
    txt2.style.left = '0%'
    txt2.style.height = '100%'
    txt2.style.width = '100%'
}