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
        modalAtual = title = "Ciência de Dados - Fundamentos";
        content = "A Ciência de Dados é o ato de utilizar algoritmos e sistemas para extrair, organizar e analisar dados a partir de diversas fontes, a fim de detectar padrões e tomar decisões de negócios. As áreas de aplicação são infindáveis, como em negócios, biologia, medicina, engenharia, etc.";
        listItens = [
          "Conhecer o conceito de Exploração de Dados",
          "Conhecer as principais funções, como 'describe', 'info', etc",
          "Entender o papel de visualizações como histogramas e boxplots",
          "Saber o que são variáveis categóricas nominais e ordinais",
          "Explorar os dados em Python com as bibliotecas Pandas, Matplotlib, Seaborn e Numpy",
        ];
        break;
      case "2":
        modalAtual = title = "Feature Engineering";
        content = "Feature Engineering (Engenharia de atributos/características) refere-se ao processo de usar o conhecimento de domínio para selecionar e transformar as variáveis mais relevantes dos dados brutos ao criar um modelo preditivo usando aprendizado de máquina ou modelagem estatística, a fim de melhorar o desempenho dos algoritmos de aprendizado de máquina.";
        listItens = [
          "Gerar novas variáveis a partir dos dados disponíveis",
          "Transformar dados brutos em características",
          "Realçar os problemas dos modelos preditivos",
          "Melhorar a precisão do modelo para novos dados",
          "Selecionar e criar features utilizando as bibliotecas Pandas e Scikit-learn",
        ]
        break;
      case "3":
        modalAtual = title = "Extração e Tratamento de Dados";
        content = "A extração de dados é o processo de coleta ou recuperação de tipos diferentes de dados de uma variedade de fontes, muitos dos quais podem estar mal organizados ou completamente desestruturados.";
        listItens = [
          "Obter os dados que serão analisados",
          "Tratar os dados obtidos, transformando-os, alterando sua estrutura e valores a fim de deixar a base de dados mais coerente e garantir que os dados que serão trabalhados estejam nas melhores condições para serem analisados",
          "Utilizar as bibliotecas Pandas e Scikit-learn para tratar os dados",
        ];
        break;
      case "4":
        modalAtual = title = "Python para Ciência de Dados";
        content = "Python é uma linguagem de programação interpretada de alto nível e que suporta múltiplos paradigmas de programação, como imperativo, orientado a objetos e funcional. É uma linguagem com tipagem dinâmica e gerenciamento automático de memória.";
        listItens = [
          "Aprender lógica de programação em Python",
          "Aprenda os fundamentos da linguagem como variáveis, funções, listas, condicionais e imports",
          "Criar análises de dados",
          "Utilizar o Matplotlib para gerar gráficos",
          "Usar e manipular listas para agrupar dados",
          "Conhecer a biblioteca NumPy",
          "Conhecer a biblioteca Pandas`",
        ];
        break;
      case "5":
        modalAtual = title = "Jupyter & Colab notebooks";
        content = "Jupyter Notebook e Google Colaboratory são Notebooks que permitem a criação de blocos de texto e blocos de código";
        listItens = [
          "Os Notebooks facilitam a elaboração de projetos de Data Science por ser possível visualizar o resultado da execução logo após o trecho de código",
          "O Google Colaboratory permite escrever e executar códigos Python diretamente no navegador, sem nenhuma ou poucas configurações necessárias",
          "Essas ferramentas facilitam o compartilhamento de projetos entre o time",
        ];        
        break;
      case "6":
        modalAtual = title = "R para Ciência de Dados";
        content = "R é uma linguagem de programação comumente usada em estatística computacional e análise de dados.";
        listItens = [
          'Aprender a analisar, limpar e visualizar dados',
          'Elaborar gráficos',
          'Juntar bancos de dados',
          'Tirar sumários estatísticos',
          'Aprender modelos preditivos no R',
        ] 

        break;
      case "7":
        modalAtual = title = "Machine Learning - Fundamentos";
        content = "O Aprendizado de Máquina ou Machine Learning é um subcampo da Engenharia e da Ciência da Computação que evoluiu do estudo de reconhecimento de padrões e da teoria do aprendizado computacional em inteligência artificial.";
        listItens = [
          "Aprendizado supervisionado",
          "Utilizar algoritmos de classificação",
          "Utilizar algoritmos de classificação",
          "Utilizar algoritmos de regressão",
          "Utilizar o Scikit-learn para criar modelos de machine learning",
        ] 
        break;
      case "8":
        modalAtual = title = "Machine Learning - Avaliação de Modelos";
        content = "A Avaliação de Modelos é o processo que utiliza métricas para nos ajudar a analisar se um modelo treinado terá um bom desempenho de previsão quando exposto a novos conjuntos de dados.";
        listItens = [
          "Conhecer diferentes estratégias de avaliação e otimização de modelos",
          "Utilizar um pipeline para treino e validação",
          "Conhecer as principais métricas de avaliação de modelos de machine learning",
        ] 
        break;
      case "9":
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
      case "10":
        modalAtual = title = "Web Scraping";
        content = "Web scraping ou raspagem de dados na web é a extração de dados de websites.";
        listItens = [
          "Usar o BeautifulSoup e Python para coletar dados",
          "Pesquisar e navegar no HTML",
          "Acessar o conteúdo e atributos das tags HTML",
          "Construir datasets com os resultados das raspagens",
        ] 
        break;
      case "11":
        modalAtual = title = "Machine Learning - Aprendizado Não Supervisionado";
        content = "O Aprendizado Não Supervisionado utiliza algoritmos de Aprendizado de Máquina para analisar e agrupar conjuntos de dados não rotulados. Estes algoritmos descobrem padrões ocultos ou agrupamentos de dados sem a necessidade de intervenção humana.";
        listItens = [
          'O clustering ou análise de agrupamento de dados é o conjunto de técnicas de prospecção de dados (data mining) que visa fazer agrupamentos automáticos de dados segundo o seu grau de semelhança.',
          'Conhecer a análise exploratória',
          'Utilizar os métodos K-means, DBSCAN e Mean shift para agrupar dados sem classificação',
          'Avaliar a qualidade de uma clusterização',
          'Parametrizar métodos de clusterização através do máximo coeficiente de silhueta',
          'Entender a matemática por trás das métricas de validação Silhouette, Davies Bouldin e Calinski Harabasz',
          'Conhecer técnicas de redução de dimensionalidade',
          ] 
        break;
      case "12":
        modalAtual = title = "Testes Estatísticos";
        content = "Testes estatísticos são usados para examinar as relações entre as variáveis e as hipóteses de teste.";
        listItens = [
          "Criar intervalos de confiança para amostras",
          "Comparar grupos de amostras",
          "Executar testes estatísticos",
          "Planejar experimentos para a coleta de dados",
          "Propor modelos matemáticos para entender um dado problema",
          "Construir mapas de cores para auxiliar a interpretação dos dados"
        ] 
        break;
      case "13":
        modalAtual = title = "Deep Learning";
        content = "Deep Learning é um ramo de Machine Learning baseado em um conjunto de algoritmos que tentam modelar abstrações de alto nível de dados usando um grafo profundo com várias camadas de processamento, compostas de várias transformações lineares e não lineares.";
        listItens = [
          "Construir e treinar modelos com Keras",
          "Construir e treinar modelos com Tensorflow",
          "Selecionar as camadas de um modelo",
          "Classificar imagens",
          "Entender os conceitos de pesos e vieses",
          "Redes neurais para regressão",
          "Entender o conceito de Redes recorrentes",
          ]
        break;
      case "14":
        modalAtual = title = "Aprendizado por Reforço";
        content = "O Aprendizado por Reforço é uma área de Machine Learning que se preocupa com a forma como agentes inteligentes devem tomar medidas num ambiente, a fim de maximizar a noção de recompensa cumulativa.";
        listItens = [
          "Entender os conceitos de agente e recompensa",
          "Entender a diferença entre reforço positivo e negativo",
          "Conhecer o modelo Markov Decision Process",
          "Entender o conceito de Retorno",
          "Utilizar o algoritmo Q-learning",
          ] 
        break;
      case "15":
        modalAtual = title = "Processamento de Linguagem Natural";
        content = "Processamento de língua natural (PLN) é uma subárea da inteligência artificial e da linguística que estuda os problemas da geração e compreensão automática de línguas humanas naturais.";
        listItens = [
        "Análise de Sentimento",
        "Criar visualizações para facilitar a análise de dados textuais",
        "Conhecer as bibliotecas NLTK e Scikit-Learn",
        "Normalizar textos",
        "Usar TF-IDF e Ngrams para melhorar a classificação",
        "Conhecer o conceito de Transformers e como são aplicados para LLMs",
        "Utilizar o SKlearn",
        "Utilizar Regex em PLN",
        "Conhecer o Word2Vec",
        "Combinar vetores de palavras para representar textos e classificá-los",
        ] 
        break;
      case "16":
        modalAtual = title = "Big Data e Engenharia de Dados";
        content = "Big data é a área do conhecimento que estuda como tratar, analisar e obter informações a partir de conjuntos de dados grandes demais para serem analisados por sistemas tradicionais.";
        listItens = [
          "Engenharia de Dados envolve o desenvolvimento e organização de processos para coleta, armazenamento e transformação de dados em grande escala.",
          "Criar um pipeline de dados",
          "Conhecer o Apache Airflow",
          "Conhecer o Apache Spark",
          "Conhecer o conceito de Data Lake",
          "Interagir com servidores na nuvem",
          "Criar aplicações Spark",
        ] 
        break;
      case "17":
        modalAtual = title = "Git e GitHub - Fundamentos";
        content = "Git é um sistema de controle de versão distribuído gratuito e de código aberto projetado para lidar com tudo, desde projetos pequenos a muito grandes com velocidade e eficiência.";
        listItens = [
          "GitHub é um serviço de hospedagem para desenvolvimento de software e controle de versão usando Git.",
          "Criar um repositório",
          "Clonar um repositório",
          "Fazer commit, push e pull de e para o repositório",
          "Reverter um commit",
          "Criar branches e pul requests",
          "Lidar com merge e conflitos",
        ] 
        break;
      case "18":
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
}

