

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
    gameCanvas.style.backgroundColor = "lightblue "
    gameCanvas.style.height = 200
    gameCanvas.style.width = 600
    gameCanvas.style.display = 'block'
    gameCanvas.style.marginLeft = 'auto'
    gameCanvas.style.marginRight = 'auto'

    //style game canvas
    gameCanvas.style.boxShadow = '10px 10px 15px black'
    gameDivLocation.appendChild(gameCanvas)

    //Add game instruction section paragraph

    let instructionPara = document.createElement('p')
    instructionPara.setAttribute('id', 'instructionPara')
    let paraLocation = document.getElementById('game-div')
    instructionPara.textContent = 'Use the Space or W keys to swim over the incoming bully sharks. The longer the bar is pressed, the higher the seal will swim. Sometimes, you may have to duck under an incoming bully. When this is needed, use the left shift or S key to avoid being clipped! We will see how long you can avoid being clipped for.'
    paraLocation.append(instructionPara)
    instructionPara.style.display = 'flex'
    instructionPara.style.textAlign = 'center'
    instructionPara.margin = 'auto'
    instructionPara.style.border = '3px solid white'
    instructionPara.style.padding = '10px'
    instructionPara.style.justifyContent = 'center'
    instructionPara.style.fontSize = '20px'
    instructionPara.style.color = 'aqua'

    //Set properties of the body
    let body = document.getElementById('body')
    body.style.display = 'flex'
    body.style.justifyContent = 'center'
    body.style.height = '90vh'
    body.style.backgroundColor = '#5484A5'


}


