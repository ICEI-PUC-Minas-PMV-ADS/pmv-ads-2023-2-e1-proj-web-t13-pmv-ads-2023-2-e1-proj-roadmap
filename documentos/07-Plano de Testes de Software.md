# Plano de Testes de Software

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
</table>
 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
