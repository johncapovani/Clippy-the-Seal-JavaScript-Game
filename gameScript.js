//Import scripts into main gameScript Sheet
import mapBuilder from './TileGrid.js'

//Wrap game launch script within page load event listner
window.addEventListener("load", () => {

    //call page build function which will build the canvas
    gameCanvasBuild()

    //Select canvas and Declare properties of the canvas
    const canvas = document.getElementById('game-canvas')
    const ctx = canvas.getContext("2d")
    const tileSize = 32
    //Set the canvas size to be the window width and height
    canvas.height = window.innerHeight - 200
    canvas.width = window.innerWidth - 100
    //Create an event listner that will listen for screen size changes
    window.addEventListener('resize', () => {
        canvas.height = window.innerHeight - 200
        canvas.width = window.innerWidth - 100
    })




    //This is where the game object is created using the mapBuilder class
    const tilemap = new mapBuilder(tileSize)

    //This function will draw the game out
    function gameLoop() {

        tilemap.draw(canvas, ctx)

    }

    //This will repeatedly call the above gameloop function which draws the tilemap object
    setInterval(gameLoop, 1000 / 60)



})




