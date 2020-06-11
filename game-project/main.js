document.addEventListener('DOMContentLoaded', function() {

    let canvas = document.querySelector("canvas")
        canvas.width = 800
        canvas.height = 500

    let ctx = canvas.getContext("2d")

    document.getElementById("game-screen").style.visibiliy = "hidden"
    document.getElementById("starting-screen").style.visibility = "visible"

    let startButton = document.querySelector("button")
        startButton.addEventListener("click", startGame())
        
    function startGame() {
            document.getElementById("game-screen").style.visibility = "visible"
            document.getElementById("starting-screen").style.visibility = "hidden"
        }

    // Squares
    function CrawlerSquare(color, width, height) {
        this.x = Math.floor(Math.random() * (canvas.width -25))
        this.y = Math.floor(Math.random() * (canvas.height - 25))
        this.color = color
        this.width = width
        this.height = height
        this.render = function() {
            ctx.fillStyle = this.color
            ctx.fillRect(this.x, this.y, this.width, this.height)
        }
    }

    let redSquare = new CrawlerSquare("red", 25, 25)
    let blueSquare = new CrawlerSquare("blue", 25, 25)
    let greenSquare = new CrawlerSquare("green", 25, 25)
    let yellowSquare = new CrawlerSquare("yellow", 25, 25)

    redSquare.render()
    blueSquare.render()
    greenSquare.render()
    yellowSquare.render()

    // Circles
    function CrawlerCircle(color) {
        // ctx.beginPath()
        // ctx.arc(Math.floor(Math.random() * (canvas.width - 25)), Math.floor(Math.random() * (canvas.height - 25)),12.5,0,Math.PI*2,true)
        // ctx.closePath()
        // ctx.fill()
        this.x = Math.floor(Math.random() * (canvas.width - 25))
        this.y = Math.floor(Math.random() * (canvas.height - 25))
        this.color = color
        this.render = function() {
                ctx.fillStyle = this.color
                ctx.beginPath()
                ctx.arc(this.x, this.y, 12.5 , 0, Math.PI*2)
                ctx.closePath()
                ctx.fill()
        }

    }
    let redCircle = new CrawlerCircle("red")
    let blueCircle = new CrawlerCircle("blue")
    let greenCircle = new CrawlerCircle("green")
    let yellowCircle = new CrawlerCircle("yellow")

    redCircle.render()
    blueCircle.render()
    greenCircle.render()
    yellowCircle.render()

    function moveObject() {
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        redSquare.x += 1
        redSquare.y += 1
        if (redSquare.x > canvas.width) {
            redSquare.x += -1
        } else if (redSquare.x < 0) {
            redSquare.x += 1
        }

        if (redSquare.y > canvas.height) {
            redSquare.y += -1
        } else if (redSquare.y < 0) {
            redSquare.y += 1
        }

        blueSquare.x += 1
        blueSquare.y += 1

        greenSquare.x += 1
        greenSquare.y += 1

        yellowSquare.x += 1
        yellowSquare.y += 1

        redCircle.x += 1
        redCircle.y += 1

        blueCircle.x += 1
        blueCircle.y += 1

        greenCircle.x += 1
        greenCircle.y += 1

        yellowCircle.x += 1
        yellowCircle.y += 1

        redCircle.render()
        blueCircle.render()
        greenCircle.render()
        yellowCircle.render()

        redSquare.render()
        blueSquare.render()
        greenSquare.render()
        yellowSquare.render()

    }

    let gameLoop = setInterval(moveObject, 10)

})

// ------ ARCHIVE ------
// let redTriangleUp = document.getElementById("red-triangle-up")
// let redTriangleDown = document.getElementById("red-triangle-down")
// let redCircle = document.getElementById("red-circle")
// let redSquare = document.getElementById("red-square")

// let blueTriangleUp = document.getElementById("blue-triangle-up")
// let blueTriangleDown = document.getElementById("blue-triangle-down")
// let blueCircle = document.getElementById("blue-circle")
// let blueSquare = document.getElementById("blue-square")

// let greenTriangleUp = document.getElementById("green-triangle-up")
// let greenTriangleDown = document.getElementById("green-triangle-down")
// let greenCircle = document.getElementById("green-circle")
// let greenSquare = document.getElementById("green-square")

// let yellowTriangleUp = document.getElementById("yellow-triangle-up")
// let yellowTriangleDown = document.getElementById("yellow-triangle-down")
// let yellowCircle = document.getElementById("yellow-circle")
// let yellowSquare = document.getElementById("yellow-square")

        // ctx.beginPath()
        // ctx.arc(Math.floor(Math.random() * (canvas.width -25)),
        // Math.floor(Math.random() * (canvas.height - 25)),
        // 12.5, 0, 2 * Math.PI)
        // ctx.closePath()
        // this.color = color
        // this.alive = true
        // this.render = function() {
        //     ctx.fillStyle = this.color
        // }

        // function moveSquare() {
        //     ctx.clearRect(0, 0, canvas.width, canvas.height)
        //     // Border collision detection and direction change
        //     if((this.x + this.width) > canvas.width) {
        //         this.dx = -this.dx
        //     }

        //     if((this.x - this.width) < 0) {
        //         this.dx = -this.dx
        //     }

        //     if((this.y + this.height) > canvas.height) {
        //         this.dy = -this.dy
        //     }

        //     if((this.y - this.height) < 0) {
        //         this.dy = -this.dy
        //     }
        //     this.x += this.dx
        //     this.y += this.dy
        // }
        // moveSquare()

        // function borderCollision() {
        //     if (this.x > canvas.width) {
        //         this.dx = -this.dx
        //     }
    
        //     if (this.x < 0) {
        //         this.dx = -this.dx
        //     }
    
        //     if (this.y > canvas.height) {
        //         this.dy = -this.dy
        //     }
    
        //     if (this.y < 0) {
        //         this.dy = -this.dy
        //     }
        // }
    
        // borderCollision()

        // redSquare.x += this.dx * .1
        // redSquare.y += this.dy *.1

        // blueSquare.x += this.dx
        // blueSquare.y += this.dy

        // greenSquare.x += this.dx
        // greenSquare.y += this.dy

        // yellowSquare.x += this.dx
        // yellowSquare.y += this.dy

        // redCircle.x += this.dx
        // redCircle.y += this.dy

        // blueCircle.x += this.dx
        // blueCircle.y += this.dy

        // greenCircle.x += this.dx
        // greenCircle.y += this.dy

        // yellowCircle.x += this.dx
        // yellowCircle.y += this.dy

        // if (redSquare.x > canvas.width) {
        //     this.dx = -this.dx
        // }

        // if (redSquare.x < 0) {
        //     this.dx = -this.dx
        // }

        // if (redSquare.y > canvas.height) {
        //     this.dy = -this.dy
        // }

        // if (redSquare.y < 0) {
        //     this.dy = -this.dy
        // }