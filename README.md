# Agrosolutions

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.17.



## Travail et scope

### Etape 1

Naturellement **npm install**

### Etape 2

Afin de faire l'intégration des différentes tables, il faut aller dans le fichier sidebar.component.ts, enrichir la constante RouteInfo[] avec le nom de chacune des tables ainsi que les routes menant vers elles en suivant le standard :

**{ path: '/voiture', title: 'Enregistrement des voitures',  icon: 'pe-7s-car', class: '' }**

Le path etant le path permettant d'avoir le tableau (routes données par Tikeng)

Pour les icones elles representent les images qui seront affichées devant le titre. La liste des icones ainsi que leur représentation est située: <http://themes-pixeden.com/font-demos/7-stroke/index.html>.

Les différentes tables sont mentionnées dans le fichier [project-management-4gi](https://github.com/Tikquuss/project-management-4gi/tree/smarthcontrol)/[src](https://github.com/Tikquuss/project-management-4gi/tree/smarthcontrol/src)/[app](https://github.com/Tikquuss/project-management-4gi/tree/smarthcontrol/src/app)/[models](https://github.com/Tikquuss/project-management-4gi/tree/smarthcontrol/src/app/models)/**entitys.model.ts** sur la branche smarthcontrol. 

### Edit

J'ai deja arrangé le tableau RouteInfo[] mais jai mis de faux path donc ca ne va rien afficher. Met les path correspondants a ceux de Tikeng juste a chaque endroit.

**Important**

Il faut noter que les deux premiers path que j'ai mis (profil utilisateur et Administration) sont juste pour te montrer que lorsque les path sont corrects ca marche.

Supprime la ligne de la page Administration (présentée par { path: '/tables', title: 'Administration',  icon: 'pe-7s-car', class: '' })

Pour le profil Utilisateur le bouton Enregistrer n'est pas fonctionnel.

**Les gens du back end doivent créer un service permettant de modifier l'utilisateur** et relier au bouton.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
