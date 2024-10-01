// Les unions et les intersections sont des fonctionnalités de typage avancées en TypeScript qui permettent de combiner des types pour créer de nouveaux types complexes.

// Union de types :
// Une union de types permet de définir un type qui peut être soit d'un type, soit d'un autre. Elle est représentée par le symbole |. Cela signifie qu'une valeur d'une union de types peut prendre n'importe quelle valeur autorisée par l'un des types de l'union.

let variable: string | number;

variable = "hello"; // Assignation d'une chaîne de caractères
variable = 42; // Assignation d'un nombre


// Dans cet exemple, la variable variable est déclarée comme ayant le type string | number. Cela signifie qu'elle peut contenir soit une valeur de type string, soit une valeur de type number. Vous pouvez attribuer une valeur de l'un des types à la variable.

// Les unions de types sont utiles lorsque vous souhaitez accepter plusieurs types de valeurs pour une variable, un paramètre de fonction ou une valeur de retour.

// Intersection de types :
// Une intersection de types permet de créer un nouveau type qui comprend tous les membres des types d'origine. Elle est représentée par le symbole &. Cela signifie que le type résultant de l'intersection aura toutes les propriétés et méthodes de tous les types impliqués.

interface A {
  propA: string;
}

interface B {
  propB: number;
}

type C = A & B;

const obj: C = {
  propA: "hello",
  propB: 42,
};

// Dans cet exemple, nous définissons deux interfaces A et B avec des membres différents. Ensuite, nous utilisons l'opérateur & pour créer un nouveau type C qui est l'intersection de A et B. Le type C comprendra donc les propriétés propA et propB. Nous pouvons ensuite créer un objet obj de type C qui doit inclure les propriétés des deux interfaces.

// Les intersections de types sont utiles lorsque vous souhaitez combiner les membres de plusieurs types pour créer un nouveau type qui possède toutes ces caractéristiques.

// Les unions et les intersections sont des outils puissants pour le typage avancé en TypeScript. Ils permettent de créer des types flexibles, de combiner différentes structures de données et de représenter des situations où une valeur peut être de plusieurs types. Ils améliorent la sécurité du typage et la flexibilité dans la manipulation des données.
