"use strict";
// Les tableaux (ou arrays) sont utilisés pour stocker une collection ordonnée d'éléments du même type dans TypeScript. Voici une explication détaillée sur la manipulation des tableaux avec TypeScript :
// Déclaration d'un tableau :
// Vous pouvez déclarer un tableau en utilisant la syntaxe suivante :
// let numbers: number[]; // Déclare un tableau de nombres
// let names: string[]; // Déclare un tableau de chaînes de caractères
// let values: Array<number>; // Une autre façon de déclarer un tableau de nombres
// Initialisation d'un tableau :
// Vous pouvez initialiser un tableau avec des valeurs lors de sa déclaration ou ultérieurement. Voici quelques exemples :
let numbers = [1, 2, 3, 4, 5]; // Initialise un tableau de nombres avec des valeurs
let names = []; // Initialise un tableau vide de chaînes de caractères
names.push("Alice", "Bob", "Charlie"); // Ajoute des valeurs au tableau ultérieurement
let values = new Array(10); // Initialise un tableau de nombres vide avec une taille spécifiée
// Accès aux éléments d'un tableau :
// Vous pouvez accéder aux éléments d'un tableau en utilisant leur index (qui commence à 0). Voici quelques exemples :
let numbers2 = [1, 2, 3, 4, 5];
console.log(numbers2[0]); // Accède au premier élément du tableau (1)
console.log(numbers2[2]); // Accède au troisième élément du tableau (3)
// Modification des éléments d'un tableau :
// Vous pouvez modifier les éléments d'un tableau en utilisant leur index. Voici un exemple :
let numbers3 = [1, 2, 3, 4, 5];
numbers3[1] = 10; // Modifie le deuxième élément du tableau (remplace 2 par 10)
console.log(numbers3); // Affiche [1, 10, 3, 4, 5]
// Propriétés et méthodes des tableaux :
// TypeScript fournit plusieurs propriétés et méthodes intégrées pour manipuler les tableaux. En voici quelques-unes :
let numbers4 = [1, 2, 3, 4, 5];
console.log(numbers4.length); // Renvoie la taille du tableau (5)
numbers4.push(6); // Ajoute un élément à la fin du tableau
numbers4.pop(); // Supprime le dernier élément du tableau
numbers4.splice(1, 2); // Supprime deux éléments à partir de l'index 1
// Boucler à travers un tableau :
// Vous pouvez utiliser des boucles pour itérer à travers les éléments d'un tableau. Voici un exemple utilisant la boucle for...of :
let numbers5 = [1, 2, 3, 4, 5];
for (let num of numbers5) {
    console.log(num);
}
// Tableaux avec des types multiples :
// Vous pouvez utiliser des types d'union pour déclarer un tableau pouvant contenir plusieurs types d'éléments. Par exemple :
let mixed = ["Alice", 1, "Bob", 2];
// Les tableaux offrent une flexibilité pour stocker et manipuler des collections d'éléments dans TypeScript. Ils sont largement utilisés dans le développement d'applications pour organiser et gérer des données. N'oubliez pas que TypeScript effectue des vérifications de type statiques sur les tableaux pour détecter les erreurs potentielles et améliorer la sûreté du code.
