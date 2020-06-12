document.addEventListener('DOMContentLoaded', function() {

    let canvas = document.querySelector("canvas")
        canvas.width = 800
        canvas.height = 500

    let ctx = canvas.getContext("2d")

    let computerArray = []
    let playerArray = []

    let startingTime = 30
    let remainingTime = 0

    document.getElementById("game-screen").style.visibiliy = "hidden"
    document.getElementById("starting-screen").style.visibility = "visible"

    let startButton = document.querySelector("button")
        startButton.addEventListener("click", startGame())
        
    function startGame() {
            document.getElementById("game-screen").style.visibility = "visible"
            document.getElementById("starting-screen").style.visibility = "hidden"
        }

    // function timer() {
    //     remainingTime = startingTime
    //     remainingTime--
    // }

    function detectRedClick(e) {
        let x = e.offsetX
        let y = e.offsetY

        if (x <= redSquare.x + 25 && x >= redSquare.x && y <= redSquare.y + 25 && y >= redSquare.y) {
            redSquare.dx = 0
            redSquare.dy = 0
            playerArray.push(redSquare)
        }

        if (x <= redCircle.x + 25 && x >= redCircle.x && y <= redCircle.y + 25 && y >= redCircle.y) {
            redCircle.dx = 0
            redCircle.dy = 0
            playerArray.push(redCircle)
        }

        if (x <= redTriangle.x + 25 && x >= redTriangle.x && y <= redTriangle.y + 25 && y >= redTriangle.y) {
            redTriangle.dx = 0
            redTriangle.dy = 0
            playerArray.push(redTriangle)
        }

    }

    canvas.addEventListener("click", detectRedClick)

    function detectBlueClick(e) {
        let x = e.offsetX
        let y = e.offsetY

        if (x <= blueSquare.x + 25 && x >= blueSquare.x && y <= blueSquare.y + 25 && y >= blueSquare.y) {
            blueSquare.dx = 0
            blueSquare.dy = 0
            playerArray.push(blueSquare)
        }

        if (x <= blueCircle.x + 25 && x >= blueCircle.x && y <= blueCircle.y + 25 && y >= blueCircle.y) {
            blueCircle.dx = 0
            blueCircle.dy = 0
            playerArray.push(blueCircle)
        }

        if (x <= blueTriangle.x + 25 && x >= blueTriangle.x && y <= blueTriangle.y + 25 && y >= blueTriangle.y) {
            blueTriangle.dx = 0
            blueTriangle.dy = 0
            playerArray.push(blueTriangle)
        }

    }

    canvas.addEventListener("click", detectBlueClick)

    function detectGreenClick(e) {
        let x = e.offsetX
        let y = e.offsetY

        if (x <= greenSquare.x + 25 && x >= greenSquare.x && y <= greenSquare.y + 25 && y >= greenSquare.y) {
            greenSquare.dx = 0
            greenSquare.dy = 0
            playerArray.push(greenSquare)
        }

        if (x <= greenCircle.x + 25 && x >= greenCircle.x && y <= greenCircle.y + 25 && y >= greenCircle.y) {
            greenCircle.dx = 0
            greenCircle.dy = 0
            playerArray.push(greenCircle)
        }

        if (x <= greenTriangle.x + 25 && x >= greenTriangle.x && y <= greenTriangle.y + 25 && y >= greenTriangle.y) {
            greenTriangle.dx = 0
            greenTriangle.dy = 0
            playerArray.push(greenTriangle)
        }

    }

    canvas.addEventListener("click", detectGreenClick)

    function detectYellowClick(e) {
        let x = e.offsetX
        let y = e.offsetY

        if (x <= yellowSquare.x + 25 && x >= yellowSquare.x && y <= yellowSquare.y + 25 && y >= yellowSquare.y) {
            yellowSquare.dx = 0
            yellowSquare.dy = 0
            playerArray.push(yellowSquare)
        }

        if (x <= yellowCircle.x + 25 && x >= yellowCircle.x && y <= yellowCircle.y + 25 && y >= yellowCircle.y) {
            yellowCircle.dx = 0
            yellowCircle.dy = 0
            playerArray.push(yellowCircle)
        }

        if (x <= yellowTriangle.x + 25 && x >= yellowTriangle.x && y <= yellowTriangle.y + 25 && y >= yellowTriangle.y) {
            yellowTriangle.dx = 0
            yellowTriangle.dy = 0
            playerArray.push(yellowTriangle)
        }

    }

    canvas.addEventListener("click", detectYellowClick)
    
    // Square constructor
    function CrawlerSquare(color, width, height) {
        this.x = Math.floor(Math.random() * (canvas.width -25))
        this.y = Math.floor(Math.random() * (canvas.height - 25))
        this.color = color
        this.dx = 1
        this.dy = 1
        this.width = width
        this.height = height
        // this.clicked = function() {
        //     this.dx = 0
        //     this.dy = 0
        // }
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

    // Circle constructor
    function CrawlerCircle(color) {
        this.x = Math.floor(Math.random() * (canvas.width - 25))
        this.y = Math.floor(Math.random() * (canvas.height - 25))
        this.color = color
        this.dx = 1
        this.dy = 1
        this.clicked = function() {
            this.dx = 0
            this.dy = 0
        }
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

    // Triangle constructor
    function CrawlerTriangle(color) {
        this.x = Math.floor(Math.random() * (canvas.width - 25))
        this.y = Math.floor(Math.random() * (canvas.height - 25))
        this.color = color
        this.dx = 1
        this.dy = 1
        this.clicked = function() {
            this.dx = 0
            this.dy = 0
        }
        this.render = function() {
            ctx.fillStyle = this.color
            ctx.beginPath()
            ctx.moveTo(this.x, this.y)
            ctx.lineTo(this.x, this.y + 25)
            ctx.lineTo(this.x + 25, this.y + 25)
            ctx.closePath()
            ctx.fill()
        }
    }

    let redTriangle = new CrawlerTriangle("red")
    let blueTriangle = new CrawlerTriangle("blue")
    let greenTriangle = new CrawlerTriangle("green")
    let yellowTriangle = new CrawlerTriangle("yellow")

    redTriangle.render()
    blueTriangle.render()
    greenTriangle.render()
    yellowTriangle.render()

    function moveRedSquare() {

        ctx.clearRect(0, 0, canvas.width, canvas.height)

        if (redSquare.dx === 1) {
            if (redSquare.x + redSquare.width >= canvas.width) {
                redSquare.dx += -1
            }
        } else if (redSquare.dx === -1) {
            if (redSquare.x - redSquare.width <= 0) {
                redSquare.dx += 1
            }
        }
        if (redSquare.x + redSquare.width >= canvas.width) {
            redSquare.dx = -1
        }

        if (redSquare.x - redSquare.width <= 0) {
            redSquare.dx = 1
        }

        if (redSquare.dy === 1) {
            if (redSquare.y + redSquare.height >= canvas.height) {
                redSquare.dy += -1
            }
        } else if (redSquare.dy === -1) {
            if (redSquare.y - redSquare.height <= 0) {
                redSquare.dy += 1
            }
        }

        if (redSquare.y + redSquare.height >= canvas.height) {
            redSquare.dy = -1
        }

        if (redSquare.y - redSquare.height <= 0) {
            redSquare.dy = 1
        }

        redSquare.x += redSquare.dx
        redSquare.y += redSquare.dy

        redSquare.render()

        redTriangle.render()
        blueTriangle.render()
        greenTriangle.render()
        yellowTriangle.render()

    }

    function moveBlueSquare() {

        if (blueSquare.dx === 1) {
            if (blueSquare.x + blueSquare.width >= canvas.width) {
                blueSquare.dx += -1
            }
        } else if (blueSquare.dx === -1) {
            if (blueSquare.x - blueSquare.width <= 0) {
                blueSquare.dx += 1
            }
        }
        if (blueSquare.x + blueSquare.width >= canvas.width) {
            blueSquare.dx = -1
        }

        if (blueSquare.x - blueSquare.width <= 0) {
            blueSquare.dx = 1
        }

        if (blueSquare.dy === 1) {
            if (blueSquare.y + blueSquare.height >= canvas.height) {
                blueSquare.dy += -1
            }
        } else if (blueSquare.dy === -1) {
            if (blueSquare.y - blueSquare.height <= 0) {
                blueSquare.dy += 1
            }
        }

        if (blueSquare.y + blueSquare.height >= canvas.height) {
            blueSquare.dy = -1
        }

        if (blueSquare.y - blueSquare.height <= 0) {
            blueSquare.dy = 1
        }

        blueSquare.x += blueSquare.dx
        blueSquare.y += blueSquare.dy

        blueSquare.render()

    }

    function moveGreenSquare() {

        if (greenSquare.dx === 1) {
            if (greenSquare.x + greenSquare.width >= canvas.width) {
                greenSquare.dx += -1
            }
        } else if (greenSquare.dx === -1) {
            if (greenSquare.x - greenSquare.width <= 0) {
                greenSquare.dx += 1
            }
        }
        if (greenSquare.x + greenSquare.width >= canvas.width) {
            greenSquare.dx = -1
        }

        if (greenSquare.x - greenSquare.width <= 0) {
            greenSquare.dx = 1
        }

        if (greenSquare.dy === 1) {
            if (greenSquare.y + greenSquare.height >= canvas.height) {
                greenSquare.dy += -1
            }
        } else if (greenSquare.dy === -1) {
            if (greenSquare.y - greenSquare.height <= 0) {
                greenSquare.dy += 1
            }
        }

        if (greenSquare.y + greenSquare.height >= canvas.height) {
            greenSquare.dy = -1
        }

        if (greenSquare.y - greenSquare.height <= 0) {
            greenSquare.dy = 1
        }

        greenSquare.x += greenSquare.dx
        greenSquare.y += greenSquare.dy

        greenSquare.render()

    }

    function moveYellowSquare() {

        if (yellowSquare.dx === 1) {
            if (yellowSquare.x + yellowSquare.width >= canvas.width) {
                yellowSquare.dx += -1
            }
        } else if (yellowSquare.dx === -1) {
            if (yellowSquare.x - yellowSquare.width <= 0) {
                yellowSquare.dx += 1
            }
        }
        if (yellowSquare.x + yellowSquare.width >= canvas.width) {
            yellowSquare.dx = -1
        }

        if (yellowSquare.x - yellowSquare.width <= 0) {
            yellowSquare.dx = 1
        }

        if (yellowSquare.dy === 1) {
            if (yellowSquare.y + yellowSquare.height >= canvas.height) {
                yellowSquare.dy += -1
            }
        } else if (yellowSquare.dy === -1) {
            if (yellowSquare.y - yellowSquare.height <= 0) {
                yellowSquare.dy += 1
            }
        }

        if (yellowSquare.y + yellowSquare.height >= canvas.height) {
            yellowSquare.dy = -1
        }

        if (yellowSquare.y - yellowSquare.height <= 0) {
            yellowSquare.dy = 1
        }

        yellowSquare.x += yellowSquare.dx
        yellowSquare.y += yellowSquare.dy

        yellowSquare.render()

    }

    function moveRedCircle() {

        if (redCircle.dx === 1) {
            if (redCircle.x + 12.5 >= canvas.width) {
                redCircle.dx += -1
            }
        } else if (redCircle.dx === -1) {
            if (redCircle.x - 12.5 <= 0) {
                redCircle.dx += 1
            }
        }
        if (redCircle.x + 12.5 >= canvas.width) {
            redCircle.dx = -1
        }

        if (redCircle.x - 12.5 <= 0) {
            redCircle.dx = 1
        }

        if (redCircle.dy === 1) {
            if (redCircle.y + 12.5 >= canvas.height) {
                redCircle.dy += -1
            }
        } else if (redCircle.dy === -1) {
            if (redCircle.y - 12.5 <= 0) {
                redCircle.dy += 1
            }
        }

        if (redCircle.y + 12.5 >= canvas.height) {
            redCircle.dy = -1
        }

        if (redCircle.y - 12.5 <= 0) {
            redCircle.dy = 1
        }

        redCircle.x += redCircle.dx
        redCircle.y += redCircle.dy

        redCircle.render()

    }

    function moveBlueCircle() {

        if (blueCircle.dx === 1) {
            if (blueCircle.x + 12.5 >= canvas.width) {
                blueCircle.dx += -1
            }
        } else if (blueCircle.dx === -1) {
            if (blueCircle.x - 12.5 <= 0) {
                blueCircle.dx += 1
            }
        }
        if (blueCircle.x + 12.5 >= canvas.width) {
            blueCircle.dx = -1
        }

        if (blueCircle.x - 12.5 <= 0) {
            blueCircle.dx = 1
        }

        if (blueCircle.dy === 1) {
            if (blueCircle.y + 12.5 >= canvas.height) {
                blueCircle.dy += -1
            }
        } else if (blueCircle.dy === -1) {
            if (blueCircle.y - 12.5 <= 0) {
                blueCircle.dy += 1
            }
        }

        if (blueCircle.y + 12.5 >= canvas.height) {
            blueCircle.dy = -1
        }

        if (blueCircle.y - 12.5 <= 0) {
            blueCircle.dy = 1
        }

        blueCircle.x += blueCircle.dx
        blueCircle.y += blueCircle.dy

        blueCircle.render()

    }

    function moveGreenCircle() {

        if (greenCircle.dx === 1) {
            if (greenCircle.x + 12.5 >= canvas.width) {
                greenCircle.dx += -1
            }
        } else if (greenCircle.dx === -1) {
            if (greenCircle.x - 12.5 <= 0) {
                greenCircle.dx += 1
            }
        }
        if (greenCircle.x + 12.5 >= canvas.width) {
            greenCircle.dx = -1
        }

        if (greenCircle.x - 12.5 <= 0) {
            greenCircle.dx = 1
        }

        if (greenCircle.dy === 1) {
            if (greenCircle.y + 12.5 >= canvas.height) {
                greenCircle.dy += -1
            }
        } else if (greenCircle.dy === -1) {
            if (greenCircle.y - 12.5 <= 0) {
                greenCircle.dy += 1
            }
        }

        if (greenCircle.y + 12.5 >= canvas.height) {
            greenCircle.dy = -1
        }

        if (greenCircle.y - 12.5 <= 0) {
            greenCircle.dy = 1
        }

        greenCircle.x += greenCircle.dx
        greenCircle.y += greenCircle.dy

        greenCircle.render()

    }

    function moveYellowCircle() {

        if (yellowCircle.dx === 1) {
            if (yellowCircle.x + 12.5 >= canvas.width) {
                yellowCircle.dx += -1
            }
        } else if (yellowCircle.dx === -1) {
            if (yellowCircle.x - 12.5 <= 0) {
                yellowCircle.dx += 1
            }
        }
        if (yellowCircle.x + 12.5 >= canvas.width) {
            yellowCircle.dx = -1
        }

        if (yellowCircle.x - 12.5 <= 0) {
            yellowCircle.dx = 1
        }

        if (yellowCircle.dy === 1) {
            if (yellowCircle.y + 12.5 >= canvas.height) {
                yellowCircle.dy += -1
            }
        } else if (yellowCircle.dy === -1) {
            if (yellowCircle.y - 12.5 <= 0) {
                yellowCircle.dy += 1
            }
        }

        if (yellowCircle.y + 12.5 >= canvas.height) {
            yellowCircle.dy = -1
        }

        if (yellowCircle.y - 12.5 <= 0) {
            yellowCircle.dy = 1
        }

        yellowCircle.x += yellowCircle.dx
        yellowCircle.y += yellowCircle.dy

        yellowCircle.render()

    }

    function moveRedTriangle() {

        if (redTriangle.dx === 1) {
            if (redTriangle.x + 25 >= canvas.width) {
                redTriangle.dx += -1
            }
        } else if (redTriangle.dx === -1) {
            if (redTriangle.x - 25 <= 0) {
                redTriangle.dx += 1
            }
        }
        if (redTriangle.x + 25 >= canvas.width) {
            redTriangle.dx = -1
        }

        if (redTriangle.x - 25 <= 0) {
            redTriangle.dx = 1
        }

        if (redTriangle.dy === 1) {
            if (redTriangle.y + 25 >= canvas.height) {
                redTriangle.dy += -1
            }
        } else if (redTriangle.dy === -1) {
            if (redTriangle.y - 25 <= 0) {
                redTriangle.dy += 1
            }
        }

        if (redTriangle.y + 25 >= canvas.height) {
            redTriangle.dy = -1
        }

        if (redTriangle.y - 25 <= 0) {
            redTriangle.dy = 1
        }

        redTriangle.x += redTriangle.dx
        redTriangle.y += redTriangle.dy

        redTriangle.render()

    }

    function moveBlueTriangle() {

        if (blueTriangle.dx === 1) {
            if (blueTriangle.x + 25 >= canvas.width) {
                blueTriangle.dx += -1
            }
        } else if (blueTriangle.dx === -1) {
            if (blueTriangle.x - 25 <= 0) {
                blueTriangle.dx += 1
            }
        }
        if (blueTriangle.x + 25 >= canvas.width) {
            blueTriangle.dx = -1
        }

        if (blueTriangle.x - 25 <= 0) {
            blueTriangle.dx = 1
        }

        if (blueTriangle.dy === 1) {
            if (blueTriangle.y + 25 >= canvas.height) {
                blueTriangle.dy += -1
            }
        } else if (blueTriangle.dy === -1) {
            if (blueTriangle.y - 25 <= 0) {
                blueTriangle.dy += 1
            }
        }

        if (blueTriangle.y + 25 >= canvas.height) {
            blueTriangle.dy = -1
        }

        if (blueTriangle.y - 25 <= 0) {
            blueTriangle.dy = 1
        }

        blueTriangle.x += blueTriangle.dx
        blueTriangle.y += blueTriangle.dy

        blueTriangle.render()

    }

    function moveGreenTriangle() {

        if (greenTriangle.dx === 1) {
            if (greenTriangle.x + 25 >= canvas.width) {
                greenTriangle.dx += -1
            }
        } else if (greenTriangle.dx === -1) {
            if (greenTriangle.x - 25 <= 0) {
                greenTriangle.dx += 1
            }
        }
        if (greenTriangle.x + 25 >= canvas.width) {
            greenTriangle.dx = -1
        }

        if (greenTriangle.x - 25 <= 0) {
            greenTriangle.dx = 1
        }

        if (greenTriangle.dy === 1) {
            if (greenTriangle.y + 25 >= canvas.height) {
                greenTriangle.dy += -1
            }
        } else if (greenTriangle.dy === -1) {
            if (greenTriangle.y - 25 <= 0) {
                greenTriangle.dy += 1
            }
        }

        if (greenTriangle.y + 25 >= canvas.height) {
            greenTriangle.dy = -1
        }

        if (greenTriangle.y - 25 <= 0) {
            greenTriangle.dy = 1
        }

        greenTriangle.x += greenTriangle.dx
        greenTriangle.y += greenTriangle.dy

        greenTriangle.render()

    }

    function moveYellowTriangle() {

        if (yellowTriangle.dx === 1) {
            if (yellowTriangle.x + 25 >= canvas.width) {
                yellowTriangle.dx += -1
            }
        } else if (yellowTriangle.dx === -1) {
            if (yellowTriangle.x - 25 <= 0) {
                yellowTriangle.dx += 1
            }
        }
        if (yellowTriangle.x + 25 >= canvas.width) {
            yellowTriangle.dx = -1
        }

        if (yellowTriangle.x - 25 <= 0) {
            yellowTriangle.dx = 1
        }

        if (yellowTriangle.dy === 1) {
            if (yellowTriangle.y + 25 >= canvas.height) {
                yellowTriangle.dy += -1
            }
        } else if (yellowTriangle.dy === -1) {
            if (yellowTriangle.y - 25 <= 0) {
                yellowTriangle.dy += 1
            }
        }

        if (yellowTriangle.y + 25 >= canvas.height) {
            yellowTriangle.dy = -1
        }

        if (yellowTriangle.y - 25 <= 0) {
            yellowTriangle.dy = 1
        }

        yellowTriangle.x += yellowTriangle.dx
        yellowTriangle.y += yellowTriangle.dy

        yellowTriangle.render()

    }

    let gameLoopRedSquare = setInterval(moveRedSquare, 15)
    let gameLoopBlueSquare = setInterval(moveBlueSquare, 15)
    let gameLoopGreenSquare = setInterval(moveGreenSquare, 15)
    let gameLoopYellowSquare = setInterval(moveYellowSquare, 15)

    let gameLoopRedCircle = setInterval(moveRedCircle, 15)
    let gameLoopBlueCircle = setInterval(moveBlueCircle, 15)
    let gameLoopGreenCircle = setInterval(moveGreenCircle, 15)
    let gameLoopYellowCircle = setInterval(moveYellowCircle, 15)

    let gameLoopRedTriangle = setInterval(moveRedTriangle, 15)
    let gameLoopBlueTriangle = setInterval(moveBlueTriangle, 15)
    let gameLoopGreenTriangle = setInterval(moveGreenTriangle, 15)
    let gameLoopYellowTriangle = setInterval(moveYellowTriangle, 15)

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

            // Target that the player needs to reach
    // function CrawlerTarget() {
    //     this.x = Math.floor(Math.random() * (canvas.width -25))
    //     this.y = Math.floor(Math.random() * (canvas.height - 25))
    //     this.color = "black"
    //     this.width = 25
    //     this.height = 25
    //     this.render = function() {
    //         ctx.fillStyle = this.color
    //         ctx.fillRect(this.x, this.y, this.width, this.height)
    //     }
    // }

    // let target = new CrawlerTarget()

    // target.render()

    // Player object
    // function CrawlerPlayer() {
    //     this.x = Math.floor(Math.random() * (canvas.width -25))
    //     this.y = Math.floor(Math.random() * (canvas.height - 25))
    //     this.color = "black"
    //     this.render = function() {
    //         ctx.fillStyle = this.color
    //         ctx.beginPath()
    //         ctx.arc(this.x, this.y, 12.5 , 0, Math.PI*2)
    //         ctx.closePath()
    //         ctx.fill()
    //     }
    // }

    // let player = new CrawlerPlayer()

    // player.render()

    // Player movement

    // const movementHandler = (e) => {
    //     console.log(e.key)
    //     switch(e.key) {
    //         case "w":
    //             player.y -= 6
    //             break
    //         case "d":
    //             player.x += 6
    //             break
    //         case "s":
    //             player.y += 6
    //             break
    //         case "a":
    //             player.x -= 6
    //             break
    //     }
    // }
    
    // document.addEventListener("keydown", movementHandler)