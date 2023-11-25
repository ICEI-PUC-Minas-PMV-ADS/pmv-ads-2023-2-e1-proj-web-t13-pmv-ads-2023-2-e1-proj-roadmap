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

const exampleModal = document.getElementById("exampleModal");
if (exampleModal) {
  exampleModal.addEventListener("show.bs.modal", (event) => {
    // Button that triggered the modal
    const button = event.relatedTarget;
    // Extract info from data-bs-* attributes
    const recipient = button.getAttribute("data");
    let title = "";
    let content = "";
    let listItens = [];

    switch (recipient) {
      case "1":
        title = "HTML - Fundamentos:";
        content =
          "HTML é uma linguagem de marcação que define a estrutura do seu conteúdo. HTML consiste em uma série de elementos que você usa para mostrar algo de uma determinada maneira ou agir de uma certo modo. As tags podem criar um hiperlink de uma palavra ou imagem para outro lugar, podem colocar palavras em itálico, podem aumentar ou diminuir a fonte e assim por diante.";
        listItens = [
          "Aprender quais tags são necessárias para um HTML básico",
          "Criar um parágrafo de texto",
          "Exibir uma imagem",
          "Conhecer a diferença entre h1, h2, h3, etc",
          "Criar um texto com hyperlink",
          "Criar um formulário com campos relevantes",
          "Criar uma lista de itens ordenada ou não ordenada",
          "Criar uma lista de itens dentro de uma lista suspensa (dropdown list)",
          "Conectar com um arquivo de CSS",
          "Criar uma tabela",
          "Adicionar IDs e classes",
        ];
        break;
      case "2":
        title = "CSS - Fundamentos";
        content =
          "Cascading Style Sheets (CSS) é uma linguagem usada para descrever a apresentação de um documento escrito em uma linguagem de marcação como HTML ou XML. CSS pode ser usado para estilos de texto de documentos muito básicos — por exemplo, para alterar a cor e o tamanho de títulos e links. Ele pode ser usado para criar um layout — por exemplo, transformar uma única coluna de texto em um layout com uma área de conteúdo principal e uma barra lateral para informações relacionadas. Pode até ser usado para efeitos como animações.";
        listItens = [
          "Aprender a estrutura visual de uma página, com margin e padding",
          "Estabelecer o tamanho com width e height",
          "Aprender sobre a posição de um elemento (static, relative ou absolute)",
          "Aprender sobre o display de exibição de um elemento (block, inline, inline-block)",
          "Aprender a posicionar imagens em relação ao texto",
          "Aprender sobre alinhamento",
          "Aprender sobre estilo de fontes",
          "Aprender as diferenças e vantagens de usar as diferentes unidades de medida em CSS (%, relativas, etc)",
          "Conectar com os elementos (IDs, classes) de um arquivo HTML",
          "Alterar características de um elemento quando o mouse passar por cima dele (hover)",
          "Aprender box-sizing",
          "Aprender Flexbox",
          "Aprender Grid",
        ];
        break;
      case "3":
        title = "JavaScript - Fundamentos";
        content =
          "JavaScript é a linguagem de programação mais popular do mundo e é uma das principais tecnologias da World Wide Web, juntamente com HTML e CSS. Ela possui tipagem dinâmica, orientação a objetos baseada em protótipos e funções de primeira classe. Ela é multi-paradigma e suporta estilos de programação orientados a eventos, funcionais e imperativos.";
        listItens = [
          "Conhecer os tipos primitivos",
          "Declarar variáveis, considerando a diferença entre 'var', 'let' e 'const",
          "Usar estruturas condicionais ('if', 'else')",
          "Conhecer os operadores de atribuição e comparação ('=', '==', '===')",
          "Usar estruturas de repetição e laços ('while', 'for')",
          "Usar funções, passando parâmetros e argumentos",
          "Manipular arrays e listas",
          "Aprender o conceito de Orientação a Objetos",
          "Fazer um CRUD",
          "Obter dados de uma API",
          "Fazer chamadas assíncronas usando 'Async/Await', 'Promise', etc",
        ];
        break;
      case "4":
        title = "DOM - Fundamentos";
        content = "O Document Object Model (DOM) é uma interface de programação para documentos web. Ele representa a página para que os programas possam alterar a estrutura, o estilo e o conteúdo do documento. O DOM representa o documento como nós e objetos; dessa forma, linguagens de programação podem interagir com a página.";
        listItens = [
          "Entender como funciona a árvore do DOM",
          "Acessar e manipular elementos do HTML e CSS",
          "Acessar os pais e filhos de um elemento",
          "Inserir um novo elemento na árvore",
          "Remover um elemento da árvore",
          "Esperar por um evento em certo elemento da página usando 'addEventListener()'",
        ];
        break;
      case "5":
        title = "Design Responsivo";
        content = "Ajustar suas páginas para o tamanho da tela do usuário";
        listItens = [
          "Media queries",
          "Conhecer o conceito de Mobile first",
        ];
        
        break;
      case "6":
        title = "Acessibilidade Javascript";
        content = "Conteudo 3";
        break;
      case "7":
        title = "JavaScript - Callbacks e Promises";
        content = "Conteudo 3";
        break;
      case "8":
        title = "JavaScript - Modularização";
        content = "Conteudo 3";
        break;
      case "9":
        title = "JavaScript - Testes";
        content = "Conteudo 3";
        break;
      case "10":
        title = "JavaScript - Manipulação de Erros";
        content = "Conteudo 3";
        break;
      case "11":
        title = "JavaScript - ES6";
        content = "Conteudo 3";
        break;
      case "12":
        title = "Versionamento Semântico para Front-end";
        content = "Conteudo 3";
        break;
      case "13":
        title = "Jest";
        content = "Conteudo 3";
        break;
      case "14":
        title = "Conceitos de Orientação a Objetos";
        content = "Conteudo 3";
        break;
      case "15":
        title = "JavaScript - Armazenamento";
        content = "Conteudo 3";
        break;
      case "16":
        title = "Versionamento Semântico para Front-end";
        content = "Conteudo 3";
        break;
      case "17":
        title = "Versionamento Semântico para Front-end";
        content = "Conteudo 3";
        break;
      case "18":
        title = "Versionamento Semântico para Front-end";
        content = "Conteudo 3";
        break;
      case "12":
        title = "Versionamento Semântico para Front-end";
        content = "Conteudo 3";
        break;
    }

    let ul = document.createElement("ul"); // create an unordered list element

    for (let i = 0; i < listItens.length; i++) {
      // iterate through the array
      let li = document.createElement("li"); // create a list item element
      console.log(li);
      li.textContent = listItens[i]; // add the array item's value as textContent to the list item element
      ul.appendChild(li); // append the list item element to the unordered list element
    }

    // If necessary, you could initiate an Ajax request here
    // and then do the updating in a callback.

    // Update the modal's content.
    const modalTitle = exampleModal.querySelector(".modal-title");
    const modalBodyInput = exampleModal.querySelector(".modal-body");

    modalTitle.textContent = title;
    modalBodyInput.textContent = content;

    document.getElementById("contentList").appendChild(ul);
  });
}
