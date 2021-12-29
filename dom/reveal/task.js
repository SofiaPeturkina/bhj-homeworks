const reveal = document.querySelectorAll(".reveal");
const inViewport = (element) => {
    const viewportHeight = window.innerHeight;
    const { top, bottom } = element. getBoundingClientRect();
    return top < viewportHeight && bottom > 0 ? true : false;
};

for (let i = 0; i < reveal.length; i++) {
    const revealApperance = () => {
        if (inViewport(reveal[i])) {
            reveal[i].classList.add("reveal_active");
        } else {
            reveal[i].classList.remove("reveal_active");
        }
    }
    window.addEventListener("scroll", revealApperance);
}