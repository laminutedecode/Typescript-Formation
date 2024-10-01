// Les callbacks sont couramment utilisés en JavaScript et TypeScript pour gérer les opérations asynchrones. Lorsqu'une fonction asynchrone est exécutée, elle peut accepter un callback en tant que paramètre, qui sera appelé une fois que l'opération asynchrone est terminée.

// Voici un exemple pour illustrer l'utilisation des callbacks côté asynchrone en TypeScript :

function fetchDataFromAPI(callback: (error: Error | null, data: any) => void) {
  // Simuler une opération asynchrone
  setTimeout(() => {
    try {
      const data = { message: 'Données récupérées depuis l\'API' };
      callback(null, data);
    } catch (error) {
      callback(null, null);
    }
  }, 2000);
}

// Utilisation de la fonction fetchDataFromAPI avec un callback
fetchDataFromAPI((error, data) => {
  if (error) {
    console.error('Une erreur s\'est produite :', error);
  } else {
    console.log('Données récupérées avec succès :', data);
  }
});

// Dans cet exemple, nous déclarons la fonction fetchDataFromAPI qui accepte un callback en tant que paramètre. Le callback est une fonction qui prend un paramètre error de type Error | null et un paramètre data de type any en option. Le callback est appelé une fois que l'opération asynchrone est terminée.

// Dans le corps de la fonction fetchDataFromAPI, nous utilisons setTimeout pour simuler une opération asynchrone qui se termine après une période donnée (dans cet exemple, 2000 millisecondes). Une fois que l'opération est terminée, nous appelons le callback avec null en tant qu'erreur si tout s'est bien passé, et nous passons les données récupérées en tant que deuxième argument. Si une erreur se produit pendant l'opération asynchrone, nous passons cette erreur en tant que premier argument du callback.

// Ensuite, nous utilisons la fonction fetchDataFromAPI en lui passant un callback. Dans le callback, nous vérifions si une erreur s'est produite. Si c'est le cas, nous affichons l'erreur dans la console. Sinon, nous utilisons les données récupérées dans la suite du code.

// Les callbacks côté asynchrone sont une façon courante de gérer les opérations asynchrones en JavaScript et TypeScript, mais ils peuvent entraîner un code en cascade difficile à lire et à maintenir. C'est pourquoi d'autres approches, telles que les promesses et async/await, sont souvent préférées pour gérer les opérations asynchrones de manière plus claire et structurée.