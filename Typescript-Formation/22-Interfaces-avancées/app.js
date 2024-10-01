"use strict";
// Les interfaces avancées en TypeScript offrent des fonctionnalités supplémentaires pour définir des types complexes, des structures de données et des contrats. Voici quelques fonctionnalités avancées des interfaces en TypeScript :
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const dictionary = {
    apple: "fruit",
    car: "vehicle",
};
const fruitType = dictionary["apple"];
const logger = {
    print() {
        console.log("Printing...");
    },
    log(message) {
        console.log("Logging:", message);
    },
};
//   Dans cet exemple, nous définissons deux interfaces Printable et Loggable, qui ont chacune leurs propres membres. Ensuite, nous utilisons l'opérateur & pour créer un nouveau type Logger qui combine les membres des deux interfaces. Nous pouvons ensuite créer un objet logger qui implémente à la fois Printable et Loggable.
// Ces fonctionnalités avancées des interfaces en TypeScript permettent de créer des types complexes, des contrats flexibles et de faciliter la réutilisation du code. Elles vous aident à mieux structurer votre code et à bénéficier des avantages du typage statique.
