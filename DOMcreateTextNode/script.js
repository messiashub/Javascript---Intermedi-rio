
// createTextNode()

/* Definição e Uso
O método createTextNode() cria um Nó de texto com o texto especificado. */
// 1 Selecionar a tag que vai receber o nó de texto
// 2 Criar o nó de texto(O próprio texto)
// 3 Vincular o nó na tag  selecionada

let text1 = document.querySelector('.text1'); // 1
let texto = document.createTextNode('O método createTextNode() cria um Nó de texto com o texto especificado.'); //2
text1.appendChild(texto); // 3

let text2 = document.querySelector('.text2'); // 1
let texto2 = document.createTextNode('Dica: Após a criação do nó de texto, use o método ("appendChild") ou ("insertBefore") para apêndice-o a um elemento.'); //2
text2.style.color = "red"
text2.appendChild(texto2); //3

/* Usando em uma função */

let bt = document.querySelector("#btn");
let paragrafo = document.querySelector('.text3'); // 1

bt.addEventListener('click', () => {
    let paragrafo1 = document.createTextNode('Os elementos HTML geralmente consistem tanto em um nó de elemento quanto em um nó de texto.');// 2
    paragrafo.style.color = "red"
    paragrafo.appendChild(paragrafo1);// 3

});

// createElement()

/*Definição e Uso
O método createElement() cria um Nó de Elemento(tag) com o nome especificado.*/
// 1 Criar o elemento html (tag)
// 2 Criar o nó de texto(O próprio texto)
// 3 Selecionar a tag que vai receber o nó de texto
let tag = document.querySelector('.tag');
let hquatro = document.createElement('h4');// 1
let textoDoH = document.createTextNode('O método createElement() cria um Nó de Elemento com o nome especificado.'); //2
hquatro.appendChild(textoDoH); //  3
hquatro.style.color="red"
tag.appendChild(hquatro); // 3
////////////

let tag2 = document.querySelector('.tag2');
let h4 = document.createElement('h4');
h4.textContent = 'Depois que o elemento for criado, use o elemento .appendChild()';
h4.style.color = "red"
tag2.appendChild(h4);