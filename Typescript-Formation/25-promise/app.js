"use strict";
// Les promesses en JavaScript sont une fonctionnalité clé pour gérer les opérations asynchrones de manière plus claire et plus efficace. Elles sont également utilisées en TypeScript. Une promesse représente une valeur qui peut être disponible maintenant, dans le futur ou jamais. Voici comment les promesses fonctionnent en détail :
// Création d'une promesse :
// Une promesse est créée en appelant le constructeur Promise et en passant une fonction de rappel appelée le "constructeur de rappel" (callback function). Cette fonction de rappel prend deux arguments : resolve et reject. resolve est une fonction utilisée pour retourner une valeur résolue (ou une promesse résolue), tandis que reject est utilisée pour retourner une valeur rejetée (ou une promesse rejetée).
const promise = new Promise((resolve, reject) => {
    // Traitement asynchrone
    // Si réussi, appeler resolve(resultat)
    // Si échoué, appeler reject(erreur)
});
//   Dans cet exemple, nous créons une promesse en utilisant le constructeur Promise et en fournissant une fonction de rappel. À l'intérieur de cette fonction, vous pouvez effectuer des opérations asynchrones telles que des appels réseau, des accès à la base de données, etc. Si l'opération est réussie, vous appelez resolve avec le résultat souhaité, sinon vous appelez reject avec une erreur.
// Gestion des résolutions et rejets :
// Une fois qu'une promesse est créée, vous pouvez chaîner des opérations supplémentaires en utilisant les méthodes then et catch. La méthode then est utilisée pour gérer la résolution de la promesse, tandis que la méthode catch est utilisée pour gérer le rejet de la promesse.
promise
    .then((result) => {
    // Gérer la résolution de la promesse avec result
})
    .catch((error) => {
    // Gérer le rejet de la promesse avec error
});
//   Dans cet exemple, nous utilisons la méthode then pour spécifier une fonction de rappel qui sera appelée lorsque la promesse est résolue avec succès. La fonction de rappel reçoit la valeur résolue (result) en paramètre. Si la promesse est rejetée, la méthode catch est utilisée pour spécifier une fonction de rappel qui sera appelée avec l'erreur (error) en paramètre.
// Chaînage des promesses :
// Les promesses peuvent être enchaînées en utilisant plusieurs appels successifs à then. Cela permet de gérer des séquences d'opérations asynchrones.
function doSomethingAsync(input) {
    return new Promise((resolve, reject) => {
        // Effectuer une opération asynchrone
        // ...
        // Si l'opération réussit, appeler resolve avec le résultat
        resolve("/* résultat */");
        // Si une erreur se produit, appeler reject avec l'erreur
        // reject(/* erreur */);
    });
}
function doAnotherAsync(input) {
    return new Promise((resolve, reject) => {
        // Effectuer une autre opération asynchrone
        // ...
        // Si l'opération réussit, appeler resolve avec le résultat
        resolve("/* résultat */");
        // Si une erreur se produit, appeler reject avec l'erreur
        // reject(/* erreur */);
    });
}
// Utilisation des fonctions dans la chaîne de promesses
promise
    .then((result) => {
    // Opération asynchrone
    return doSomethingAsync(result);
})
    .then((result) => {
    // Opération asynchrone
    return doAnotherAsync(result);
})
    .then((result) => {
    // Résultat final
})
    .catch((error) => {
    // Gérer les erreurs
});
//   Dans cet exemple, nous utilisons then pour enchaîner plusieurs opérations asynchrones. Chaque appel à then renvoie une nouvelle promesse, ce qui permet de chaîner d'autres opérations. Vous pouvez retourner une valeur ou une promesse à partir de chaque fonction de rappel, ce qui sera transmis à la prochaine étape de la chaîne.
// Les promesses offrent une syntaxe plus claire et plus lisible pour gérer les opérations asynchrones en JavaScript et TypeScript. Elles permettent de gérer les résultats réussis et les erreurs de manière structurée et facilitent la gestion des séquences d'opérations asynchrones.
