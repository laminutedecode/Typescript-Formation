"use strict";
// L'async/await est une syntaxe introduite dans ECMAScript 2017 (et donc également utilisée en TypeScript) pour simplifier la gestion des opérations asynchrones. Cette syntaxe permet d'écrire du code asynchrone de manière plus lisible et semblable à du code synchrone. Voici comment utiliser async/await en TypeScript en détail :
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Déclaration de fonctions asynchrones :
// Pour utiliser async et await, vous devez déclarer une fonction comme étant asynchrone en utilisant le mot clé async. Cela permet à la fonction d'utiliser await pour attendre la résolution d'une promesse.
function fetchData() {
    return __awaiter(this, void 0, void 0, function* () {
        // Code asynchrone
    });
}
// Dans cet exemple, nous déclarons une fonction fetchData comme étant asynchrone à l'aide du mot clé async. Cela signifie que la fonction peut contenir des opérations asynchrones.
// Utilisation de await :
// À l'intérieur d'une fonction asynchrone, vous pouvez utiliser l'opérateur await pour attendre la résolution d'une promesse. L'opérateur await est utilisé devant une expression qui retourne une promesse, et il met en pause l'exécution de la fonction asynchrone jusqu'à ce que la promesse soit résolue ou rejetée.
function fetchData() {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield fetchDataFromAPI();
        // Utiliser les données récupérées
    });
}
// Dans cet exemple, nous utilisons await devant l'appel à la fonction fetchDataFromAPI(), qui retourne une promesse. L'exécution de la fonction fetchData sera mise en pause jusqu'à ce que la promesse soit résolue avec une valeur. Une fois que la promesse est résolue, la valeur est assignée à la variable data et vous pouvez utiliser les données récupérées dans la suite du code.
// Gestion des erreurs avec try/catch :
// Lorsque vous utilisez await, vous pouvez capturer les erreurs en utilisant un bloc try/catch. Cela permet de gérer les erreurs de manière similaire à la gestion des exceptions dans le code synchrone.
function fetchData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield fetchDataFromAPI();
            // Utiliser les données récupérées
        }
        catch (error) {
            // Gérer l'erreur
        }
    });
}
// Dans cet exemple, nous utilisons un bloc try/catch pour entourer l'appel à await et capturer toute erreur qui se produit lors de la résolution de la promesse. Si une erreur se produit, elle est attrapée dans le bloc catch, où vous pouvez gérer l'erreur de manière appropriée.
// L'utilisation de async/await en TypeScript permet de simplifier la gestion des opérations asynchrones en rendant le code plus lisible et en évitant l'imbriquement excessif de fonctions de rappel. Cela facilite également la gestion des erreurs grâce à l'utilisation de blocs try/catch.
