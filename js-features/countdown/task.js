const timer = document.getElementById("timer");
let totalSeconds = parseInt(timer.textContent, 10);

function formatTime(seconds) {
    const hours = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    return `${hours}:${minutes}:${secs}`;
}

timer.textContent = formatTime(totalSeconds);

const addText = function () {
    totalSeconds -=1;
    timer.textContent = formatTime(totalSeconds);

    if (totalSeconds <= 0) {
        clearInterval(intervalId);
        alert("Вы победили в конкурсе!");
        startDownload();
    }
}

const intervalId = setInterval(addText, 1000); 

function startDownload() {
    const fileUrl = "http://hello.kitty/downloadedFile";
    window.location.href = fileUrl;
}