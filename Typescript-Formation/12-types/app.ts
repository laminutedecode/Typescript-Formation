// Les types personnalisés en TypeScript vous permettent de définir des types spécifiques à votre application. Vous pouvez créer des types personnalisés à l'aide des mots-clés type et interface pour décrire des structures de données complexes ou des combinaisons de types.

// Voici quelques exemples de types personnalisés :

// Utilisation du mot-clé type :

type Point = {
  x: number;
  y: number;
};

const p: Point = { x: 10, y: 20 };
// Dans cet exemple, nous créons un type personnalisé appelé Point à l'aide du mot-clé type. Il décrit un objet avec deux propriétés x et y, toutes deux de type number. Nous pouvons ensuite utiliser ce type Point pour annoter des variables et des paramètres de fonction.

// Utilisation du mot-clé interface :

interface User {
  id: number;
  name: string;
  email: string;
}

function getUser(id: number): User {
  return {
    id: id,
    name: "John Doe",
    email: "john@example.com"
  };
}
// Ici, nous définissons une interface User qui décrit la structure d'un utilisateur avec trois propriétés : id de type number, name de type string et email de type string. La fonction getUser retourne un objet de type User. En utilisant des interfaces, vous pouvez décrire des contrats entre différentes parties du code.



type Status = 'pending' | 'inProgress' | 'completed';

function updateStatus(id: number, status: Status): void {
  // ...
}
// Dans cet exemple, nous utilisons un type d'union pour définir un ensemble restreint de valeurs possibles pour le type Status. Il peut être soit 'pending', soit 'inProgress', soit 'completed'. La fonction updateStatus accepte un identifiant (id) de type number et une valeur status qui doit être l'une des valeurs spécifiées dans le type Status.

// Les types personnalisés en TypeScript vous permettent de créer des abstractions et d'exprimer des structures de données plus complexes, ce qui améliore la lisibilité et la maintenabilité de votre code. Ils vous aident également à détecter les erreurs de type à la compilation et à bénéficier de l'autocomplétion et de la documentation intégrée dans les IDE compatibles avec TypeScript.



// En TypeScript, les interfaces et les types personnalisés (type) ont des fonctionnalités similaires, mais il y a quelques différences clés entre eux :

// Syntaxe : Les interfaces sont déclarées avec le mot-clé interface, tandis que les types personnalisés sont créés avec le mot-clé type.


interface Person {
  name: string;
  age: number;
}

type Points = {
  x: number;
  y: number;
};
// Extensibilité : Les interfaces peuvent être étendues ou implémentées par d'autres interfaces, ce qui permet de créer des hiérarchies d'interfaces et de les réutiliser.

interface Animal {
  name: string;
  age: number;
}

interface Dog extends Animal {
  breed: string;
}
// Les types personnalisés (type) ne peuvent pas être étendus ou implémentés. Ils sont souvent utilisés pour définir des combinaisons de types ou des types d'union plus complexes.

// Compatibilité : Les interfaces sont ouvertes à l'extension, ce qui signifie qu'elles peuvent être étendues en ajoutant de nouvelles propriétés. Lorsqu'une interface est utilisée, le type doit correspondre à la structure complète de l'interface.
// Les types personnalisés (type) sont fermés à l'extension, ce qui signifie que chaque utilisation du type doit correspondre exactement à la structure du type personnalisé.

// Utilisation préférentielle : Les interfaces sont généralement utilisées lorsque vous définissez la forme d'un objet ou d'un contrat entre différentes parties du code.
// Les types personnalisés (type) sont souvent utilisés pour créer des combinaisons de types, des types d'union, des alias de types et des types complexes qui ne peuvent pas être exprimés uniquement avec des interfaces.

// Dans la plupart des cas, vous pouvez choisir d'utiliser une interface ou un type personnalisé (type) en fonction de vos besoins spécifiques. Il est courant d'utiliser les interfaces pour décrire des structures de données et les types personnalisés pour définir des combinaisons de types ou des types plus complexes. Cependant, il convient de noter que les interfaces et les types personnalisés peuvent être utilisés de manière interchangeable dans de nombreux cas.