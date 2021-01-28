# Product Management Angular

Projeto Angular 10 com Angular Material.

### Rodando o servidor localmente

Caso você não tenha o `@angular/cli` em sua máquina, será necessário instalá-lo através do comando `npm install -g @angular/cli
`. Ou acessse https://cli.angular.io.

Consequentemente, ``npm`` e ``node`` também são necessários. Caso também não os tenha, veja https://nodejs.org/en/download/.

Para rodar o servidor, siga os comandos abaixo:

````
npm i
ng serve
````
Ou
````
yarn install
yarn start
````
O comando `npm i` irá instalar as dependências necessárias para o projeto, enquanto o comando `ng serve` inicia o
servidor na porta `http://localhost:4200`.

### Gerando artefatos de deploy

Para buildar o projeto e gerar os artefatos necessários para fazer o deploy da aplicação, rode os comandos abaixo:

````
npm i
npm run build
````

Os artefatos serão gerados na pasta ``/dist`` na raiz do projeto.

### Sobre o pacote james-challenge-client
É um projeto gradle que criei para gerar uma inteface de comunicação entre o front-end e o a API.
Utilizando a especificação OpenApi em um arquivo ``.yaml``, os serviços e modelos especificados são gerados automaticamente
após um script de build, após isso, o comando ``npm run build`` faz o build dessas classes para um plugin typescript,
podendo ser utilizado em projetos angular.

Este plugin está publicado no npm https://www.npmjs.com/package/james-challenge-client, atualmente na versão 2.0.0.
Repositório aqui https://github.com/hyagosouzza/james-challenge-client.
