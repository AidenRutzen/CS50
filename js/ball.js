const windowHeight = window.innerHeight
const windowWidth = window.innerWidth

//paddle variables
const LPaddle = document.createElement('div')
document.body.appendChild(LPaddle)
let LPaddleWidth = 10
let LPaddleHeight = 100
let LPaddleSpeed = 20
let LPaddleYPosition = windowHeight / 2 - LPaddleHeight / 2
let LPaddleXPosition = 70

//ball variables
const ball = document.createElement('div')
document.body.appendChild(ball)
const ballRadius = 20
let ballXPosition = windowWidth/2 - ballRadius
let ballSpeed = 3
let ballXDirection = 1
let ballYPosition = windowHeight/2 - ballRadius
let ballYDirection = 1

const game = document.createElement('div')
document.body.appendChild(game)
let gameWidth = 500
let gameHeight = 100
let gameScore = 0
let gameLevel = 1


createBall()
function createBall(){
    ball.style.height = `${2 * ballRadius}px`
    ball.style.width = `${2 * ballRadius}px`
    ball.style.borderRadius = "50%"
    ball.style.backgroundColor = "green"
    ball.style.position = "absolute"
    ball.style.top = `${ballYPosition}px`
    ball.style.left = `${ballXPosition}px`
}

setInterval(moveBall, 10)

function moveBall() {
    ballXPosition = ballXPosition + ballSpeed * ballXDirection
    ballYPosition = ballYPosition + ballSpeed * ballYDirection
    ball.style.top = `${ballYPosition}px`
    ball.style.left = `${ballXPosition}px`

    if(ballYPosition < 0 || ballYPosition > windowHeight - 2 * ballRadius){
        ballYDirection = ballYDirection * -1
    }

    if(ballXPosition < 0 || ballXPosition > windowWidth - 2* ballRadius){
        ballXDirection = ballXDirection * -1
    }
    let ballTop = ballYPosition
    let ballBottom = ballYPosition + 2 * ballRadius
    let ballLeft = ballXPosition
    let LPaddleTop = LPaddleYPosition
    let LPaddleBottom = LPaddleYPosition + LPaddleHeight
    let LPaddleRight = LPaddleXPosition + LPaddleWidth

    if ((ballBottom >= LPaddleTop) && (ballTop <= LPaddleBottom) && (ballLeft <= LPaddleRight) && (ballXDirection == -1)) {
        ballXDirection = ballXDirection * -1
    }

}

createLPaddle()
function createLPaddle() {
    LPaddle.style.height = `${LPaddleHeight}px`
    LPaddle.style.width = `${LPaddleWidth}px`
    LPaddle.style.backgroundColor = 'blue'
    LPaddle.style.position = 'absolute'
    LPaddle.style.left = "50px"
    LPaddle.style.top = `${LPaddleYPosition}px`
}

wKey = false
sKey = false


document.addEventListener('keydown', (event) => {
    if (event.key == 'w') {
        wKey = true
    }
    if (event.key == 's') {
        sKey = true
    }
})


document.addEventListener('keyup', (event) => {
    if (event.key == 'w') {
        wKey = false
    }
    if (event.key == 's') {
        sKey = false
    }
})

function moveLPaddle() {
    if (wKey == true && LPaddleYPosition > 0) {
        LPaddleYPosition = LPaddleYPosition - LPaddleSpeed
    }
    if (sKey == true && LPaddleYPosition < windowHeight - LPaddleHeight) {
        LPaddleYPosition = LPaddleYPosition + LPaddleSpeed
    }
    LPaddle.style.top = `${LPaddleYPosition}px`
}

function animate() {
    moveBall()
    moveLPaddle()
    requestAnimationFrame(animate)
}
animate()

createScore()
function createScore() {
    game.style.backgroundColor = "blue"
    game.style.top = "0px"
    game.style.left = "200px"
    game.style.color = "white"
    game.style.position = "absolute"
    game.style.height = `${gameHeight}px`
    game.style.width = `${gameWidth}px`
    game.style.display = "flex"
}

increaseScore()
function increaseScore() {
    if ((ballXPosition == LPaddleXPosition) && (ballYPosition == LPaddleYPosition)) {
        gameScore = gameScore + 1
    }
    if (gameScore == 10) {
        gameLevel = gameLevel + 1
    }
    gameScore.innerHTML = `Score: ${gameScore}`
    gameLevel.innerHTML = `Level: ${gameLevel}`
}
