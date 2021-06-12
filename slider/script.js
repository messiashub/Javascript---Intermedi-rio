
// Verificando
// 1 - Quantidade de sliders;
// 2 - Pegando a altura dos controles e centralizando verticalmente

let totalSlider = document.querySelectorAll('.slider--item').length  // 1

document.querySelector('.slider--width').style.width =`calc(100vw * ${totalSlider})`; //1

document.querySelector('.slider--controls').style.height = `${document.querySelector('.slider').clientHeight}px`