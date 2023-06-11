# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>
Os requisitos para realização dos testes de software são:
⦁	Site publicado na Internet
⦁	Navegador da Internet - Chrome, Firefox ou Edge
⦁	Conectividade de Internet para acesso às plataformas (APISs)

Os testes funcionais a serem realizados no aplicativo são descritos a seguir.

Caso de Teste	CT-01 - Cadastrar no ServiFinder
Requisitos Associados	RF-01 - Cadastro de usuários: permitir que os usuários/prestador de serviço criem uma conta, inserindo informações pessoais, e de contato.
Objetivo do Teste	Verificar se o cadastramento do prestador de serviços está funcionando corretamente.
Passos	1) Acessar o ServiFinder
2) Entrar em Cadastre-se
3) Informar os dados de nome usuário e senha e clicar em cadastrar
Critérios de Êxito	⦁	O Cadastro deve ser Realizado com sucesso
⦁	Após cadastrado o usuário deve conseguir logar na sua conta através da página Login


Caso de Teste	CT-02 - Logar no ServiFinder
Requisitos Associados	RF-02 - O site deve permitir que o usuário faça login na sua conta.
Objetivo do Teste	Verificar se após cadastrado, o usuário consegue logar corretamente no ServiFinder
Passos	1) Acessar o SerVifinder
2) Depois de Devidamente Cadastrado deve ir em ''LOGUIN''
3) Deve digitar usuário e senha e clicar em ''ENTRAR''
Critérios de Êxito	O Usuário depois de clicar em entrar deve ser direcionado para a tela inicial logado, caso digite corretamente usuário e senha, caso digite algo incorreto o site deve apresentar a mensagem de erro.
	

Caso de Teste	CT-03 - Cadastrar Serviços
Requisitos Associados	RF-03 Cadastrar Serviços: permitir que os usuários prestadores de serviços cadastrem os seus serviços na plataforma para que os contratantes possam pesquisar e entrar em contato.
Objetivo do Teste	Verificar se o prestador do serviço ao clicar em prestar serviço seja devidamente redirecionado para a página de cadastro de serviço e possa cadastrar o serviço que deseja prestar.
Passos	1) Acessar o SerVifinder
2) O usuário deve estar logado e clicar em ''PRESTAR SERVIÇO''
3) Na página ''PRESTAR SERVIÇO'', o usuário vai se Deparar a página para preencher os dados do serviço e clicar em ''Cadastrar''
Critérios de Êxito	O serviço depois de cadastrado deve ser encontrado na seção ''CONTRATE'' 
	


Caso de Teste	CT-04 - Pesquisar Serviços
Requisitos Associados	RF-04 Pesquisa de serviços: permitir que os usuários pesquisem serviços com base em suas necessidades.
Objetivo do Teste	Verificar se o usuário consegue pesquisar serviços no ServiFinder.
Passos	1) Acessar o SerVifinder
2) O usuário deve clicar em ''CONTRATE''
3) Na página ''CONTRATE'', o usuário vai se Deparar com 4 ícones referentes aos TIPOS DE SERVIÇOS, o usuário deve então clicar no tipo de serviço que quer contratar.
4) O usuário vai ser redirecionado para a página de pesquisa dos serviços referentes ao tipo escolhido e lá deve pesquisar o serviço de interesse.
Critérios de Êxito	O Usuário depois de clicar em Contrate deve ser direcionado para a tela TIPOS DE SERVIÇOS, Depois deve escolher e clicar em um dos 4 ícones para assim ser redirecionado para a página de pesquisa do serviço desejado.
	



Caso de Teste	CT-05 - Gerenciamento de Serviços Cadastrados
Requisitos Associados	RF-05  Gerenciamento de Serviços Cadastrados : A página inicial de login do prestador de serviços deve exibir os seus serviços cadastrados tendo a opção de editar ou excluir os serviços cadastrados
Objetivo do Teste	Verificar se ao logar no perfil do prestador do serviços apareça para ele os seus serviços cadastrados e as opções de editar e excluir serviços.
Passos	1) Acessar o SerVifinder
2) O usuário deve estar Logado
3) Na página inicial depois de logado o usuário vai se Deparar com os seus serviços cadastrados 
4) Na página inicial com os seus serviços cadastrados o usuário deve clicar em editar caso queria editar alguma informação a respeito do seu serviço, ou deve clicar em excluir caso queira excluir o seu serviço cadastrado.
Critérios de Êxito	O usuário deve conseguir excluir e editar os seus serviços cadastrados na plataforma.





 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
