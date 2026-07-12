---
title: Este próprio portfólio!
description: Portfólio profissional e acadêmico, funcionando de forma extremamente estática, leve e veloz ao pré-compilar conteúdos com Astro, Tailwind CSS e TypeScript
techStack: ["Astro", "Tailwind CSS", "TypeScript", "Zod"]
date: 2026-07-12
repository: https://github.com/pedroalmeid/portfolio
---

# Este próprio portfólio!

Este projeto é o meu repositório de portfólio profissional e acadêmico. Ele serve como uma central para apresentar meu currículo, meus projetos, minhas publicações científicas e minhas informações de contato de forma clara, elegante e performática.

A arquitetura foi pensada para ser moderna, focada em performance e facilidade de manutenção, adotando uma separação semântica rígida onde os dados e conteúdos dinâmicos são totalmente controlados por arquivos JSON e Markdown, enquanto o layout e lógica de apresentação são estruturados no Astro.

---

## 📌 Índice

- [⚡ Funcionalidades Principais](#-funcionalidades-principais)
- [🏗️ Arquitetura e Estrutura de Conteúdo](#️-arquitetura-e-estrutura-de-conteúdo)
- [🛠️ Tecnologias Utilizadas](#️-tecnologias-utilizadas)
- [🚀 Desenvolvimento Local](#-desenvolvimento-local)
- [🤖 Desenvolvimento Assistido por IA](#-desenvolvimento-assistido-por-ia)

---

## ⚡ Funcionalidades Principais

- **Carregamento de Dados Tipado:** Todos os dados locais (currículo, projetos, publicações, dados de contato e sidebar) são validados rigidamente em tempo de compilação por esquemas do Zod, garantindo que alterações de dados não quebrem a interface.
- **Geração de Site Estático (SSG):** Renderização estática completa com hidratação nula de JavaScript por padrão, resultando em performance máxima e tempos de carregamento instantâneos.
- **Design Responsivo e Moderno:** Interface minimalista, elegante e responsiva com Tailwind CSS, adaptando-se perfeitamente a dispositivos móveis e desktops.
- **Casos de Estudo Ricos:** Suporte nativo a Markdown para detalhamento de projetos, permitindo a inclusão de formatação avançada, listas e diagramas (como Mermaid.js).

---

## 🏗️ Arquitetura e Estrutura de Conteúdo

O portfólio adota uma estrutura modular onde o conteúdo é separado do layout:

```text
/src/
├── content/
│   ├── config.ts       # Esquemas de validação Zod para cases e info
│   ├── cases/          # Casos de estudo em Markdown (como este)
│   └── info/           # Dados das páginas estruturados em JSON
├── components/
│   └── astro/          # Componentes de layout (BaseLayout, Sidebar, etc.)
└── pages/              # Páginas e rotas dinâmicas do portfólio
```

Essa separação garante que, para adicionar um novo projeto, atualizar o currículo ou alterar um contato, basta modificar um arquivo JSON ou Markdown correspondente na pasta `src/content/`.

---

## 🛠️ Tecnologias Utilizadas

- **Astro:** Framework moderno para SSG focado em conteúdo e performance.
- **Tailwind CSS:** Para estilização responsiva e ágil.
- **TypeScript & Zod:** Para tipagem estática e validação estrita dos dados estruturados.

---

## 🚀 Desenvolvimento Local

Caso queira clonar ou executar este projeto localmente, siga os passos abaixo:

1. **Instalar dependências:**
   ```bash
   npm install
   ```
2. **Executar o servidor local:**
   ```bash
   npm run dev
   ```
3. **Gerar a build estática:**
   ```bash
   npm run build
   ```

---

## 🤖 Desenvolvimento Assistido por IA

Este portfólio contou com o apoio de inteligência artificial (Antigravity IDE) em seu ciclo de desenvolvimento e manutenção (atuando em pair programming), garantindo agilidade, mas com alta qualidade do código e da arquitetura pensada previamemte.
