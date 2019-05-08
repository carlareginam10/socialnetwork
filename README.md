# Rede Social
---
### Objetivo
 Criar uma rede social onde o usuário possa, criar um perfil, interagir com outros usuários através de posts e curtidas. Proporcionar ao usuário uma interface mais amigável e fácil de usar.
Os principais usuários do produto são estudantes e programadores. Descobrimos as necessidades dos usuários conversando com estudantes da área e solicitando que respodessem a uma pesquisa.
Nosso produto serve para que os usuários possam tirar dúvidas, ficar por dentro das atualizações sobre conteúdo da área, interagir e compartilhar conhecimento com a comunidade de programação. 

---
### Como funciona:
Para ter aceso as funcionalidades do produto é necessário realizar um cadastro, que pode ser realizado tanto inserindo um e-mail válido e definindo uma senha, como também fazendo uma autenticação pelo GitHub ou Google.
Depois é necessário realizar a validação da inscrição, acessando o e-mail que é enviado automaticamente para a caixa de e-mail do usuário.
Depois da confirmação, o usuário pode configurar seu perfil, fazer e responder perguntas pertinentes a área, postar conteúdo sobre tecnologia (links, vídeos, materiais), compartilhar e curtir perguntas, posts e respostas. O usuário também pode editar e excluir as mensagens que ele mesmo postar.

---

### Personas:
![Persona 1](public/src/img/persona01.jpg)
![Persona 2](public/src/img/persona02.jpg)
![Persona 3](public/src/img/persona03.jpg)

### Pesquisa:
![grafico 1](public/src/img/pesquisaIdade.PNG)
![grafico 2](public/src/img/pesquisaInteresse.PNG)
![grafico 3](public/src/img/pesquisaConteudo.PNG)
![grafico 4](public/src/img/pesquisaSugestões.PNG)


## roadmap oficial do projeto

#### versão 2.0.0 (previsão agosto/2019)

Funcionalidades:
- chat

#### versão 1.1.0 (em desenvolvimento)

Funcionalidades:
- Regristro de conta com nome, email e senha;
- Filtro por privacidade (público e privado).

#### versão 1.0.0

Funcionalidades implementadas:
- Regristro de conta com email e senha ou com Google ou GitHub;
- Login com email e senha ou com Google ou GitHub;
- Visualizar o feed com o nome do usuário para saber se está logado (em qual conta); 
- Publicar posts sem número de caracteres definidos; 
- Escolher a privacidade do post (público ou privado)
- Editar post;
- Apagar post que postou;
- Dar likes; 
- Vizualizar os like dados;
- Fechar e abrir o navegador e ter a autenticação persistente;
- Deslogar da rede.

A validação dos dados no momento do registro garante que o os dados cadastrados correspondam aos quesitos de formatação e a senha está oculta. 

Foi utilizado o Firebase para autenticação, banco de dados e armazenamento. 
Usamos HTML5, CSS3, Bootstrap 4, JavaScript e Jquery para o desenvolvimento.
