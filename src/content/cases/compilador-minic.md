---
title: "Compilador MiniC"
description: "Compilador completo para um subconjunto de C: análise léxica, sintática, semântica e geração de código LLVM IR. Suporta funções, ponteiros e arrays."
techStack: ["C", "Flex", "Bison", "LLVM"]
repository: "https://github.com/pedroalmeid/compilador-minic"
date: 2024-06-15
---

## Visão Geral

O MiniC é um compilador completo para um subconjunto da linguagem C, desenvolvido como projeto de pesquisa com o objetivo de explorar os fundamentos de construção de compiladores modernos — da análise léxica à geração de código de máquina via LLVM IR.

O projeto cobre todas as fases clássicas de um compilador, com foco especial em correção semântica e geração de código eficiente.

## Motivação

A maioria dos materiais didáticos sobre compiladores para no nível de geração de código intermediário ou de AST. Este projeto foi motivado pela vontade de fechar o ciclo completamente: receber código-fonte em MiniC e produzir um executável nativo, passando por todas as etapas.

## Arquitetura

O compilador é organizado em fases sequenciais e bem delimitadas:

1. **Análise Léxica:** Varredura utilizando Flex para identificar palavras-chave, operadores e tokens.
2. **Análise Sintática:** Parser sintático construído no Bison gerando a árvore sintática abstrata (AST).
3. **Análise Semântica:** Validação estática de escopo de variáveis e checagem de tipos estritos.
4. **Geração de LLVM IR:** Tradução da AST para código intermediário de baixo nível utilizando a API LLVM.

```c
// Entrada: MiniC
int fib(int n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}
```

```llvm
; LLVM IR gerado
define i32 @fib(i32 %n) {
entry:
  %cmp = icmp sle i32 %n, 1
  br i1 %cmp, label %ret_n, label %rec
ret_n:
  ret i32 %n
rec:
  ; ... chamadas recursivas omitidas
}
```

## Resultados

- 100% de cobertura nos testes de unidade de cada fase
- Compilação correta de programas com recursão, ponteiros e arrays
- Código gerado otimizável com flags -O1 do LLVM

## Aprendizados

O desenvolvimento deste compilador consolidou conceitos complexos de análise léxica e sintática usando Flex e Bison, bem como a manipulação prática da API do LLVM para geração de código intermediário.
