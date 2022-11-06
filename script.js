const mario = document.querySelector(".mario");
const clouds = document.querySelector(".clouds")

const marioJump = () => {
    mario.classList.add("jump");
    setTimeout(() =>{
        mario.classList.remove("jump");
    }, 500)
}

const pipe = document.getElementById("pipe");
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
            clearInterval(loop)
        }
    }
}, 10)

document.addEventListener("keypress", marioJump)
