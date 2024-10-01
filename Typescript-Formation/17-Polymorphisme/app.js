"use strict";
// Le polymorphisme est un concept fondamental de la programmation orientée objet (POO) qui permet à un objet de prendre différentes formes ou comportements. En TypeScript, le polymorphisme peut être réalisé grâce à l'héritage et à la substitution de méthodes. Voici une explication détaillée du polymorphisme en TypeScript :
// Héritage et substitution de méthodes :
// Lorsque vous avez une hiérarchie de classes avec une superclasse et des sous-classes, vous pouvez substituer les méthodes de la superclasse dans les sous-classes pour leur donner un comportement spécifique. Cela signifie que les sous-classes peuvent remplacer (ou redéfinir) les implémentations de méthodes héritées de la superclasse. Voici un exemple :
class Animal {
    makeSound() {
        console.log("Les animaux font du bruit.");
    }
}
class Dog extends Animal {
    makeSound() {
        console.log("Le chien aboi.");
    }
}
class Cat extends Animal {
    makeSound() {
        console.log("le chat miole");
    }
}
const animal = new Animal();
const dog = new Dog();
const cat = new Cat();
animal.makeSound(); // Output: "Animal is making a sound."
dog.makeSound(); // Output: "Dog is barking."
cat.makeSound(); // Output: "Cat is meowing."
// Dans cet exemple, la classe Animal définit une méthode makeSound(). Les sous-classes Dog et Cat substituent cette méthode avec leur propre comportement spécifique. Lorsque vous appelez la méthode makeSound() sur des instances des différentes classes, la méthode appropriée est exécutée en fonction du type réel de l'objet.
// Utilisation du polymorphisme :
// Le polymorphisme permet de traiter des objets de différentes classes de manière uniforme, en utilisant le type de leur superclasse commune. Cela permet de créer des structures de données génériques, de simplifier les opérations sur des collections d'objets de différentes sous-classes et de faciliter l'extension de fonctionnalités. Voici un exemple :
class Shape {
    getArea() {
        return 0;
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
const shapes = [new Circle(5), new Rectangle(4, 6)];
shapes.forEach((shape) => {
    console.log("Area:", shape.getArea());
});
// Dans cet exemple, la classe abstraite Shape définit une méthode getArea() qui est ensuite substituée dans les sous-classes Circle et Rectangle. Vous pouvez stocker des instances de ces sous-classes dans un tableau de type Shape[] et appeler la méthode getArea() sur chaque élément du tableau, indépendamment de la sous-classe réelle. Cela permet de calculer et d'afficher les aires des différentes formes géométriques sans se soucier de leur type spécifique.
// Le polymorphisme vous permet de traiter des objets de différentes classes de manière uniforme, en utilisant leur superclasse commune. Cela facilite la réutilisation du code, la simplification des opérations sur des collections d'objets et l'extension de fonctionnalités dans vos applications TypeScript.
