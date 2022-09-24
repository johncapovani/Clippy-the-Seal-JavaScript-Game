

function gameCanvasBuild() {

    //create game div
    let gameDiv = document.createElement('div')
    gameDiv.setAttribute('id', 'game-div')
    document.body.append(gameDiv)

    //create game title H1
    let gameTitle = document.createElement('h1')
    gameTitle.setAttribute('id', 'game-title')

    //style the header
    gameTitle.style.color = 'white'
    gameTitle.textContent = 'Clippy the Seal - Avoid being Clipped by a Shark!'
    gameTitle.style.textAlign = 'left'

    //append the header
    let gameDivLocation = document.getElementById('game-div')
    gameDivLocation.appendChild(gameTitle)


    //create clippy image 
    let clippImage = document.createElement('img')
    clippImage.setAttribute('id', 'clippy-image')
    clippImage.src = 'images/clippytheseal.gif'
    clippImage.style.height = "50px"
    clippImage.style.float = "right"
    let imageplacement = document.querySelector("#game-title")
    imageplacement.appendChild(clippImage)

    //create game canvas
    let gameTitleLocation = document.getElementById('game-title')
    let gameCanvas = document.createElement('canvas')
    gameCanvas.setAttribute('id', 'game-canvas')
    gameCanvas.style.backgroundColor = "white"

    //style game canvas
    gameCanvas.style.boxShadow = '10px 10px 15px black'
    gameDivLocation.appendChild(gameCanvas)

    //Set properties of the body
    let body = document.getElementById('body')
    body.style.display = 'flex'
    body.style.justifyContent = 'center'
    body.style.height = '100vh'
    body.style.backgroundColor = '#5484A5'


}


