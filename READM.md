# Sistema de Gerenciamento de Tarefas

## Descrição

API REST desenvolvida em Node.js para gerenciamento de tarefas utilizando arquitetura em 3 camadas (Controller, Service e Repository).

## Tecnologias Utilizadas

* Node.js
* Express
* SQLite
* JWT (JSON Web Token)
* Swagger
* Docker
* Git e GitHub

## Funcionalidades

* Cadastro de usuários
* Login com autenticação JWT
* Cadastro de tarefas
* Listagem de tarefas
* Atualização de tarefas
* Exclusão de tarefas

## Endpoints

### Autenticação

* POST /auth/register
* POST /auth/login

### Tarefas

* GET /tasks
* POST /tasks
* PUT /tasks/:id
* DELETE /tasks/:id

## Executando o Projeto

Instalar dependências:

npm install

Executar em modo desenvolvimento:

npm run dev

## Documentação

Swagger:

http://localhost:3000/api-docs

## Autor

Kaíque Barbosa Ferreira
