"use strict";
// Les modules en TypeScript sont utilisés pour organiser et réutiliser du code en le séparant en unités logiques appelées modules. Les modules permettent de regrouper des classes, des fonctions, des variables et d'autres éléments liés dans des fichiers distincts, facilitant ainsi la gestion et la collaboration sur de grands projets.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Geometry = exports.subtract = exports.sum = void 0;
// Voici une explication détaillée sur les modules en TypeScript :
// Déclaration d'un module :
// Pour déclarer un module, vous pouvez simplement créer un fichier TypeScript avec l'extension .ts et définir le contenu du module à l'intérieur. Par exemple, vous pouvez créer un fichier math.ts contenant des fonctions mathématiques :
function sum(a, b) {
    return a + b;
}
exports.sum = sum;
function subtract(a, b) {
    return a - b;
}
exports.subtract = subtract;
//   Dans cet exemple, nous avons défini un module math qui exporte deux fonctions : sum et subtract.
// ####"02"
// Exportation des éléments d'un module :
// Pour rendre les éléments d'un module accessibles à d'autres modules, vous devez les exporter à l'aide du mot-clé export. Dans notre exemple précédent, nous avons exporté les fonctions sum et subtract. Vous pouvez également utiliser export default pour exporter un élément par défaut du module. Par exemple :
function multiply(a, b) {
    return a * b;
}
exports.default = multiply;
// ####03
// Exportation et importation des modules en tant que namespace :
// TypeScript prend également en charge les namespaces pour organiser les modules en groupes logiques. Vous pouvez utiliser namespace pour définir un groupe de modules connexes. Par exemple :
var Geometry;
(function (Geometry) {
    function calculateCircumference(radius) {
        return 2 * Math.PI * radius;
    }
    Geometry.calculateCircumference = calculateCircumference;
    function calculateArea(radius) {
        return Math.PI * radius * radius;
    }
    Geometry.calculateArea = calculateArea;
})(Geometry || (exports.Geometry = Geometry = {}));
