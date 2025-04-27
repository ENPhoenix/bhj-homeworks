const clickerСounter = document.getElementById("clicker__counter"); ////кол-во кликов
const clickSpeedDisplay = document.getElementById("click_speed"); //скорость клика
let clicker = parseInt(clickerСounter.textContent, 10);
const cookie = document.getElementById("cookie"); 
let isEnlarged = false;
let lastClickTime = Date.now();

cookie.onclick = function() { 
    const currentTime = Date.now(); 
    const timeDiff = (currentTime - lastClickTime) / 1000; 
    clicker += 1; 
    clickerСounter.textContent = clicker;

    if (lastClickTime !== currentTime) {
        const clickSpeed = (1 / timeDiff).toFixed(2);
        clickSpeedDisplay.textContent = clickSpeed;
    }
    if (isEnlarged) { 
        cookie.width = 200; 
        cookie.height = 200;
    } else { 
        cookie.width = 300; 
        cookie.height = 300;
    } 
      
    isEnlarged = !isEnlarged; 
    lastClickTime = currentTime; 
}



