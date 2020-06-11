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

    // Square constructor
    function CrawlerSquare(color, width, height) {
        this.x = Math.floor(Math.random() * (canvas.width -25))
        this.y = Math.floor(Math.random() * (canvas.height - 25))
        this.color = color
        this.dx = 1
        this.dy = 1
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

    // Circle constructor
    function CrawlerCircle(color) {
        this.x = Math.floor(Math.random() * (canvas.width - 25))
        this.y = Math.floor(Math.random() * (canvas.height - 25))
        this.color = color
        this.dx = 1
        this.dy = 1
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

    let gameLoopRedSquare = setInterval(moveRedSquare, 10)
    let gameLoopBlueSquare = setInterval(moveBlueSquare, 10)
    let gameLoopGreenSquare = setInterval(moveGreenSquare, 10)
    let gameLoopYellowSquare = setInterval(moveYellowSquare, 10)

    let gameLoopRedCircle = setInterval(moveRedCircle, 10)
    let gameLoopBlueCircle = setInterval(moveBlueCircle, 10)
    let gameLoopGreenCircle = setInterval(moveGreenCircle, 10)
    let gameLoopYellowCircle = setInterval(moveYellowCircle, 10)

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