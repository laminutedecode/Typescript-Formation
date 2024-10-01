// Importer des éléments depuis un module :
// Une fois que vous avez exporté des éléments depuis un module, vous pouvez les importer dans un autre fichier pour les utiliser. Il existe différentes façons d'importer des éléments en TypeScript :

// Importation par défaut (default import) : Pour importer un élément exporté par défaut, vous pouvez utiliser n'importe quel nom que vous souhaitez. Voici un exemple :

import maFonction from "./monModule";

// Importation nommée (named import) : Pour importer des éléments exportés nommément, vous devez utiliser le nom exact de l'élément exporté. Voici un exemple :
import { maFonction1, maVariable } from "./monModule";

// Importation de tous les éléments (import * as) : Vous pouvez également importer tous les éléments exportés d'un module dans un objet avec un alias. Voici un exemple :
import * as monModule from "./monModule";

// Exporter et importer un module complet :
// En plus d'exporter et d'importer des éléments spécifiques, vous pouvez également exporter et importer des modules entiers. Pour cela, vous devez utiliser les mots-clés export et import sans spécifier d'éléments particuliers. Voici un exemple :


// ####3
// Dans un autre fichier
// import * as monModule from "./monModule";



// Dans cet exemple, nous exportons les éléments maFonction1 et maVariable du fichier monModule.ts en utilisant export { maFonction1, maVariable }. Ensuite, nous importons l'ensemble du module en utilisant import * as monModule from "./monModule". Cela permet d'accéder à tous les éléments exportés via l'objet monModule.

// Utilisation de modules externes provenant de bibliothèques tierces :
// TypeScript prend également en charge l'importation de modules externes provenant de bibliothèques tierces. Ces modules externes peuvent être des packages npm installés dans votre projet. Vous pouvez utiliser le gestionnaire de packages npm pour installer les bibliothèques nécessaires et les importer dans votre code TypeScript.

// Voici un exemple d'importation d'un module externe :

// import moment from "moment";
// const date = moment().format("YYYY-MM-DD");


// Dans cet exemple, nous importons la bibliothèque moment à partir des modules externes installés via npm. Nous pouvons ensuite utiliser les fonctionnalités de moment dans notre code.

// L'utilisation des modules externes import/export en TypeScript facilite l'organisation du code, la réutilisation des fonctionnalités et la gestion des dépendances avec des bibliothèques tierces. Cela permet de créer des applications modulaires et maintenables.



