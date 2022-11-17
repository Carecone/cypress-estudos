# Estudos Cypress


### Instalação

Node
* Verificar se o npm está instalado corretamente, podendo verificar a versão instalada: npm -v.
* Verificar a versão do node: node -v.
* Instalar as versões pares do Node, as versões LTS. exemplo: 16.13.1.
* Iniciar o projeto: npm init. Será feita algumas perguntas para criação do package.json.
* Na configuração do package.json, informar 'npx cypress  open' no 'test command'

Cypress
* npm i cypess --save-dev 

### Como iniciar o Cypress

Utilize o comando npm run test para executar o script e abrir o Cypress.

Mesmo seguindo todas as configurações passo a passo, é comum em algumas máquinas ocorrer na primeira execução do Cypress o erro: “Command timed out after 30000 miliseconds”. Para isso, temos duas alternativas:

1) Executar novamente, com o comando npm run test ou npx cypress open;

2) Aumentar esse tempo de verificação no arquivo verify.js que fica no caminho: node_modules\cypress\lib\tasks
Esse caminho está dentro da pasta node_modules\cypress\tasks e o nome do arquivo é verify.js
Localize a constante VERIFY_TEST_RUNNER_TIMEOUT_MS e altere de 30000 para 100000;
Executar novamente, com o comando npm run test ou npx cypress open


### Caractristicas positivas do Cypress

* Execução rápida dos testes.
* Verifica quais navegadores tenho instalado na máquina, facilitando na execução.
* Possibilidade de acompanhar toda a linha do tempo dos testes, como o estado anterior, o que aconteceu após a ação etc.