// En TypeScript, la gestion des erreurs et les exceptions sont importantes pour gérer les situations exceptionnelles ou les erreurs qui peuvent se produire lors de l'exécution d'un programme. Voici une explication détaillée sur la gestion des erreurs en TypeScript :

// Gestion des erreurs avec les instructions try-catch-finally :
// TypeScript, comme JavaScript, utilise l'instruction try-catch-finally pour gérer les erreurs. Vous pouvez entourer un bloc de code susceptible de générer une exception avec l'instruction try. Si une exception est levée dans ce bloc, elle est attrapée par l'instruction catch, qui permet de capturer l'erreur et de gérer le cas d'exception. Enfin, l'instruction finally est utilisée pour exécuter un bloc de code, qu'il y ait eu une exception ou non.

// Voici un exemple :

try {
  // Bloc de code susceptible de générer une exception
  throw new Error("Une erreur s'est produite !");
} catch (e) {
  // Gestion de l'erreur
  console.log("Une erreur s'est produite :");
} finally {
  // Bloc de code exécuté dans tous les cas
  console.log("Fin de la gestion d'erreur.");
}


// Dans cet exemple, nous lançons volontairement une exception avec throw new Error(). L'instruction catch attrape cette exception, et nous pouvons accéder à l'objet d'erreur avec la variable e. Ensuite, nous affichons le message d'erreur dans la console. Enfin, l'instruction finally est utilisée pour exécuter un bloc de code, qu'il y ait eu une exception ou non. Dans cet exemple, nous affichons simplement un message indiquant la fin de la gestion d'erreur.

// Définition de types d'erreurs personnalisés :
// En TypeScript, vous pouvez définir des types d'erreurs personnalisés en utilisant des classes. Cela permet d'organiser et de hiérarchiser les erreurs, et de capturer des informations spécifiques liées à une erreur particulière.

// Voici un exemple :

class MonErreur extends Error {
  constructor(message: string) {
    super(message);
    this.name = "MonErreur";
  }
}

try {
  throw new MonErreur("Une erreur personnalisée s'est produite !");
} catch (e) {
  if (e instanceof MonErreur) {
    console.log("Erreur personnalisée attrapée :", e.message);
  } else {
    console.log("Erreur inattendue :");
  }
}

// Dans cet exemple, nous définissons une classe MonErreur qui étend la classe Error. Nous pouvons ainsi créer une instance de MonErreur avec un message personnalisé et la lancer avec throw. Dans le bloc catch, nous vérifions si l'erreur attrapée est une instance de MonErreur en utilisant l'opérateur instanceof. Ensuite, nous pouvons gérer l'erreur personnalisée différemment des autres types d'erreurs.

// Annotations de type pour les fonctions qui peuvent lever des exceptions :
// En TypeScript, vous pouvez également utiliser des annotations de type pour indiquer quelles exceptions une fonction peut lever. Cela permet de documenter les erreurs potentielles et d'aider les développeurs à comprendre les comportements attendus.

// Voici un exemple :

function diviser(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Division par zéro !");
  }
  return a / b;
}
// Dans cet exemple, la fonction diviser prend deux paramètres a et b. Si b est égal à zéro, nous lançons une exception avec throw. L'annotation de type de retour number indique que la fonction renvoie un nombre.

// La gestion des erreurs en TypeScript vous permet de capturer, de gérer et de documenter les exceptions qui peuvent survenir lors de l'exécution de votre code. Cela vous permet de créer des applications plus robustes et de mieux contrôler les erreurs inattendues.