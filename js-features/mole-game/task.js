const deadCounter = document.getElementById("dead");
const lostCounter = document.getElementById("lost");

for (let i = 1; i < 10; i++) {
    const mole = document.getElementById(`hole${i}`);
    const result = function(text) {
        alert(text);
        deadCounter.textContent = "0";
        lostCounter.textContent = "0";
    }
    mole.onclick = function() {
        if (mole.className === "hole hole_has-mole") {
            deadCounter.textContent ++;
        } else {
            lostCounter.textContent ++;
        }
        if (deadCounter.textContent === '10') {
            result("Вы выиграли!");	
        } else if (lostCounter.textContent === '5') {
            result("Вы проигали:с");
        }
    }
}




