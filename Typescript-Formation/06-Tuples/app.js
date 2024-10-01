"use strict";
// Les tuples sont un type de données introduit dans TypeScript qui permet de représenter un tableau avec un nombre fixe d'éléments, chacun pouvant avoir un type différent. Voici une explication détaillée sur les tuples :
// Déclaration d'un tuple :
// Vous pouvez déclarer un tuple en spécifiant les types des éléments entre crochets et en les séparant par des virgules. Voici un exemple :
let person = ["Alice", 30, true];
// Accès aux éléments d'un tuple :
// Vous pouvez accéder aux éléments d'un tuple en utilisant leur index (qui commence à 0) et en utilisant la notation entre crochets. Voici quelques exemples :
console.log(person[0]); // Accède au premier élément du tuple ("Alice")
console.log(person[1]); // Accède au deuxième élément du tuple (30)
// Modification des éléments d'un tuple :
// Vous pouvez modifier les éléments d'un tuple en leur assignant de nouvelles valeurs. Voici un exemple :
person[1] = 31; // Modifie la valeur du deuxième élément du tuple (remplace 30 par 31)
console.log(person); // Affiche ["Alice", 31, true]
// Propriétés et méthodes des tuples :
// TypeScript fournit quelques propriétés et méthodes intégrées pour manipuler les tuples. Par exemple, la propriété length renvoie le nombre d'éléments du tuple :
console.log(person.length); // Renvoie la taille du tuple (3)
// Utilisation des types d'union avec les tuples :
// Vous pouvez utiliser des types d'union pour spécifier des types alternatifs pour les éléments d'un tuple. Par exemple :
let data = ["Alice", true]; // Le premier élément peut être une chaîne de caractères ou un nombre
// Destructuration d'un tuple :
// TypeScript prend en charge la destructuration de tuples, ce qui permet d'extraire les éléments d'un tuple dans des variables individuelles. Voici un exemple :
let person2 = ["Alice", 30, true];
let [nom, age, isActive] = person2; // Destructure le tuple dans des variables individuelles
console.log(nom); // Affiche "Alice"
console.log(age); // Affiche 30
console.log(isActive); // Affiche true
// Les tuples sont utiles lorsque vous avez besoin de représenter une structure de données avec un nombre fixe d'éléments et des types spécifiques pour chaque élément. Ils fournissent une manière plus précise de définir les structures de données et peuvent améliorer la lisibilité du code. Cependant, il est important de noter que les tuples sont statiquement typés, ce qui signifie que l'ordre et le nombre d'éléments doivent correspondre à la définition du tuple.
