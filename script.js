const mario = document.querySelector(".mario")
const clouds = document.querySelector(".clouds")
const pipe = document.getElementById("pipe")

const marioJump = () => {
    mario.classList.add("jump");
    setTimeout(() =>{
        mario.classList.remove("jump");
    }, 500)
}

let pontuacao = 0
const gameOver = () => {
    const telaGameOver = document.getElementById("game-over");
    const pontos = document.getElementById("pontuacao");
    pontos.textContent = pontuacao;
    telaGameOver.style.opacity = 1;
}
const loop = setInterval(() => {
    const leftPipe = pipe.offsetLeft
    const bottonMario = +window.getComputedStyle(mario).bottom.replace("px", "")
    const leftClouds = clouds.offsetLeft
    if (leftPipe < 120 && leftPipe >0){
        if(bottonMario <= 100){
            console.log(bottonMario)
            clouds.style.animation = "none"
            clouds.style.left = `${leftClouds}px`

            mario.style.bottom = `${bottonMario}px`
            mario.style.animation = "none"

            pipe.style.left = `${leftPipe}px`
            pipe.style.animation = "none"

            mario.src = "img/game-over.png"
            mario.style.width = "100px"
            mario.style.marginLeft = "30px"
            gameOver()
            clearInterval(loop)
        }
        pontuacao += 1
    }
}, 1)

document.addEventListener("keypress", marioJump)


const jogarNovamente = document.getElementById("jogar-novamente");
jogarNovamente.addEventListener("click", () => {
    location.reload()
})