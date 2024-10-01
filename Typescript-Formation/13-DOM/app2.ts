// Le casting, également connu sous le nom de conversion de type, fait référence au fait de changer le type d'une valeur d'une certaine façon. En TypeScript, le casting est utilisé pour indiquer au compilateur que vous savez que le type d'une valeur est plus précis que ce que le système de types peut déduire.

// Il existe deux façons principales de réaliser un casting de type en TypeScript :

// Casting "angle-bracket" :

// Utilise la syntaxe <Type>valeur pour effectuer un casting de type.
// Cette syntaxe est héritée des versions antérieures de TypeScript.

const variable: any = "123";
const nombre: number = <number>variable;


// Dans cet exemple, nous avons une variable variable de type any, qui est un type dynamique qui échappe aux vérifications de type. Nous souhaitons maintenant la convertir en un type plus précis, à savoir number. Nous utilisons donc le casting "angle-bracket" <number> pour indiquer au compilateur que nous savons que variable est en réalité un nombre.

// Casting "as" :

// Utilisez la syntaxe valeur as Type pour effectuer un casting de type.
// Cette syntaxe est recommandée et préférée dans les nouveaux projets TypeScript.

const variable2: any = "123";
const nombre2: number = variable2 as number;
// Dans cet exemple, nous utilisons le casting "as" pour convertir variable en number. Cette syntaxe est plus concise et est recommandée dans la plupart des cas.

// Il est important de noter que le casting de type ne modifie pas réellement le type de la valeur. Il informe simplement le compilateur de traiter la valeur comme étant du type spécifié. Si le casting est incorrect et que la valeur n'est pas du type attendu, cela peut entraîner des erreurs d'exécution.

// Le casting de type doit être utilisé avec prudence et seulement lorsque vous avez une connaissance plus précise du type réel d'une valeur que ce que le système de types peut déduire. Vous devez vous assurer que le casting est correct au moment de l'exécution pour éviter les erreurs.

// En général, il est préférable de laisser le système de types inférer automatiquement les types autant que possible, car cela offre une meilleure sécurité de type. Le casting de type doit être utilisé avec parcimonie et lorsque cela est nécessaire pour traiter des valeurs spécifiques d'une manière plus précise.