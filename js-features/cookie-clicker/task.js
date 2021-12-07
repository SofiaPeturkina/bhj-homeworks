const image = document.getElementById("cookie");
const clickerCounter = document.getElementById("clicker__counter");

image.onclick = function() {
    image.width = image.width === 200 ? 300 : 200;
    clickerCounter.textContent ++;
}
