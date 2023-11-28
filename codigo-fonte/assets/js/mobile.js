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

    let botaoSaibaMais = document.getElementById('linkSaibaMais')
    let saibaMaisLink;
    

        
    switch (recipient) {
      case "1":
        modalAtual = title = "Dart - Fundamentos";
        content = "Instalar e configurar o Dart";
        listItens = [
          "Conhecer as palavras chaves do Dart",
          "Construir aplicações de terminal usando Dart",
          "Entender como funciona o dinamismo no Dart",
          "Compreender e aprender a usar o Null Safety no Dart",
        ];
        saibaMaisLink = 'https://www.youtube.com/watch?v=NZNO6xW5icQ'

        break;
      case "2":
        modalAtual =title = "Flutter - Fundamentos";
        content = "Flutter é um kit de desenvolvimento de software de IU de código aberto criado pelo Google. Ele é usado para desenvolver aplicativos multiplataforma para Android, iOS, Linux, macOS, Windows, Google Fuchsia e para a web a partir de um único código.";
        listItens = [
          "Os widgets Flutter são construídos utilizando uma estrutura moderna que se inspira na React. A idéia central é que você construa sua interface de usuário a partir de widgets. Os widgets descrevem como deve ser sua visualização, dada sua configuração e estado atuais.",
          "Instalar e configurar o Flutter",
          "Conhecer e saber usar os Widgets básicos do Flutter, como Column, Row, Scaffold, Text, Image, Container, AppBar, ElevatedButton, entre outros",
          "Entender as diferenças entre widgets Stateless e Stateful",
          "Desenvolver a primeira aplicação em Flutter",
        ]
        saibaMaisLink = 'https://www.youtube.com/watch?v=J4BVaXkwmM8'

        break;
        
      case "3":
        modalAtual = title = "Conceitos de Orientação a Objetos";
        content = "A Programação Orientada a Objetos é um paradigma de programação de software baseado na composição e interação entre diversas unidades chamadas de 'objetos' e as classes, que contêm uma identidade, propriedades e métodos). Ela é baseada em quatro componentes da programação: abstração digital, encapsulamento, herança e polimorfismo.";
        listItens = [
          "Como funcionam objetos",
          "Criar e utilizar construtores",
          "O que são classes",
          "Criar e utilizar métodos",
          "Como funciona encapsulamento",
          "O que é herança",
          "O que é polimorfismo",
          "Como funcionam interfaces",
          "O que são abstrações",
        ];

        saibaMaisLink = 'https://www.youtube.com/watch?v=QJjY2TNyl-8'

        break;
      case "4":
        modalAtual = title = "Dart - Erros e Exceções";
        content = "O tratamento de erros refere-se aos procedimentos de resposta e recuperação de condições de erro presentes em um aplicativo de software. Em outras palavras, é o processo de antecipação, detecção e resolução de erros de aplicação, de programação ou de comunicação.";
        listItens = [
          "Entender os métodos `then` e `catchError` do Future no Dart",
          "Entender o que são erros e exceções no Dart",
          "Conhecer e saber usar a estrutura `try-on-catch-finally`",
        ];

        saibaMaisLink = 'https://www.youtube.com/watch?v=O4A3hHvBQ5E'

        break;
      case "5":
        modalAtual = title = "Dart - Comunicação com APIs";
        content = "Uma API é uma interface que desenvolvedores de software utilizam para programar a interação com componentes ou recursos de software fora de seu próprio código. Uma definição ainda mais simples é que uma API é a parte de um componente de software que é acessível a outros componentes.";
        listItens = [
          "Entender o que é uma API REST",
          "Conhecer os comandos básicos de comunicação HTTP",
          "Saber usar as ferramentas do pacote `http` do Dart",
          "Saber fazer requisições autenticadas para Web APIs",
        ];
        
        saibaMaisLink = 'https://www.youtube.com/watch?v=vjeK_oc5cXQ'

        break;
      case "6":
        modalAtual = title = "Flutter - Persistência de Dados";
        content = "O conceito de 'persistência de dados' refere-se a garantir que as informações inseridas na aplicação serão armazenadas em um meio em que possam ser recuperadas de forma consistente. Ou seja, são registros permanentes e que não são perdidos quando há o encerramento da sessão.";
        listItens = [
          'Saber a armazenar dados usando o SharedPreferences',
          'Aprender a usar o SQLite no Flutter',
          'Aprender como persistir dados com Leitura e Escrita de arquivos',
        ] 

        saibaMaisLink = 'https://www.youtube.com/watch?v=xOODmm-NdUc'

        break;
      case "7":
        modalAtual = title = "Flutter - Pacotes Essenciais";
        content = "O Flutter suporta o uso de pacotes compartilhados contribuídos por outros desenvolvedores para os ecossistemas Flutter e Dart. Isto permite construir rapidamente um aplicativo sem ter que desenvolver tudo do zero.";
        listItens = [
          "Conhecer e saber utilizar a plataforma pub.dev",
          "Conhecer os principais pacotes do Flutter",
        ]
        
        saibaMaisLink = 'https://www.youtube.com/watch?v=Fc8D_6TtiKw'

        break;
      case "8":
        modalAtual = title = "Flutter - Gerenciamento de Estados";
        content = "Em Flutter, 'estado' (state) são os dados que você precisa para reconstruir sua UI a qualquer momento. Quando estes dados mudarem, isso desencadeará um redesenho da interface do usuário.";
        listItens = [
          "Entender o que é Gerenciamento de Estados",
          "Conhecer e saber usar o Provider",
          "Conhecer as demais opções de Gerenciamentos de Estados no Flutter",
        ]
        
        saibaMaisLink = 'https://www.youtube.com/watch?v=VhsqMahAmOk'

        break;
      case "9":
        modalAtual = title = "Flutter - Testes";
        content = "O teste de software é o processo de avaliação e verificação de que um software realmente faz o que deveria fazer. Os benefícios dos testes incluem a prevenção de bugs, a redução dos custos de desenvolvimento e a melhoria do desempenho.";
        listItens = [
          "Conhecer Testes Unitários no Flutter",
          "Conhecer Testes de Widgets no Flutter",
          "Conhecer Testes de Integração no Flutter",
        ]
        
        saibaMaisLink = 'https://www.youtube.com/watch?v=zlYQe-9QMug'

        break;
      case "10":
        modalAtual = title = "Flutter - Depuração";
        content = "Depuração (em inglês 'debugging' ou 'debug') é o processo de encontrar e reduzir defeitos num aplicativo de software ou mesmo em hardware. Erros de software incluem aqueles que previnem o programa de ser executado e aqueles que produzem um resultado inesperado.";
        listItens = [
          "Conhecer as técnicas e ferramentas de depuração no Flutter",
          "Saber depurar códigos Dart e Flutter",
          "Conhecer o Dart DevTools",
        ]
        
        saibaMaisLink = 'https://www.youtube.com/watch?v=cUMsu0Kxo7k'

        break;
      case "11":
        modalAtual = title = "Flutter - Jogos";
        content = "Aprender a criar jogos com Flutter";
        listItens = [
          'Conhecer o Kit de Desenvolvimento de Jogos Casuais do Flutter',
          'Conhecer o pacote Flame como Engine de Jogos Flutter',
          'Conhecer o pacote Bonfire como Engine de Jogos para Flutter',
          ]
          
          saibaMaisLink = 'https://www.youtube.com/watch?v=zGgeBNiRy-8'

        break;
      case "12":
        modalAtual = title = "Flutter - Multiplataforma Web";
        content = "Conhecer as especificidades da criação de apps Flutter para Web";
        listItens = []
        
        saibaMaisLink = 'https://docs.flutter.dev/platform-integration/web/faq'

        break;
      case "13":
        modalAtual = title = "Flutter - Nativo";
        content = "Conhecer as especificidades do desenvolvimento nativo para Android";
        listItens = [
          "Conhecer as especificidades do desenvolvimento nativo para iOS",
          ]

          saibaMaisLink = 'https://www.youtube.com/watch?v=ZBJa-xjZl3w&ab_channel=Flutter'

        break;
      case "14":
        modalAtual = title = "Estruturas de Dados";
        content = "No contexto dos computadores, uma estrutura de dados é uma forma específica de armazenar e organizar os dados na memória do computador para que esses dados possam ser facilmente recuperados e utilizados de forma eficiente quando necessário posteriormente.";
        listItens = [
          'Conhecer as principais estruturas de dados',
          "Implementar as principais estruturas de dados",
          ]
          
          saibaMaisLink = 'https://www.youtube.com/watch?v=MweeZn1rR8s'
          
        break;
      case "15":
        modalAtual = title = "Flutter - Animações";
        content = "Conhecer a diferença entre Animações Implícitas e Explícitas no Flutter";
        listItens = [
          "Conhecer e saber usar os Widgets para Animações Implícitas",
          "Entender os conceitos de Duração (Duration) e Curvas (Curves)",
          "Conhecer a técnica de Animações Explicitas no Flutter",
        ]
        
        saibaMaisLink = 'https://www.youtube.com/watch?v=IVTjpW3W33s&feature=youtu.be'

        break;
      case "16":
        modalAtual = title = "Flutter - Multiplataforma Desktop";
        content = "Conhecer e saber usar as opções de criação em multiplataforma do Flutter";
        listItens = []
        
        saibaMaisLink = 'https://flutter.dev/multi-platform/desktop'

        break;
      case "17":
        modalAtual = title = "Flutter - Multiplataforma Web";
        content = "Conhecer as especificidades da criação de apps Flutter para Web";
        listItens = []
        
        saibaMaisLink = 'https://docs.flutter.dev/platform-integration/web/faq'

        break;
      case "18":
        modalAtual = title = "Flutter - Implantação (Deployment)";
        content = "Implantação é a fase do ciclo de vida de um software (programa computacional, documentação e dados), no contexto de um Sistema de Informação, que corresponde textualmente à passagem do software para a produção.";
        listItens = [
          "Conhecer as técnicas de ofuscação de código Dart",
          "Conhecer e saber implantar aplicativos Flutter em várias plataformas",
          "Entendendo Flavors em Flutter",
          "Conhecer Entrega Contínua em Flutter",
        ]
        
        saibaMaisLink = 'https://docs.flutter.dev/deployment/obfuscate'

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
    botaoSaibaMais.innerHTML = ` <a href="${saibaMaisLink}" target="__blank">Saiba mais</a>`
  });
}

function concluirTarefa() {
  terminou.push(modalAtual)
  let quantidadeItens = 18
  let elementProgresso = document.getElementById("progresso")
  let porcentagem = Math.trunc(terminou.length * 100 / quantidadeItens) + "%"
  elementProgresso.style["width"] = elementProgresso.innerHTML = porcentagem
}

