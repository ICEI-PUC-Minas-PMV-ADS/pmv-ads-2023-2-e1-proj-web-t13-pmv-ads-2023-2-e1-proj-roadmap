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
        modalAtual = title = "Linha de comando - Fundamentos";
        content = "CLI é um programa de linha de comando que aceita entradas de texto para executar funções do sistema operacional.";
        listItens = [
          "Conhecer os principais comandos",
        ];
        break;
      case "2":
        modalAtual = title = "Técnicas Hacker";
        content = "Entender as metodologias e as técnicas que os invasores usam para realizar o reconhecimento como uma etapa de pré-ataque, incluindo como eles usam inteligência de código aberto, varredura de rede e ataques de enumeração de alvos para encontrar as lacunas na segurança de sua rede.";
        listItens = [
          "Usar técnicas de invasores para avaliar a segurança de uma rede de destino, avaliando protocolos e endpoints populares para Windows, Linux e destinos de nuvem.",
        ]
        break;
      case "3":
        modalAtual = title = "Criptografia - Fundamentos";
        content = "Criptografia em segurança virtual é a conversão de dados de um formato legível em um formato codificado. Os dados criptografados só podem ser lidos ou processados ​​depois de serem descriptografados.";
        listItens = [];
        break;
      case "4":
        modalAtual = title = "Análise de Vulnerabilidades";
        content = "Técnicas e táticas de framework de vários serviços e ferramentas que oferece uma solução de varredura e gerenciamento de vulnerabilidade.";
        listItens = [];
        break;
      case "5":
        modalAtual = title = "Framework de Cibersegurança";
        content = "O Framework de Cibersegurança são guias de orientação para as organizações - em qualquer setor ou comunidade - que buscam melhorar o gerenciamento de riscos de segurança cibernética por meio da utilização de Framework.";
        listItens = [
          "Embora o Framework de Cibersegurança não seja uma abordagem única para gerenciar riscos de segurança cibernética para organizações, em última análise, visa reduzir e gerenciar melhor esses riscos. Como tal, este guia destina-se a toda e qualquer organização, independentemente do setor ou tamanho.",
        ];        
        break;
      case "6":
        modalAtual = title = "Investigação Digital - Fundamentos";
        content = "Investigação Digital é o uso da ciência para investigar crimes digfitais e determinar fatos, que surgiu a partir do uso e disseminação de sistemas digitais, como computadores e smartphones.";
        listItens = [] 
        break;
      case "7":
        modalAtual = title = "Segurança de Endpoint";
        content = "A segurança de endpoint, ou proteção de endpoint, é a abordagem de segurança cibernética para defender endpoints como desktops, laptops e dispositivos móveis contra atividades maliciosas.";
        listItens = [] 
        break;
      case "8":
        modalAtual = title = "Gerenciamento de Dispositivos Móveis";
        content = "O gerenciamento de dispositivos móveis refere-se a qualquer ferramenta ou software projetado para ajudar os administradores para controlar e proteger dispositivos móveis como smartphones e tablets em uma organização.";
        listItens = [
          "O gerenciamento de dispositivos móveis é uma parte importante do gerenciamento de mobilidade empresarial e do gerenciamento de endpoints, especialmente à medida que mais empresas adotam políticas de BYOD (traga seu próprio dispositivo) que permitem que os funcionários acessem dados, arquivos e aplicativos da empresa em seus dispositivos pessoais.",
        ] 
        break;
      case "9":
        modalAtual = title = "Metasploit - Ataque e Análise";
        content = "Metasploit é a estrutura de teste de penetração mais usada do mundo.";
        listItens = [ ] 
        break;
      case "10":
        modalAtual = title = "Web application - Segurança";
        content = "A segurança de aplicativos da Web (também conhecida como Web AppSec) é a ideia de criar sites para funcionar conforme o esperado, mesmo quando estão sob ataque. O conceito envolve uma coleção de controles de segurança projetados em um aplicativo da Web para proteger seus ativos de agentes potencialmente maliciosos.";
        listItens = [] 
        break;
      case "11":
        modalAtual = title = "Web application - Vulnerabilidade";
        content = "As vulnerabilidades de aplicativos da Web envolvem uma falha ou fraqueza do sistema em um aplicativo baseado na Web. Eles existem há anos, em grande parte devido à não validação ou limpeza de entradas de formulário, servidores web mal configurados e falhas de design de aplicativos, e podem ser explorados para comprometer a segurança do aplicativo.";
        listItens = [
          'Essas vulnerabilidades não são iguais a outros tipos comuns de vulnerabilidades, como rede ou ativo. Eles surgem porque os aplicativos da Web precisam interagir com vários usuários em várias redes, e esse nível de acessibilidade é facilmente aproveitado pelos hackers.',
          ] 
        break;
      case "12":
        modalAtual = title = "SIEM e SOAR";
        content = "Security Information and Event Management (SIEM) são softwares que agregam e analisam informações de várias fontes diferentes em toda a infra-estrutura.";
        listItens = [
          "Security Orchestration, Automation, and Response (SOAR) irá ajudar com o gerenciamento de ameaças e vulnerabilidades, resposta a incidentes de segurança e automação da operação de segurança."
        ] 
        break;
      case "13":
        modalAtual = title = "Arquitetura de Segurança de Rede";
        content = "A segurança de rede prepara você para tarefas como proteger os dados da empresa contra roubo, danos, interrupções e outros. Um profissional da área irá projetar e implementar auma arquitetura segura para dispositivos de rede, bem como oferecer suporte de segurança e garantir a integridade deles.";
        listItens = []
        break;
      case "14":
        modalAtual = title = "Análise de Malware";
        content = "A análise de malware é o processo de compreensão do comportamento e da finalidade de um arquivo ou URL suspeito. A saída da análise ajuda na detecção e mitigação da ameaça potencial.";
        listItens = [] 
        break;
      case "15":
        modalAtual = title = "Segurança de Aplicações de Software";
        content = "A segurança de aplicações descreve as medidas de segurança no nível do aplicativo que visam impedir que dados ou códigos dentro da aplicação sejam roubados ou invadidos.";
        listItens = [
        " Ele abrange as considerações de segurança que ocorrem durante o desenvolvimento e o design de aplicativos, mas também envolve sistemas e abordagens para proteger os aplicativos depois que eles são implantados.",
        ] 
        break;
      case "16":
        modalAtual = title = "Arquitetura Zero Trust";
        content = "DevSecOps significa desenvolvimento, segurança e operações. É uma abordagem à cultura, automação e design de plataforma que integra a segurança como uma responsabilidade compartilhada durante todo o ciclo de vida da TI.";
        listItens = [] 
        break;
      case "17":
        modalAtual = title = "Segurança na Nuvem";
        content = "A segurança na nuvem, também conhecida como segurança da computação em nuvem, é um conjunto de medidas de segurança projetadas para proteger a infraestrutura, os aplicativos e os dados baseados em nuvem. Essas medidas garantem a autenticação de usuários e dispositivos, controle de acesso a dados e recursos e proteção de privacidade de dados. Eles também suportam a conformidade de dados regulatórios.";
        listItens = [] 
        break;
      case "18":
        modalAtual = title = "Segurança Contínua - Automação e Monitoramento";
        content = "O monitoramento contínuo de segurança é uma abordagem de segurança que envolve a automatização de uma parte significativa do gerenciamento de segurança. Isso inclui detecção de vulnerabilidades, monitoramento de configurações de nuvem, identidades e seus direitos e segurança de dados.";
        listItens = [] 
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

