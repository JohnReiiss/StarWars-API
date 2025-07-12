# 🚀 StarWars API

Uma API simples e educativa feita em **Node.js** com **Express** e **MongoDB** utilizando **Mongoose**, que permite criar, listar, atualizar e deletar filmes do universo Star Wars.

<div align="center"> 
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js">
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB">
  <img src="https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logoColor=white" alt="Mongoose">
  <img src="https://img.shields.io/badge/Insomnia-4000bf?style=for-the-badge&logo=insomnia&logoColor=white" alt="Insomnia">
</div>

---

## ✨ Funcionalidades

- ✅ Listar todos os filmes
- ✅ Criar filmes (um ou vários via JSON array)
- ✅ Atualizar filmes por ID
- ✅ Deletar filmes por ID
- ✅ Totalmente testável via Insomnia/Postman

---

## 📦 Tecnologias Utilizadas

- **Node.js** – ambiente de execução JavaScript
- **Express.js** – framework para criação de rotas e middlewares
- **MongoDB** – banco de dados NoSQL
- **Mongoose** – ODM para modelagem e comunicação com MongoDB
- **Insomnia** – para testar endpoints da API

---

## 📊 Diagrama de Funcionamento da API

+----------------------+            +-------------------------+
|   Cliente (Insomnia) |  <------>  |  API Express (index.js) |
+----------------------+            +-------------------------+
        |                                 |
        | 1. GET /                        | --------------------------+
        |-------------------------------->|                          |
        |                                 | Busca todos os filmes    |
        |                                 | no MongoDB               |
        |                                 |                          |
        |<--------------------------------|<-------------------------+
        |     Lista de filmes (JSON)      |
        |
        | 2. POST /                       | --------------------------+
        |-------------------------------->|                          |
        |  (Filme único ou array JSON)    | Cria um ou mais filmes   |
        |                                 | no MongoDB               |
        |                                 |                          |
        |<--------------------------------|<-------------------------+
        |      Filme(s) criado(s)         |
        |
        | 3. PUT /:id                     | --------------------------+
        |-------------------------------->|                          |
        |     Atualiza filme por ID       | Verifica e atualiza dados|
        |                                 |                          |
        |<--------------------------------|<-------------------------+
        |      Filme atualizado           |
        |
        | 4. DELETE /:id                  | --------------------------+
        |-------------------------------->|                          |
        |     Remove filme por ID         | Apaga registro do MongoDB|
        |                                 |                          |
        |<--------------------------------|<-------------------------+
        |      Filme deletado             |

## 📁 Estrutura da API 

starwars-api/
│
├── node_modules/
├── src/
│ └── index.js # Arquivo principal com rotas da API
├── package.json
├── package-lock.json

## 📄 Requisições

### 🔍 GET `/`

Retorna todos os filmes cadastrados.

---

### ➕ POST `/`

Cria **um ou mais** filmes. Exemplo de **objeto único**:

```json
{
  "title": "Star Wars: Episode I – The Phantom Menace",
  "description": "...",
  "image_url": "https://...",
  "trailer_url": "https://..."
}
```
## Ou um array com múltiplos filmes:
```[
  {
    "title": "...",
    "description": "...",
    "image_url": "...",
    "trailer_url": "..."
  },
  {
    "title": "...",
    "description": "...",
    "image_url": "...",
    "trailer_url": "..."
  }
]
```

## 📝 PUT /:id
Atualiza um filme existente com base no id.
## ❌ DELETE /:id
Remove um filme do banco de dados pelo id.

## 🚀 Como Rodar Localmente
1. Clone o repositório:
```git clone https://github.com/JohnReiiss/starwars-api.git```

2. Acesse o diretório:
```cd starwars-api```

3. Instale as dependências:
```npm install```

4. Inicie o servidor:
```node src/index.js```
A API estará rodando em http://localhost:3000

## 🌐 Testando com Insomnia
Utilize o Insomnia para testar as rotas da API (GET, POST, PUT, DELETE). Você pode importar os endpoints manualmente ou criar seu workspace com base nos caminhos acima.

## 🛡️ Segurança (Recomendação)
1-Crie um arquivo .env para armazenar a string de conexão do MongoDB.
2-Utilize dotenv para carregar variáveis de ambiente.
3-Remova dados sensíveis (como o usuário e senha do MongoDB Atlas) do código-fonte.

## 📄 Licença
Este projeto está sob a licença MIT. Sinta-se livre para usar e modificar!

## 📋 Regras de Negócio

### 🟢 Criação de Filmes (`POST /`)

- A API aceita **um único filme** (objeto JSON) ou **vários filmes de uma vez** (array de objetos).
- Cada filme deve conter os seguintes campos:
  - `title` (String)
  - `description` (String)
  - `image_url` (String)
  - `trailer_url` (String)
- Não há validação obrigatória no momento, mas todos os campos devem ser fornecidos para que o objeto seja completo.

---

### 🟣 Listagem de Filmes (`GET /`)

- Retorna todos os filmes armazenados no banco de dados.
- Não requer parâmetros nem corpo na requisição.
- A resposta é um array de objetos JSON com os dados de cada filme.

---

### 🟠 Atualização de Filmes (`PUT /:id`)

- Requer o `ID` do filme como parâmetro na URL.
- Atualiza os campos `title`, `description`, `image_url` e `trailer_url`.
- Retorna o objeto do filme já atualizado.
- Se o ID não existir, retorna `null`.

---

### 🔴 Remoção de Filmes (`DELETE /:id`)

- Remove um filme com base no seu `ID`.
- Se o ID existir, retorna o objeto removido.
- Caso o ID não seja encontrado, retorna `null`.

---

### ✅ Resumo

| Operação     | Rota       | Ação                              |
|--------------|------------|-----------------------------------|
| Listar       | `GET /`    | Retorna todos os filmes           |
| Criar        | `POST /`   | Cria um ou vários filmes          |
| Atualizar    | `PUT /:id` | Atualiza um filme existente       |
| Deletar      | `DELETE /:id` | Remove um filme pelo ID       |


<div align="center"> <p>Feito com ❤️ por <a href="https://github.com/JohnReiiss">Johnatan Reis</a></p> <p>🔗 <strong>Link do repositório</strong>: <a href="https://github.com/JohnReiiss/starwars-api" target="_blank">github.com/JohnReiiss/starwars-api</a></p> </div>

