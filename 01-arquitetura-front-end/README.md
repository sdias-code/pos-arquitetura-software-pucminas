# 🏛️ Disciplina 01 — Arquitetura de Front End (2026)

Este diretório centraliza todos os laboratórios práticos, protótipos e anotações conceituais da disciplina de **Arquitetura de Front End**. O foco desta matéria é entender a evolução das interfaces, padrões de estilização escaláveis, decomposição em micro front-ends e estratégias modernas de renderização e performance.

---

## 📈 Checklist de Conteúdo & Progresso

### 🟢 Unidade 1: Fundamentos, Ecossistema & SPAs
* [ ] **1. Introdução ao Cenário de Front-end**
* [ ] **2. O Perfil Profissional do Arquiteto de Front-end**
* [ ] **3. Áreas de Conhecimento Fundamentais**
* [ ] **4. Como funcionam as Browser Engines**
* [ ] **5. Revisão Crítica: HTML, CSS e Javascript**
* [ ] **6. Análise de Frameworks: Ecossistema Angular**
* [ ] **7. Análise de Frameworks: Ecossistema Vue**
* [ ] **8. Análise de Frameworks: Ecossistema React**
* [ ] **9. Arquitetura Single Page Application (SPA) — Parte 1**
* [ ] **10. Arquitetura Single Page Application (SPA) — Parte 2**
* [ ] **11. Estratégias de Integração de SPAs com APIs externas**
* 📁 **Laboratório Prático:** Aplicação de Listagem de Filmes (SPA) 
  * *Tecnologia:* React.js (inicializado com Vite)
  * *Status:* `[ ⏳ Em Desenvolvimento ]`
  * *Localização do Código:* `./unidade-01-spa/movie-list-react/`


### 🔵 Unidade 2: Arquitetura de CSS, Clean Architecture & Flux
* [ ] **1. Conceitos de Arquitetura de CSS**
* [ ] **2. Metodologia BEM: Block, Element & Modifier**
* [ ] **3. Metodologia OOCSS: CSS Orientado por Objetos**
* [ ] **4. CSS Funcional (Atomic CSS / Tailwind style)**
* [ ] **5. Abordagens de CSS-in-JS**
* [ ] **6. Pré-processadores de CSS no fluxo de build**
* [ ] **7. Ferramentas de Bundlers (Vite, Webpack) e Otimização de Código**
* [ ] **8. Princípios de CLEAN Architecture no Front-end — Parte 1**
* [ ] **9. Princípios de CLEAN Architecture no Front-end — Parte 2**
* [ ] **12. Gerenciamento de Estado Global com Arquitetura Flux**
* [ ] **13. Demonstração Prática da Arquitetura Flux**
* 📁 **Laboratório Prático:** Refatoração da Listagem de Filmes para Arquitetura Modular + Flux
  * *Status:* `[ 📅 Planejado ]`
  * *Localização do Código:* `./unidade-02-css-clean/movie-list-clean-modular/`

### 🟡 Unidade 3: Micro Front-ends, Monorepos & SSR
* [ ] **1. Conceitos e Anatomia de Micro Front-ends (MFE)**
* [ ] **2. Abordagens e Formas de Implementação de MFEs**
* [ ] **3. Integração via Single-SPA (Mergulho Técnico Parte 1)**
* [ ] **4. Integração via Single-SPA (Mergulho Técnico Parte 2)**
* [ ] **5. Integração via Webpack Module Federation (Parte 1)**
* [ ] **6. Integração via Webpack Module Federation (Parte 2)**
* [ ] **7. Orquestração de Micro Front-ends via Funções**
* [ ] **8. Estratégias e Ferramentas de Monorepos**
* [ ] **9. Laboratório Prático de Monorepos**
* [ ] **10. Estratégias de Server-Side Rendering (SSR)**
* [ ] **11. Hidratação e Ciclo de Vida em Aplicações SSR — Parte 2**
* [ ] **12. Casos de Uso e Performance em SSR — Parte 3**
* 📁 **Laboratório Prático:** Setup de Monorepo com Module Federation / Single-SPA
  * *Status:* `[ 📅 Planejado ]`
  * *Localização do Código:* `./unidade-03-microfrontends/module-federation-monorepo/`

### 🔴 Unidade 4: Paradigmas Avançados, Segurança & IA
* [ ] **1. Evolução com Serverless Computing no Front-end**
* [ ] **2. Engenharia de Aplicações PWA (Progressive Web Apps)**
* [ ] **3. O Poder do Web Assembly (Wasm) na Web Moderna**
* [ ] **4. Aspectos Críticos de Segurança em Front-end (XSS, CSRF, CSP)**
* [ ] **5. Uso de Inteligência Artificial para Prototipação de MVPs de Interfaces**
* [ ] **6. Construção Acelerada de Protótipos com Bolt.new**
* 📁 **Laboratório Prático:** PWA Otimizada & Protótipo Bolt
  * *Status:* `[ 📅 Planejado ]`
  * *Localização do Código:* `./unidade-04-avancado/pwa-bolt-prototype/`

---

## 💡 Diário de Bordo & Notas de Aula

*(Dica: Utilize este espaço para consolidar conceitos complexos aprendidos nas aulas teóricas. Isso fixa o conhecimento e enriquece seu portfólio.)*

### 🧠 Browser Engines (Unidade 1)
* Anote aqui insights rápidos sobre o funcionamento de renderização dos navegadores (Gecko, Blink, WebKit), o caminho crítico de renderização (DOM, CSSOM, Render Tree, Layout, Paint).

### 🎨 OOCSS vs BEM vs CSS Funcional (Unidade 2)
* **BEM:** Excelente para componentização estrita e isolamento de escopo manual.
* **OOCSS:** Foco em separar a estrutura (layout) da pele (estilização/visual).
* **CSS Funcional:** Alta velocidade de desenvolvimento e tamanho de bundle previsível.

### 🧩 Micro Front-ends vs Monorepos (Unidade 3)
* **Micro Front-end:** Padrão arquitetural focado na divisão de domínios de negócio no client-side em times independentes.
* **Monorepo:** Estratégia de infraestrutura de código. Não significa micro front-end, mas facilita drasticamente a governança deles compartilhando dependências.

---

[⬅️ Voltar para a Raiz do Repositório](../README.md)
