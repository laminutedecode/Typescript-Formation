"use strict";
// En TypeScript, l'utilisation des modules externes import/export permet d'organiser et de partager du code entre différents fichiers. Les modules externes sont couramment utilisés pour diviser une application en plusieurs fichiers et pour réutiliser des fonctionnalités provenant de bibliothèques tierces. Voici une explication détaillée sur l'utilisation des modules externes import/export :
Object.defineProperty(exports, "__esModule", { value: true });
exports.maVariable = exports.maFonction1 = void 0;
// Exporter des éléments depuis un module :
// Pour rendre une fonction, une classe, une variable ou tout autre élément accessible à partir d'un autre fichier, vous devez les exporter depuis le module. Il existe plusieurs façons d'exporter des éléments en TypeScript :
// Exportation par défaut (default export) : Vous pouvez exporter un élément par défaut depuis un module. Il ne peut y avoir qu'un seul export par défaut par module. Voici un exemple :
function maFonction() {
    // Code de la fonction
}
exports.default = maFonction;
//   Exportation nommée (named export) : Vous pouvez exporter plusieurs éléments nommés depuis un module. Voici un exemple :
function maFonction1() {
    // Code de la fonction 1
}
exports.maFonction1 = maFonction1;
exports.maVariable = "Valeur";
//   ###3
// export { maFonction1, maVariable };
