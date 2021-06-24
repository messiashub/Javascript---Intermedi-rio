
// SELECIONANDO OS ELEMENTOS
let dataNome = document.querySelector('input[name="nome"]');
let dataAno = document.querySelector('input[name="ano"]');
let btnAd = document.querySelector('.adicionar');
let mensagem = document.querySelector('.mensagem');
let anoAtual = new Date().getFullYear();
let idade = ()=>{
    return anoAtual - dataAno.value;
}


 
btnAd.addEventListener('click', (event) => {
    event.preventDefault();
    if (dataAno.value >= 1900 && dataAno.value <= anoAtual) {
        /* let idade = anoAtual - dataAno.value */

        mensagem.style.fontSize = '1.5em'
        mensagem.innerHTML = `O nome é ${dataNome.value}, ano de seu nascimento é ${dataAno.value} e sua idade é ${idade()} anos`;
    } else {
        mensagem.style.fontSize = '1.5em'
        mensagem.innerHTML = 'error'
    }


})