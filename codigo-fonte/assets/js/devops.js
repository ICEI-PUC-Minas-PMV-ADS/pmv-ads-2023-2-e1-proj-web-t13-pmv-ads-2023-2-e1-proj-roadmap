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
        modalAtual = title = "Linux - Fundamentos";
        content = "Linux é um termo popularmente empregado para se referir a sistemas operacionais que utilizam o Kernel Linux. As distribuições incluem o Kernel Linux, além de softwares de sistema e bibliotecas.";
        listItens = [
          "Conhecer o sistema de diretórios do Linux",
          "Compactar e descompactar arquivos",
          "Editar arquivos no console com o VI",
          "Gerenciar os processos rodando na máquina",
          "Conhecer as variáveis de ambiente e o PATH",
          "Gerenciar pacotes",
          "Realizar comunicação remota com o SSH e SCP",
        ];
        saibaMaisLink = ''
        break;
      case "2":
        modalAtual = title = "Shell Scripting";
        content = "Automatizar tarefas repetitivas utilizando as linguagens disponibilizadas pelo terminal.";
        listItens = [
          "Criação de tarefas com execução automática",
          "Automatizar a configuração e instalação de aplicações em novos sistemas",
          "Usar o PowerShell",
        ]
        saibaMaisLink = ''
        break;
      case "3":
        modalAtual = title = "Redes de Computadores - Fundamentos";
        content = "Rede de computadores é uma malha que interliga milhares de sistemas computacionais para a transmissão de dados. Também conhecidos como nós, esses dispositivos interconectados enviam, recebem e trocam tráfego de dados, voz e vídeo, graças ao hardware e software que compõe o ambiente.";
        listItens = [
          "Configurações de redes são essenciais para que seja possível acessar uma aplicação, principalmente se ela estiver na nuvem.",
          "Entenda melhor os componentes de rede e a suas atribuições",
          "Diferenciar os serviços disponibilizados a nível de rede",
          "Saber as diferenças entre as camadas de rede",
          "Saber o que é servidor web, proxy reverso e load balancer",
        ];
        saibaMaisLink = ''
        break;
      case "4":
        modalAtual = title = "Linha de comando - Fundamentos";
        content = "CLI é um programa de linha de comando que aceita entradas de texto para executar funções do sistema operacional.";
        listItens = [
          "Conhecer os principais comandos",
        ];
        saibaMaisLink = ''
        break;
      case "5":
        modalAtual = title = "HTTP - Fundamentos";
        content = "HTTP significa Hyper Text Transfer Protocol. A comunicação entre computadores cliente e servidores web é feita enviando solicitações HTTP e recebendo respostas HTTP.";
        listItens = [
          "Entender a diferença dos verbos HTTP",
          "Testar os requests e ver os status codes no navegador",
          "Saber fazer uma requisição HTTP na linha de comando com WGET",
          "Baixar uma imagem com WGET",
          "Fazer um post",
        ];        
        break;
      case "6":
        modalAtual = title = "Cloud - Fundamentos";
        content = "Cloud, ou computação em nuvem é a distribuição de serviços de computação pela Internet usando um modelo de preço pago conforme o uso. Uma nuvem é composta de vários recursos de computação, que abrangem desde os próprios computadores (ou instâncias, na terminologia de nuvem) até redes, armazenamento, bancos de dados e o que estiver em torno deles. Ou seja, tudo o que normalmente é necessário para montar o equivalente a uma sala de servidores, ou mesmo um data center completo, estará pronto para ser utilizado, configurado e executado.";
        listItens = [
          "Conhecer a diferença entre IaaS, PaaS e SaaS",
          "Conhecer os maiores provedores de cloud",
          "Especializar-se em algum provedor",
        ] 
        break;
      case "7":
        modalAtual = title = "Contêineres";
        content = "Os contêineres são pacotes de software que contêm todos os elementos necessários para serem executados em qualquer ambiente. Gerenciamento de contêineres é uma área crucial na computação em nuvem e DevOps, que envolve o uso de tecnologias para automatizar o processo de criação, implantação, escalonamento e monitoramento de contêineres. Contêineres são unidades de software padronizadas que permitem aos desenvolvedores empacotar todas as dependências de um aplicativo (código, bibliotecas, configurações, etc.) em um único pacote. Isso permite que o aplicativo seja executado de forma consistente em qualquer ambiente de infraestrutura.";
        listItens = [
          "A tecnologia de contêineres, como exemplificada pelo Docker, fornece um ambiente consistente e portátil para desenvolvimento, teste e implantação de aplicativos, o que é vital para o trabalho eficiente de engenharia de dados. Além disso, o Kubernetes, um sistema de orquestração de contêineres, permite o gerenciamento, a automação e a escalabilidade de aplicações baseadas em contêineres em ambientes de produção. Dominar esses conceitos e tecnologias possibilita a engenheiros de dados construir e manter pipelines de dados eficientes e confiáveis.",
          "O Kubernetes (também conhecido como k8s ou kube) é uma plataforma de orquestração de containers open source que automatiza grande parte dos processos manuais necessários para implantar, gerenciar e escalar aplicações em containers.",
          "Isolar seu software para funcionar independentemente",
          "Implantar software em clusters",
          "Modularizar seu sistema em pacotes menores",
          "Conhecer a plataforma Docker",
          "Conhecer Kubernetes",
        ] 
        break;
      case "8":
        modalAtual = title = "Infraestrutura como código (IaC)";
        content = "A infraestrutura como código permite com que seja criada e configurada toda a infraestrutura de uma aplicação de maneira automática.";
        listItens = [
          "Existem muitas ferramentas que têm a função de preparar uma infraestrutura atravez de código, porém algumas se destacam cada vez mais, principalmente o Terraform e o Ansible",
          "Descrever a infraestrutura atual e criar a sua documentação",
          "Atualizar a infraestrutura de maneira automatica",
          "Configurar maquinas e serviços sem utilização de paineis proprietarios dos sistemas de cloud",
          "Conhecer o Ansible",
          "Conhecer o Terraform",
        ] 
        break;
      case "9":
        modalAtual = title = "Entrega e integração contínuas (CI/CD)";
        content = "CI/CD é a abreviação de Continuous Integration/Continuous Delivery, traduzindo para o português 'entrega e integração contínuas'. Trata-se de uma prática de desenvolvimento de software que visa tornar a integração de código mais eficiente por meio de builds e testes automatizados.";
        listItens = [
          "Automatizar a integração de código entre varias partes da equipe se tornou cada vez mais importante, ja que assim é possivel acelerar o desenvolvimento e diminiur o tempo de entrega de software.",
          "Executar testes automatizados da aplicação para verificar seu funcionamento.",
          "Realizar a entrega de atualizações de forma automatica e com segurança.",
          "Realizar testes de conexão e testes de carga para evitar que a aplicação apresente problemas ao ser atualizada.",
        ] 
        break;
      case "10":
        modalAtual = title = "SQL - Fundamentos";
        content = "SQL (Structured Query Language, traduzindo, Linguagem de Consulta Estruturada) é uma linguagem de programação padronizada que é usada para gerenciar bancos de dados relacionais e realizar várias operações sobre os dados neles contidos.";
        listItens = [
          "Conhecer os comandos mais comuns do SQL",
          "Usar SELECT para consultar uma tabela",
          "Usar INSERT para inserir dados em uma tabela",
          "Usar UPDATE para atualizar uma tabela",
          "Usar DELETE para remover dados de uma tabela",
          "Usar JOIN para conectar os dados de múltiplas tabelas",
          "Conhecer as cláusulas (FROM, ORDER BY, etc)",
        ] 
        break;
      case "11":
        modalAtual = title = "Estratégias de SEO";
        content = "SEO significa otimização para motores de busca e que diz respeito as estratégias usadas para ranquear um site dentro de mecanismos de busca como o Yahoo, o Bing e, claro, o mais famoso de todos, o Google.";
        listItens = [
          'Escolher palavras-chave',
          'Entender como o Google classifica páginas',
          'Conhecer os fatores de rankeamento',
          'Fazer Link Building',
          ] 
        break;
      case "12":
        modalAtual = title = "Design Patterns";
        content = "Na engenharia de software, um 'padrão de projeto' (Design Pattern em inglês) é uma solução geral e reutilizável para um problema que ocorre normalmente dentro de um determinado contexto de projeto de software.";
        listItens = [
          "Conhecer e aplicar os principais Design Patterns"
        ] 
        break;
      case "13":
        modalAtual = title = "Engenharia de Confiabilidade de Sites (SRE)";
        content = "A Engenharia de Confiabilidade de Sites (SRE) é a prática de usar ferramentas de software para automatizar tarefas de infraestrutura de TI, como gerenciamento de sistemas e monitoramento de aplicativos.";
        listItens = [
          "Coletar métricas sobre a sáude da aplicação e da máquina em que ela se encontra",
          "Montar dashboards para analisar todas as informações coletadas",
          ]
        break;
      case "14":
        modalAtual = title = "Firewalls, IDS e IPS";
        content = "Definições e diferenças entre dispositivos de segurança de rede, firewalls, sistemas de prevenção de intrusão (IPS) e sistemas de detecção de intrusão (IDS).";
        listItens = [
          "Um firewall permite o tráfego dependendo de um conjunto de regras que foram configuradas. Ele é baseado nos endereços de origem, destino e porta. Um firewall pode negar qualquer tráfego que não satisfaça os critérios especificados.",
          "IDS são dispositivos de sistema de monitoramento passivo que monitoram o tráfego de rede à medida que viajam pela rede, comparam padrões de assinatura, e acionar um alarme se for detectada atividade suspeita ou ameaça de segurança conhecida.",
          "O IPS é um dispositivo ativo que impede ataques, bloqueando-os.",
          ] 
        break;
      case "15":
        modalAtual = title = "Internet das Coisas (IoT) - Fundamentos";
        content = "Quase todos os objetos agora podem ser conectados à Internet, de máquinas de lavar a componentes sofisticados de motor de avião, a itens orgânicos, como plantações e vacas. A capacidade de conectar coisas e capturar dados úteis está transformando as empresas de todos os setores e abrindo portas para novas especializações de carreira. Descubra a base desse novo campo com atividades práticas para conectar os sensores com segurança aos serviços em nuvem nas redes IP e coletar dados em um sistema de IoT (Internet das Coisas) de ponta a ponta.";
        listItens = [
        "Como rodar seu primeiro sistema em um Arduino",
        ] 
        break;
      case "16":
        modalAtual = title = "DevSecOps";
        content = "DevSecOps significa desenvolvimento, segurança e operações. É uma abordagem à cultura, automação e design de plataforma que integra a segurança como uma responsabilidade compartilhada durante todo o ciclo de vida da TI.";
        listItens = [] 
        break;
      case "17":
        modalAtual = title = "Arquitetura de Microsserviços";
        content = "Microsserviços são uma abordagem de arquitetura na qual o software consiste de pequenos serviços independentes que se comunicam entre si e são organizados de acordo com seus domínios de negócio..";
        listItens = [
          "Aprender o conceito de arquitetura planejada para microsserviços",
          "Realizar a comunicação usando APIs",
          "Melhorar a escalabilidade de um sistema",
        ] 
        break;
      case "18":
        modalAtual = title = "JSON";
        content = "JSON significa JavaScript Object Notation (notação de objeto JavaScript). É um formato de texto para armazenar e transmitir dados.";
        listItens = [
          "Criar um objeto",
          "Transformar um objeto em uma string",
          "Transformar uma string em objeto",
          "Manipular um objeto",
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

