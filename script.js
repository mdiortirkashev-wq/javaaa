const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const currentScoreEl = document.getElementById("current-score");
const bestScoreEl = document.getElementById("best-score");
const startScreen = document.getElementById("startScreen");
const gameOverScreen = document.getElementById("gameOverScreen");
const startBtn = document.getElementById("startBtn");
const restartBtn = document.getElementById("restartBtn");
const pauseBtn = document.getElementById("pauseBtn");
const finalScoreEl = document.getElementById("finalScore");

// Мобил тугмалар
const upBtn = document.getElementById("upBtn");
const downBtn = document.getElementById("downBtn");
const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");

const gridSize = 20;
const tileCount = canvas.width / gridSize;

let snake = [];
let food = { x: 0, y: 0 };
let dx = gridSize;
let dy = 0;
let score = 0;
let bestScore = localStorage.getItem("snakeBestScore") || 0;
let gameInterval = null;
let gameSpeed = 120; // Бошланғич тезлик (миллисекунд)
let isRunning = false;
let isPaused = false;
let changeDirectionCalled = false;

bestScoreEl.textContent = bestScore;

// Тугмалар уланиши
startBtn.addEventListener("click", startGame);
restartBtn.addEventListener("click", startGame);
pauseBtn.addEventListener("click", togglePause);

// Клавиатура орқали бошқариш
document.addEventListener("keydown", handleKeyPress);

// Стрелкалар саҳифани силжитмаслиги учун
window.addEventListener("keydown", e => {
    if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", " "].includes(e.key)) {
        e.preventDefault();
    }
});

// Мобил тугмалар учун тингловчилар
upBtn.addEventListener("click", () => changeDirectionMob(0, -gridSize));
downBtn.addEventListener("click", () => changeDirectionMob(0, gridSize));
leftBtn.addEventListener("click", () => changeDirectionMob(-gridSize, 0));
rightBtn.addEventListener("click", () => changeDirectionMob(gridSize, 0));

function startGame() {
    snake = [
        { x: 160, y: 200 },
        { x: 140, y: 200 },
        { x: 120, y: 200 }
    ];
    score = 0;
    gameSpeed = 120;
    dx = gridSize;
    dy = 0;
    currentScoreEl.textContent = score;
    
    startScreen.classList.add("hidden");
    gameOverScreen.classList.add("hidden");
    pauseBtn.disabled = false;
    pauseBtn.textContent = "Пауза";

    generateFood();
    
    if (gameInterval) clearInterval(gameInterval);
    isRunning = true;
    isPaused = false;
    gameInterval = setInterval(main, gameSpeed);
}

function main() {
    if (isPaused || !isRunning) return;
    changeDirectionCalled = false;
    clearCanvas();
    drawFood();
    moveSnake();
    drawSnake();
    checkGameOver();
}

function clearCanvas() {
    ctx.fillStyle = "#020617";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawSnake() {
    snake.forEach((part, index) => {
        ctx.fillStyle = index === 0 ? "#38bdf8" : "#0ea5e9";
        ctx.shadowBlur = index === 0 ? 10 : 0;
        ctx.shadowColor = "#38bdf8";
        ctx.fillRect(part.x, part.y, gridSize - 2, gridSize - 2);
    });
    ctx.shadowBlur = 0; // Сояни тўхтатиш
}

function moveSnake() {
    const head = { x: snake[0].x + dx, y: snake[0].y + dy };
    snake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
        score += 10;
        currentScoreEl.textContent = score;
        
        if (score > bestScore) {
            bestScore = score;
            bestScoreEl.textContent = bestScore;
            localStorage.setItem("snakeBestScore", bestScore);
        }
        
        generateFood();
        increaseSpeed();
    } else {
        snake.pop();
    }
}

function generateFood() {
    let validPosition = false;
    while (!validPosition) {
        food.x = Math.floor(Math.random() * tileCount) * gridSize;
        food.y = Math.floor(Math.random() * tileCount) * gridSize;

        // Овқат илоннинг устига тушиб қолмаслигини текшириш
        validPosition = !snake.some(part => part.x === food.x && part.y === food.y);
    }
}

function drawFood() {
    ctx.fillStyle = "#f43f5e";
    ctx.shadowBlur = 10;
    ctx.shadowColor = "#f43f5e";
    ctx.fillRect(food.x, food.y, gridSize - 2, gridSize - 2);
    ctx.shadowBlur = 0;
}

function handleKeyPress(event) {
    if (!isRunning || isPaused || changeDirectionCalled) return;

    const keyPressed = event.key;
    const goingUp = dy === -gridSize;
    const goingDown = dy === gridSize;
    const goingRight = dx === gridSize;
    const goingLeft = dx === -gridSize;

    if ((keyPressed === "ArrowLeft" || keyPressed === "a" || keyPressed === "A") && !goingRight) {
        dx = -gridSize;
        dy = 0;
        changeDirectionCalled = true;
    }
    if ((keyPressed === "ArrowUp" || keyPressed === "w" || keyPressed === "W") && !goingDown) {
        dx = 0;
        dy = -gridSize;
        changeDirectionCalled = true;
    }
    if ((keyPressed === "ArrowRight" || keyPressed === "d" || keyPressed === "D") && !goingLeft) {
        dx = gridSize;
        dy = 0;
        changeDirectionCalled = true;
    }
    if ((keyPressed === "ArrowDown" || keyPressed === "s" || keyPressed === "S") && !goingUp) {
        dx = 0;
        dy = gridSize;
        changeDirectionCalled = true;
    }
}

function changeDirectionMob(newDx, newDy) {
    if (!isRunning || isPaused || changeDirectionCalled) return;

    const goingUp = dy === -gridSize;
    const goingDown = dy === gridSize;
    const goingRight = dx === gridSize;
    const goingLeft = dx === -gridSize;

    if (newDx === -gridSize && !goingRight) { dx = -gridSize; dy = 0; changeDirectionCalled = true; }
    if (newDx === gridSize && !goingLeft) { dx = gridSize; dy = 0; changeDirectionCalled = true; }
    if (newDy === -gridSize && !goingDown) { dx = 0; dy = -gridSize; changeDirectionCalled = true; }
    if (newDy === gridSize && !goingUp) { dx = 0; dy = gridSize; changeDirectionCalled = true; }
}

function increaseSpeed() {
    if (gameSpeed > 50) {
        gameSpeed -= 2; // Бал ошган сари тезликни ошириш
        clearInterval(gameInterval);
        gameInterval = setInterval(main, gameSpeed);
    }
}

function checkGameOver() {
    const head = snake[0];

    // Деворга урилиш
    const hitLeftWall = head.x < 0;
    const hitRightWall = head.x >= canvas.width;
    const hitToptWall = head.y < 0;
    const hitBottomWall = head.y >= canvas.height;

    if (hitLeftWall || hitRightWall || hitToptWall || hitBottomWall) {
        endGame();
    }

    // Ўзига ўзи урилиш
    for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
            endGame();
        }
    }
}

function endGame() {
    isRunning = false;
    clearInterval(gameInterval);
    pauseBtn.disabled = true;
    finalScoreEl.textContent = score;
    gameOverScreen.classList.remove("hidden");
}

function togglePause() {
    if (!isRunning) return;
    isPaused = !isPaused;
    pauseBtn.textContent = isPaused ? "Давом этиш" : "Пауза";
}