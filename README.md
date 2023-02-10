
# CRUD para blog_api

Neste projeto eu desenvolvi uma API e um banco de dados para a produção de conteúdo para um blog!

Utilizei uma aplicação em Node.js usando o pacote sequelize para fazer um CRUD de posts.

Utilizando endpoints que estarão conectados ao banco de dados seguindo os princípios do REST;

Utilizei a Arquitetura MSC para organizacao do codigo, JWT Json Web Token para a validacao do usuario, Validacoes com Middlewares, Express.



## Stack utilizada

**Back-end:** Node, Express, Sequelize, JWT, MSC, Middlewares


## Instruções de utilização

Recomendo utilizar o [Docker](https://www.docker.com/) para rodar o seu projeto, assim como o [Thunder Client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client) para testar as rotas diretamente no [VSCode](http://vscode.dev).

### Clone o projeto

- Usando [Github-Cli](https://cli.github.com/):
```bash
 gh repo clone WeydsonCristiano/blog-api
```
- Usando SSH:
```bash
  git clone git@github.com:WeydsonCristiano/blog-api.git
```
Após isso, acesse a pasta do projeto:
```bash
cd blog-api
```

### Rodando com Docker

- Faça o docker-compose
```bash
  docker-compose up -d
```

- Acesse o terminal do container em modo iterativo

```bash
  docker exec -it blog_api bash
```

- Instale as dependências

```bash
  npm install
```

- Rode os scripts

```bash
  npm run prestart && npm run seed
```

- Inicie o sistema!
```bash
npm start
```

Verifique se o projeto está rodando acessando http://localhost:3000
## Documentação

Este sistema é apenas o backend de um sistema de blog. As rotas criadas são as relatadas abaixo.

🔑 - Quando este símbolo preceder as instruções, entenda que para acessar a rota, você precisará informar o token no campo "Authorization" do headers da requisição.

### - Rota /login
Faça login mediante envio de um objeto no body da requisição com email e password.

Ao logar com sucesso, você receberá um token de validação do usuário, caso tenha sido bem sucedido.

### - Rota /user
O método Post da rota /user cria um usuário mediante envio de um objeto no body da requisição:
```bash
{
    "displayName": (obrigatório; string >= 8 caracteres),
    "password": (obrigatório; string >= 6 caracteres)
    "email": (obrigatório; string),
    "image": (facultativo; string)
}
```

🔑 O método Get da rota /user busca todos os usuários.

🔑 O método Get da rota /user/1 busca o usuário com id 1.

🔑 O método Delete da rota /user/me apaga sua conta de usuário.

### - Rota /post
🔑 O método Get da rota /post busca todos os posts cadastrados.

🔑 O método Get da rota /post/1 busca o post cadastrado sob id 1.

🔑 O método Get da rota /post/search?q=steve busca posts com título ou content com a palavra "steve".

🔑 O método Post da rota /post recebe um objeto com "title" e "content" no body da requisição.

```bash
{
    "title": "Título do meu post",
    "content": "Texto do meu post"
}
```

🔑 O método Put da rota /post/1 recebe um objeto com "title" e/ou "content" para atualizar o post de id 1.

🔑 O método Delete da rota /post/1 deleta o post de id 1.

Nota: Você só conseguirá editar e deletar o post caso seja o autor (e esteja logado na conta).