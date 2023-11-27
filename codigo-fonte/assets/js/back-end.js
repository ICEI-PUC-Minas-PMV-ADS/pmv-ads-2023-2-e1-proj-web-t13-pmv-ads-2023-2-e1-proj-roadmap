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
        modalAtual = title = "C# - Fundamentos";
        content =
          "C# é uma linguagem de programação, multiparadigma, de tipagem forte, desenvolvida pela Microsoft como parte da plataforma .NET. O código fonte é compilado para Common Intermediate Language (CIL) que é interpretado pela máquina virtual Common Language Runtime (CLR). É projetada para funcionar na Common Language Infrastructure da plataforma .NET Framework.";
        listItens = [
          "Conhecer os tipos primitivos",
          "Declarar variáveis, considerando os diferentes tipos",
          "Usar estruturas condicionais ('if', 'else')",
          "Conhecer os operadores de atribuição e comparação",
          "Usar estruturas de repetição e laços ('while', 'for')",
          "Usar funções, passando parâmetros e argumentos",
          "Manipular métodos",
          "Manipular arrays e listas",
          "Obter dados de uma API",
          "Fazer chamadas assíncronas, etc",
          "Criar construtores",
        ];
        break;
      case "2":
        modalAtual =title = "C# - System.IO";
        content =
          "O namespace System.IO consiste em classes, estruturas, delegates e enumerações relacionadas com entrada e saída de dados (IO). Estas classes podem ser utilizadas para ler e escrever dados em arquivos ou streams de dados. Também contém classes para suporte a arquivos e diretórios.";
        listItens = [
          "Ler dados de arquivos",
          "Escrever dados em arquivos",
          "Gerenciar arquivos com Using",
        ];
        break;
      case "3":
        modalAtual = title = "Conceitos de Orientação a Objetos";
        content =
          "A Programação Orientada a Objetos é um paradigma de programação de software baseado na composição e interação entre diversas unidades chamadas de 'objetos' e as classes, que contêm uma identidade, propriedades e métodos). Ela é baseada em quatro componentes da programação: abstração digital, encapsulamento, herança e polimorfismo.";
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
        break;
      case "4":
        modalAtual = title = "C# - Coleções";
        content = "Uma coleção representa um grupo de objetos, conhecidos como seus elementos. Eles são como recipientes que agrupam vários itens em uma única unidade. Algumas coleções permitem a duplicação de elementos e outras não. Algumas são ordenadas e outras não ordenadas.";
        listItens = [
          "Aprender os usos e diferenças entre Dictionary, List, Queue, SortedList e Stack",
          "Saiba trabalhar com ArrayList e HashTable",
          "Iterators",
        ];
        break;
      case "5":
        modalAtual = title = "C# - Gerenciamento de Memória";
        content = "O gerenciamento automático de memória é um dos serviços que o Common Language Runtime oferece durante a Execução Gerenciada (Managed Execution). O coletor de lixo do Common Language Runtime gerencia a alocação e liberação de memória para uma aplicação.";
        listItens = [
          "Entender como a memória é administrada",
          "Conhecer o Garbage Collector",
          "Entender sobre o Stack e o Heap gerenciado",
        ];        
        break;
      case "6":
        modalAtual = title = "C# - Testes";
        content = "O teste de software é o processo de avaliação e verificação de que um software realmente faz o que deveria fazer. Os benefícios dos testes incluem a prevenção de bugs, a redução dos custos de desenvolvimento e a melhoria do desempenho.";
        listItens = [
          'Usar testes unitários',
          'Usar testes de integração',
          "Usar testes de comportamento (behavior)",
          'Usar mocks',
        ] 

        break;
      case "7":
        modalAtual = title = "C# - Serialização";
        content = "Serialização é o processo de converter um objeto em um stream de bytes para armazenar o objeto ou transmiti-lo à memória, a um banco de dados ou a um arquivo. Seu principal objetivo é salvar o estado de um objeto a fim de poder recriá-lo quando necessário.";
        listItens = [
          'Enviar um objeto para um aplicativo remoto usando um serviço Web',
          "Passar um objeto como uma cadeia de caracteres JSON ou XML",
          "Passar informações específicas do usuário ou de segurança entre aplicativos"
          ] 
        break;
      case "8":
        modalAtual = title = "C# - Rede e Sockets";
        content = "O termo programação com sockets refere-se à escrita de programas que são executados em vários computadores nos quais os dispositivos estão todos conectados uns aos outros usando uma rede.";
        listItens = [
          'Abrir uma sessão de comunicação interativa entre o navegador do usuário e um servidor',
          'Enviar mensagens para um servidor e receber respostas sem consultar o servidor',
          ] 
        break;
      case "9":
        modalAtual = title = "CLR";
        content = "O Common Language Runtime (CLR) é o componente de máquina virtual da plataforma .NET da Microsoft que gerencia a execução de programas .NET.";
        listItens = [
          'Entender como o CLR funciona',
          'Entender o gerenciamento de memória',
          'Conhecer a CIL e o JIT',
          ] 
        break;
      case "10":
        modalAtual = title = "ASP.NET Core";
        content = "ASP.NET Core é um framework de código aberto e multi-plataforma para a construção de aplicações baseadas na nuvem, tais como aplicações web, aplicações IoT e backends mobile.";
        listItens = [
          'Criar aplicações e serviços Web',
          'Manter uma aplicações MVC',
          'Desenvolver de interface do usuário da Web do lado do cliente',
          'Criar uma API Web',
          ] 
        break;
      case "11":
        modalAtual = title = "LINQ";
        content = "O LINQ (Language-Integrated Query) é o nome de um conjunto de tecnologias com base na integração de recursos de consulta diretamente na linguagem C#.";
        listItens = [
          'Criar consultas',
          'Conhecer as cláusulas Select e Where',
          'Consultar coleções de objetos em memória',
          'Mapear o banco de dados com Linq to Sql',
          ] 
        break;
      case "12":
        modalAtual = title = "Dapper";
        content = "O Dapper é um produto de mapeamento objeto-relacional (ORM) para a plataforma Microsoft .NET. Ele fornece um framework para mapear um modelo de domínio orientado a objetos para bancos de dados relacionais.";
        listItens = [
          "Realizar consultas a bancos de dados como 'select', 'insert', 'update', 'delete'",
          'Manipular bancos de dados',
          ] 
        break;
      case "13":
        modalAtual = title = "C# - Delegates e Eventos";
        content = "Delegates são objetos que são usados como ponteiros de função para se referirem a um método atribuído a eles.";
        listItens = [
          "Eventos são a ação realizada que altera o estado de um objeto. Eventos são declarados usando delegates - eles fornecem um encapsulamento aos delegates.",
          "Entender o conceito de delegate",
          "Criar uma referência para uma função com uma certa lista de parâmetros",
          "Entender o conceito de evento",
          "Manipular diferentes tipos de eventos",
          ]
        break;
      case "14":
        modalAtual = title = "C# - Métodos anônimos e lambda expressions";
        content = "Métodos anônimos são métodos sem um nome que podem ser definidos usando a palavra-chave delegate.";
        listItens = [
          'Lambda expressions são usadas como funções anônimas, mas você não precisa especificar o tipo do valor que você digita, tornando-as mais flexíveis de usar.',
          'Criar funções anônimas que você pode usar para criar delegates',
          'Criar funções locais que podem ser passadas como argumentos',
          ] 
        break;
      case "15":
        modalAtual = title = "Contêineres";
        content = "Os contêineres são pacotes de software que contêm todos os elementos necessários para serem executados em qualquer ambiente. Gerenciamento de contêineres é uma área crucial na computação em nuvem e DevOps, que envolve o uso de tecnologias para automatizar o processo de criação, implantação, escalonamento e monitoramento de contêineres. Contêineres são unidades de software padronizadas que permitem aos desenvolvedores empacotar todas as dependências de um aplicativo (código, bibliotecas, configurações, etc.) em um único pacote. Isso permite que o aplicativo seja executado de forma consistente em qualquer ambiente de infraestrutura.";
        listItens = [
          'A tecnologia de contêineres, como exemplificada pelo Docker, fornece um ambiente consistente e portátil para desenvolvimento, teste e implantação de aplicativos, o que é vital para o trabalho eficiente de engenharia de dados. Além disso, o Kubernetes, um sistema de orquestração de contêineres, permite o gerenciamento, a automação e a escalabilidade de aplicações baseadas em contêineres em ambientes de produção. Dominar esses conceitos e tecnologias possibilita a engenheiros de dados construir e manter pipelines de dados eficientes e confiáveis.',
          "O Kubernetes (também conhecido como k8s ou kube) é uma plataforma de orquestração de containers open source que automatiza grande parte dos processos manuais necessários para implantar, gerenciar e escalar aplicações em containers.",
          'Isolar seu software para funcionar independentemente',
          "Implantar software em clusters",
          "Modularizar seu sistema em pacotes menores",
          "Conhecer a plataforma Docker",
          'Conhecer Kubernetes',
          ] 
        break;
      case "16":
        modalAtual = title = "Arquitetura de Microsserviços";
        content = "Microsserviços são uma abordagem de arquitetura na qual o software consiste de pequenos serviços independentes que se comunicam entre si e são organizados de acordo com seus domínios de negócio.";
        listItens = [
          'Aprender o conceito de arquitetura planejada para microsserviços',
          'Realizar a comunicação usando APIs',
          'Melhorar a escalabilidade de um sistema',
          ] 
        break;
      case "17":
        modalAtual = title = "Injeção de Dependências";
        content = "Injeção de Dependências é um padrão de projeto no qual uma classe solicita dependências de fontes externas ao invés de criá-las.";
        listItens = [
          'Evitar o alto nível de acoplamento de código dentro de uma aplicação',
          'Implementar a inversão de controle',
          ] 
        break;
      case "18":
        modalAtual = title = "C# - Multithreading";
        content = "Multithreading é a capacidade de realizar múltiplas operações ao mesmo tempo. Operações com o potencial de atrasar outras operações podem ser executadas em threads separadas.";
        listItens = [
          'Executar múltiplas tarefas simultaneamente',
          'Entender como threads são executadas',
          'Aprender como fazer uma thread esperar em um ponto específico',
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

