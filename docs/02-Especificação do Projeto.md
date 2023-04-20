# Especificações do Projeto

A definição exata do problema e os pontos mais relevantes a serem tratados neste projeto foi consolidada com a participação dos usuários em um trabalho de imersão feita pelos membros da equipe a partir da observação dos usuários em seu local natural e por meio de entrevistas. Os detalhes levantados nesse processo foram consolidados na forma de personas e histórias de usuários.

## Personas

As personas levantadas durante o processo de entendimento do problema são apresentadas na Figuras que se seguem. 

<img align="left" src="https://user-images.githubusercontent.com/104217381/233236108-a923953f-0e85-485c-9013-3b88799ad5a8.png"  width="300px" />

<h3><ins> José da Silva </ins></h3>

Idade: 42 anos 
<p>Ocupação: Pedreiro</p> 
Aplicativos: Instagram e Facebook 

<h3>Motivações</h3> 
Quer alcançar novos clientes através da internet para aumentar a sua renda. 

<h3>Frustrações </h3>
Tem dificuldade de encontrar clientes, e de mostrar os seus trabalhos anteriores para os interessados nos seus serviços. 

<h3>Hobbies, História </h3>
<p>José da Silva é um pedreiro experiente, com mais de 10 anos de experiência na área da construção civil. Ele é conhecido por ser um profissional honesto, dedicado e sempre disposto a ajudar seus clientes a realizar seus sonhos de construção ou reforma. </p>

<br>

<img align="left" src="https://user-images.githubusercontent.com/104217381/233237329-c9e2e53e-6376-4f3b-a0cc-0bc22d111493.png" width="300px" />

<h3><ins>Maria da Silva </h3></ins>

Idade: 28 
<p>Ocupação: Dona de Casa</p> 
Aplicativos: Instagram e Facebook 

<h3>Motivações</h3> 
Busca de profissionais confiáveis e comprometidos em atender suas expectativas. 

<h3>Frustrações </h3>
Maria já teve experiências negativas no passado, com pedreiros e pintores que não entregaram o serviço conforme o combinado, causando prejuízos financeiros e emocionais. 

<h3>Hobbies, História </h3>
<p>Maria da Silva é uma dona de casa dedicada e organizada, que vive em um bairro tranquilo da cidade com sua família. </p>

<br>
<img align="left" src="https://user-images.githubusercontent.com/104217381/233419884-188162ec-ac4c-4e25-a4d3-63c0edd75b81.png" width="300px" />

<h3><ins>Luiza Santos </h3></ins>

Idade: 29 anos 
<p>Ocupação: Tatuadora. </p>
Aplicativos: Instagram, Facebook e OLX.

<h3>Motivações</h3> 
Atrair novos clientes para seu estúdio através da internet. 

<h3>Frustrações </h3>
Luiza percebeu que, para crescer ainda mais em sua carreira, é preciso ampliar sua base de clientes e atrair pessoas que ainda não a conhecem para seu estúdio de tatuagem. 

<h3>Hobbies, História </h3>
Luiza Santos é uma tatuadora talentosa e experiente, que trabalha há mais de 7 anos na área. Ela é conhecida por sua técnica apurada, seu cuidado com a higiene e seu  estilo único de criação. 

<br>


Ana Paula 

Idade: 26 anos 

Ocupação: Cabeleireira  

Aplicativos: 

Instagram 

Facebook 

Twitter 

Motivações 

Ela está determinada a encontrar um profissional que seja experiente, talentoso e que possa realizar as suas tatuagens dos seus sonhos com perfeição. 

Frustrações 

Ana tem medo de escolher profissionais não qualificados o suficiente para realizar o desenho que ela tanto deseja. Ela sabe que a escolha do tatuador é uma decisão importante e que pode afetar a qualidade final do trabalho. 

Hobbies, História 

 Ana Paula é uma mulher jovem e apaixonada por arte. Ela sempre foi fascinada por tatuagens e admira muito a habilidade dos artistas que conseguem criar desenhos incríveis na pele das pessoas. 


## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário cadastre tarefas | ALTA | 
|RF-002| Emitir um relatório de tarefas no mês   | MÉDIA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
