/**
 * ATENÇÃO: Isso não é uma boa prática na maioria dos casos quando se trabalha com javascript vanilla
 * Essa é uma maneira de trazer "reatividade" para o js, porém nesses casos é mais que recomendado
 * trabalhar com algum framework reativo como react, vue, etc
 * 
 * Isso não deve ser utilizado quando o conteúdo for importante para os motores que pesquisa (google, bing, etc)
 * pois dessa maneira o "robo" desses mecanismos não conseguem interpretar o conteúdo HTML.
 * Alguns casos quando o conteúdo não é importante para o "robo": Paginas da área logada, SPAs
 */


// Selecionado o elemento HTML onde eu quero inserir todo o conteúdo dinamico
const divContent = document.getElementById('content');

/**
 * Definido o conteúdo HTML que será replicado N vezes e será inserido dinamicamente 
 * O que for dinamico deve ser escrito simulando o comportamento de uma variavel, por exemplo {title}
 * Mas ela ainda se trata de uma string, apenas sera utilizado como parametro de busca para substituir o conteúdo
 * Nesse cenário temos duas "váriaveis":
 * {title}
 * {body}
 * Poderiam ter outras como como de classes, ids, etc
 */

let htmlTemplate = `
<article data-step="1">
    <header class="d-flex align-items-center fundo_verde ">
    <i class="fa-solid fundo_verde"></i>
    <h6 class="text-center text-uppercase text-black my-3 ps-4">
        {title}
    </h6>
    </header>

    <div class="body">
    <small>
        {body}
    </small>

    <div class="d-flex justify-content-between mt-3 controls">
        <a class="btn btn-outline-dark invisible" href="#">Voltar</a>
        <a class="btn btn-outline-dark" href="#">Proximo</a>
    </div>
    </div>
</article>
`

/**
 * Definido meu array de objetos com o conteúdo dinamico
 */
let content = [
    {
        "title": 'Titulo 1',
        "body": 'Conteudo 1'
    },
    {
        "title": 'Titulo 2',
        "body": 'Conteudo 2'
    },
    {
        "title": 'Titulo 3',
        "body": 'Conteudo 3'
    },
    {
        "title": 'Titulo 4',
        "body": 'Conteudo 4'
    },
    {
        "title": 'Titulo 5',
        "body": 'Conteudo 5'
    }
];

/**
 * Definido váriaveis auxiliares para a montagem do HTML
 */
let htmlContent = [];
let replaceTitle = replaceBody = '';

/**
 * Iterado o array de conteúdo
 * Cada "variavel" será substituida pela respectiva propriedade do objeto
 * Ao final teremos um array de strings com os conteudos HTML
 */
content.forEach(content => {
    replaceTitle = htmlTemplate.replace('{title}', content.title);
    replaceBody = replaceTitle.replace('{body}', content.body);
    htmlContent.push(
        replaceBody
    );
});

/**
 * Iterado o array de strings HTML
 * Adicionado no elemento HTML que foi selecionado anteriormente
 */
htmlContent.forEach( content => {
    divContent.insertAdjacentHTML("beforeend", content);
});
