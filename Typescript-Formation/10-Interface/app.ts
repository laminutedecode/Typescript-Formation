// Les interfaces sont un élément fondamental de TypeScript qui permet de définir des contrats de structure pour les objets. Elles définissent la forme des objets en spécifiant les propriétés qu'ils doivent avoir, ainsi que les types de ces propriétés. Voici une explication détaillée sur les interfaces :

// Déclaration d'une interface :
// Vous pouvez déclarer une interface en utilisant le mot-clé interface, suivi du nom de l'interface et de la liste des propriétés avec leurs types. Voici un exemple :

interface Person {
    name: string;
    age: number;
    greet(): void;
  }
  

//   Utilisation d'une interface :
// Une interface peut être utilisée pour définir le type d'une variable, d'un paramètre de fonction ou de la valeur de retour d'une fonction. Voici quelques exemples :

let person: Person = {
    name: "Alice",
    age: 30,
    greet() {
      console.log("Hello!");
    }
  };
  
  function printPerson(person: Person) {
    console.log(person.name);
    console.log(person.age);
    person.greet();
  }
  
  function createPerson(): Person {
    return {
      name: "Bob",
      age: 25,
      greet() {
        console.log("Hi!");
      }
    };
  }
  

//   Propriétés optionnelles :
// Vous pouvez rendre certaines propriétés d'une interface optionnelles en les marquant avec le symbole ?. Cela signifie que ces propriétés peuvent être absentes dans les objets qui implémentent l'interface. Voici un exemple :

interface Person {
    name: string;
    ageP?: number;
  }

//   Propriétés en lecture seule :
// Vous pouvez marquer certaines propriétés d'une interface comme en lecture seule en utilisant le mot-clé readonly. Cela signifie que ces propriétés ne peuvent pas être modifiées une fois qu'elles sont définies. Voici un exemple :

interface Point {
    readonly x: number;
    readonly y: number;
  }

//   Héritage d'interfaces :
// Vous pouvez étendre une interface en utilisant le mot-clé extends pour créer une nouvelle interface qui hérite des propriétés de l'interface parente. Voici un exemple :

interface Animal {
    name: string;
  }
  
  interface Dog extends Animal {
    breed: string;
  }
  
  let dog: Dog = {
    name: "Buddy",
    breed: "Labrador"
  };
  

//   Les interfaces sont utilisées pour définir des contrats de structure dans TypeScript, ce qui permet de garantir que les objets respectent certaines règles et possèdent certaines propriétés et méthodes. Les interfaces favorisent une programmation orientée objet plus solide et permettent de détecter les erreurs de typage dès la compilation.
  