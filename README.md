# Estudos Cypress


### Instalação

Node
* Verificar se o npm está instalado corretamente, podendo verificar a versão instalada: npm -v.
* Verificar a versão do node: node -v.
* Instalar as versões pares do Node, as versões LTS. exemplo: 16.13.1.
* Iniciar o projeto: npm init. Será feita algumas perguntas para criação do package.json.
* Na configuração do package.json, informar 'npx cypress  open' no 'test command'

Cypress
```bash
npm i cypess --save-dev 
```
### Como iniciar o Cypress

Utilize o comando npm run test para executar o script e abrir o Cypress.

Mesmo seguindo todas as configurações passo a passo, é comum em algumas máquinas ocorrer na primeira execução do Cypress o erro: “Command timed out after 30000 miliseconds”. Para isso, temos duas alternativas:

1) Executar novamente, com o comando npm run test ou npx cypress open;

2) Aumentar esse tempo de verificação no arquivo verify.js que fica no caminho: node_modules\cypress\lib\tasks
Esse caminho está dentro da pasta node_modules\cypress\tasks e o nome do arquivo é verify.js
Localize a constante VERIFY_TEST_RUNNER_TIMEOUT_MS e altere de 30000 para 100000;
Executar novamente, com o comando npm run test ou npx cypress open


### Características positivas do Cypress

* Execução rápida dos testes.
* Verifica quais navegadores tenho instalado na máquina, facilitando na execução.
* Possibilidade de acompanhar toda a linha do tempo dos testes, como o estado anterior, o que aconteceu após a ação etc.


### Principais comandos

* describe: é uma função que tem 2 parâmetros, o primério é o nome da suite de testes, o segundo é uma função onde eu posso executar qualquer coisa
* beforeEach: é um comando que é executado antes do inicio de cada caso de testes.
* it: é um item de testes ou caso de teste.
* visit: resposável por abrir o link informado.
* contains: resposável por identificar elementos. Retorna apenas 1 elemento.
* get: resposável por identificar elementos. Busca todos os elementos que atendem aos parametros informados.
* .type: responsável por realizar a ação de escrita.
* .click: responsável por realizar a ação de click.
* .should: responsável por realizar os assertions .



### Três As

O teste geralmente é composto por três As, que é o arrange, o act e o assert

* O arrange é a preparação do ambiente
* O act é a ação que eu quero fazer
* O assert é o que eu quero verificar