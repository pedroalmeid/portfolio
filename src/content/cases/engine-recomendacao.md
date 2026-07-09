---
title: "Engine de Recomendação"
description: "Sistema de recomendação híbrido combinando filtragem colaborativa e content-based para uma plataforma acadêmica com 50k usuários."
techStack: ["Python", "scikit-learn", "FastAPI", "PostgreSQL"]
repository: "https://github.com/pedroalmeid/recommendation-engine"
date: 2023-09-10
---

## Visão Geral

Uma engine de recomendação de alto desempenho construída para sugerir artigos científicos e tópicos de pesquisa de forma personalizada para pesquisadores e alunos em uma plataforma universitária.

O sistema utiliza técnicas híbridas combinando filtragem colaborativa (baseada no comportamento de leitura dos usuários) e filtragem baseada em conteúdo (processamento de linguagem natural nos resumos de artigos).

## Arquitetura

O backend foi projetado utilizando microserviços em FastAPI integrados a uma base PostgreSQL com extensões vetoriais para indexação e cálculo de similaridade de cosseno veloz.

## Resultados

- Aumento de **32%** na taxa de cliques (CTR) nas recomendações personalizadas.
- Resposta de inferência de recomendação abaixo de **50ms** por usuário utilizando cache redis.
- Processamento eficiente de embeddings textuais integrando scikit-learn e embeddings pré-treinados.
