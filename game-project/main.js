document.addEventListener('DOMContentLoaded', function() {

    let firstCanvas = document.getElementById("first-canvas")
        firstCanvas.width = 800
        firstCanvas.height = 500

    let ctx = firstCanvas.getContext("2d")

    let secondCanvas = document.getElementById("second-canvas")
        secondCanvas.width = 800
        secondCanvas.height = 150

    let ctxTwo = secondCanvas.getContext("2d")

    let thirdCanvas = document.getElementById("third-canvas")
        thirdCanvas.width = 800
        thirdCanvas.height = 150

    let ctxThree = thirdCanvas.getContext("2d")

    let topRow = document.getElementById("player-pattern")

    let startButton = document.getElementById("start-button")

    let restartButton = document.getElementById("play-again")

    let timer = document.getElementById("timer")

    let remainingTime = 30

    // Starting screen starts visible. Game screen starts hidden
    document.getElementById("game-screen").style.visibility = "hidden"
    document.getElementById("starting-screen").style.visibility = "visible"

    // Square constructor, takes color and id as input. Id for array comparison
    function CrawlerSquare(color, id) {
        this.x = Math.floor(Math.random() * (firstCanvas.width -25))
        this.y = Math.floor(Math.random() * (firstCanvas.height - 25))
        this.color = color
        this.dx = 1
        this.dy = 1
        this.id = id
        this.width = 25
        this.height = 25
        this.render = function() {
            ctx.shadowColor = "black"
            ctx.shadowBlur = 15
            ctx.fillStyle = this.color
            ctx.fillRect(this.x, this.y, this.width, this.height)
        }
        this.renderTwo = function() {
            ctxTwo.fillStyle = this.color
            ctxTwo.fillRect(80, 75, this.width, this.height)
        }
        this.renderThree = function() {
            ctxTwo.fillStyle = this.color
            ctxTwo.fillRect(240, 75, this.width, this.height)
        }
        this.renderFour = function() {
            ctxTwo.fillStyle = this.color
            ctxTwo.fillRect(400, 75, this.width, this.height)
        }
        this.renderFive = function() {
            ctxTwo.fillStyle = this.color
            ctxTwo.fillRect(560, 75, this.width, this.height)
        }
        this.renderSix = function() {
            ctxTwo.fillStyle = this.color
            ctxTwo.fillRect(720, 75, this.width, this.height)
        }
        this.renderSeven = function() {
            ctxThree.fillStyle = this.color
            ctxThree.fillRect(80, 75, this.width, this.height)
        }
        this.renderEight = function() {
            ctxThree.fillStyle = this.color
            ctxThree.fillRect(240, 75, this.width, this.height)
        }
        this.renderNine = function() {
            ctxThree.fillStyle = this.color
            ctxThree.fillRect(400, 75, this.width, this.height)
        }
        this.renderTen = function() {
            ctxThree.fillStyle = this.color
            ctxThree.fillRect(560, 75, this.width, this.height)
        }
        this.renderEleven = function() {
            ctxThree.fillStyle = this.color
            ctxThree.fillRect(720, 75, this.width, this.height)
        }
    }

    // Circle constructor, takes color and id as input. Id for array comparison
    function CrawlerCircle(color, id) {
        this.x = Math.floor(Math.random() * (firstCanvas.width - 25))
        this.y = Math.floor(Math.random() * (firstCanvas.height - 25))
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
        this.renderTwo = function() {
            ctxTwo.fillStyle = this.color
            ctxTwo.beginPath()
            ctxTwo.arc(80, 75, 12.5 , 0, Math.PI*2)
            ctxTwo.closePath()
            ctxTwo.fill()
        }
        this.renderThree = function() {
            ctxTwo.fillStyle = this.color
            ctxTwo.beginPath()
            ctxTwo.arc(240, 75, 12.5 , 0, Math.PI*2)
            ctxTwo.closePath()
            ctxTwo.fill()
        }
        this.renderFour = function() {
            ctxTwo.fillStyle = this.color
            ctxTwo.beginPath()
            ctxTwo.arc(400, 75, 12.5 , 0, Math.PI*2)
            ctxTwo.closePath()
            ctxTwo.fill()
        }
        this.renderFive = function() {
            ctxTwo.fillStyle = this.color
            ctxTwo.beginPath()
            ctxTwo.arc(560, 75, 12.5 , 0, Math.PI*2)
            ctxTwo.closePath()
            ctxTwo.fill()
        }
        this.renderSix = function() {
            ctxTwo.fillStyle = this.color
            ctxTwo.beginPath()
            ctxTwo.arc(720, 75, 12.5 , 0, Math.PI*2)
            ctxTwo.closePath()
            ctxTwo.fill()
        }
        this.renderSeven = function() {
            ctxThree.fillStyle = this.color
            ctxThree.beginPath()
            ctxThree.arc(80, 75, 12.5 , 0, Math.PI*2)
            ctxThree.closePath()
            ctxThree.fill()
        }
        this.renderEight = function() {
            ctxThree.fillStyle = this.color
            ctxThree.beginPath()
            ctxThree.arc(240, 75, 12.5 , 0, Math.PI*2)
            ctxThree.closePath()
            ctxThree.fill()
        }
        this.renderNine = function() {
            ctxThree.fillStyle = this.color
            ctxThree.beginPath()
            ctxThree.arc(400, 75, 12.5 , 0, Math.PI*2)
            ctxThree.closePath()
            ctxThree.fill()
        }
        this.renderTen = function() {
            ctxThree.fillStyle = this.color
            ctxThree.beginPath()
            ctxThree.arc(560, 75, 12.5 , 0, Math.PI*2)
            ctxThree.closePath()
            ctxThree.fill()
        }
        this.renderEleven = function() {
            ctxThree.fillStyle = this.color
            ctxThree.beginPath()
            ctxThree.arc(720, 75, 12.5 , 0, Math.PI*2)
            ctxThree.closePath()
            ctxThree.fill()
        }
    }
    // Triangle constructor, takes color and id as input. Id for array comparison
    function CrawlerTriangle(color, id) {
        this.x = Math.floor(Math.random() * (firstCanvas.width - 25))
        this.y = Math.floor(Math.random() * (firstCanvas.height - 25))
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
        this.renderTwo = function() {
            ctxTwo.fillStyle = this.color
            ctxTwo.beginPath()
            ctxTwo.moveTo(80, 75)
            ctxTwo.lineTo(80, 100)
            ctxTwo.lineTo(105, 100)
            ctxTwo.closePath()
            ctxTwo.fill()
        }
        this.renderThree = function() {
            ctxTwo.fillStyle = this.color
            ctxTwo.beginPath()
            ctxTwo.moveTo(240, 75)
            ctxTwo.lineTo(240, 100)
            ctxTwo.lineTo(265, 100)
            ctxTwo.closePath()
            ctxTwo.fill()
        }
        this.renderFour = function() {
            ctxTwo.fillStyle = this.color
            ctxTwo.beginPath()
            ctxTwo.moveTo(400, 75)
            ctxTwo.lineTo(400, 100)
            ctxTwo.lineTo(425, 100)
            ctxTwo.closePath()
            ctxTwo.fill()
        }
        this.renderFive = function() {
            ctxTwo.fillStyle = this.color
            ctxTwo.beginPath()
            ctxTwo.moveTo(560, 75)
            ctxTwo.lineTo(560, 100)
            ctxTwo.lineTo(585, 100)
            ctxTwo.closePath()
            ctxTwo.fill()
        }
        this.renderSix = function() {
            ctxTwo.fillStyle = this.color
            ctxTwo.beginPath()
            ctxTwo.moveTo(720, 75)
            ctxTwo.lineTo(720, 100)
            ctxTwo.lineTo(745, 100)
            ctxTwo.closePath()
            ctxTwo.fill()
        }
        this.renderSeven = function() {
            ctxTwo.fillStyle = this.color
            ctxTwo.beginPath()
            ctxTwo.moveTo(80, 75)
            ctxTwo.lineTo(80, 100)
            ctxTwo.lineTo(105, 100)
            ctxTwo.closePath()
            ctxTwo.fill()
        }
        this.renderEight = function() {
            ctxTwo.fillStyle = this.color
            ctxTwo.beginPath()
            ctxTwo.moveTo(240, 75)
            ctxTwo.lineTo(245, 100)
            ctxTwo.lineTo(265, 100)
            ctxTwo.closePath()
            ctxTwo.fill()
        }
        this.renderNine = function() {
            ctxTwo.fillStyle = this.color
            ctxTwo.beginPath()
            ctxTwo.moveTo(400, 75)
            ctxTwo.lineTo(400, 100)
            ctxTwo.lineTo(425, 100)
            ctxTwo.closePath()
            ctxTwo.fill()
        }
        this.renderTen = function() {
            ctxTwo.fillStyle = this.color
            ctxTwo.beginPath()
            ctxTwo.moveTo(560, 75)
            ctxTwo.lineTo(560, 100)
            ctxTwo.lineTo(585, 100)
            ctxTwo.closePath()
            ctxTwo.fill()
        }
        this.renderEleven = function() {
            ctxTwo.fillStyle = this.color
            ctxTwo.beginPath()
            ctxTwo.moveTo(720, 75)
            ctxTwo.lineTo(720, 100)
            ctxTwo.lineTo(745, 100)
            ctxTwo.closePath()
            ctxTwo.fill()
        }
    }

    let redSquare = new CrawlerSquare("red", "1")
    let blueSquare = new CrawlerSquare("blue", "2")
    let greenSquare = new CrawlerSquare("green", "3")
    let yellowSquare = new CrawlerSquare("yellow", "4")

    let redCircle = new CrawlerCircle("red", "5")
    let blueCircle = new CrawlerCircle("blue", "6")
    let greenCircle = new CrawlerCircle("green", "7")
    let yellowCircle = new CrawlerCircle("yellow", "8")
    
    let redTriangle = new CrawlerTriangle("red", "9")
    let blueTriangle = new CrawlerTriangle("blue", "10")
    let greenTriangle = new CrawlerTriangle("green", "11")
    let yellowTriangle = new CrawlerTriangle("yellow", "12")

    let computerArray = []
    let playerArray = []
    let gameArray = [redSquare, blueSquare, greenSquare, yellowSquare,
                    redCircle, blueCircle, greenCircle, yellowCircle,
                    redTriangle, blueTriangle, greenTriangle, yellowTriangle]

    startButton.addEventListener("click", startGame)

    restartButton.addEventListener("click", startOver)

    function startOver() {
        location.reload()
    }

     // Hides starting screen, reveals game screen, calls computerChoice
    function startGame() {
        document.getElementById("game-screen").style.visibility = "visible"
        document.getElementById("starting-screen").style.visibility = "hidden"

        computerChoice()

        setInterval(updateClock, 1000)
    }

    // Timer counts down from 30 to zero
    function updateClock() {
        timer.textContent = remainingTime
        if (remainingTime > 0) {
            remainingTime--
        } else {
            timer.textContent = "0"
        }
    }

    // Computer randomly selects five elements (shapes) of gameArray and stores them in computerArray
    function computerChoice() {
        // Checks to make sure there are no repeated elements
        while (computerArray.length < 5) {
            let randomChoice = gameArray[Math.floor(Math.random() * gameArray.length)]
            if (!computerArray.includes(randomChoice)) {
                computerArray.push(randomChoice)
            }
        }
        // Display randomly selected array elements in the second canvas
        // This allows the player to see the pattern the computer chose
        computerArray[0].renderTwo()
        computerArray[1].renderThree()
        computerArray[2].renderFour()
        computerArray[3].renderFive()
        computerArray[4].renderSix()

        console.log(computerArray)

        // Displays computer chocies for five seconds
        function clearSecondCanvas() {
            ctxTwo.clearRect(0, 0, secondCanvas.width, secondCanvas.height)
        }
    
        setTimeout(clearSecondCanvas, 5000)
    }

    // Check if player array length equals length of computer array
    // If they are same length, compare them
    // If they have the same elements in the same positions
    // That's a win condition. Display text
    // If not, that's a loss condition. Display text
    function endGame() {
        if (playerArray.length === 5) {
            let score = 0
            for (i = 0; i < 5; i++) {
                if (playerArray[i].id === computerArray[i].id) {
                    score++
                }
            }
            if (score === 5) {
                topRow.innerText = "Player wins!"
            } else {
                topRow.innerText = "Player loses!"
            }
        }
    }

    // Registers coordinates of mouse click,
    // checks if they match coordinates of a shape
    // Stops the movement of that shape
    // Stores the shape in playerArray
    function detectClick(e) {
        let x = e.offsetX
        let y = e.offsetY
        // Red square click
        if (x <= redSquare.x + 25 && x >= redSquare.x && y <= redSquare.y + 25 && y >= redSquare.y) {
            redSquare.dx = 0
            redSquare.dy = 0
            playerArray.push(redSquare)
        }
        // Red circle click
        if (x <= redCircle.x + 25 && x >= redCircle.x && y <= redCircle.y + 25 && y >= redCircle.y) {
            redCircle.dx = 0
            redCircle.dy = 0
            playerArray.push(redCircle)
        }
        // Red triangle click
        if (x <= redTriangle.x + 25 && x >= redTriangle.x && y <= redTriangle.y + 25 && y >= redTriangle.y) {
            redTriangle.dx = 0
            redTriangle.dy = 0
            playerArray.push(redTriangle)
        }
        // Blue square click
        if (x <= blueSquare.x + 25 && x >= blueSquare.x && y <= blueSquare.y + 25 && y >= blueSquare.y) {
            blueSquare.dx = 0
            blueSquare.dy = 0
            playerArray.push(blueSquare)
        }
        // Blue circle click
        if (x <= blueCircle.x + 25 && x >= blueCircle.x && y <= blueCircle.y + 25 && y >= blueCircle.y) {
            blueCircle.dx = 0
            blueCircle.dy = 0
            playerArray.push(blueCircle)
        }
        // Blue triangle click
        if (x <= blueTriangle.x + 25 && x >= blueTriangle.x && y <= blueTriangle.y + 25 && y >= blueTriangle.y) {
            blueTriangle.dx = 0
            blueTriangle.dy = 0
            playerArray.push(blueTriangle)
        }
        // Green square click
        if (x <= greenSquare.x + 25 && x >= greenSquare.x && y <= greenSquare.y + 25 && y >= greenSquare.y) {
            greenSquare.dx = 0
            greenSquare.dy = 0
            playerArray.push(greenSquare)
        }
        // Green circle click
        if (x <= greenCircle.x + 25 && x >= greenCircle.x && y <= greenCircle.y + 25 && y >= greenCircle.y) {
            greenCircle.dx = 0
            greenCircle.dy = 0
            playerArray.push(greenCircle)
        }
        // Green triangle click
        if (x <= greenTriangle.x + 25 && x >= greenTriangle.x && y <= greenTriangle.y + 25 && y >= greenTriangle.y) {
            greenTriangle.dx = 0
            greenTriangle.dy = 0
            playerArray.push(greenTriangle)
        }
        // Yellow square click
        if (x <= yellowSquare.x + 25 && x >= yellowSquare.x && y <= yellowSquare.y + 25 && y >= yellowSquare.y) {
            yellowSquare.dx = 0
            yellowSquare.dy = 0
            playerArray.push(yellowSquare)
        }
        // Yellow circle click
        if (x <= yellowCircle.x + 25 && x >= yellowCircle.x && y <= yellowCircle.y + 25 && y >= yellowCircle.y) {
            yellowCircle.dx = 0
            yellowCircle.dy = 0
            playerArray.push(yellowCircle)
        }
        // Yellow triangle click
        if (x <= yellowTriangle.x + 25 && x >= yellowTriangle.x && y <= yellowTriangle.y + 25 && y >= yellowTriangle.y) {
            yellowTriangle.dx = 0
            yellowTriangle.dy = 0
            playerArray.push(yellowTriangle)
        }

        // Rendering the shapes in the top canvas where player choses are displayed
        playerArray[0].renderSeven()
        playerArray[1].renderEight()
        playerArray[2].renderNine()
        playerArray[3].renderTen()
        playerArray[4].renderEleven()

        endGame()

    }

    firstCanvas.addEventListener("click", detectClick)

    console.log(playerArray)
    // On border collision, change direction
    function moveShapes() {
        ctx.clearRect(0, 0, firstCanvas.width, firstCanvas.height)
        // Red square movement
        if (redSquare.dx === 1) {
            if (redSquare.x + redSquare.width >= firstCanvas.width) {
                redSquare.dx += -1
            }
        } else if (redSquare.dx === -1) {
            if (redSquare.x - redSquare.width <= 0) {
                redSquare.dx += 1
            }
        }
        if (redSquare.x + redSquare.width >= firstCanvas.width) {
            redSquare.dx = -1
        }

        if (redSquare.x - redSquare.width <= 0) {
            redSquare.dx = 1
        }

        if (redSquare.dy === 1) {
            if (redSquare.y + redSquare.height >= firstCanvas.height) {
                redSquare.dy += -1
            }
        } else if (redSquare.dy === -1) {
            if (redSquare.y - redSquare.height <= 0) {
                redSquare.dy += 1
            }
        }

        if (redSquare.y + redSquare.height >= firstCanvas.height) {
            redSquare.dy = -1
        }

        if (redSquare.y - redSquare.height <= 0) {
            redSquare.dy = 1
        }
        // Blue square movement
        if (blueSquare.dx === 1) {
            if (blueSquare.x + blueSquare.width >= firstCanvas.width) {
                blueSquare.dx += -1
            }
        } else if (blueSquare.dx === -1) {
            if (blueSquare.x - blueSquare.width <= 0) {
                blueSquare.dx += 1
            }
        }
        if (blueSquare.x + blueSquare.width >= firstCanvas.width) {
            blueSquare.dx = -1
        }

        if (blueSquare.x - blueSquare.width <= 0) {
            blueSquare.dx = 1
        }

        if (blueSquare.dy === 1) {
            if (blueSquare.y + blueSquare.height >= firstCanvas.height) {
                blueSquare.dy += -1
            }
        } else if (blueSquare.dy === -1) {
            if (blueSquare.y - blueSquare.height <= 0) {
                blueSquare.dy += 1
            }
        }

        if (blueSquare.y + blueSquare.height >= firstCanvas.height) {
            blueSquare.dy = -1
        }

        if (blueSquare.y - blueSquare.height <= 0) {
            blueSquare.dy = 1
        }
        // Green square movement
        if (greenSquare.dx === 1) {
            if (greenSquare.x + greenSquare.width >= firstCanvas.width) {
                greenSquare.dx += -1
            }
        } else if (greenSquare.dx === -1) {
            if (greenSquare.x - greenSquare.width <= 0) {
                greenSquare.dx += 1
            }
        }
        if (greenSquare.x + greenSquare.width >= firstCanvas.width) {
            greenSquare.dx = -1
        }

        if (greenSquare.x - greenSquare.width <= 0) {
            greenSquare.dx = 1
        }

        if (greenSquare.dy === 1) {
            if (greenSquare.y + greenSquare.height >= firstCanvas.height) {
                greenSquare.dy += -1
            }
        } else if (greenSquare.dy === -1) {
            if (greenSquare.y - greenSquare.height <= 0) {
                greenSquare.dy += 1
            }
        }

        if (greenSquare.y + greenSquare.height >= firstCanvas.height) {
            greenSquare.dy = -1
        }

        if (greenSquare.y - greenSquare.height <= 0) {
            greenSquare.dy = 1
        }
        // Yellow square movement
        if (yellowSquare.dx === 1) {
            if (yellowSquare.x + yellowSquare.width >= firstCanvas.width) {
                yellowSquare.dx += -1
            }
        } else if (yellowSquare.dx === -1) {
            if (yellowSquare.x - yellowSquare.width <= 0) {
                yellowSquare.dx += 1
            }
        }
        if (yellowSquare.x + yellowSquare.width >= firstCanvas.width) {
            yellowSquare.dx = -1
        }

        if (yellowSquare.x - yellowSquare.width <= 0) {
            yellowSquare.dx = 1
        }

        if (yellowSquare.dy === 1) {
            if (yellowSquare.y + yellowSquare.height >= firstCanvas.height) {
                yellowSquare.dy += -1
            }
        } else if (yellowSquare.dy === -1) {
            if (yellowSquare.y - yellowSquare.height <= 0) {
                yellowSquare.dy += 1
            }
        }

        if (yellowSquare.y + yellowSquare.height >= firstCanvas.height) {
            yellowSquare.dy = -1
        }

        if (yellowSquare.y - yellowSquare.height <= 0) {
            yellowSquare.dy = 1
        }
        // Red circle movement
        if (redCircle.dx === 1) {
            if (redCircle.x + 12.5 >= firstCanvas.width) {
                redCircle.dx += -1
            }
        } else if (redCircle.dx === -1) {
            if (redCircle.x - 12.5 <= 0) {
                redCircle.dx += 1
            }
        }
        if (redCircle.x + 12.5 >= firstCanvas.width) {
            redCircle.dx = -1
        }

        if (redCircle.x - 12.5 <= 0) {
            redCircle.dx = 1
        }

        if (redCircle.dy === 1) {
            if (redCircle.y + 12.5 >= firstCanvas.height) {
                redCircle.dy += -1
            }
        } else if (redCircle.dy === -1) {
            if (redCircle.y - 12.5 <= 0) {
                redCircle.dy += 1
            }
        }

        if (redCircle.y + 12.5 >= firstCanvas.height) {
            redCircle.dy = -1
        }

        if (redCircle.y - 12.5 <= 0) {
            redCircle.dy = 1
        }
        // Blue circle movement
        if (blueCircle.dx === 1) {
            if (blueCircle.x + 12.5 >= firstCanvas.width) {
                blueCircle.dx += -1
            }
        } else if (blueCircle.dx === -1) {
            if (blueCircle.x - 12.5 <= 0) {
                blueCircle.dx += 1
            }
        }
        if (blueCircle.x + 12.5 >= firstCanvas.width) {
            blueCircle.dx = -1
        }

        if (blueCircle.x - 12.5 <= 0) {
            blueCircle.dx = 1
        }

        if (blueCircle.dy === 1) {
            if (blueCircle.y + 12.5 >= firstCanvas.height) {
                blueCircle.dy += -1
            }
        } else if (blueCircle.dy === -1) {
            if (blueCircle.y - 12.5 <= 0) {
                blueCircle.dy += 1
            }
        }

        if (blueCircle.y + 12.5 >= firstCanvas.height) {
            blueCircle.dy = -1
        }

        if (blueCircle.y - 12.5 <= 0) {
            blueCircle.dy = 1
        }
        // Green circle movement
        if (greenCircle.dx === 1) {
            if (greenCircle.x + 12.5 >= firstCanvas.width) {
                greenCircle.dx += -1
            }
        } else if (greenCircle.dx === -1) {
            if (greenCircle.x - 12.5 <= 0) {
                greenCircle.dx += 1
            }
        }
        if (greenCircle.x + 12.5 >= firstCanvas.width) {
            greenCircle.dx = -1
        }

        if (greenCircle.x - 12.5 <= 0) {
            greenCircle.dx = 1
        }

        if (greenCircle.dy === 1) {
            if (greenCircle.y + 12.5 >= firstCanvas.height) {
                greenCircle.dy += -1
            }
        } else if (greenCircle.dy === -1) {
            if (greenCircle.y - 12.5 <= 0) {
                greenCircle.dy += 1
            }
        }

        if (greenCircle.y + 12.5 >= firstCanvas.height) {
            greenCircle.dy = -1
        }

        if (greenCircle.y - 12.5 <= 0) {
            greenCircle.dy = 1
        }
        // Yellow circle movement
        if (yellowCircle.dx === 1) {
            if (yellowCircle.x + 12.5 >= firstCanvas.width) {
                yellowCircle.dx += -1
            }
        } else if (yellowCircle.dx === -1) {
            if (yellowCircle.x - 12.5 <= 0) {
                yellowCircle.dx += 1
            }
        }
        if (yellowCircle.x + 12.5 >= firstCanvas.width) {
            yellowCircle.dx = -1
        }

        if (yellowCircle.x - 12.5 <= 0) {
            yellowCircle.dx = 1
        }

        if (yellowCircle.dy === 1) {
            if (yellowCircle.y + 12.5 >= firstCanvas.height) {
                yellowCircle.dy += -1
            }
        } else if (yellowCircle.dy === -1) {
            if (yellowCircle.y - 12.5 <= 0) {
                yellowCircle.dy += 1
            }
        }

        if (yellowCircle.y + 12.5 >= firstCanvas.height) {
            yellowCircle.dy = -1
        }

        if (yellowCircle.y - 12.5 <= 0) {
            yellowCircle.dy = 1
        }
        // Red triangle movement
        if (redTriangle.dx === 1) {
            if (redTriangle.x + 25 >= firstCanvas.width) {
                redTriangle.dx += -1
            }
        } else if (redTriangle.dx === -1) {
            if (redTriangle.x - 25 <= 0) {
                redTriangle.dx += 1
            }
        }
        if (redTriangle.x + 25 >= firstCanvas.width) {
            redTriangle.dx = -1
        }

        if (redTriangle.x - 25 <= 0) {
            redTriangle.dx = 1
        }

        if (redTriangle.dy === 1) {
            if (redTriangle.y + 25 >= firstCanvas.height) {
                redTriangle.dy += -1
            }
        } else if (redTriangle.dy === -1) {
            if (redTriangle.y - 25 <= 0) {
                redTriangle.dy += 1
            }
        }

        if (redTriangle.y + 25 >= firstCanvas.height) {
            redTriangle.dy = -1
        }

        if (redTriangle.y - 25 <= 0) {
            redTriangle.dy = 1
        }
        // Blue triangle movement
        if (blueTriangle.dx === 1) {
            if (blueTriangle.x + 25 >= firstCanvas.width) {
                blueTriangle.dx += -1
            }
        } else if (blueTriangle.dx === -1) {
            if (blueTriangle.x - 25 <= 0) {
                blueTriangle.dx += 1
            }
        }
        if (blueTriangle.x + 25 >= firstCanvas.width) {
            blueTriangle.dx = -1
        }

        if (blueTriangle.x - 25 <= 0) {
            blueTriangle.dx = 1
        }

        if (blueTriangle.dy === 1) {
            if (blueTriangle.y + 25 >= firstCanvas.height) {
                blueTriangle.dy += -1
            }
        } else if (blueTriangle.dy === -1) {
            if (blueTriangle.y - 25 <= 0) {
                blueTriangle.dy += 1
            }
        }

        if (blueTriangle.y + 25 >= firstCanvas.height) {
            blueTriangle.dy = -1
        }

        if (blueTriangle.y - 25 <= 0) {
            blueTriangle.dy = 1
        }
        // Green triangle movement
        if (greenTriangle.dx === 1) {
            if (greenTriangle.x + 25 >= firstCanvas.width) {
                greenTriangle.dx += -1
            }
        } else if (greenTriangle.dx === -1) {
            if (greenTriangle.x - 25 <= 0) {
                greenTriangle.dx += 1
            }
        }
        if (greenTriangle.x + 25 >= firstCanvas.width) {
            greenTriangle.dx = -1
        }

        if (greenTriangle.x - 25 <= 0) {
            greenTriangle.dx = 1
        }

        if (greenTriangle.dy === 1) {
            if (greenTriangle.y + 25 >= firstCanvas.height) {
                greenTriangle.dy += -1
            }
        } else if (greenTriangle.dy === -1) {
            if (greenTriangle.y - 25 <= 0) {
                greenTriangle.dy += 1
            }
        }

        if (greenTriangle.y + 25 >= firstCanvas.height) {
            greenTriangle.dy = -1
        }

        if (greenTriangle.y - 25 <= 0) {
            greenTriangle.dy = 1
        }
        // Yellow triangle movement
        if (yellowTriangle.dx === 1) {
            if (yellowTriangle.x + 25 >= firstCanvas.width) {
                yellowTriangle.dx += -1
            }
        } else if (yellowTriangle.dx === -1) {
            if (yellowTriangle.x - 25 <= 0) {
                yellowTriangle.dx += 1
            }
        }
        if (yellowTriangle.x + 25 >= firstCanvas.width) {
            yellowTriangle.dx = -1
        }

        if (yellowTriangle.x - 25 <= 0) {
            yellowTriangle.dx = 1
        }

        if (yellowTriangle.dy === 1) {
            if (yellowTriangle.y + 25 >= firstCanvas.height) {
                yellowTriangle.dy += -1
            }
        } else if (yellowTriangle.dy === -1) {
            if (yellowTriangle.y - 25 <= 0) {
                yellowTriangle.dy += 1
            }
        }

        if (yellowTriangle.y + 25 >= firstCanvas.height) {
            yellowTriangle.dy = -1
        }

        if (yellowTriangle.y - 25 <= 0) {
            yellowTriangle.dy = 1
        }

        redSquare.x += redSquare.dx
        redSquare.y += redSquare.dy

        blueSquare.x += blueSquare.dx
        blueSquare.y += blueSquare.dy

        greenSquare.x += greenSquare.dx
        greenSquare.y += greenSquare.dy

        yellowSquare.x += yellowSquare.dx
        yellowSquare.y += yellowSquare.dy

        redCircle.x += redCircle.dx
        redCircle.y += redCircle.dy

        blueCircle.x += blueCircle.dx
        blueCircle.y += blueCircle.dy

        greenCircle.x += greenCircle.dx
        greenCircle.y += greenCircle.dy

        yellowCircle.x += yellowCircle.dx
        yellowCircle.y += yellowCircle.dy

        redTriangle.x += redTriangle.dx
        redTriangle.y += redTriangle.dy

        blueTriangle.x += blueTriangle.dx
        blueTriangle.y += blueTriangle.dy

        greenTriangle.x += greenTriangle.dx
        greenTriangle.y += greenTriangle.dy

        yellowTriangle.x += yellowTriangle.dx
        yellowTriangle.y += yellowTriangle.dy

        redSquare.render()
        blueSquare.render()
        greenSquare.render()
        yellowSquare.render()

        redCircle.render()
        blueCircle.render()
        greenCircle.render()
        yellowCircle.render()

        redTriangle.render()
        blueTriangle.render()
        greenTriangle.render()
        yellowTriangle.render()

    }

    let gameLoopRedSquare = setInterval(moveShapes, 15)

})