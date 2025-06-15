# 📚 Book API

Sistema de gerenciamento de livros com autenticação JWT, desenvolvido com **NestJS**, **TypeORM** e **Docker**.

---

## 🚀 Tecnologias utilizadas

- [NestJS](https://nestjs.com/) — Framework Node.js
- [TypeORM](https://typeorm.io/) — ORM para Node.js
- [PostgreSQL](https://www.postgresql.org/) — Banco de dados relacional
- [JWT](https://jwt.io/) — Autenticação com JSON Web Tokens
- [Docker](https://www.docker.com/) — Contêineres

---

## 📁 Estrutura de pastas

```
project-book/
├── src/
│   ├── auth/           # Módulo de autenticação (login, JWT, estratégia)
│   ├── books/          # Módulo de livros (CRUD protegido)
│   ├── users/          # Módulo de usuários
│   ├── app.module.ts   # Módulo principal
│   └── main.ts         # Ponto de entrada
├── .env                # Variáveis de ambiente
├── docker-compose.yml  # Configuração Docker
├── Dockerfile          # Imagem da aplicação
├── tsconfig.json       # Configuração TypeScript
└── README.md           # Este arquivo
```

---

## ⚙️ Como rodar o projeto

### Pré-requisitos

- Node.js (v18+)
- Docker e Docker Compose

### Passos

1. **Clone o repositório**

```bash
git clone https://github.com/seu-usuario/project-book.git
cd project-book
```

2. **Configure o `.env`**

Crie um arquivo `.env` com o seguinte conteúdo:

```env
DATABASE_HOST=db
DATABASE_PORT=5432
DATABASE_USER=postgres
DATABASE_PASSWORD=postgres
DATABASE_NAME=bookdb
JWT_SECRET=supersegredo
JWT_EXPIRES_IN=3600s
```

3. **Suba a aplicação com Docker**

```bash
docker-compose up --build
```

A aplicação estará disponível em `http://localhost:3000`.

---

## 🧪 Endpoints principais

### 📘 Books

| Método | Rota        | Descrição               | Protegido? |
|--------|-------------|-------------------------|------------|
| GET    | `/books`    | Lista todos os livros   | ✅ Sim      |
| POST   | `/books`    | Cria um novo livro      | ✅ Sim      |
| GET    | `/books/:id`| Retorna um livro        | ✅ Sim      |
| PUT    | `/books/:id`| Atualiza um livro       | ✅ Sim      |
| DELETE | `/books/:id`| Remove um livro         | ✅ Sim      |

### 👤 Users

| Método | Rota       | Descrição               |
|--------|------------|-------------------------|
| POST   | `/users`   | Cria um novo usuário    |
| GET    | `/users`   | Lista usuários (opcionalmente protegido) |

### 🔐 Auth

| Método | Rota         | Descrição               |
|--------|--------------|-------------------------|
| POST   | `/auth/login`| Login e retorna JWT     |

---

## 🛡️ Como usar autenticação JWT

Após fazer login com:

```json
POST /auth/login
{
  "email": "user@example.com",
  "password": "senha123"
}
```

Você receberá um token:

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIs..."
}
```

Use este token no header das requisições protegidas:

```
Authorization: Bearer <seu_token>
```

---

## 🧾 Licença

Este projeto está sob a licença MIT.

---

## ✍️ Autor

Desenvolvido por [Lucas Roncon](https://github.com/seu-usuario).