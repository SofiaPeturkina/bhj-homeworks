const deadCounter = document.getElementById("dead");
const lostCounter = document.getElementById("lost");
const hole = document.getElementById(`hole${i}`);

for (let i = 1; i < 10; i++) {
    hole.onckick = function() {
        if (hole.className.includes("hole hole_has-mole")) {
            deadCounter.textContent++;
        } if (+deadCounter.textContent === 10) {
            alert ("Поздравляем! Вы выйграли!");
        } else {
            lostCounter.textContent++;
            if (+lostCounter.textContent === 5) {
                alert("Вы проиграли :(")
            } 
        }
    }
}