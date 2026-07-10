# Portfólio Estático — Pedro José

Este é o meu repositório de portfólio profissional e acadêmico, concentrando meu currículo, meus projetos, publicações e dados de contato com design simples.

O projeto foi construído com uma arquitetura de site estático moderna focada em performance e simplicidade de alterações, com separação semântica rígida (dados controlados por arquivos JSON e Markdown) entre o layout e o conteúdo frequentemente alterado.

---

## Tecnologias Utilizadas

- **Astro (v7):** Framework para geração de sites estáticos (SSG) rápidos e focados em conteúdo com hidratação nula de JavaScript.
- **Tailwind CSS (v4):** Biblioteca de estilos inline.
- **@lucide/astro:** Biblioteca oficial de ícones modernos baseada no Lucide para Astro.
- **TypeScript & Zod:** Validação estrita de todos os dados JSON e Markdown locais em tempo de compilação.
- **Mermaid.js:** Injeção client-side assíncrona para renderizar diagramas em casos de estudo.

---

## Estrutura do Projeto

```text
/
├── public/                 # Assets públicos e arquivos não processados
├── src/
│   ├── assets/             # Mídias e imagens (avatar, etc.)
│   ├── content/
│   │   ├── config.ts       # Esquemas de validação Zod (cases e info)
│   │   ├── cases/          # Casos de estudo em Markdown
│   │   └── info/           # Dados das páginas em JSON
│   ├── components/
│   │   └── astro/          # Componentes estruturais e BaseLayout
│   ├── pages/
│   │   ├── index.astro     # Início (Hero + Sobre)
│   │   ├── cv.astro        # Currículo com timeline
│   │   ├── papers.astro    # Publicações científicas e artigos
│   │   ├── contato.astro   # Lista minimalista de contatos
│   │   └── projetos/
│   │       ├── index.astro # Listagem unificada de projetos
│   │       └── [slug].astro# Casos de estudo detalhados renderizados pelos arquivos md's
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

   _Abra em seu navegador: `http://localhost:4321/`_

3. **Gerar a build estática de produção:**
   ```bash
   npm run build
   ```
   _Os arquivos otimizados e validados serão gerados no diretório `dist/`._
