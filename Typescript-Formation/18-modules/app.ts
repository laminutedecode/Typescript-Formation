// Importation d'un module :
// Pour utiliser les éléments d'un module dans un autre fichier, vous devez les importer. Vous pouvez importer un module à l'aide du mot-clé import. Par exemple, supposons que nous ayons un fichier app.ts où nous voulons utiliser les fonctions du module math :

// app.ts
import { sum, subtract } from './math';

console.log(sum(5, 3)); // Output: 8
console.log(subtract(10, 4)); // Output: 6


// Dans cet exemple, nous avons importé les fonctions sum et subtract du module math à l'aide de la syntaxe {}. Nous avons également spécifié le chemin relatif du fichier math.ts en utilisant './math'.


// #########02

import multiply from './math';

console.log(multiply(4, 6)); // Output: 24


// Dans cet exemple, nous avons exporté la fonction multiply comme élément par défaut du module math. Lors de l'importation, nous n'avons pas besoin d'utiliser les accolades {} car il n'y a qu'un seul élément exporté par défaut.



// #########03

// app.ts
import { Geometry } from './math';

console.log(Geometry.calculateCircumference(5)); // Output: 31.41592653589793
console.log(Geometry.calculateArea(5)); // Output: 78.53981633974483


// Dans cet exemple, nous avons utilisé le namespace Geometry pour regrouper les fonctions liées à la géométrie. Nous avons ensuite importé le namespace Geometry dans app.ts et utilisé les fonctions à l'intérieur du namespace.

// Les modules en TypeScript permettent de découper votre code en unités logiques, de réutiliser du code entre différents fichiers et de simplifier la gestion de projets complexes. Ils facilitent également la collaboration entre développeurs en isolant les fonctionnalités dans des modules distincts.