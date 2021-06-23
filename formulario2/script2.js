
// SELECIONANDO OS ELEMENTOS
let dataNome = document.querySelector('input[name="nome"]');
let dataAno = document.querySelector('input[name="ano"]');
let btnAd = document.querySelector('.adicionar');
let mensagem = document.querySelector('.mensagem');
let anoAtual = new Date().getFullYear();

btnAd.addEventListener('click',(event)=>{
    event.preventDefault();
    if(dataAno >= 1900 && dataAno <= anoAtual){
         mensagem.innerHTML = `O nome é ${dataNome.value} e o ano é ${dataAno.value}`;
    }else{
        mensagem.innerHTML= 'error'
    }
   
    
})