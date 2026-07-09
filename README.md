# Portfólio Estático — Pedro José

Este é o repositório do portfólio pessoal e acadêmico de Pedro José Campos de Almeida, estudante de Ciência da Computação na Universidade Federal de Juiz de Fora (UFJF) e pesquisador em sistemas distribuídos e compiladores.

O projeto adota uma arquitetura estática moderna focada em performance, separação semântica rígida (com dados controlados por arquivos JSON e Markdown validados via Zod) e design minimalista fiel aos protótipos Figma.

---

## Tecnologias Utilizadas

- **Astro (v7):** Framework para geração de sites estáticos (SSG) rápidos e focados em conteúdo com hidratação nula de JavaScript desnecessário.
- **Tailwind CSS (v4):** Utilização de estilos utilitários de alta performance empacotados pelo compilador Vite.
- **@lucide/astro:** Biblioteca oficial de ícones modernos baseada no Lucide para Astro.
- **TypeScript & Zod:** Validação estrita de todos os dados JSON e Markdown locais em tempo de compilação.
- **Mermaid.js:** Injeção client-side assíncrona para renderizar diagramas técnicos em casos de estudo.

---

## Estrutura do Projeto

```text
/
├── public/                 # Assets públicos e arquivos não processados
├── src/
│   ├── assets/             # Mídias e imagens (avatar, etc.)
│   ├── content/
│   │   ├── config.ts       # Esquemas de validação Zod (cases e info)
│   │   ├── cases/          # Casos de estudo em Markdown (minic, raft, etc.)
│   │   └── info/           # Dados em JSON (home, projects, papers, cv, contact)
│   ├── components/
│   │   └── astro/          # Componentes estruturais e BaseLayout
│   ├── pages/
│   │   ├── index.astro     # Início (Hero + Sobre)
│   │   ├── cv.astro        # Currículo com timeline interativa
│   │   ├── papers.astro    # Publicações científicas e artigos
│   │   ├── contato.astro   # Lista minimalista de contatos
│   │   └── projetos/
│   │       ├── index.astro # Listagem unificada de projetos
│   │       └── [slug].astro# Casos de estudo detalhados com diagramas Mermaid
│   └── styles/
│       └── global.css      # Configuração global de temas e CSS
├── astro.config.mjs        # Configurações do Astro
├── package.json            # Scripts e dependências npm
└── README.md               # Documentação principal
```

---

## Desenvolvimento Local

### Pré-requisitos
- Node.js (versão 22 ou superior)

### Instruções

1. **Instalar dependências:**
   ```bash
   npm install
   ```

2. **Executar o servidor local de desenvolvimento:**
   ```bash
   npm run dev
   ```
   *Abra em seu navegador: `http://localhost:4321/`*

3. **Gerar a build estática de produção:**
   ```bash
   npm run build
   ```
   *Os arquivos otimizados e validados serão gerados no diretório `dist/`.*
