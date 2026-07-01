
# TRABALHO_AUTOMACAO

Projeto de automação de testes para o módulo **Serviço de Pagamento**, utilizando **Node.js**, **Playwright** e integração com **GitHub Actions**.

## Estrutura do projeto

```text
TRABALHO_AUTOMACAO
├── .github/workflows/
│   ├── 01-manual-exec.yaml
│   ├── 02-scheduled-exec.yaml
│   ├── 03-post-deploy-exec.yaml
│   └── 04-integrated-exec.yaml
├── src/
│   └── ServicoDePagamento.js
├── test/
│   └── ServPagamentos.test.js
├── playwright-report/
├── test-results/
├── index.html
├── package.json
├── playwright.config.js
├── stryker.conf.json
├── results.xml
└── readme.md
```

## Objetivo

Este projeto foi desenvolvido para validar o comportamento do serviço de pagamentos por meio de testes automatizados, permitindo execuções locais e também em pipeline de integração contínua.

## Tecnologias utilizadas

- **Node.js**
- **Playwright**
- **GitHub Actions**
- **Stryker**

## Arquivos principais

### `src/ServicoDePagamento.js`
Contém a implementação da lógica principal do serviço de pagamento.

### `test/ServPagamentos.test.js`
Contém os testes automatizados responsáveis por validar o comportamento do serviço.

### `playwright.config.js`
Arquivo de configuração do Playwright.

### `stryker.conf.json`
Arquivo de configuração do Stryker para análise de testes por mutação.

### `results.xml`
Arquivo de saída de resultados, normalmente utilizado para integração com ferramentas de CI/CD e relatórios.

## Execução dos testes

Para executar os testes localmente, utilize:

```bash
yarn run test
```

Após a execução, para abrir o último relatório HTML gerado:

```bash
yarn playwright show-report
```

## Workflows de automação

O projeto possui workflows configurados em `.github/workflows`:

- **01-manual-exec.yaml**: execução manual
- **02-scheduled-exec.yaml**: execução agendada
- **03-post-deploy-exec.yaml**: execução após deploy
- **04-integrated-exec.yaml**: execução integrada no fluxo do projeto

## Relatórios

Os relatórios e resultados das execuções ficam armazenados em:

- `playwright-report/`
- `test-results/`
- `results.xml`

## Como instalar as dependências

Caso necessário, instale as dependências com:

```bash
yarn install
```

ou

```bash
npm install
```

## Observações

- O projeto já possui estrutura preparada para automação local e em pipeline.
- O relatório HTML do Playwright facilita a análise dos testes executados.
- A presença do Stryker permite ampliar a avaliação da qualidade dos testes.

## Autor

Projeto acadêmico/prático de automação de testes.