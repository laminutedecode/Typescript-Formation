// Définition de la fonction `calculerDistances` avec un tableau de tuples `(x, y)` en paramètre
function calculerDistances(points: [number, number][]): number[] {
  const distances: number[] = []; // Tableau pour stocker les distances

  for (let point of points) {
    const distance = Math.sqrt(point[0] ** 2 + point[1] ** 2); // Calcul de la distance avec le théorème de Pythagore
    distances.push(distance); // Ajoute la distance au tableau
  }

  return distances; // Renvoie le tableau des distances
}

// Exemple d'utilisation de la fonction
const pointsArray: [number, number][] = [
  [1, 2],
  [-3, 4],
  [0, 0],
  [5, -1]
];

const distancesArray = calculerDistances(pointsArray);

console.log('Distances:', distancesArray); // Affiche les distances des points par rapport à l'origine


// Dans cet exercice, nous définissons une fonction calculerDistances qui prend un tableau de tuples (x, y) en paramètre. À l'aide d'une boucle for-of, nous itérons sur chaque tuple et calculons la distance de chaque point par rapport à l'origine en utilisant le théorème de Pythagore (Math.sqrt(point[0] ** 2 + point[1] ** 2)). Nous stockons ensuite les distances calculées dans le tableau distances.

// Lorsque vous exécutez le code, vous devriez obtenir un tableau distancesArray contenant les distances de chaque point par rapport à l'origine. Dans cet exemple, les distances sont calculées pour les points (1, 2), (-3, 4), (0, 0), et (5, -1).

