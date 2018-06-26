# Leitura-app

Para instalar e começar a usar o leitura-app, rode os seguintes comandos no terminal dentro do diretório:

* `npm install`
* `npm start`

## Usando o aplicativo.

### Tela principal

#### Menu
No header menu existe a possibilidade de selecionar todos os posts, selecionar a categoria ou criar um novo post.

Selecionando a categoria ele filtra os posts de acordo com a categoria selecionada.

#### Filtro de posts
É possivel filtar os posts através de 3 opções:

* Mais recente 
* Mais relevante (_Mais votos recebidos pelo sistema de votação_)
* Mais comentários

#### Lista de posts
Na tela principal é listado todos os posts com as informações principais: 

* Categoria
* Título
* Autor
* Data de criação
* Votação
* Contagem de comentários
* Botões para exclusão e edição

### Post Detalhado
Clicando no título do post abre a tela do post detalhado que além das informações principais exibe:

* Mensagem do post
* Comentários
* Ferramenta para adição de comentários

### Comentários
Cada comentário possui a opção de editar, excluir ou votar no mesmo e exibe as seguintes informações:

* Autor
* Data de criação/edição
* Mensagem do comentário

### Novo post
Clicando na opção de Novo Post no menu é chamado um Modal com um formulário com os seguintes parametros:

* Categoria
* Título
* Mensagem do post
* Autor

Para ser preenchidos e submetido através do botão *Postar*
Após a mensagem de confirmação a lista de post atualiza instantaneamente.

### Edição de post
Clicando na opção de editar ele abre uma tela com os campos:

* Título
* Mensagem do post
* Autor

Já preenchidos podendo ser alterado e submetido através do botão *Editar*
Após a mensagem de confirmação o post atualiza instantaneamente.

### Edição de comentário
Clicando na opção de editar ele abre uma tela com os campos:

* Mensagem do comentário
* Autor

Já preenchidos podendo ser alterado e submetido através do botão *Comentar*
Após a mensagem de confirmação o comentário atualiza instantaneamente.

### Sistema de votação do post/comentário
O sistema de votação consiste em um icone positivo e outro negativo representados por uma mão com o polegar pra cima ou pra baixo respectivamente e um contador ao centro que faz a contagem dos votos.


















