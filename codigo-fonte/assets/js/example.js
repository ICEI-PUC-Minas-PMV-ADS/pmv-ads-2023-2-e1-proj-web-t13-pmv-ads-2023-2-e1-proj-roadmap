/**
 * ATENÇÃO: Isso não é uma boa prática na maioria dos casos quando se trabalha com javascript vanilla
 * Essa é uma maneira de trazer "reatividade" para o js, porém nesses casos é mais que recomendado
 * trabalhar com algum framework reativo como react, vue, etc
 * 
 * Isso não deve ser utilizado quando o conteúdo for importante para os motores que pesquisa (google, bing, etc)
 * pois dessa maneira o "robo" desses mecanismos não conseguem interpretar o conteúdo HTML.
 * Alguns casos quando o conteúdo não é importante para o "robo": Paginas da área logada, SPAs
 */



/*************** */

/**
 * Modal
 */
const exampleModal = document.getElementById('exampleModal')
if (exampleModal) {
  exampleModal.addEventListener('show.bs.modal', event => {
    // Button that triggered the modal
    const button = event.relatedTarget
    // Extract info from data-bs-* attributes
    const recipient = button.getAttribute('data')
    let title = '';
    let content = '';
    let listItens = []    

    switch ( recipient ) {
      case "1":
        title = 'HTML - Fundamentos:';
        content = 'HTML é uma linguagem de marcação que define a estrutura do seu conteúdo. HTML consiste em uma série de elementos que você usa para mostrar algo de uma determinada maneira ou agir de uma certo modo. As tags podem criar um hiperlink de uma palavra ou imagem para outro lugar, podem colocar palavras em itálico, podem aumentar ou diminuir a fonte e assim por diante.';
        listItens = [ "Aprender quais tags são necessárias para um HTML básico",
          "Criar um parágrafo de texto",
          "Exibir uma imagem",
          "Conhecer a diferença entre h1, h2, h3, etc",
          'Criar um texto com hyperlink',
          'Criar um formulário com campos relevantes',
          'Criar uma lista de itens ordenada ou não ordenada',
          'Criar uma lista de itens dentro de uma lista suspensa (dropdown list)',
          'Conectar com um arquivo de CSS',
          'Criar uma tabela',
          'Adicionar IDs e classes']
        break;
      case "2":
        title = 'Titulo 2';
        content = 'Conteudo 2';
        break;
      case "3":
        title = 'Titulo 3';
        content = 'Conteudo 3';
        break;
    }

    let ul = document.createElement("ul"); // create an unordered list element

for(let i=0; i<listItens.length; i++){ // iterate through the array
  let li = document.createElement("li"); // create a list item element
  console.log(li)
  li.textContent = listItens[i]; // add the array item's value as textContent to the list item element
  ul.appendChild(li); // append the list item element to the unordered list element

}
  
    
    // If necessary, you could initiate an Ajax request here
    // and then do the updating in a callback.

    // Update the modal's content.
    const modalTitle = exampleModal.querySelector('.modal-title')
    const modalBodyInput = exampleModal.querySelector('.modal-body')
   

    modalTitle.textContent = title;
    modalBodyInput.textContent = content;

    document.getElementById("contentList").appendChild(ul);
  })
}