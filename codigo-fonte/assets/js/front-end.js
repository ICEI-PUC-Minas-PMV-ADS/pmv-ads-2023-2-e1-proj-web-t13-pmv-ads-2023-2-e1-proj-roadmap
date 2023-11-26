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

let terminou = []
let modalAtual = ""

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
        modalAtual = title = "HTML - Fundamentos:";
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
        modalAtual =title = "CSS - Fundamentos";
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
        modalAtual = title = "JavaScript - Fundamentos";
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
        modalAtual = title = "DOM - Fundamentos";
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
        modalAtual = title = "Design Responsivo";
        content = "Ajustar suas páginas para o tamanho da tela do usuário";
        listItens = [
          "Media queries",
          "Conhecer o conceito de Mobile first",
        ];        
        break;
      case "6":
        modalAtual = title = "Acessibilidade Javascript";
        content = "Acessibilidade Digital é a eliminação de barreiras na Web. O conceito pressupõe que os sites e portais sejam projetados de modo que todas as pessoas possam perceber, entender, navegar e interagir de maneira efetiva com as páginas.";
        listItens = [
          'Escrever código com acessibilidade em mente'
        ] 

        break;
      case "7":
        modalAtual = title = "JavaScript - Callbacks e Promises";
        content = "Uma promessa (Promise) é um proxy para um valor não necessariamente conhecido quando a promessa é criada. Isso permite que métodos assíncronos retornem valores como métodos síncronos - em vez de retornar imediatamente o valor final, o método assíncrono retorna uma promessa de fornecer o valor em algum momento no futuro.";
        listItens = [
          'Uma função de Callback é uma função passada para outra função como um argumento, que é então invocado dentro da função externa para completar algum tipo de rotina ou ação.',
          'Uma função assíncrona (async) é uma função declarada com a palavra-chave `async`, e a palavra-chave `await` é permitida dentro dela. As palavras-chave `async` e `await` permitem que o comportamento assíncrono e baseado em promessas seja escrito em um estilo mais limpo, evitando a necessidade de configurar explicitamente as cadeias de promessas.',
          'Entender o conceito de assincronicidade em programação',
          'Escrever código assíncrono entendendo o conceito de promessas em JavaScript',
          "Utilizar os métodos, palavras-chaves e objetos do JavaScript para manipulação de promessas como 'Async/Await', '.then()', 'Promise', etc",
          "Aprender em quais situações é necessário o uso de programação assíncrona",
          "Fazer chamadas em APIs com `fetch()`"
          ] 
        break;
      case "8":
        modalAtual = title = "JavaScript - Modularização";
        content = "Modularização implica na divisão das funcionalidades de um código em partes distintas. Os módulos compõe peças que podem ser adicionadas e removidas quando necessário";
        listItens = [
          'Isolar partes do código em módulos',
          'Usar import e export',
          ] 
        break;
      case "9":
        modalAtual = title = "JavaScript - Testes";
        content = "O teste de software é o processo de avaliação e verificação de que um software realmente faz o que deveria fazer. Os benefícios dos testes incluem a prevenção de bugs, a redução dos custos de desenvolvimento e a melhoria do desempenho.";
        listItens = [
          'Usar testes unitários',
          'Usar testes de integração',
          "Usar testes de comportamento (behavior)",
          'Usar mocks',
          ] 
        break;
      case "10":
        modalAtual = title = "JavaScript - Manipulação de Erros";
        content = "O tratamento de erros refere-se aos procedimentos de resposta e recuperação de condições de erro presentes em um aplicativo de software. Em outras palavras, é o processo composto de antecipação, detecção e resolução de erros de aplicação, de programação ou de comunicação.";
        listItens = [
          'Conhecer e tratar as exceções mais comuns',
          'Saber quais os tipos de erros e em quais situações eles podem ocorrer',
          'Entender como o Node.js faz o manejo de erros',
          "Usar 'try' e 'catch' para tratamento de erros",
          "Em que ocasiões e de que forma utilizar o `throw`",
          'Criar exceções específicas de acordo com a necessidade de sua aplicação',
          ] 
        break;
      case "11":
        modalAtual = title = "JavaScript - ES6";
        content = "Conhecer as diferenças dessa versão do JavaScript";
        break;
      case "12":
        modalAtual = title = "Versionamento Semântico Front-end";
        content = "SemVer (Versionamento Semântico) é um conjunto simples de regras e requisitos que ditam como os números de versão são atribuídos e incrementados.";
        listItens = [
          'Organizar as dependências de um projeto',
          ] 
        break;
      case "13":
        modalAtual = title = "Jest";
        content = "Testar componentes";
        break;
      case "14":
        modalAtual = title = "Cypress";
        content = "Criar e executar testes";
        break;
      case "15":
        modalAtual = title = "Conceitos de Orientação a Objetos";
        content = "A Programação Orientada a Objetos é um paradigma de programação de software baseado na composição e interação entre diversas unidades chamadas de 'objetos' e as classes, que contêm uma identidade, propriedades e métodos). Ela é baseada em quatro componentes da programação: abstração digital, encapsulamento, herança e polimorfismo.";
        listItens = [
          'Como funcionam objetos',
          'Criar e utilizar construtores',
          'O que são classes',
          'Criar e utilizar métodos',
          'Criar e utilizar construtores',
          'Como funciona encapsulamento',
          'O que é herança',
          'O que é polimorfismo',
          'Como funcionam interfaces',
          'O que são abstrações',
          ] 
        break;
      case "16":
        modalAtual = title = "JavaScript - Armazenamento";
        content = "Armazenar dados no front-end com localStorage";
        listItens = [
          'Manipular dados armazenados',
          'Persistir dados armazenados',
          ] 
        break;
      case "17":
        modalAtual = title = "Estruturas de Dados";
        content = "No contexto dos computadores, uma estrutura de dados é uma forma específica de armazenar e organizar os dados na memória do computador para que esses dados possam ser facilmente recuperados e utilizados de forma eficiente quando necessário posteriormente.";
        listItens = [
          'Conhecer as principais estruturas de dados',
          'Implementar as principais estruturas de dados',
          ] 
        break;
      case "18":
        modalAtual = title = "GraphQL";
        content = "GraphQL é uma linguagem de consulta e manipulação de dados de código aberto para APIs. É considerada uma alternativa para arquiteturas REST.";
        listItens = [
          'Aprender o que é GraphQL e por que foi criado',
          'Entender como o GraphQL é utilizado no desenvolvimento de APIs',
          'Criar APIs utilizando as bibliotecas e frameworks para GraphQL',
          ] 
        break;

    }

    if (terminou.includes(modalAtual)){
      document.getElementById("botaoConcluir").classList.add("disabled")
    }

    else {
      document.getElementById("botaoConcluir").classList.remove("disabled")
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

function concluirTarefa() {
  terminou.push(modalAtual)
  let quantidadeItens = 18
  let elementProgresso = document.getElementById("progresso")
  let porcentagem = Math.trunc(terminou.length * 100 / quantidadeItens) + "%"
  elementProgresso.style["width"] = elementProgresso.innerHTML = porcentagem
}