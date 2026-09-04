# 📁 Unidade 1 — Desenvolvimento de Single Page Application (SPA)

Este diretório contém os estudos práticos e o primeiro laboratório focado no desenvolvimento de uma **Single Page Application (SPA)** utilizando **React.js**. O objetivo do projeto é consolidar os fundamentos do ecossistema front-end moderno, consumo de APIs externas de forma isolada e o roteamento client-side.

---

## 🎬 Projeto Prático: Movies SPA

A aplicação principal desta unidade é o **Movies SPA**, um painel que se conecta diretamente aos servidores do **The Movie Database (TMDB)** para renderizar e gerenciar catálogos de cinema.

### 🚀 Funcionalidades Implementadas
* **Consumo de API Assíncrono:** Integração robusta com os serviços REST do TMDB.
* **Listagem Dinâmica:** Renderização dos 20 filmes mais populares do momento em tempo real.
* **Internacionalização Base:** Configuração de parâmetros para retorno de dados estritamente em português (`pt-BR`).
* **Client-side Routing:** Sistema de rotas integrado preparando o terreno para telas de detalhes.

---

## 🏛️ Decisões Arquiteturais (ADR Briefing)

Como parte dos entregáveis da pós-graduação em engenharia de software, o projeto foi estruturado seguindo boas práticas de modularidade e desacoplamento:

1. **Separação de Conceitos (SoC) com `src/config/http.jsx`**:
   As instâncias do HTTP Client (`Axios`) foram completamente isoladas das regras de interface. A URL base e os cabeçalhos globais ficam centralizados em um único ponto de configuração.
2. **Camada de Serviço (`src/services/`)**:
   As páginas/views não conhecem as regras de negócio ou rotas internas da API. Elas apenas invocam funções especializadas (como `getPopularMovies`), promovendo reuso e manutenabilidade.
3. **Segurança de Credenciais via Variáveis de Ambiente (`.env.local`)**:
   Seguindo os padrões do **12-Factor App**, chaves de acesso e o *API Read Access Token (v4 Bearer)* trafegam estritamente ocultos e injetados pelo ecossistema do Vite, mitigando vazamentos no Git.
4. **Desestruturação Eficiente de Dados**:
   Utilização de *Object Destructuring* no fluxo de resposta das Promises (`.then(({ data }) => ...)`), reduzindo a verbosidade do código e extraindo cirurgicamente os payloads necessários.

---

## 🛠️ Tecnologias e Ferramentas Empregadas

* **Core:** React.js (com ecossistema de hooks: `useState`, `useEffect`)
* **Tooling & Build:** Vite (Provendo carregamento ultrarrápido de módulos em desenvolvimento)
* **HTTP Client:** Axios (Configurado com interceptores básicos e headers estáticos)
* **API Engine:** The Movie Database REST API (v3/v4 Hybrid)

---

## 🏃‍♂️ Como Executar o Projeto Localmente

1. Navegue até a pasta do projeto React:
   ```bash
   cd movies-spa
   ```
2. Instale as dependências mapeadas no `package.json`:
   ```bash
   npm install
   ```
3. Crie seu arquivo de credenciais `.env.local` na raiz de `movies-spa/` e insira o seu token:
   ```env
   VITE_TMDB_API_TOKEN=seu_access_token_v4_aqui
   ```
4. Inicialize o servidor de desenvolvimento local do Vite:
   ```bash
   npm run dev
   ```
5. Abra o endereço indicado no terminal (geralmente `http://localhost:5173`) no seu navegador.

---
[⬅️ Voltar para a Disciplina 01](../README.md)
