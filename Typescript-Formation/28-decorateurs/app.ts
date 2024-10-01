// Les décorateurs sont une fonctionnalité de TypeScript qui permet d'ajouter des métadonnées et de modifier le comportement des classes, des méthodes, des propriétés et d'autres éléments dans votre code. Les décorateurs sont définis à l'aide du symbole @ suivi du nom du décorateur, qui est une fonction ou une classe.

// Voici un exemple simple pour illustrer l'utilisation des décorateurs en TypeScript :

function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function(this: any, ...args: any[]) {
    console.log(`Méthode ${propertyKey} appelée avec les arguments :`, args);
    const result = originalMethod.apply(this, args);
    console.log(`La méthode ${propertyKey} a renvoyé :`, result);
    return result;
  };

  return descriptor;
}

class MyClass {
  @log
  // rajouter :   "experimentalDecorators": true dans le fichiers tsconfig
  addNumbers(this: any, a: number, b: number): number {
    return a + b;
  }
}

const instance = new MyClass();
const result = instance.addNumbers(2, 3);
console.log('Résultat de l\'addition :', result);


// Dans cette correction, nous ajoutons le paramètre this: any à la déclaration de la méthode addNumbers et à la fonction dans descriptor.value. Cela est nécessaire car les décorateurs modifient le comportement de la méthode, et TypeScript a besoin de savoir quel est le type de this dans le contexte de la méthode.

// En ajoutant this: any, nous indiquons à TypeScript que le type de this est n'importe quel type, ce qui permet d'éviter les erreurs de compilation. Cependant, notez que l'utilisation de this: any peut supprimer certaines vérifications de types, il est donc recommandé de spécifier le type correct pour this si possible.