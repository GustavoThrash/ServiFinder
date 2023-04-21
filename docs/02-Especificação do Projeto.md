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
<br>
<br>

<img align="left" src="https://user-images.githubusercontent.com/104217381/233709412-e256888e-af9f-4e93-9244-d063fe893a84.png" width="300px" />
<h3><ins>Ana Paula </h3></ins>
Idade: 26 anos.<br>
Ocupação: Cabeleireira.<br>
Aplicativos:Instagram, Twitter e Facebook

<h3>Motivações</h3> 
Ela está determinada a encontrar um profissional que seja experiente, talentoso e que possa realizar as suas tatuagens dos seus sonhos com perfeição. 

<h3>Frustrações </h3>
Ana tem medo de escolher profissionais não qualificados o suficiente para realizar o desenho que ela tanto deseja. Ela sabe que a escolha do tatuador é uma decisão importante e que pode afetar a qualidade final do trabalho. 
<h3>Hobbies, História </h3>

 Ana Paula é uma mulher jovem e apaixonada por arte. Ela sempre foi fascinada por tatuagens e admira muito a habilidade dos artistas que conseguem criar desenhos incríveis na pele das pessoas. 
 <br>
 <br>


## Histórias de Usuários

A partir da compreensão do dia a dia das personas identificadas para o projeto, foram registradas as seguintes histórias de usuários.

|EU COMO... `PERSONA`| QUERO/DESEJO ... `O QUE`                |PARA ... `PORQUE`                 |
|--------------------|---------------------------------------------------|----------------------------------------|
|José da Silva       | Quero alcançar novos clientes através da internet.| Aumentar a minha renda.                |
|Maria da Silva|Encontrar profissionais confiáveis e comprometidos | Realizar seus projetos de construção e pintura, e continuar transformando sua casa em um lar mais aconchegante e acolhedor para sua família. |
|Luiza Santos        |Ampliar sua base de clientes e atrair pessoas que ainda não a conhecem para seu estúdio de tatuagem. |Crescer ainda mais em sua carreira e aumentar a sua renda.| Realizar as suas tatuagens com perfeição.|
|José da Silva  |Poder mostrar os seus trabalhos anteriores através de um portfólio bem apresentado.| Transmitir confiança aos seus novos clientes.|
|Ana Paula | Encontrar profissionais que sejam experientes, talentosos e que possam a impressionar com a sua arte.|Realizar as suas tatuagens com perfeição.|
|José da Silva|Poder mostrar os seus trabalhos anteriores através de um portfólio bem apresentado.|Transmitir confiança aos seus novos clientes.|
|Ana Paula|Acessar Portfólios de profissionais bem qualificados|Ter mais confiança no momento de contratar alguém.|
<br>
<br>
## Requisitos
O escopo funcional do projeto é definido por meio dos requisitos funcionais que descrevem as possibilidades interação dos usuários, bem como os requisitos não funcionais que descrevem os aspectos que o sistema deverá apresentar de maneira geral. Estes requisitos são apresentados a seguir.

### Requisitos Funcionais

|  &ensp;   ID  &ensp;   | Descrição do Requisito  | Prioridade |
|------------|-----------------------------------------|----|
| RF-01 | Cadastro de usuários: permitir que os usuários/prestador de serviço criem uma conta, inserindo informações pessoais, de contato e de pagamento. | ALTA | 
| RF-02 | Acesso do prestador de serviços: permitir que os prestadores de serviços criem e gerenciem seus próprios perfis, adicionem serviços, certificações e portfólios, especifiquem horários e localizações de disponibilidade, gerenciem agendamentos e interajam com clientes por meio do site/whatsapp. ALTA|
| RF-03 | Pesquisa de serviços: permitir que os usuários pesquisem serviços com base em suas necessidades, como localização, tipo de serviço, preço e avaliações de outros usuários.| ALTA |
|  RF-04  | Contratação de serviços: permitir que os usuários contratem serviços diretamente pelo site, incluindo o pagamento online e o agendamento de serviços.| ALTA |
|  RF-05  | Comunicação direta entre usuários: permitir que os usuários se comuniquem diretamente por meio de um sistema de mensagens integrado ao site para discutir detalhes dos serviços contratados.| ALTA |
|  RF-06  | O site deve permitir visualizar as informações de contatos do mantenedor do site.| BAXA |
|  RF-07  | Integração de mídias sociais: permitir que os usuários compartilhem serviços e avaliações em suas redes sociais, aumentando a visibilidade do site e atraindo mais usuários.| BAIXA |
|  RF-08  | Histórico de transações: permitir que os usuários visualizem um histórico de transações e de serviços contratados.| BAIXA |
|  RF-09  | Suporte ao cliente: fornecer suporte ao cliente por meio de chat, telefone ou e-mail, para ajudar os usuários em caso de problemas ou dúvidas.| BAIXA |
|  RF-10  | Comentários e classificações: permitir que os usuários deixem comentários e classifiquem os prestadores de serviços, para que outros usuários possam utilizar essas informações na seleção de um prestador.| BAIXA |
|  RF-11  | Gerenciamento de agendamentos: permitir que os usuários gerenciem seus agendamentos de serviços, visualizando datas, horários e locais agendados, bem como possibilitando a edição e cancelamento.| BAIXA |
<br>
<br>

### Requisitos não Funcionais
A tabela a seguir apresenta os requisitos não funcionais que o projeto deverá atender.

|&ensp; ID  &ensp;    | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-01| Segurança: garantir que o site seja seguro e protegido contra ameaças, como ataques de hackers, roubo de informações pessoais ou financeiras. | ALTA | 
|RNF-02| Usabilidade: garantir que o site seja fácil de usar e acessível, com uma interface clara e intuitiva e uma boa experiência do usuário.|  ALTA | 
|RNF-03| Manutenção: garantir que o site possa ser facilmente mantido e atualizado, com um sistema eficiente de gerenciamento de conteúdo e uma boa documentação para desenvolvedores.|  MÉDIA | 
|RNF-04| O site deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge)|  ALTA |
<br>
Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:
<br>
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

As questões que limitam a execução desse projeto e que se configuram como obrigações claras para o desenvolvimento do projeto em questão são apresentadas na tabela a seguir.


|&ensp; ID &ensp;  | Restrição                                             |
|-------|-------------------------------------------------------|
|RE-01| Tecnologia: restrições tecnológicas, como a escolha de plataformas ou frameworks específicos, podem afetar o desenvolvimento e a manutenção do site. |
|RE-02| Integrações: limitações impostas por outros sistemas com os quais o site deve se integrar, como serviços de pagamento online ou APIs externas.|
|RE-03| Prazo: um prazo apertado pode limitar o tempo disponível para o desenvolvimento e teste do site.|

Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
