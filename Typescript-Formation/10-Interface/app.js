"use strict";
// Les interfaces sont un élément fondamental de TypeScript qui permet de définir des contrats de structure pour les objets. Elles définissent la forme des objets en spécifiant les propriétés qu'ils doivent avoir, ainsi que les types de ces propriétés. Voici une explication détaillée sur les interfaces :
//   Utilisation d'une interface :
// Une interface peut être utilisée pour définir le type d'une variable, d'un paramètre de fonction ou de la valeur de retour d'une fonction. Voici quelques exemples :
let person = {
    name: "Alice",
    age: 30,
    greet() {
        console.log("Hello!");
    }
};
function printPerson(person) {
    console.log(person.name);
    console.log(person.age);
    person.greet();
}
function createPerson() {
    return {
        name: "Bob",
        age: 25,
        greet() {
            console.log("Hi!");
        }
    };
}
let dog = {
    name: "Buddy",
    breed: "Labrador"
};
//   Les interfaces sont utilisées pour définir des contrats de structure dans TypeScript, ce qui permet de garantir que les objets respectent certaines règles et possèdent certaines propriétés et méthodes. Les interfaces favorisent une programmation orientée objet plus solide et permettent de détecter les erreurs de typage dès la compilation.
