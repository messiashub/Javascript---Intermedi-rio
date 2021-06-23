
// 1 -> Variáveis Globais

let btnAd = document.querySelector('.adicionar');
let dataNasc = document.querySelector('input[name="ano"]');
let dataNome = document.querySelector('input[name="nome"]');
let anoAtual = new Date().getFullYear();
let corpoTabela = document.querySelector('tbody');


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
        console.log(`O nome informado é ${this.nome}, o ano é ${this.ano_informado} e a idade é ${this.calcula_idade()} anos`)
    }
    this.criar_linha_tabela = function (){ // 3.2
        // 1 Criar Elementos
        let linha = document.createElement('tr'); // linha
        let campo_nome = document.createElement('td');  // cedula de tabela
        let campo_ano = document.createElement('td');   // cedula de tabela
        let campo_idade = document.createElement('td'); // cedula de tabela
        // 2 Aplicar estilos aos elementos
        campo_nome.style.fontWeight ='Bold';
        campo_nome.style.color ='green';
        // 3 Criar os nós
        let texto_nome = document.createTextNode(this.nome);
        let texto_ano = document.createTextNode(this.ano_informado);
        let texto_idade = document.createTextNode(this.calcula_idade());

        // Vincular os nós aos elementos
        campo_nome.appendChild(texto_nome);
        campo_ano.appendChild(texto_ano);
        campo_idade.appendChild(texto_idade);
        linha.appendChild(campo_nome);
        linha.appendChild(campo_ano);
        linha.appendChild(campo_idade);
        // Vincular os elementos ao documento
        corpoTabela.appendChild(linha);
    }
};

// 2 Funções
function adicionar_dados(event) {
    event.preventDefault();
    let ano_informado = dataNasc.value;
    if (ano_informado >= 1900 && ano_informado <= anoAtual) {
        document.querySelector('.alerta').innerHTML = '';
        /* console.log('deu certo') */
        nova_entrevista = new Entrevista(dataNome.value, dataNasc.value);// 3.1
       /*  nova_entrevista.mostrar_dados();  // 3.1 */
       nova_entrevista.criar_linha_tabela(); // 3.2

    } else {
        document.querySelector('.alerta').innerHTML = 'Deu errado';
    }
}

// Rotina Princpal
btnAd.addEventListener('click', adicionar_dados);




// anotações:
// preventDefault, newDate, objeto, this, new, construtor