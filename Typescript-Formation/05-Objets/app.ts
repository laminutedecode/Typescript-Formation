// Les objets sont des structures de données complexes qui permettent de regrouper des valeurs et des fonctionnalités connexes en un seul ensemble dans TypeScript. Voici une explication détaillée sur les objets :

// Déclaration d'un objet :
// Vous pouvez déclarer un objet en utilisant la notation d'objet littéral, qui consiste à définir les propriétés et leurs valeurs entre accolades. Voici un exemple simple :

let person = {
  name: "Alice",
  age: 30,
  city: "Paris"
};


// Accès aux propriétés d'un objet :
// Vous pouvez accéder aux propriétés d'un objet en utilisant la notation pointée (objet.nomPropriete) ou la notation entre crochets (objet["nomPropriete"]). Voici quelques exemples :

console.log(person.name); // Accède à la propriété "name" de l'objet person (Alice)
console.log(person["age"]); // Accède à la propriété "age" de l'objet person (30)


// Modification des propriétés d'un objet :
// Vous pouvez modifier les propriétés d'un objet en leur assignant de nouvelles valeurs. Voici un exemple :

person.age = 31; // Modifie la valeur de la propriété "age" de l'objet person (remplace 30 par 31)
console.log(person); // Affiche { name: "Alice", age: 31, city: "Paris" }


// Ajout de nouvelles propriétés :
// Vous pouvez ajouter de nouvelles propriétés à un objet en utilisant la notation pointée ou la notation entre crochets. Voici un exemple :


person.job = "Engineer"; // Ajoute une nouvelle propriété "job" à l'objet person
person["salary"] = 5000; // Ajoute une autre propriété "salary" à l'objet person
console.log(person); // Affiche { name: "Alice", age: 31, city: "Paris", job: "Engineer", salary: 5000 }

// Types pour les objets :
// TypeScript permet de spécifier le type d'un objet en utilisant une interface ou un type. Cela permet de définir la structure et les types des propriétés d'un objet. Voici un exemple utilisant une interface :

interface Person2 {
  name: string;
  age: number;
  city: string;
}

let personObj: Person2 = {
  name: "Alice",
  age: 30,
  city: "Paris"
};

// Méthodes d'un objet :
// Les objets peuvent également contenir des méthodes, qui sont des fonctions associées à l'objet. Voici un exemple :


let calculator = {
  add: function(a: number, b: number): number {
    return a + b;
  },
  subtract(a: number, b: number): number {
    return a - b;
  }
};

console.log(calculator.add(5, 3)); // Appelle la méthode "add" de l'objet calculator (8)
console.log(calculator.subtract(10, 4)); // Appelle la méthode "subtract" de l'objet calculator (6)


// Parcours des propriétés d'un objet :
// Vous pouvez utiliser une boucle for...in pour parcourir toutes les propriétés d'un objet. Voici un exemple :

for (let key in person) {
// votre code
}


// Les objets sont utilisés pour représenter des entités complexes dans TypeScript, comme des utilisateurs, des produits, des configurations, etc. Ils permettent d'organiser les données et les fonctionnalités de manière logique et structurée. TypeScript vous aide à détecter les erreurs de typage liées aux objets et à bénéficier d'une meilleure sûreté du code lors de la compilation.