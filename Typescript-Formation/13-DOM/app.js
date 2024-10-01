"use strict";
// Pour manipuler le DOM (Document Object Model) en TypeScript, vous pouvez utiliser les mêmes techniques que celles utilisées en JavaScript. TypeScript vous offre la possibilité de bénéficier d'une meilleure vérification de type et d'une assistance de développement intégrée dans les éditeurs compatibles avec TypeScript. Voici les étapes générales pour manipuler le DOM en TypeScript :
// Sélectionner les éléments HTML : Utilisez les méthodes du DOM, telles que getElementById, querySelector ou getElementsByClassName, pour sélectionner les éléments HTML avec lesquels vous souhaitez travailler. TypeScript peut inférer automatiquement les types lors de l'utilisation de ces méthodes.
const title = document.getElementById('title');
const btn = document.querySelector('.btn');
// Manipuler les propriétés et les attributs : Une fois que vous avez sélectionné les éléments, vous pouvez manipuler leurs propriétés et attributs en utilisant le typage statique de TypeScript. Vous pouvez également utiliser des méthodes comme addEventListener pour gérer les événements.
title.textContent = 'Hello, TypeScript!';
btn.addEventListener('click', () => {
    console.log('Button clicked!');
});
// Travailler avec les formulaires : Vous pouvez accéder aux éléments de formulaire et leurs valeurs à l'aide des propriétés appropriées, telles que value pour les champs de saisie de texte.
const inp = document.getElementById('inp');
console.log(`Valeur: ${inp.value}`);
// Créer des éléments HTML : Vous pouvez créer de nouveaux éléments HTML en utilisant la méthode createElement, puis les ajouter au DOM avec les méthodes appendChild ou insertBefore.
const newElement = document.createElement('p');
newElement.textContent = 'New element';
document.body.appendChild(newElement);
// Les assertions de type, également connues sous le nom de castings de type, permettent aux développeurs de spécifier explicitement le type d'une valeur dans TypeScript. Cela permet de contourner la vérification de type du compilateur lorsque vous savez avec certitude que le type d'une valeur est plus précis que celui déduit par le système de types.
// Les assertions de type peuvent être réalisées de deux manières principales en TypeScript :
// Assertion de type "angle-bracket" :
// Utilise la syntaxe <Type>variable pour effectuer une assertion de type.
// C'est une syntaxe héritée des versions antérieures de TypeScript.
const myVariable = "Hello, TypeScript!";
const stringLength = myVariable.length;
// Dans cet exemple, myVariable est initialisé avec une valeur de type any, qui est un type dynamique qui ne fait pas l'objet de vérifications de type. Nous effectuons ensuite une assertion de type pour indiquer au compilateur que nous savons que myVariable est en réalité une chaîne de caractères. Ainsi, nous pouvons accéder à la propriété length d'une chaîne de caractères sans erreur de compilation.
// Assertion de type "as" :
// Utilisez la syntaxe variable as Type pour effectuer une assertion de type.
// Cette syntaxe est recommandée et est préférée dans les nouveaux projets TypeScript.
const myVariable2 = "Hello, TypeScript!";
const length2 = myVariable2.length;
// Dans cet exemple, nous utilisons l'assertion de type "as" pour indiquer que myVariable est de type string. Cette syntaxe est plus concise et préférée dans la plupart des cas.
// Il est important de noter que les assertions de type ne modifient pas réellement le type de la valeur. Elles indiquent simplement au compilateur que vous avez une meilleure connaissance du type de la valeur que le système de types lui-même. Par conséquent, si une assertion de type est incorrecte, vous risquez d'avoir des erreurs d'exécution.
// Lorsque vous utilisez des assertions de type, vous devez être sûr que l'assertion est correcte, car TypeScript n'effectuera pas de vérification de type lors de l'assertion. Il est préférable de laisser le système de types inférer automatiquement les types autant que possible, car cela offre une meilleure sécurité de type.
// Les assertions de type sont utiles dans les cas où vous avez une connaissance plus précise du type d'une valeur que ce que le système de types peut déduire. Cela peut se produire lors de l'interaction avec des bibliothèques tierces, la manipulation du DOM ou d'autres situations où les informations de type ne sont pas disponibles de manière statique.
// Cependant, il est recommandé d'utiliser les assertions de type avec parcimonie et d'être attentif à la vérification de type statique offerte par TypeScript.
