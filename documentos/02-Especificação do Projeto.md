# Especificação do Projeto

## Perfis de Usuários


Perfil 1
Descrição: 	Lucas, o Estudante Iniciante de Desenvolvimento Front-End:
Objetivo: 	É um estudante que deseja ingressar na área de desenvolvimento Front-End ou descobrir se tem afinidade com essa área.
Desafios:	Ele precisa de orientações claras sobre como começar seus estudos e se familiarizar com os fundamentos do Front-End.
Expectativas:	Lucas busca uma plataforma que forneça um roteiro introdutório, com recursos de aprendizado recomendados, para ajudá-lo a dar os primeiros passos na programação Front-End.

Perfil 2
Descrição: 	Ana, a Estudante de Tecnologia em Busca de Mentoria
Objetivo: 	Ana é uma estudante de tecnologia que procura orientação para evitar fontes de informação duvidosas e otimizar seu tempo de pesquisa.
Desafios:	Ela sente dificuldade em distinguir fontes confiáveis de informações, o que pode prejudicar seu progresso acadêmico.
Expectativas:	Ana deseja acesso a uma plataforma ou mentor que possa guiá-la em suas pesquisas e fornecer direcionamento para recursos confiáveis e relevantes.

Perfil 3
Descrição: 	João, Profissional Front-End Busca de Aprendizado em ReactJS
Objetivo: 	João é um desenvolvedor Front-End que deseja aprender ReactJS para enriquecer seu portfólio.
Desafios:	Ele precisa de recursos específicos e orientações práticas para adquirir habilidades em ReactJS.
Expectativas:	João está interessado em uma plataforma que ofereça cursos e tutoriais de alta qualidade, focados em ReactJS, para ajudá-lo a atingir suas metas de desenvolvimento profissional.

Perfil 4
Descrição: 	Maria, a Dev Jr. em Busca de Eficiência em Banco de Dados:
Objetivo: 	Maria é uma desenvolvedora Junior que busca orientações sobre quais frameworks ou linguagens são mais eficientes para otimizar o uso de memória em bancos de dados.
Desafios:	Ela deseja criar sistemas mais leves e eficientes, mas não sabe por onde começar.
Expectativas:	Maria busca uma plataforma que forneça insights e orientações sobre as melhores práticas e tecnologias para desenvolver sistemas de banco de dados mais eficientes.

Perfil 5
Descrição: 	Pedro, Programador Estagiário Busca de Orientações de Frameworks
Objetivo: 	Pedro é um programador estagiário que deseja orientações sobre a escolha dos melhores frameworks para os projetos da empresa.
Desafios:	Ele precisa tomar decisões informadas sobre quais frameworks adotar para fornecer soluções ágeis.
Expectativas:	Pedro busca uma fonte confiável de informações que possa ajudá-lo a selecionar os frameworks mais adequados para atender às necessidades da empresa.

Perfil 6
Descrição: 	Carlos, o Estudante de ADS em Busca de Especialização
Objetivo: 	Carlos é um estudante de Análise e Desenvolvimento de Sistemas que deseja estudar uma área de especialização em paralelo.
Desafios:	Ele precisa de orientações sobre como equilibrar seus estudos regulares com a especialização desejada.
Expectativas:	Carlos busca uma plataforma que ofereça recursos e orientações para ajudá-lo a se preparar melhor e se manter atualizado para entrar no mercado de trabalho de forma mais competitiva.


<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil Nome </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">...</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>...</td>
</tr>
</tbody>
</table>


## Histórias de Usuários

[Apresente aqui as histórias de usuários que são relevantes para o projeto da solução.]

> **Link Útil**:
> - [Como escrever boas histórias de usuário](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)

[Utilize o modelo de tabela abaixo para apresentar as histórias de usuários.]

|EU COMO... `QUEM`   | QUERO/PRECISO ... `O QUE` |PARA ... `PORQUE`                 |
|--------------------|---------------------------|----------------------------------|
| ...                | ...                       | ...                              |
| ...                | ...                       | ...                              |

## Requisitos do Projeto

Os requisitos do projeto foram divididos em duas categorias, requisitos funcionais e requisitos não funcionais.
Requisitos funcionais são problemas ou necessidades que devem ser atendidos pela aplicação por meio de suas funções.
Requisitos não funcionais são aqueles que viabilizam a aplicação ser entregue, são necessários para sua continuidade(manutenção) e especificam a melhor maneira de resolver o problema, geralmente relacionados com a parte de segurança, desempenho, usabilidade e acessibilidade.
Os requisitos foram priorizados em três níveis, ALTA, MÉDIA, BAIXA. Sendo os requisitos de prioridade mais alta, essenciais para a solução do principal problema que a aplicação se propõe a resolver e a de menor prioridade, refinamentos que visam oferecer uma melhor experiência para o usuário.


### Requisitos Funcionais

|   ID   |                                                      Descrição                                                      | Prioridade |
|:------:|:-------------------------------------------------------------------------------------------------------------------:|:----------:|
| RF- 01 | A aplicação deve exibir uma lista de tecnologias para o usuário escolher sobre qual ele quer visualizar o roadmap.  | ALTA       |
| RF- 02 | A aplicação deve exibir de acordo com a tecnologia selecionada pelo usuário, um roadmap com os conteúdos de estudos | ALTA       |
| RF- 03 | A aplicação deve permitir realizar pesquisa por tecnologia                                                          | MÉDIA      |
| RF- 04 | A aplicação deve redirecionar cada tópico para um material externo                                                  | MÉDIA      |
| RF-05  | A aplicação deve permitir realizar o cadastro de usuários                                                           | MÉDIA      |
| RF-06  | A aplicação deve permitir a realização de login                                                                     | MÉDIA      |
| RF-07  | A aplicação deve permitir a criação de perfis de estudo vinculados com a conta                                      | MÉDIA      |
| RF-08  | A aplicação deve possuir dois perfis de usuários. Administradores e usuários comuns                                 | BAIXA      |
| RF-09  | A aplicação deve possuir um painel administrativo para gerenciamento/atualização do material                        | BAIXA      |
| RF-10  | A aplicação deve permitir selecionar no roadmap quais tópicos já foram estudados                                    | MÉDIA      |
| RF-11  | A aplicação deve exibir a porcentagem de cada roadmap                                                               | MÉDIA      |
| RF-12  | A aplicação deve permitir avaliar cada roadmap                                                                      | BAIXA      |
| RF-13  | A aplicação deve permitir realizar comentários em cada roadmap para discutir com outros usuários                    | BAIXA      |
| RF-14  | A aplicação deve permitir o envio de feedback ao final de cada roadmap                                              | BAIXA      |


**Prioridade: Alta / Média / Baixa. 

### Requisitos não Funcionais

|   ID   |                                       Descrição                                      | Prioridade |
|:------:|:------------------------------------------------------------------------------------:|:----------:|
| RNF-01 | Acessibilidade e Design Responsivo                                                   | ALTA       |
| RNF-02 | A aplicação deve exibir o roadmap de forma limpa e clara                             | MÉDIA      |
| RNF-03 | A aplicação deve exibir os perfis de estudos salvos em formato de cartões            | MÉDIA      |
| RNF-04 | A aplicação deve estar disponível para acesso à internet                             | ALTA       |
| RNF-05 | A aplicação deve ser compatível com os principais navegadores de internet do mercado | ALTA       |
| RNF-06 | A aplicação deve trabalhar de forma totalmente client-side                           | ALTA       |

**Prioridade: Alta / Média / Baixa. 

