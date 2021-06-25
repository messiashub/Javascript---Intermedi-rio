
// 1 SELECIONANDO OS ELEMENTOS
let dataNome = document.querySelector('input[name="nome"]');
let dataAno = document.querySelector('input[name="ano"]');
let btnAd = document.querySelector('.adicionar');
let mensagem = document.querySelector('.mensagem');
let anoAtual = new Date().getFullYear();
let corpoTabela = document.querySelector('tbody');
let idade = ()=>{
    return anoAtual - dataAno.value;
}

// 3 FUNÇÃO PARA CRIAR A TABELA 
// 3.1 Criando os elementos da tabela
function tabela(){
    let linha = document.createElement('tr'); // linha
    let campo_nome = document.createElement('td'); // cedula
    let campo_ano = document.createElement('td');  // cedula
    let campo_idade = document.createElement('td'); // cedula

// 3.2 Criando os nós ('mensagens , nomes, etc contidos em uma variável)
    let texto_nome = document.createTextNode(`${dataNome.value}`);
    let texto_ano = document.createTextNode(`${dataAno.value}`);
    let texto_idade = document.createTextNode(`${idade()}`);

// 3.3 Vinculando os nós aos elementos
    campo_nome.appendChild(texto_nome);
    campo_ano.appendChild(texto_ano);
    campo_idade.appendChild(texto_idade);

    linha.appendChild(campo_nome);
    linha.appendChild(campo_ano);
    linha.appendChild(campo_idade);

    corpoTabela.appendChild(linha);

}

// 2 FUNÇÃO PARA OS EVENTOS APÓS  O 'CLICK'
btnAd.addEventListener('click', (event) => {
    event.preventDefault();
    if (dataAno.value >= 1900 && dataAno.value <= anoAtual) {
        /* let idade = anoAtual - dataAno.value */

        mensagem.style.fontSize = '1.5em'
        mensagem.innerHTML = `O nome é ${dataNome.value}, ano de seu nascimento é ${dataAno.value} e sua idade é ${idade()} anos`;
        tabela();
    } else {
        mensagem.style.fontSize = '1.5em'
        mensagem.innerHTML = 'error'
    }


})