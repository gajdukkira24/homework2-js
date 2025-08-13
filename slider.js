const sliderInput = document.querySelector(".slider__input");
const sliderImage = document.querySelector(".slider__image");

const updateSize = (min, max) => {
    const value = sliderInput.value;              
    const percent = ((value - min) / (max - min)) * 100; 
    sliderImage.style.width = `${percent}%`;
};


updateSize(1, 100);


sliderInput.addEventListener('input', _.debounce(() => updateSize(1, 100), 300));
