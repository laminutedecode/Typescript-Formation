


// En TypeScript, les champs font référence aux variables ou aux propriétés d'une classe. Ils permettent de stocker des données spécifiques à chaque instance de la classe. Les champs peuvent avoir différents types tels que des nombres, des chaînes de caractères, des booléens, des tableaux, des objets, etc.
class Person {
    private name: string;
    protected age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age
    }

    sayHello(): void {
        console.log(`Hello, je suis ${this.name} et j'ai ${this.age} ans`);
        
    }
}

const personnage = new Person('Jonathan', 35)

personnage.sayHello()

// Dans cet exemple, la classe Person a deux champs : name de type string et age de type number. Les valeurs de ces champs sont définies à l'aide du constructeur lors de la création d'une nouvelle instance de la classe. Les champs peuvent ensuite être utilisés dans d'autres méthodes de la classe, comme la méthode sayHello qui affiche le nom et l'âge de la personne.

// Les champs peuvent être accessibles et modifiables à partir d'autres parties du programme, selon leur visibilité. Par défaut, les champs sont publics, ce qui signifie qu'ils sont accessibles depuis n'importe où. Vous pouvez également déclarer des champs comme privés ou protégés en utilisant les modificateurs d'accès private et protected, respectivement.

// Les champs privés ne peuvent être accédés que depuis l'intérieur de la classe elle-même, tandis que les champs protégés peuvent être accédés depuis la classe elle-même ainsi que depuis ses classes dérivées (sous-classes).

// Les champs en TypeScript permettent de représenter l'état des objets et facilitent l'encapsulation des données et le maintien de l'intégrité de l'objet.