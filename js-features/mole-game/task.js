const dead = document.getElementById("dead"); 
const lost = document.getElementById("lost");

let deadMole = parseInt(dead.textContent, 10);
let lostMole = parseInt(lost.textContent, 10);


function getHole(index) {
    return document.getElementById(`hole${index}`);
}

for (let i = 1; i <= 9; i++) {
    const hole = getHole(i);

hole.onclick = function () {
    if (hole.classList.contains('hole_has-mole')) {
        deadMole += 1;
        dead.textContent = deadMole;
        if (deadMole === 10) {
            alert("Победа!");
            resetGame();
        }
    } else {
        lostMole += 1; 
        lost.textContent = lostMole;
        if (lostMole === 5) {
            alert("Вы проиграли!");
            resetGame();
        }
    }
  }
}

function resetGame() {
    deadMole = 0;
    lostMole = 0;
    dead.textContent = deadMole;
    lost.textContent = lostMole;
}


