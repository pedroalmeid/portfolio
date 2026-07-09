---
title: "Compilador MiniC"
description: "Compilador completo para um subconjunto de C: análise léxica, sintática, semântica e geração de código LLVM IR. Suporta funções, ponteiros e arrays."
techStack: ["C", "Flex", "Bison", "LLVM"]
repository: "https://github.com/pedroalmeid/compilador-minic"
date: 2024-06-15
---

# Compilador MiniC

O Compilador MiniC é um compilador completo projetado para traduzir um subconjunto da linguagem C em representação intermediária LLVM (LLVM IR). O compilador cobre todas as fases principais de compilação, desde a varredura inicial até a geração de código final.

## Fases de Implementação

1. **Análise Léxica (Flex):** Varredura de tokens, gerenciamento de literais e manipulação de erros sintáticos preliminares.
2. **Análise Sintática (Bison):** Parser baseado em LALR(1) para construção da árvore sintática abstrata (AST) a partir das regras de gramática da linguagem.
3. **Análise Semântica:** Verificação estática de tipos, inferência básica e validação de escopos de funções, parâmetros e variáveis.
4. **Geração de Código (LLVM IR):** Tradução da AST para código intermediário de baixo nível utilizando a API LLVM, gerando código intermediário otimizado para posterior compilação nativa.

## Funcionalidades Suportadas

- Definições e chamadas de funções aninhadas.
- Estruturas de controle padrão (if/else, loops while).
- Ponteiros, referências e aritmética de ponteiros básica.
- Alocação e acesso de arrays unidimensionais e multidimensionais.
