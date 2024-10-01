// Les interfaces avancées en TypeScript offrent des fonctionnalités supplémentaires pour définir des types complexes, des structures de données et des contrats. Voici quelques fonctionnalités avancées des interfaces en TypeScript :

// Héritage d'interfaces :
// Tout comme les classes peuvent hériter d'autres classes, les interfaces peuvent également hériter d'autres interfaces. Cela permet de créer des hiérarchies d'interfaces et de réutiliser des déclarations de membres d'interface communs.

interface Animal {
    name: string;
  }
  
  interface Mammal extends Animal {
    breed: string;
  }
  
  interface Dog extends Mammal {
    bark(): void;
  }

//   Dans cet exemple, l'interface Animal définit une propriété name. L'interface Mammal hérite de Animal et ajoute une propriété breed. L'interface Dog hérite de Mammal et ajoute une méthode bark(). Ainsi, Dog a accès à toutes les propriétés et méthodes définies dans les interfaces qu'il hérite.

// Interfaces comme types de fonction :
// Les interfaces peuvent être utilisées pour décrire la forme d'une fonction, y compris les paramètres et le type de retour attendus. Cela permet de définir des contrats pour les fonctions et de les utiliser comme types.

interface MathFunction {
    (x: number, y: number): number;
  }
  
  const add: MathFunction = (x, y) => x + y;
  const subtract: MathFunction = (x, y) => x - y;

//   Dans cet exemple, nous utilisons une interface MathFunction pour décrire une fonction prenant deux paramètres de type nombre (x et y) et renvoyant un nombre. Nous pouvons ensuite déclarer des fonctions add et subtract qui correspondent à cette interface.

// Index signatures :
// Les index signatures permettent de définir des types flexibles pour les objets avec des clés dynamiques. Ils permettent d'accéder à des propriétés d'un objet en utilisant une notation d'index.

interface Dictionary {
    [key: string]: string;
  }
  
  const dictionary: Dictionary = {
    apple: "fruit",
    car: "vehicle",
  };
  
  const fruitType: string = dictionary["apple"];
  
//   Dans cet exemple, l'interface Dictionary définit un index signature [key: string]: string, ce qui signifie que chaque clé de l'objet doit être une chaîne et la valeur associée doit également être une chaîne. Nous pouvons ensuite utiliser l'index ["apple"] pour accéder à la valeur correspondante dans l'objet dictionary.

// Intersection de types avec & :
// TypeScript permet de créer des interfaces en combinant plusieurs types ou interfaces existants à l'aide de l'opérateur &, appelé intersection de types. Cela permet de créer des interfaces qui contiennent les membres de plusieurs interfaces.

interface Printable {
    print(): void;
  }
  
  interface Loggable {
    log(message: string): void;
  }
  
  type Logger = Printable & Loggable;
  
  const logger: Logger = {
    print() {
      console.log("Printing...");
    },
    log(message) {
      console.log("Logging:", message);
    },
  };
  
//   Dans cet exemple, nous définissons deux interfaces Printable et Loggable, qui ont chacune leurs propres membres. Ensuite, nous utilisons l'opérateur & pour créer un nouveau type Logger qui combine les membres des deux interfaces. Nous pouvons ensuite créer un objet logger qui implémente à la fois Printable et Loggable.

// Ces fonctionnalités avancées des interfaces en TypeScript permettent de créer des types complexes, des contrats flexibles et de faciliter la réutilisation du code. Elles vous aident à mieux structurer votre code et à bénéficier des avantages du typage statique.