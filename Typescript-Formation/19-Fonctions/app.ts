// En TypeScript, les fonctions jouent un rôle essentiel dans le développement d'applications. Elles permettent d'organiser et de réutiliser du code, et elles peuvent prendre des paramètres en entrée et renvoyer des valeurs en sortie. Voici une explication détaillée des fonctions en TypeScript :

// Déclaration de fonction :
// Pour déclarer une fonction en TypeScript, vous pouvez utiliser le mot-clé function, suivi du nom de la fonction et de ses paramètres entre parenthèses. Voici un exemple de déclaration de fonction simple :

function addition(a: number, b: number): number {
    return a + b;
  }
  

//   Dans cet exemple, la fonction addition prend deux paramètres de type number, a et b, et renvoie la somme de ces deux nombres.
// Types des paramètres :
// En TypeScript, vous pouvez spécifier les types des paramètres d'une fonction pour aider à détecter les erreurs de type potentielles lors de l'appel de la fonction. Dans l'exemple précédent, les paramètres a et b sont de type number.
// Type de retour :
// Vous pouvez également spécifier le type de retour d'une fonction en utilisant le caractère deux-points (:) suivi du type. Dans l'exemple précédent, la fonction addition renvoie une valeur de type number.

// Fonctions anonymes :
// En TypeScript, vous pouvez également déclarer des fonctions anonymes, également appelées fonctions fléchées. Ces fonctions sont souvent utilisées comme paramètres pour d'autres fonctions ou pour définir des rappels (callbacks). Voici un exemple :

const multiplication = (a: number, b: number): number => {
    return a * b;
  };
  

//   Dans cet exemple, nous utilisons une fonction anonyme pour déclarer la fonction multiplication. Elle prend deux paramètres de type number, a et b, et renvoie le produit de ces deux nombres.

// Fonctions avec paramètres optionnels :
// Parfois, vous pouvez vouloir que certains paramètres d'une fonction soient optionnels, ce qui signifie qu'ils peuvent être omis lors de l'appel de la fonction. En TypeScript, vous pouvez déclarer des paramètres optionnels en ajoutant un point d'interrogation (?) après le nom du paramètre. Voici un exemple :


function salutation(nom: string, prenom?: string): string {
    if (prenom) {
      return `Bonjour ${nom} ${prenom} !`;
    } else {
      return `Bonjour ${nom} !`;
    }
  }
  

//   Dans cet exemple, la fonction salutation prend le paramètre obligatoire nom de type string et le paramètre optionnel prenom de type string. Si prenom est fourni lors de l'appel de la fonction, la fonction renverra une salutation personnalisée avec le nom et le prénom. Sinon, elle renverra une salutation générique avec seulement le nom.

// Fonctions avec arguments par défaut :
// TypeScript permet également de spécifier des valeurs par défaut pour les paramètres d'une fonction. Cela signifie que si aucun argument n'est fourni pour ces paramètres, les valeurs par défaut seront utilisées à la place. Voici un exemple :

function aireRectangle(longueur: number, largeur: number = 1): number {
    return longueur * largeur;
  }
  

//   Dans cet exemple, la fonction aireRectangle prend le paramètre obligatoire longueur de type number et le paramètre largeur de type number, avec une valeur par défaut de 1. Si seul longueur est fourni lors de l'appel de la fonction, la largeur sera automatiquement 1.


// Fonctions de rappel (Callback functions) :
// En TypeScript, une fonction de rappel est une fonction passée en tant qu'argument à une autre fonction, qui sera appelée ultérieurement lorsque certaines conditions ou événements se produisent. Les fonctions de rappel sont couramment utilisées pour gérer des opérations asynchrones ou pour définir des comportements personnalisés lors d'événements.

// Voici un exemple simple de fonction de rappel :

function effectuerUneAction(callback: () => void): void {
    // Faire quelque chose...
    callback(); // Appeler la fonction de rappel
  }
  
  function maFonctionDeRappel(): void {
    console.log("La fonction de rappel a été appelée !");
  }
  
  effectuerUneAction(maFonctionDeRappel);


//   Dans cet exemple, la fonction effectuerUneAction prend une fonction de rappel callback en paramètre. À l'intérieur de effectuerUneAction, nous faisons quelque chose, puis nous appelons la fonction de rappel. Ensuite, nous définissons la fonction maFonctionDeRappel, qui sera exécutée lorsque callback sera appelée. Lorsque effectuerUneAction est appelée, elle exécutera maFonctionDeRappel et affichera "La fonction de rappel a été appelée !" dans la console.

// Fonctions génériques (Generic functions) :
// Les fonctions génériques en TypeScript permettent de créer des fonctions réutilisables qui peuvent travailler avec différents types de données sans perdre l'information du type spécifique. Elles sont utiles lorsque vous souhaitez créer des fonctions flexibles et génériques qui peuvent être utilisées avec différentes structures de données.

// Voici un exemple de fonction générique qui renverse un tableau :
  
function renverser<T>(tableau: T[]): T[] {
    return tableau.reverse();
  }
  
  const nombres: number[] = [1, 2, 3, 4, 5];
  const nombresRenverses = renverser<number>(nombres);
  console.log(nombresRenverses); // Affiche: [5, 4, 3, 2, 1]
  

//   Dans cet exemple, la fonction renverser est définie avec un type générique T entre les chevrons <T>. Cela signifie que la fonction peut travailler avec n'importe quel type de tableau. En appelant renverser<number>(nombres), nous spécifions que T doit être de type number, puis nous passons le tableau nombres à la fonction renverser. La fonction renvoie un tableau renversé du même type que celui passé en argument.

// Les fonctions génériques offrent une grande flexibilité et permettent de créer des fonctions réutilisables et adaptées à différents types de données sans avoir à réécrire du code spécifique pour chaque type.