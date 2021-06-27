
// CREATETEXTNODE
/* Definição e Uso
O método createTextNode() cria um Nó de texto com o texto especificado. */
// 1 Selecionar a tag que vai receber o nó de texto
// 2 Criar o nó de texto
// 3 Vincular o nó na tag  selecionada


let text1 = document.querySelector('.text1'); // 1
let texto = document.createTextNode('O método createTextNode() cria um Nó de texto com o texto especificado.'); //2
text1.appendChild(texto); // 3

