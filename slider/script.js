
// Verificando
// 1 - Quantidade de sliders;
// 2 - Pegando a altura dos controles e centralizando verticalmente
// 3 - Adicionar funções de "proxima imagem aos botões"

let totalSlider = document.querySelectorAll('.slider--item').length  // 1
console.log(totalSlider)

let slideCorrente = 0; // 3

document.querySelector('.slider--width').style.width =`calc(100vw * ${totalSlider})`; // 1

document.querySelector('.slider--controls').style.height = `${document.querySelector('.slider').clientHeight}px` // 2

let btn1 = document.querySelector('.control1').addEventListener('click',voltar); // 3.1
   
let btn2 = document.querySelector('.control2').addEventListener('click',proximo); // 3.2

function voltar(){ // 3.1
    slideCorrente--;
    if(slideCorrente < 0){
        slideCorrente = totalSlider-1;
    }
    updateMargin(); // 3.3   
} 
 
function proximo(){  // 3.2
    slideCorrente++;
    if(slideCorrente > totalSlider-1){
        slideCorrente = 0;
    }
    updateMargin(); // 3.3  
}

function updateMargin(){ // 3.3
    let sliderItemWidth = document.querySelector('.slider--item').clientWidth;
    console.log(sliderItemWidth);
    let newMargin =(slideCorrente * sliderItemWidth);
    document.querySelector('.slider--width').style.marginLeft = `-${newMargin}px`;
    document.querySelector('.slider--width').style.transition = "all 2.5s";
}
setInterval(proximo,5000);