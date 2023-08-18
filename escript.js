const treasureMap = document.getElementById("treasure-map");
const treasureMarker = document.getElementById("treasure");
const startButton = document.getElementById("start-button");
const resultText = document.getElementById("result");

const mapWidth = treasureMap.offsetWidth;
const mapHeight = treasureMap.offsetHeight;

function placeTreasure() {
    const randomX = Math.random() * (mapWidth - 30);
    const randomY = Math.random() * (mapHeight - 30);
    treasureMarker.style.left = `${randomX}px`;
    treasureMarker.style.top = `${randomY}px`;
    treasureMarker.style.display = "block";
}

function calculateDistance(x1, y1, x2, y2) {
    const xDistance = x2 - x1;
    const yDistance = y2 - y1;
    return Math.sqrt(xDistance ** 2 + yDistance ** 2);
}

startButton.addEventListener("click", () => {
    placeTreasure();
    startButton.disabled = true;
    treasureMarker.addEventListener("click", () => {
        const markerX = treasureMarker.offsetLeft + treasureMarker.offsetWidth / 2;
        const markerY = treasureMarker.offsetTop + treasureMarker.offsetHeight / 2;
        const clickX = event.clientX;
        const clickY = event.clientY;
        const distance = calculateDistance(markerX, markerY, clickX, clickY);
        
        if (distance < 30) {
            resultText.textContent = "¡Encontraste el tesoro!";
        } else {
            resultText.textContent = "¡Inténtalo de nuevo!";
        }
        treasureMarker.style.display = "none";
        startButton.disabled = false;
    });
});
