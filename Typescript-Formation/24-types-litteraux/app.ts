// Les types littéraux en TypeScript permettent de définir des types spécifiques en utilisant des valeurs littérales. Une valeur littérale est une valeur spécifique et définie explicitement dans le code, telle qu'une chaîne de caractères, un nombre ou un booléen. Voici comment les types littéraux fonctionnent en détail :

// Types littéraux de chaînes de caractères :
// Vous pouvez définir un type littéral de chaîne de caractères en utilisant une chaîne de caractères spécifique comme valeur. Cela signifie que le type ne peut accepter que cette valeur spécifique.

let statusStr: "success" | "error";

statusStr = "success"; // Valeur valide
statusStr = "error"; // Valeur valide
statusStr = "pending"; // Erreur de compilation, la valeur est différente des types autorisés

// Dans cet exemple, la variable status est déclarée avec un type littéral de chaîne de caractères qui accepte uniquement les valeurs "success" ou "error". Toute autre valeur assignée à status entraînera une erreur de compilation.

// Types littéraux de nombres :
// De la même manière, vous pouvez définir un type littéral de nombre en utilisant un nombre spécifique comme valeur. Le type ne peut accepter que cette valeur numérique spécifique.

let statusCode: 200 | 404 | 500;

statusCode = 200; // Valeur valide
statusCode = 404; // Valeur valide
statusCode = 500; // Valeur valide
// statusCode = 400; // Erreur de compilation, la valeur est différente des types autorisés


// statusCode = 400; // Erreur de compilation, la valeur est différente des types autorisés
// Dans cet exemple, la variable statusCode est déclarée avec un type littéral de nombre qui accepte uniquement les valeurs 200, 404 ou 500. Toute autre valeur assignée à statusCode entraînera une erreur de compilation.

// Types littéraux de booléens :
// Les types littéraux peuvent également être utilisés avec des booléens pour spécifier des valeurs booléennes spécifiques.

let isVisible: true | false;

isVisible = true; // Valeur valide
isVisible = false; // Valeur valide
isVisible = 0; // Erreur de compilation, la valeur est différente des types autorisés



// Dans cet exemple, la variable isVisible est déclarée avec un type littéral de booléen qui accepte uniquement les valeurs true ou false. Toute autre valeur assignée à isVisible entraînera une erreur de compilation.

// Les types littéraux offrent une façon puissante de définir des types spécifiques dans TypeScript. Ils permettent de restreindre les valeurs possibles pour une variable, un paramètre ou un type de retour, garantissant ainsi une plus grande précision et une meilleure sécurité du typage dans votre code.

