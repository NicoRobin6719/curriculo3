# Sistema de Currículos

Este projeto é um sistema de gestão de currículos construído com **Next.js 16** e **React 19**, com interface em **Tailwind CSS**.

O objetivo do projeto é permitir que o usuário:

- veja uma lista de currículos cadastrados
- crie um novo currículo via formulário
- visualize detalhes de cada currículo
- mantenha os dados salvos no navegador usando `localStorage`

## Tecnologias usadas

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- React Icons
- localStorage para persistência de dados no cliente

## Estrutura principal

- `src/app/page.tsx`: página inicial do sistema
- `src/app/sistema/paginas/curriculos/page.tsx`: lista de currículos
- `src/app/sistema/paginas/curriculos/novo/page.tsx`: formulário para cadastrar novo currículo
- `src/hooks/useCurriculos.ts`: hook customizado para carregar, adicionar e salvar currículos no `localStorage`
- `src/app/data/curriculos.ts`: dados iniciais padrão de currículos

## Como executar

Instale as dependências e rode o servidor de desenvolvimento:

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000` para abrir o sistema no navegador.

## Nota

O projeto funciona localmente no navegador; não há backend persistente. Todos os currículos são armazenados no `localStorage` do cliente.