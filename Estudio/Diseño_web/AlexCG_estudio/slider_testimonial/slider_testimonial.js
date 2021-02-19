let slider = document.querySelector('.slider-contenedor');
let sliderInd = document.querySelectorAll('.slider-test');
let contador = 0;
let tamanoWidth = sliderInd[0].clientWidth;
let intervalo = 3000;

window.addEventListener('resize', function(){
    tamanoWidth = sliderInd[0].clientWidth;
});

setInterval(function tiempo(){
    slides();
}, intervalo);

function slides(){
    slider.style.transform = 'translate(' + (- tamanoWidth * contador) + 'px)';
    slider.style.transition = 'transform 1s';
    contador++;

    if(contador === sliderInd.length){
        contador = 0;
    }
}

slides();