const countDown = function() {
    const timer = document.getElementById("timer");
    if (timer.textContent >= "1") {
        timer.textContent --;
    } else {
        alert("Вы победили в конкурсе!")
    }
}

setInterval(countDown, 1000);