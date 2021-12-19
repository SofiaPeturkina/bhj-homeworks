const sliderItem = document.querySelectorAll(".slider__item");
const sliders = Array.from(sliderItem);
const prev = document.querySelector(".slider__arrow.slider__arrow_prev");
const next = document.querySelector(".slider__arrow.slider__arrow_next");

let positionActiveSlide = sliders.findIndex((item, idx) => {
    return item.className = "slider__item slider__item_active";
})

prev.onclick = function() {
    sliders[positionActiveSlide].className = "slider__item";
    positionActiveSlide === 0 ? positionActiveSlide = sliders.length-1 : positionActiveSlide--;
    sliders[positionActiveSlide].className = "slider__item slider__item_active";
}

next.onclick = function() {
    sliders[positionActiveSlide].className = "slider__item";
    positionActiveSlide < sliders.length-1 ? positionActiveSlide++ : positionActiveSlide = 0;
    sliders[positionActiveSlide].className = "slider__item slider__item_active";
}