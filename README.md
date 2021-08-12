# Descrição
  
  Esse projeto implementa com o uso do boostrap o botão de ajuda flutuante.
  Também tem uma versão para o materialize, para usar é necessário desativar o bootstrap 

# Como instalar e configurar o botão help:

0) yarn add jquery e yarn add materialize-css e instalar no angular.cli.json:
    "styles": [
        "../node_modules/materialize-css/dist/css/materialize.min.css"
      ],

1) Copiar a pasta help para a pasta SRC

2) Instalar no app.module.ts,
import {HelpComponent} from './help/help.component'; e declarations HelpComponent

3) Instalar no app.componenet.html <app-help></app-help>

Configure as váriaveis url<url do helpinfotic> e mail<e-mail de contato>


OBS: O comando yarn pode ser substituido por npm install <lib> --save

# Angular FAB

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.1.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
