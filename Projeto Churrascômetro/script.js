// Carne - 400 gr por pessoa + de 6 horas - 650
// Cerveja - 1200 ml por pessoa + 6 horas  - 2000 ml
// refrigerante/agua - 1000ml por pessoa + 6 horas 1500ml
// crianças valem  por 0,5


// 1° Passo
let adulto = document.getElementById('adultos');
let crianca = document.getElementById('criancas');
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById('resultado');


// 2° Passo

function calcular(){   // lincar a função com a tag button no html
    console.log('calculando...');
    let adultos = adulto.value;
    let criancas = crianca.value;
    let duracao = inputDuracao.value;

    let qtdTotalCarne =carnePP(duracao) * adultos + (carnePP(duracao)/ 2 * criancas);
    let qtdTotalCerveja = cervejaPP(duracao) * adultos;
    let qtdTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao)/ 2 * criancas);
    
    // 6° Passo  
    resultado.innerHTML=`<p>${qtdTotalCarne/1000} Kg de Carne</p>`
    resultado.innerHTML+=`<p>${Math.ceil(qtdTotalCerveja/355)} latas de Cerveja</p>`
    resultado.innerHTML+=`<p>${Math.ceil( qtdTotalBebidas/2000)} Garrafas de Bebidas</p>`
}

// 3° Passo
// Calculando horas
function carnePP(duracao){ // carne por pessoa
    if(duracao >= 6){
        return  650;
    }else{
        return 400;
    }
}

// 4° Passo
function cervejaPP(duracao){ // cerveja por pessoa
    if(duracao >= 6){
        return  2000;
    }else{
        return 1200;
    }
}
// 5° Passo
function bebidasPP(duracao){ // cerveja por pessoa
    if(duracao >= 6){
        return  1500;
    }else{
        return 1000;
    }
}

