// Définition de la fonction `inverserChaine` avec une chaîne de caractères en paramètre
function inverserChaine(str: string): string {
  let reversedStr = ''; // Variable pour stocker la chaîne inversée

  // Parcours de la chaîne de caractères en sens inverse
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i]; // Ajoute chaque caractère à la chaîne inversée
  }

  return reversedStr; // Renvoie la chaîne inversée
}

// Exemple d'utilisation de la fonction
const message = 'Hello, TypeScript!';
const reversedMessage = inverserChaine(message);

console.log('Chaîne inversée :', reversedMessage); // Affiche "!tpircseT ,olleH"


// Dans cet exercice, nous utilisons une boucle for pour parcourir la chaîne de caractères en sens inverse, en commençant par l'index le plus élevé (str.length - 1) jusqu'à l'index 0. À chaque itération, nous ajoutons le caractère correspondant à la variable reversedStr, ce qui permet de construire la chaîne inversée. Ensuite, nous renvoyons la valeur de reversedStr.

// Lorsque vous exécutez le code, vous devriez obtenir la chaîne de caractères inversée (dans cet exemple, la chaîne "Hello, TypeScript!" devient "!tpircseT ,olleH"). Les commentaires ajoutés dans le code expliquent chaque étape pour faciliter la compréhension.