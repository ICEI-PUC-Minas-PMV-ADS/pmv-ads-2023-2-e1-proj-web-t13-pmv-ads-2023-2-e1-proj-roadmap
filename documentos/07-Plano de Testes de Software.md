# Plano de Testes de Software

Pré-requisitos [Especificação do projeto](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t13-pmv-ads-2023-2-e1-proj-roadmap/blob/main/documentos/02-Especifica%C3%A7%C3%A3o%20do%20Projeto.md), [Projeto de interface](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t13-pmv-ads-2023-2-e1-proj-roadmap/blob/main/documentos/04-Projeto%20de%20Interface.md).

[Apresente os cenários de testes a serem utilizados na realização dos testes da aplicação. Escolha cenários de testes que demonstrem os requisitos sendo atendidos. ]

Os testes funcionais a serem realizados na aplicação são descritos a seguir. [Utilize a estrutura abaixo para cada caso de teste]

<table>
    <tr>
        <th>Caso de teste</th>
        <th>Requisitos associados</th>
        <th>Objetivo do teste</th>
        <th>Passos</th>
        <th>Critérios de êxito</th>
        <th>Responsável</th>
    </tr>
    <tr>
        <td>CT-01:Verificar o funcionamento do formulario na pagina Contato em caso de erro</td>
        <td>RF-14: A aplicação deve permitir o envio de feedback ao final de cada roadmap</td>
        <td>Verificar se os campos da serao sinalizados com erro caso enviados vazio</td>
        <td>
            <ol>
                <li>Acessar a aplicacao pelo navegador</li>
                <li>Acessar no menu de navegacao a pagina Contato</li>
                <li>Clicar no botao enviar sem preencher nenhum campo</li>
            </ol>
        </td>
        <td>Todos os campos devem sinalizar erro</td>
        <td>Leonardo Matsui</td>
    </tr>
    <tr>
        <td>CT-02: Verificar o funcionamento do formulario na pagina Contato em caso de sucesso</td>
        <td>RF-14: A aplicação deve permitir o envio de feedback ao final de cada roadmap</td>
        <td>Verificar se os campos da serao sinalizados com sucesso caso enviados corretamente</td>
        <td>
            <ol>
                <li>Acessar a aplicacao pelo navegador</li>
                <li>Acessar no menu de navegacao a pagina Contato</li>
                <li>Preencher o campo de nome</li>
                <li>Preencher o campo de email com um email no formato valido</li>
                <li>Preencher o campo mensagem/li>
                <li>Aceitar os termos</li>
                <li>Clicar no botao Enviar</li>
            </ol>
        </td>
        <td>Todos os campos devem sinalizar sucesso</td>
        <td>Leonardo Matsui</td>
    </tr>
    <tr>
        <td>CT-03: Exibir Lista de Tecnologias</td>
        <td>RF-01 A aplicação deve exibir uma lista de tecnologias para o usuário escolher sobre qual ele quer visualizar o roadmap</td>
        <td>Verificar se a aplicação exibe corretamente a lista de tecnologias disponíveis para escolha.</td>
        <td>
            <ol>
                <li>Acessar a aplicação pelo navegador.</li>
                <li>Informar o endereço do site</li>
                <li>Visualizar pagina Home</li>
                <li>Visualizar lista de tecnologias disponíveis</li>
            </ol>
        </td>
        <td>A lista de tecnologias deve estar visível na tela inicial, apresentando todas as opções de escolha.</td>
        <td>Brendo W. R.</td>
    </tr>
    <tr>
        <td>CT-04 Selecionar Tecnologia e Visualizar Roadmap</td>
        <td>RF-01, RF-02</td>
        <td>Verificar se, ao selecionar uma tecnologia, o roadmap correspondente é corretamente exibido.</td>
        <td>
            <ol>
                <li>Escolher uma tecnologia na lista disponível.</li>
                <li>Verificar se o roadmap correspondente é carregado.</li>
                <li>Confirmar se o conteúdo do roadmap está correto.</li>
            </ol>
        </td>
        <td>Após a escolha da tecnologia, o roadmap associado deve ser carregado com o conteúdo correto.</td>
        <td>Brendo W. R.</td>
    </tr>  
    <tr>
        <td>CT-05 Realizar Pesquisa por Tecnologia</td>
        <td>RF-03</td>
        <td>Verificar se a aplicação permite a realização de uma pesquisa por tecnologia.</td>
        <td>
            <ol>
                <li>Acessar a funcionalidade de pesquisa na aplicação</li>
                <li>Digitar o nome de uma tecnologia na barra de pesquisa.</li>
                <li>Verificar se os resultados da pesquisa correspondem à tecnologia buscada.</li>
            </ol>
        </td>
        <td>Os resultados da pesquisa devem ser precisos e corresponder à tecnologia inserida.</td>
        <td>Brendo W. R.</td> 
    </tr>
    <tr>
        <td>CT-06 Redirecionamento para Material Externo</td>
        <td>RF-04</td>
        <td>Garantir que os tópicos do roadmap redirecionem para materiais externos corretos.</td>
        <td>
            <ol>
                <li>Acessar um tópico no roadmap.</li>
                <li>Clicar no link referente ao material externo.</li>
                <li>Verificar se o redirecionamento ocorre para o material correto.</li>
            </ol>
        </td>
        <td>O redirecionamento deve levar ao material externo associado ao tópico selecionado.</td>
        <td>Brendo W. R.</td> 
    </tr>
    <tr>
        <td>CT-07 Cadastro de Usuários</td>
        <td>RF-05</td>
        <td>Verificar se a funcionalidade de cadastro de usuários está operacional.</td>
        <td>
          <ol>
                <li>Acessar a página de cadastro.</li>
                <li>Preencher os campos obrigatórios.
