//for
let sobre = 'da Silva';
let nome=['claudinei','mario','silvia','constantino','epaminondas'];

for(let n=0 ; n < nome.length; n++){
    console.log(`${nome[n].toUpperCase()} ${sobre.toUpperCase()}`);
    if(nome[n]=== 'constantino'){
        break;
    }
}
// for in
let sobrenome = 'de Souza';
let mitos = ['cassiopéia','helena','aquiles','medusa','atena','hera'];

for(let nome in mitos){
    console.log(`${mitos[nome].charAt(0).toUpperCase()}${mitos[nome].slice(1)}`)};
