# Product Management Angular

Projeto Angular 10 com Angular Material.

Para rodar o servidor, siga os comandos abaixo:

````
npm i
ng serve
````

O comando `npm i` irá instalar as dependências necessárias para o projeto, enquanto o comando `ng serve` inicia o
servidor na porta `http://localhost:4200`.

Caso você não tenha o `@angular/cli` em sua máquina, será necessário instalá-lo através do comando `npm install -g @angular/cli
`. Ou acessse https://cli.angular.io.

Consequentemente, ``npm`` e ``node`` também são necessários. Caso também não os tenha, veja https://nodejs.org/en/download/.
 
### Sobre a listagem de produtos
Deveria haver uma paginação do angular material, mas por conta de algum bug onde não consegui encontrar solução no
Stackoverflow/Documentação, o paginator não consegue ser criado. Gastei horas neste problema, mesmo tendo feito em
outros projetos, imagino que seja problema com alguma dependência. De qualquer forma, deixei um tamanho fixo para a
tabela, para que ela não cresca para sempre na tela. Além disso o backend traz 1000 linhas por padrão, ordendo do mais
recente ao menos recente (paginação no backend funciona). Como evolução do projeto, implementar o paginator do angular
material ou manualmente.
