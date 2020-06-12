document.addEventListener('DOMContentLoaded', function() {

    let canvas = document.querySelector("canvas")
        canvas.width = 800
        canvas.height = 500

    let ctx = canvas.getContext("2d")

    let topRow = document.getElementById("player-pattern")

    // Starting screen starts visible. Game screen starts hidden
    document.getElementById("game-screen").style.visibiliy = "visible"
    document.getElementById("starting-screen").style.visibility = "hidden"

    // Square constructor, takes color as input
    function CrawlerSquare(color, id) {
        this.x = Math.floor(Math.random() * (canvas.width -25))
        this.y = Math.floor(Math.random() * (canvas.height - 25))
        this.color = color
        this.dx = 1
        this.dy = 1
        this.id = id
        this.width = 25
        this.height = 25
        this.render = function() {
            ctx.fillStyle = this.color
            ctx.fillRect(this.x, this.y, this.width, this.height)
        }
    }
    
    // Calls CrawlerSquare for four different colors
    let redSquare = new CrawlerSquare("red", "1")
    let blueSquare = new CrawlerSquare("blue", "2")
    let greenSquare = new CrawlerSquare("green", "3")
    let yellowSquare = new CrawlerSquare("yellow", "4")
    
    redSquare.render()
    blueSquare.render()
    greenSquare.render()
    yellowSquare.render()

    // Circle constructor, takes color as input
    function CrawlerCircle(color, id) {
        this.x = Math.floor(Math.random() * (canvas.width - 25))
        this.y = Math.floor(Math.random() * (canvas.height - 25))
        this.color = color
        this.dx = 1
        this.dy = 1
        this.id = id
        this.render = function() {
            ctx.fillStyle = this.color
            ctx.beginPath()
            ctx.arc(this.x, this.y, 12.5 , 0, Math.PI*2)
            ctx.closePath()
            ctx.fill()
        }

    }

    // Calls CrawlerCircle for four different colors
    let redCircle = new CrawlerCircle("red", "5")
    let blueCircle = new CrawlerCircle("blue", "6")
    let greenCircle = new CrawlerCircle("green", "7")
    let yellowCircle = new CrawlerCircle("yellow", "8")

    redCircle.render()
    blueCircle.render()
    greenCircle.render()
    yellowCircle.render()

    // Triangle constructor, takes color as input
    function CrawlerTriangle(color, id) {
        this.x = Math.floor(Math.random() * (canvas.width - 25))
        this.y = Math.floor(Math.random() * (canvas.height - 25))
        this.color = color
        this.dx = 1
        this.dy = 1
        this.id = id
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
    
    // Calls CrawlerTriangle for four different colors
    let redTriangle = new CrawlerTriangle("red", "9")
    let blueTriangle = new CrawlerTriangle("blue", "10")
    let greenTriangle = new CrawlerTriangle("green", "11")
    let yellowTriangle = new CrawlerTriangle("yellow", "12")
    
    redTriangle.render()
    blueTriangle.render()
    greenTriangle.render()
    yellowTriangle.render()

    let computerArray = []
    let playerArray = []
    let gameArray = [redSquare, blueSquare, greenSquare, yellowSquare,
                    redCircle, blueCircle, greenCircle, yellowCircle,
                    redTriangle, blueTriangle, greenTriangle, yellowTriangle]

    let startButton = document.querySelector("button")
    startButton.addEventListener("click", startGame())

    // Computer randomly selects five elements (shapes) of gameArray and stores them in computerArray
    function computerChoice() {
        // Checks to make sure there are no repeated elements
        while (computerArray.length < 5) {
            let randomChoice = gameArray[Math.floor(Math.random() * gameArray.length)]
            if (!computerArray.includes(randomChoice)) {
                computerArray.push(randomChoice)
            }
        }
        console.log(computerArray)
    }
        
    // Hides starting screen, reveals game screen, calls computerChoice
    function startGame() {
            document.getElementById("game-screen").style.visibility = "visible"
            document.getElementById("starting-screen").style.visibility = "hidden"

            computerChoice()
        }

    // Check if player array length equals length of computer array
    // If they are same length, compare them
    // If they have the same elements in the same positions
    // That's a win condition. Display text, wait 3 seconds, reload page
    // If not, that's a loss condition. Display text, wait 3 seconds, reload page
    function endGame() {
        if (playerArray.length === 5) {
            let score = 0
            for (i = 0; i < 5; i++) {
                if (playerArray[i].id === computerArray[i].id) {
                    score++
                } else {
                    console.log("Player loses!")
                    topRow.innerText = "Player loses!"
                    setTimeout(location.reload, 3000)
                }
            }
            if (score === 5) {
                console.log("Player wins")
                topRow.innerText = "Player wins!"
                setTimeout(location.reload, 3000)
            }
        }
    }

    // Registers coordinates of mouse click,
    // checks if they match coordinates of a red shape
    // Stops the movement of that shape
    // Stores the shape in playerArray
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

        endGame()

    }

    canvas.addEventListener("click", detectRedClick)

    // Registers coordinates of mouse click,
    // checks if they match coordinates of a blue shape
    // Stops the movement of that shape
    // Stores the shape in playerArray
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

        endGame()

    }

    canvas.addEventListener("click", detectBlueClick)

    // Registers coordinates of mouse click,
    // checks if they match coordinates of a green shape
    // Stops the movement of that shape
    // Stores the shape in playerArray
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

        endGame()

    }

    canvas.addEventListener("click", detectGreenClick)

    // Registers coordinates of mouse click,
    // checks if they match coordinates of a yellow shape
    // Stops the movement of that shape
    // Stores the shape in playerArray
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

        endGame()

    }

    canvas.addEventListener("click", detectYellowClick)

    console.log(playerArray)

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