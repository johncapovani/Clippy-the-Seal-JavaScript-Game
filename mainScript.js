//Wrap game launch script within page load event listner
window.addEventListener("load", () => {



    //Call page build function which will build the canvas HTML

    gameCanvasBuild()

    //Select canvas and declare properties of the canvas

    const canvas = document.getElementById('game-canvas')
    const ctx = canvas.getContext("2d")



    let score
    let scoreText
    let maxscore
    let maxscoreText
    let player
    let gravity
    let obstacles = []
    let gameSpeed
    let controls = []

    //Event listners for movement of jumping up and down
    document.addEventListener('keydown', function (event) {

        controls[event.code] = true;

    })

    document.addEventListener('keyup', function (event) {

        controls[event.code] = false;

    })


    //---------------------Clippy the Seal Class Start---------------------
    //Class Construction for Clippy the Seal (The Player)

    class ClippyTheSeal {

        constructor(x, y, w, h) {
            this.x = x
            this.y = y
            this.w = w
            this.h = h


            this.dy = 0
            this.jumpForce = 10
            this.originalHeight = h
            this.grounded = false
            this.jumpTimer = 0

        }


        //Creating Clippy the seal

        Draw() {
            //Create Clippy
            let img = new Image();
            img.src = 'images/clippytheseal.gif'
            img.height = this.originalHeight


            ctx.drawImage(img, this.x, this.y)

        }


        //Controls characters movement

        Animate() {
            //Jump

            if (controls['Space'] || controls['KeyW']) {

                this.Jump()

            } else {

                this.jumpTimer = 0

            }

            //Shrink character

            if (controls['ShiftLeft'] || controls['KeyS']) {

                this.h = this.originalHeight / 2
                console.log('shift')

            } else {

                this.h = this.originalHeight
            }

            this.y += this.dy

            //Gravity creation
            if (this.y + this.h < canvas.height) {

                this.dy += gravity;
                this.grounded = false

            } else {
                this.dy = 0
                this.grounded = true
                this.y = canvas.height - this.h
            }



            this.Draw()
        }

        Jump() {
            if (this.grounded && this.jumpTimer == 0) {
                this.jumpTimer = 1
                this.dy = -this.jumpForce;
            } else if (this.jumpTimer > 0 && this.jumpTimer < 15) {

                this.jumpTimer++
                this.dy = -this.jumpForce - (this.jumpTimer / 50)

            }
        }

    }

    //---------------------Clippy the Seal Class End---------------------

    //---------------------Shark Class End---------------------

    class Shark {

        constructor(x, y, w, h) {

            this.x = x
            this.y = y
            this.w = w
            this.h = h

            this.dx = -gameSpeed
        }

        Update() {

            this.x += this.dx
            this.Draw()
            this.dx = -gameSpeed

        }

        Draw() {
            //Create the shark
            let img = new Image();
            img.src = 'images/shark-the-bully.png'
            img.height = this.h
            ctx.drawImage(img, this.x, this.y)
        }
    }


    //---------------------Shark Class End---------------------
    //---------------------Game Text Class Start---------------------
    class Text {

        constructor(t, x, y, a, c, s) {

            this.t = t
            this.x = x
            this.x = y
            this.a = a
            this.c = c
            this.s = s
        }

        Draw() {
            ctx.beginPath()
            ctx.fillstyle = this.c
            ctx.font = this.s + "px sans-serif"
            ctx.textAlign = this.a
            ctx.fillText(this.t, this.x, 50);
            ctx.closePath()

        }



    }

    //---------------------Game Text Class End---------------------
    //---------------------Spawn Shark Function Start---------------------

    function spawnSharks() {

        let size = randomIntInRange(20, 70)
        let type = randomIntInRange(0, 1)
        let obstacle = new Shark(canvas.width + size, canvas.height - size, size, size)

        if (type == 1) {
            obstacle.y -= player.originalHeight - 10

        }

        obstacles.push(obstacle)

    }

    function randomIntInRange(min, max) {

        return Math.round(Math.random() * (max - min) + min)

    }

    //---------------------Spawn Shark Function End---------------------

    //---------------------Start Function Start---------------------
    function start() {
        canvas.width = window.innerWidth - 100
        canvas.height = window.innerHeight - 400

        ctx.font = "20 px sans-serif"

        gameSpeed = 3
        gravity = 1

        score = 0
        maxscore = 0

        player = new ClippyTheSeal(50, canvas.height - 150, 200, 50, '#FF5858')

        scoreText = new Text("Score " + score, 10, '50', "left", '#212121', "20")
        maxscoreText = new Text("Highscore: " + maxscore, 100, 500, "right", "#212121", "20")

        requestAnimationFrame(Update)


    }
    //---------------------Start Function End---------------------

    let initialSpawnTimer = 200
    let spawnTimer = initialSpawnTimer

    function Update() {

        requestAnimationFrame(Update)
        //This clears the canvas to prevent it showing the same image
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        spawnTimer--;


        if (spawnTimer <= 0) {

            spawnSharks()

            spawnTimer = initialSpawnTimer - gameSpeed * 8


            if (spawnTimer < 60) {

                //was 60 before
                spawnTimer = 60

            }
        }

        for (let i = 0; i < obstacles.length; i++) {

            let o = obstacles[i]

            if (o.x + o.width < 0) {
                obstacles.splice(i, 1)

            }

            if (player.x - 100 < o.x + o.w && player.x + player.w - 100 > o.x && player.y < o.y + o.h && player.y + player.h > o.y) {

                obstacles = []
                score = 0
                spawnTimer = initialSpawnTimer
                gameSpeed = 3
                ctx.fillText("You've been Clipped!", 100, 100);
            }

            o.Update()

        }


        player.Animate()


        score++
        scoreText.t = "Score: " + score
        scoreText.Draw()

if (score > maxscore){

    maxscore = score
    maxscoreText.t = "Your Max Score: " + maxscore
}

        maxscoreText.Draw()

        gameSpeed += 0.009



    }

    start()

    //Auto resize event listner
    addEventListener('resize', (event) => {
        canvas.width = window.innerWidth - 100
        canvas.height = window.innerHeight - 400

    });


})