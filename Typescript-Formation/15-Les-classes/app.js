"use strict";
// Les classes sont un concept clé de la programmation orientée objet (POO) et TypeScript prend en charge la définition et l'utilisation de classes de manière similaire à d'autres langages de POO tels que Java ou C#. Voici une explication détaillée sur les classes en TypeScript :
// Déclaration d'une classe :
// Vous pouvez déclarer une classe en utilisant le mot-clé class, suivi du nom de la classe. Voici un exemple :
class Person {
    // Constructeur de la classe
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // Méthodes de la classe
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
// Instanciation d'une classe :
// Pour créer une instance (objet) d'une classe, utilisez le mot-clé new suivi du nom de la classe et des arguments requis par le constructeur. Voici un exemple :
const person = new Person("Alice", 30);
// Propriétés de classe :
// Les propriétés d'une classe définissent les caractéristiques des objets créés à partir de cette classe. Vous pouvez déclarer des propriétés avec leurs types dans la classe, et chaque instance de la classe aura ses propres valeurs pour ces propriétés. Voici un exemple :
class Person2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
// Méthodes de classe :
// Les méthodes sont des fonctions définies à l'intérieur d'une classe. Elles peuvent être appelées sur les instances de la classe et peuvent accéder aux propriétés de la classe à l'aide du mot-clé this. Voici un exemple :
class Person3 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
