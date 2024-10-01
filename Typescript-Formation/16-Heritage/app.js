"use strict";
// L'héritage est un concept clé de la programmation orientée objet (POO) qui permet à une classe d'hériter les propriétés et les méthodes d'une autre classe. TypeScript prend en charge l'héritage de classe, ce qui vous permet de créer des hiérarchies de classes et de partager du code commun entre elles. Voici une explication détaillée sur l'héritage en TypeScript :
// Superclasse et sous-classe :
// Dans le contexte de l'héritage, la classe dont une autre classe hérite est appelée la superclasse ou la classe de base. La classe qui hérite d'une superclasse est appelée sous-classe ou classe dérivée.
// Déclaration d'héritage :
// Pour créer une sous-classe qui hérite d'une superclasse, utilisez le mot-clé extends suivi du nom de la superclasse après le nom de la sous-classe. Voici un exemple :
// class Superclass {
//   // Propriétés et méthodes de la superclasse
// }
// class Subclass extends Superclass {
//   // Propriétés et méthodes spécifiques à la sous-classe
// }
// Héritage des propriétés et méthodes :
// Lorsqu'une classe hérite d'une autre classe, la sous-classe obtient toutes les propriétés et méthodes définies dans la superclasse. Cela signifie que la sous-classe peut accéder et utiliser ces propriétés et méthodes comme si elles appartenaient à la sous-classe elle-même.
// Appel du constructeur de la superclasse :
// Lorsqu'une sous-classe est instanciée, son constructeur peut appeler le constructeur de la superclasse à l'aide du mot-clé super(). Cela permet d'initialiser les propriétés de la superclasse avant d'initialiser les propriétés spécifiques à la sous-classe. Voici un exemple :
// class Superclass {
//   constructor() {
//     // Initialisation de la superclasse
//   }
// }
// class Subclass extends Superclass {
//   constructor() {
//     super(); // Appel du constructeur de la superclasse
//     // Initialisation de la sous-classe
//   }
// }
// Ajout de nouvelles propriétés et méthodes :
// Une sous-classe peut ajouter de nouvelles propriétés et méthodes qui sont spécifiques à la sous-classe. Ces nouvelles propriétés et méthodes s'ajoutent aux propriétés et méthodes héritées de la superclasse. Cela permet à la sous-classe d'étendre le comportement de la superclasse. Voici un exemple :
class Superclass {
}
class Subclass extends Superclass {
    // Propriétés et méthodes spécifiques à la sous-classe
    newMethod() {
        // Nouvelle méthode de la sous-classe
    }
}
// Modificateurs d'accès lors de l'héritage :
// Lorsque vous héritez d'une superclasse, vous pouvez modifier les modificateurs d'accès des propriétés et des méthodes héritées. Par exemple, vous pouvez rendre une propriété privée de la superclasse accessible à la sous-classe en la déclarant comme protected dans la superclasse.
// L'héritage permet de créer des hiérarchies de classes et de réutiliser du code existant. Il vous permet d'organiser votre code de manière logique et de partager des fonctionnalités communes entre les classes.
