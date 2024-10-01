// Définition de la fonction `calculerSomme` avec un tableau de nombres en paramètre
function calculerSomme(numbers: number[]): number {
    let sum = 0; // Variable pour stocker la somme, initialisée à 0
  
    for (let number of numbers) {
      sum += number; // Ajoute chaque nombre à la somme
    }
  
    return sum; // Renvoie la somme calculée
  }
  
  // Exemple d'utilisation de la fonction
  const numbersArray = [1, 2, 3, 4, 5];
  const result = calculerSomme(numbersArray);
  
  console.log('Résultat :', result); // Affiche "Résultat : 15"

//   Dans cet exercice, nous utilisons une boucle for-of pour parcourir chaque élément du tableau et les ajouter à la variable sum qui stocke la somme totale. Ensuite, nous renvoyons la valeur de sum.

// Lorsque vous exécutez le code, vous devriez obtenir la somme des nombres dans le tableau (dans cet exemple, la somme de 1 + 2 + 3 + 4 + 5 est égale à 15). Les commentaires ajoutés dans le code expliquent chaque étape pour faciliter la compréhension.
  