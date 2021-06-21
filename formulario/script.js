
// 1 -> Variáveis Globais

let btnAd = document.querySelector('.adicionar');
let dataNasc = document.querySelector('input[name="ano"]');
let dataNome = document.querySelector('input[name="nome"]');
let anoAtual = new Date().getFullYear()


// 3 PREENCHENDO A TABELA
// 3.1 Objetos

function Entrevista(nome, ano) {
    this.nome = nome;
    this.ano_informado = ano;
    this.calcula_idade = function () {
        let res = anoAtual - this.ano_informado;

        return res;
    }
    this.mostrar_dados = function () {
        console.log(`O nome informado é ${this.nome} o ano é ${this.ano_informado} e a idade é ${this.calcula_idade()}`)
    }
}


// 2 Funções
function adicionar_dados(event) {
    event.preventDefault();
    let ano_informado = dataNasc.value;
    if (ano_informado >= 1900 && ano_informado <= anoAtual) {
        document.querySelector('.alerta').innerHTML = '';
        /* console.log('deu certo') */
        nova_entrevista = new Entrevista(dataNome.value, dataNasc.value);// 3.1
        nova_entrevista.mostrar_dados();  // 3.1

    } else {
        document.querySelector('.alerta').innerHTML = 'Deu errado';
    }
}

// Rotina Princpal
btnAd.addEventListener('click', adicionar_dados);




// anotações:
// preventDefault, newDate, objeto, this, new, construtor