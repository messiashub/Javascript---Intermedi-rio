
// 1 -> Variáveis Globais

let btnAd = document.querySelector('.adicionar');
let dataNasc = document.querySelector('input[name="ano"]');
let anoAtual = new Date().getFullYear()

// Funções
function adicionar_dados(event){
    event.preventDefault();
    let ano_informado = dataNasc.value;
    if(ano_informado >= 1900 && ano_informado <= anoAtual){
         document.querySelector('.alerta').innerHTML = '';
        console.log('deu certo')

    }else{
        document.querySelector('.alerta').innerHTML = 'Deu errado';
    }
}

// Rotina Princpal
btnAd.addEventListener('click', adicionar_dados);




// anotações:
// preventDefault, newDate