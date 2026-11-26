# BookSpace — Biblioteca Digital

## Sobre o projeto

O BookSpace é uma biblioteca digital desenvolvida com React e Vite. O sistema permite visualizar livros, filtrar por gênero, realizar empréstimos, devolver livros, fazer reservas e acompanhar as últimas atividades.

## Tecnologias utilizadas

- React
- Vite
- JavaScript
- Tailwind CSS v4
- shadcn/ui
- HTML

## Funcionalidades

- Catálogo com 10 livros.
- Filtro por gênero literário.
- Empréstimo e devolução de livros.
- Contador de empréstimos.
- Formulário de reserva com validação de nome e e-mail.
- Alternância entre tema claro e escuro.
- Consulta de disponibilidade utilizando Promise e setTimeout.
- Painel com as últimas cinco atividades.

## Organização do projeto

```text
src/
├── components/
│   ├── ui/
│   ├── ActivityPanel.jsx
│   ├── BookCard.jsx
│   ├── BookGrid.jsx
│   ├── BookSearch.jsx
│   ├── FilterBar.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── LoanPanel.jsx
│   └── ReservationForm.jsx
├── data/
│   └── books.js
├── lib/
│   ├── eventBus.js
│   └── utils.js
├── App.jsx
└── index.css
```

## Regras de empréstimo

O sistema permite emprestar somente livros disponíveis. Quando um livro é emprestado, sua disponibilidade é alterada e ele aparece na área de empréstimos. Ao devolver, ele volta a ficar disponível no catálogo. O contador é atualizado automaticamente conforme os empréstimos realizados.

## Funcionamento assíncrono

A consulta de disponibilidade utiliza Promise e setTimeout para simular uma consulta de livros.

- **Call Stack:** executa as funções do JavaScript.
- **Microtasks:** processa tarefas como o callback do `.then()` de uma Promise.
- **Macrotasks:** processa tarefas agendadas pelo setTimeout.

## Padrão Observer

O projeto utiliza o padrão Observer por meio do arquivo `eventBus.js`.

A função `subscribe` registra os componentes interessados em receber atualizações. A função `emit` envia uma atividade para os componentes inscritos.

O `ActivityPanel` utiliza useEffect para se inscrever nos eventos e cancelar a inscrição quando o componente é desmontado.

## Como executar o projeto

Instale as dependências:

```bash
npm install
```

Inicie o servidor:

```bash
npm run dev
```

Depois, abra o endereço indicado pelo Vite no terminal.

## Diagrama do Observer

```mermaid
flowchart TD
    A[App] --> B[eventBus]
    C[ReservationForm] --> D[emit]
    E[Emprestimos e devolucoes] --> D
    D --> B
    B --> F[subscribe]
    F --> G[ActivityPanel]
```

## Capturas de tela

### Versão desktop

![Biblioteca Digital no desktop](./screenshots/desktop.png)

### Versão mobile

![Biblioteca Digital no celular](./screenshots/mobile.png)

### Tema escuro

![Biblioteca Digital no tema escuro](./screenshots/dark.png)

## Autor

Desenvolvido como atividade acadêmica de desenvolvimento web.