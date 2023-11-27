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
        modalAtual = title = "Python para Ciência de Dados";
        content =
          "Python é uma linguagem de programação interpretada de alto nível e que suporta múltiplos paradigmas de programação, como imperativo, orientado a objetos e funcional. É uma linguagem com tipagem dinâmica e gerenciamento automático de memória.";
        listItens = [
          "Aprender lógica de programação em Python",
          'Aprenda os fundamentos da linguagem como variáveis, funções, listas, condicionais e imports',
          'Criar análises de dados',
          'Utilizar o Matplotlib para gerar gráficos',
          'Usar e manipular listas para agrupar dados',
          'Conhecer a biblioteca NumPy',
          "Conhecer a biblioteca Pandas",
        ];
        saibaMaisLink = 'https://medium.com/data-hackers/primeiros-passos-em-data-science-utilizando-python-para-an%C3%A1lise-de-dados-823436432b28'
        break;
      case "2":
        modalAtual =title = "Python - Coleções";
        content =
          "Uma coleção representa um grupo de objetos, conhecidos como seus elementos. Eles são como recipientes que agrupam vários itens em uma única unidade. Algumas coleções permitem a duplicação de elementos e outras não. Algumas são ordenadas e outras não ordenadas.";
        listItens = [
          "Utilizar listas e tuplas",
          'Utilizar polimorfismo nas coleções',
          "Utilizar conjuntos e dicionários",
        ];
        saibaMaisLink = 'https://medium.com/@desk467/cole%C3%A7%C3%B5es-em-python-tuplas-4444d683963a'
        break;
      case "3":
        modalAtual = title = "Estatística e Matemática - Fundamentos";
        content =  "";
        listItens = [
          "Equações, funções e limites",
          'Logaritmos',
          'Matrizes, determinantes, vetores e espaço vetorial',
          'Derivadas e integrais',
          'Diferença entre média, mediana e moda',
          'Distribuição de frequência',
          'Variância e desvio padrão',
          'Distribuição binomial, poisson e normal',
          'Nível e intervalo de confiança',
          'Técnicas de amostragem',
          'Regressão linear',
          "Séries temporais",
        ];
        saibaMaisLink = 'https://beatrizyumi.medium.com/preciso-saber-matem%C3%A1tica-para-aprender-ci%C3%AAncia-de-dados-9a9b7c7846a9'
        break;
      case "4":
        modalAtual = title = "Machine Learning - Fundamentos";
        content = "O Aprendizado de Máquina ou Machine Learning é um subcampo da Engenharia e da Ciência da Computação que evoluiu do estudo de reconhecimento de padrões e da teoria do aprendizado computacional em inteligência artificial.";
        listItens = [
          "Aprendizado supervisionado",
          'Utilizar algoritmos de classificação',
          'Utilizar algoritmos de regressão',
          'Utilizar o Scikit-learn para criar modelos de machine learning',
        ];
        saibaMaisLink = 'https://kozyrk.medium.com/portuguese-unsupervised-learning-c47d48c8e31'
        break;
      case "5":
        modalAtual = title = "Machine Learning - Aprendizado Não Supervisionado";
        content = "O Aprendizado Não Supervisionado utiliza algoritmos de Aprendizado de Máquina para analisar e agrupar conjuntos de dados não rotulados. Estes algoritmos descobrem padrões ocultos ou agrupamentos de dados sem a necessidade de intervenção humana.";
        listItens = [
          "O clustering ou análise de agrupamento de dados é o conjunto de técnicas de prospecção de dados (data mining) que visa fazer agrupamentos automáticos de dados segundo o seu grau de semelhança.",
          'Conhecer a análise exploratória',
          'Utilizar os métodos K-means, DBSCAN e Mean shift para agrupar dados sem classificação',
          'Avaliar a qualidade de uma clusterização',
          'Parametrizar métodos de clusterização através do máximo coeficiente de silhueta',
          'Entender a matemática por trás das métricas de validação Silhouette, Davies Bouldin e Calinski Harabasz',
          "Conhecer técnicas de redução de dimensionalidade",
        ]; 
        saibaMaisLink = 'https://kozyrk.medium.com/portuguese-unsupervised-learning-c47d48c8e31'       
        break;
      case "6":
        modalAtual = title = "Regressão Linear e Logística";
        content = "As regressões são os métodos mais simples de aprendizado supervisionado, porém encontram diversas aplicações.";
        listItens = [
          'A regressão linear é usada para relacionar uma variável dependente contínua a uma ou mais variáveis independentes contínuas.',
          'O objetivo é encontrar uma relação linear que melhor se ajuste aos dados.',
          'A regressão logística, por outro lado, é usada para problemas de classificação binária, onde a variável de saída é categórica e possui apenas duas categorias. Ela estima a probabilidade de um evento ocorrer com base nas variáveis independentes.',
        ] 
        saibaMaisLink = 'https://techguide.sh/pt-BR/path/inteligencia-artificial/linear-and-logistic-regression/'
        break;
      case "7":
        modalAtual = title = "Previsão de Séries temporais";
        content = "A previsão de séries temporais (Time series Forecasting), também conhecida como previsão temporal, é uma técnica de análise estatística que envolve a previsão de valores futuros ou padrões com base em dados históricos ordenados no tempo. Em uma série temporal, os dados são coletados sequencialmente em intervalos regulares, como horários, diários, mensais ou anuais, e exibem dependências temporais.";
        listItens = [] 
        saibaMaisLink = 'https://towardsdatascience.com/the-complete-guide-to-time-series-forecasting-using-sklearn-pandas-and-numpy-7694c90e45c1'
        break;
      case "8":
        modalAtual = title = "Redução de Dimensionalidade";
        content = "Redução de dimensionalidade é uma técnica utilizada no campo de aprendizado de máquina e análise de dados para reduzir o número de variáveis ou dimensões em um conjunto de dados. O objetivo é simplificar a representação dos dados, eliminando ou combinando características redundantes ou irrelevantes, enquanto mantém a maior parte da informação original.";
        listItens = [] 
        saibaMaisLink = 'https://www.aprendadatascience.com/blog/an%C3%A1lise-explorat%C3%B3ria-de-dados/redu%C3%A7%C3%A3o-de-dimensionalidade'
        break;
      case "9":
        modalAtual = title = "Machine Learning - Aprendizado por Transferência";
        content = "Transfer Learning (Aprendizado por Transferência) é uma abordagem na área de Machine Learning em que um modelo pré-treinado em uma tarefa relacionada é reutilizado como ponto de partida para treinar um modelo em uma tarefa diferente, geralmente com menos dados disponíveis.";
        listItens = [] 
        saibaMaisLink = 'https://datascience.eu/pt/aprendizado-de-maquina/o-que-e-aprendizado-por-transferencia/'
        break;
      case "10":
        modalAtual = title = "Machine Learning - Regularização";
        content = "Regularização se refere a um conjunto de técnicas para tornar os dados mais regulares e estáveis, facilitando o aprendizado e a descoberta de padrões em Machine Learning. A regularização é uma técnica que reduz o erro de um modelo, evitando o sobreajustamento (Overfitting) e treinando o modelo para funcionar corretamente.";
        listItens = [] 
        saibaMaisLink = 'https://datascience.eu/pt/aprendizado-de-maquina/regularizacao-na-aprendizagem-automatica/'
        break;
      case "11":
        modalAtual = title = "Visão Computacional";
        content = "Visão Computacional é um campo científico interdisciplinar que lida com a forma como os computadores podem ganhar conhecimentos de alto nível a partir de imagens ou vídeos digitais. Da perspectiva da engenharia, procura compreender e automatizar tarefas que o sistema visual humano pode fazer.";
        listItens = [
          'Extrair regiões de interesse de uma imagem',
          'Normalizar e pré-processar dados de imagens',
          'Construir classificadores para reconhecimento de faces',
          'Extrair regiões do rosto humano baseado em marcos faciais',
          'Analisar diferentes condições de cada componente do rosto humano',
          'Conhecer Redes Neurais Convolucionais',
          'Usar OpenCV',
          ] 
          saibaMaisLink = 'https://medium.com/turing-talks/introdu%C3%A7%C3%A3o-%C3%A0-vis%C3%A3o-computacional-b13698774adc'
        break;
      case "12":
        modalAtual = title = "Redes Neurais Convolucionais";
        content = "As CNNs (Convolutional Neural Networks, ou Redes Neurais Convolucionais) são um subtipo de redes neurais artificiais profundas (Deep Learning). AS CNNs são majoritariamente empregadas para o processamento de imagens e vídeos, no contexto de classificação do seu conteúdo. Ao contrário de outros algoritmos tradicionais de classificação de imagens, uma CNN tende a demandar menos esforços de pré-processamento nos dados de entrada.";
        listItens = [] 
        saibaMaisLink = 'https://www.quanta.org.br/blog/reconhecimento-de-imagens-com-redes-neurais/?gclid=EAIaIQobChMIyPalv5W4-gIVSeZcCh1SFQPeEAAYAyAAEgLZxPD_BwE'
        break;
      case "13":
        modalAtual = title = "Processamento de Linguagem Natural";
        content = "Processamento de língua natural (PLN) é uma subárea da inteligência artificial e da linguística que estuda os problemas da geração e compreensão automática de línguas humanas naturais.";
        listItens = [
          "Análise de Sentimento",
          'Criar visualizações para facilitar a análise de dados textuais',
          'Conhecer as bibliotecas NLTK e Scikit-Learn',
          'Normalizar textos',
          'Usar TF-IDF e Ngrams para melhorar a classificação',
          'Conhecer o conceito de Transformers e como são aplicados para LLMs',
          'Utilizar o SKlearn',
          'Utilizar Regex em PLN',
          'Conhecer o Word2Vec',
          "Combinar vetores de palavras para representar textos e classificá-los",
          ]
          saibaMaisLink = 'https://medium.com/ensina-ai/introdu%C3%A7%C3%A3o-a-processamento-de-linguagem-natural-174936c096b'
        break;
      case "14":
        modalAtual = title = "Redes Neurais Recorrentes";
        content = "Redes Neurais Recorrentes (em inglês, Recurrent Neural Networks ou RNNs) são uma classe de redes neurais artificiais projetadas para lidar com dados sequenciais, como séries temporais, texto e fala. Ao contrário das redes neurais tradicionais, as RNNs têm conexões recorrentes que permitem que as informações sejam propagadas ao longo do tempo, permitindo que elas capturem dependências temporais em sequências de dados.";
        listItens = [
          'LSTM (Long Short-Term Memory) é uma arquitetura de rede neural recorrente (RNN) projetada para superar as limitações das RNNs tradicionais na modelagem de dependências de longo prazo em sequências de dados.',
          'Conhecer a arquitetura de Redes Feedforward',
          'Funções de ativação mais comuns',
          "Familiarizar-se com as principais arquiteturas de RNNs, como bidirecionais (BRNN), Memória de curto prazo longa (LSTM), Unidades recorrentes fechadas (GRU)",
          ] 
          saibaMaisLink = 'https://www.ibm.com/br-pt/topics/recurrent-neural-networks'
        break;
      case "15":
        modalAtual = title = "Redes Adversárias Generativas (GANs)";
        content = "Redes Adversárias Generativas (em inglês, Generative Adversarial Networks ou GANs) são um tipo de arquitetura de rede neural usada para gerar dados sintéticos, como imagens, música, texto ou outros tipos de dados, que se assemelham aos dados de treinamento.";
        listItens = [] 
        saibaMaisLink = 'https://www.deeplearningbook.com.br/introducao-as-redes-adversarias-generativas-gans-generative-adversarial-networks/'
        break;
      case "16":
        modalAtual = title = "Automação com IA";
        content = "Automated IA, ou automação de IA, refere-se à combinação de tecnologias de automação, como RPA, com recursos de inteligência artificial, como processamento de linguagem natural (NLP), aprendizado de máquina (machine learning) e visão computacional. Essa abordagem visa automatizar processos complexos que envolvem o processamento e a análise de informações não estruturadas, permitindo que as máquinas tomem decisões com base nesses dados.";
        listItens = [] 
        saibaMaisLink = 'https://www.automationanywhere.com/br/rpa/intelligent-automation'
        break;
      case "17":
        modalAtual = title = "XGBoost";
        content = "XGBoost é uma biblioteca de aprendizado de máquina baseada em gradient boosting que se destaca na resolução de problemas de classificação e regressão. 'XG' em XGBoost refere-se a 'Extreme Gradient', indicando o uso de gradient boosting para melhorar a precisão do modelo.";
        listItens = [] 
        saibaMaisLink = 'https://sigmoidal.ai/xgboost-aprenda-algoritmo-de-machine-learning-em-python/'
        break;
      case "18":
        modalAtual = title = "Viés Cognitivo e IA Responsável";
        content = "O conceito de Viés Cognitivo refere-se aos padrões sistemáticos de desvio e distorção na forma como os seres humanos percebem, interpretam e tomam decisões. Esses vieses cognitivos podem levar a distorções na análise de informações, julgamentos e comportamentos de todos os tipos, como de raça, gênero, idade, capacidades físicas, entre outros, influenciando nossas percepções e ações de maneira não racional ou imparcial.";
        listItens = [] 
        saibaMaisLink = 'https://institutoconectomus.com.br/o-que-e-vies-cognitivo/'
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