</li>
                <li>Enviar o formulário de cadastro.</li>
            </ol>
        </td>
        <td>O cadastro deve ser concluído com sucesso, permitindo acesso posterior.</td>
        <td>Brendo R. W.</td> 
    </tr>
    <tr>
        <td>CT-08 Funcionalidade de Login</td>
        <td>RF-06</td>
        <td>Verificar se o login de usuário está funcionando corretamente.</td>
        <td>
          <ol>
                <li>Acessar a página de login.</li>
                <li>Inserir credenciais corretas de um usuário cadastrado.</li>
                <li>Verificar se o acesso é concedido.</li>
            </ol>
        </td>
        <td>O acesso deve ser liberado para usuários autenticados.</td>
        <td>Brendo W. R.</td> 
    </tr>
    <tr>
        <td>CT-09 Criação de Perfis de Estudo</td>
        <td>RF-07</td>
        <td>Garantir que os perfis de estudo possam ser criados com sucesso.</td>
        <td>
          <ol>
                <li>Acessar a seção de criação de perfil.</li>
                <li>Preencher informações necessárias.</li>
                <li>Salvar o perfil criado.</li>
            </ol>
        </td>
        <td>O perfil deve ser criado e salvo corretamente.</td>
        <td>Brendo W. R.</td> 
    </tr>
    <tr>
        <td>CT-10 Criação de Perfis de Estudo</td>
        <td>RF-08</td>
        <td>Verificar se a aplicação apresenta os perfis de administradores e usuários comuns corretamente.</td>
        <td>
          <ol>
                <li>Identificar se o perfil de administrador está claramente diferenciado do usuário comum.</li>
                <li>Verificar as funcionalidades e acessos disponíveis para cada perfil.</li>
            </ol>
        </td>
        <td>Perfis devem estar corretamente configurados e diferenciados.</td>
        <td>Brendo W. R.</td> 
    </tr>
     <tr>
        <td>CT-11 Painel Administrativo</td>
        <td>RF-09</td>
        <td>Verificar se o painel administrativo está operando adequadamente.</td>
        <td>
          <ol>
                <li>Acessar o painel administrativo.</li>
                <li>Verificar a disponibilidade das funcionalidades destinadas aos administradores.</li>
            </ol>
        </td>
        <td>Todas as funcionalidades administrativas devem estar acessíveis e operacionais.</td>
        <td>Brendo W. R.</td> 
    </tr>
    <tr>
        <td>CT-12 Marcação de Tópicos Estudados</td>
        <td>RF-10</td>
        <td>Verificar se os tópicos estudados podem ser marcados na aplicação.</td>
        <td>
          <ol>
                <li>Identificar a função de marcação de tópicos estudados.</li>
                <li>Selecionar um tópico e marcar como estudado.</li>
            </ol>
        </td>
        <td>A marcação deve ser aplicada e registrada corretamente na aplicação.</td>
        <td>Brendo W. R.</td> 
    </tr>
    <tr>
        <td>CT-13 Exibição da Porcentagem de Roadmaps</td>
        <td>RF-11</td>
        <td>Verificar se a exibição da porcentagem de cada roadmap está correta.</td>
        <td>
          <ol>
                <li>Verificar onde a porcentagem é exibida.</li>
                <li>Identificar se os valores estão corretamente associados aos roadmaps.</li>
            </ol>
        </td>
        <td>As porcentagens devem ser exibidas corretamente, correspondendo ao progresso dos roadmaps.</td>
        <td>Brendo W. R.</td> 
    </tr>
    <tr>
        <td>CT-14 Avaliação dos Roadmaps</td>
        <td>RF-12</td>
        <td>Verificar se a funcionalidade de avaliação dos roadmaps está funcionando corretamente.</td>
        <td>
            <ol>
                <li>Identificar onde está disponível a opção de avaliação.</li>
                <li>Realizar uma avaliação.</li>
            </ol>
        </td>
        <td>A avaliação deve ser concluída e registrada corretamente.</td>
        <td>Brendo W. R.</td>
    </tr>
    <tr>
        <td>CT-15 Comentários nos Roadmaps</td>
        <td>RF-13</td>
        <td>Verificar se é possível realizar comentários nos roadmaps.</td>
        <td>
            <ol>
                <li>Acessar um roadmap específico.</li>
                <li>Identificar onde é possível inserir comentários.</li>
                <li>Enviar um comentário.</li>
            </ol>
        </td>
        <td>O comentário deve ser inserido e exibido corretamente no roadmap.</td>
        <td>Brendo W. R.</td>
    </tr>
</table>
 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
