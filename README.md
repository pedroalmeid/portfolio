# Portfólio Estático Spec-Driven (Astro + Svelte + Tailwind)

Este é um projeto de portfólio web de alta performance desenvolvido como um Site Estático Estritamente Validado (Spec-Driven Static Site). Ele foi construído com a finalidade de isolar completamente as fontes de dados semânticas da lógica de apresentação visando máxima velocidade, facilidade de manutenção e indexação perfeita por motores de busca (SEO).

## Propósito do Projeto
O objetivo principal deste projeto é atuar como uma vitrine profissional e acadêmica altamente performática de Daniel Silva, Engenheiro de Software Sênior. 
A arquitetura adota um fluxo de dados unidirecional baseado em esquemas tipados rígidos. Nenhuma informação sobre projetos, publicações ou experiências profissionais é escrita de forma rígida (*hardcoded*) nas páginas. Toda informação é mantida em coleções locais em formatos estruturados como Markdown (para artigos com conteúdo textual longo) e JSON (para metadados e listagens), validados rigorosamente em tempo de compilação através do Zod.

## Escolhas Tecnológicas e Raciocínio de Arquitetura

### 1. Astro (Static Site Generation & SEO)
- **SSG por Padrão:** Astro pré-renderiza 100% das páginas em arquivos HTML estáticos durante o processo de build. Isso elimina a necessidade de renderização no servidor no momento da requisição ou hidratação pesada no navegador do cliente, reduzindo o tempo de carregamento para quase zero.
- **SEO Impecável:** A ausência de JavaScript desnecessário em tempo de execução garante que mecanismos de indexação (como Googlebot) consigam varrer a estrutura HTML e os metadados instantaneamente, maximizando pontuações de performance do Lighthouse.
- **Content Collections:** O recurso nativo do Astro para gerenciar conteúdos locais nos permite manter arquivos Markdown e JSON tipados com TypeScript rigoroso e validados em tempo real com Zod schemas.

### 2. Svelte (Ilhas de Interatividade)
- **Island Architecture:** A maior parte do portfólio é composta por puro HTML e CSS estático. Para qualquer componente dinâmico ou interativo complexo que venha a ser desenvolvido futuramente no diretório `src/components/svelte/`, o Astro isola essa lógica dentro de uma "ilha", carregando e hidratando o JavaScript necessário apenas para aquele componente específico.
- **Compilador Eficiente:** Diferente de frameworks baseados em Virtual DOM (como React), o Svelte compila a interatividade diretamente em pequenas manipulações de DOM nativas e cirúrgicas sem overhead de runtime ou bibliotecas pesadas.

### 3. Tailwind CSS (Aesthetics & Design System)
- **Performance de CSS:** Com o compilador integrado (Tailwind v4 via Vite), as classes de utilitários utilizadas são mapeadas e empacotadas estaticamente no build final sem CSS não utilizado.
- **Tema Customizado e Coesão Visual:** O portfólio usa uma paleta de cores escura e sofisticada, com gradientes lineares neon e efeitos de vidro (*glassmorphism*), garantindo que a interface seja elegante, responsiva e esteticamente premium.

### 4. TypeScript Strict & Zod
- **Compilação Segura:** A configuração rigorosa de TypeScript garante que erros de referência de propriedades ou tipos incompatíveis sejam pegos imediatamente antes da build.
- **Validação de Conteúdo com Zod:** Garante que qualquer entrada de dados nos arquivos JSON ou Markdown esteja em conformidade exata com as regras da aplicação. Por exemplo, se uma data no Markdown de um caso de estudo for mal formatada ou se o JSON do currículo não possuir o array de experiências, a compilação falhará apontando o arquivo incorreto.

---

## Estrutura Rígida do Projeto

O código-fonte segue estritamente a arquitetura de arquivos abaixo:

```text
/
├── .devcontainer/
│   └── devcontainer.json   # Configuração do ambiente isolado (Node.js 22)
├── public/                 # Recursos públicos e assets estáticos estritos
├── src/
│   ├── assets/             # Mídias e imagens locais processáveis
│   ├── content/
│   │   ├── config.ts       # Esquemas de validação Zod (cases e info)
│   │   ├── cases/          # Casos de estudo em Markdown (ex: emotionflow.md)
│   │   └── info/           # Dados em JSON (home, projects, papers, cv, contact)
│   ├── components/
│   │   ├── astro/          # Componentes visuais estáticos do Astro
│   │   │   └── BaseLayout.astro # Template estrutural HTML5 com Nav e Footer
│   │   └── svelte/         # Componentes dinâmicos reativos com Svelte
│   ├── pages/
│   │   ├── index.astro     # Início (Hero + Bio carregada de home.json)
│   │   ├── projetos/
│   │   │   ├── index.astro # Listagem de Casos de Estudo e Repositórios
│   │   │   └── [slug].astro# Visualizador estático individual de casos de estudo
│   │   ├── papers/
│   │   │   └── index.astro # Artigos científicos e publicações (papers.json)
│   │   ├── cv.astro        # Apresentação do currículo de experiências (cv.json)
│   │   └── contato.astro   # Informações de contato e formulário funcional
│   ├── styles/
│   │   └── global.css      # Diretivas do Tailwind CSS e definições globais
│   └── env.d.ts            # Declarações globais de tipos do Astro
├── astro.config.mjs        # Configurações do Astro com integrações
├── tailwind.config.cjs     # Configuração auxiliar do Tailwind CSS
├── package.json            # Manifest de scripts e dependências npm
└── README.md               # Documentação principal
```

---

## Como Executar o Projeto Localmente

### Pré-requisitos
Certifique-se de possuir o **Node.js (versão 22 ou superior)** instalado em sua máquina ou utilize o ambiente pré-configurado do **VS Code Dev Container**.

### Passos para Execução:

1. **Instalar Dependências:**
   ```bash
   npm install
   ```

2. **Iniciar o Servidor de Desenvolvimento:**
   ```bash
   npm run dev
   ```
   *O projeto estará disponível por padrão em: `http://localhost:4321/`*

3. **Gerar a Build Estática de Produção:**
   ```bash
   npm run build
   ```
   *Os arquivos HTML, CSS e JS pré-compilados e validados estarão localizados na pasta `dist/`.*

4. **Visualizar a Build Localmente:**
   ```bash
   npm run preview
   ```
