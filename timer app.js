let timer;
let timeLeft = 25 * 60;
let running = false;

function setMode(minutes) {
    clearInterval(timer);
    timeLeft = minutes * 60;
    updateDisplay();
    running = false;
}

function startTimer() {
    if (!running) {
        running = true;
        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateDisplay();
            } else {
                clearInterval(timer);
                document.getElementById("alarmSound").play();
                running = false;
            }
        }, 1000);
    }
}

function pauseTimer() {
    clearInterval(timer);
    running = false;
}

function resetTimer() {
    clearInterval(timer);
    timeLeft = 25 * 60;
    updateDisplay();
    running = false;
}

function stopTimer() {
    clearInterval(timer);
    timeLeft = 0;
    updateDisplay();
    running = false;
}

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
    document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
}

// Initialize display
updateDisplay();