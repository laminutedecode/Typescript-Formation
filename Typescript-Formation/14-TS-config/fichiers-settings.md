<!-- Le fichier tsconfig.json est un fichier de configuration utilisé par TypeScript pour définir le comportement du compilateur et spécifier les options de compilation pour un projet TypeScript.

"compilerOptions" : Cette section permet de spécifier les options de compilation pour le projet. Vous pouvez y définir des options telles que la version ECMAScript cible, le chemin de sortie des fichiers JavaScript compilés, le niveau de strictesse du compilateur, les options de module, etc. Par exemple : -->

"compilerOptions": {
  "target": "es2020",
  "module": "commonjs",
  "outDir": "./dist",
  "strict": true
}


<!-- "include" : Cette section spécifie les fichiers ou les patterns de fichiers à inclure dans la compilation. Vous pouvez utiliser des wildcards (*) pour inclure plusieurs fichiers. Par exemple : -->

"include": [
  "src/**/*.ts"
]

<!-- "exclude" : Cette section permet de spécifier les fichiers ou les patterns de fichiers à exclure de la compilation. Cela peut être utile pour exclure des fichiers générés ou des fichiers de bibliothèques tierces. Par exemple : -->

"exclude": [
  "node_modules"
]


<!-- "files" : Cette section permet de spécifier une liste explicite des fichiers à inclure dans la compilation, en utilisant des chemins relatifs ou absolus. Par exemple : -->

"files": [
  "src/main.ts",
  "src/utils.ts"
]


<!-- "extends" : Cette option permet d'étendre une autre configuration TypeScript en utilisant le chemin relatif ou absolu vers un autre fichier tsconfig.json. Cela peut être utile pour réutiliser une configuration de projet existante et en ajouter des spécificités supplémentaires. Par exemple : -->

"extends": "./base/tsconfig.json"

<!-- Le fichier tsconfig.json est généralement placé à la racine du projet TypeScript. Lorsque vous exécutez la commande de compilation TypeScript (tsc), le compilateur utilise automatiquement les options et les fichiers spécifiés dans ce fichier pour générer les fichiers JavaScript correspondants.

Il existe de nombreuses autres options de configuration disponibles dans tsconfig.json. Pour une référence complète des options de configuration, vous pouvez consulter la documentation officielle de TypeScript. -->

// "target": "es6" : spécifie la version de JavaScript que vous souhaitez générer.
// "outDir": "./dist" : spécifie le répertoire de sortie pour les fichiers TypeScript compilés.
// "rootDir": "./src" : spécifie le répertoire source où se trouvent vos fichiers TypeScript.
// "module": "commonjs" : spécifie le système de modules que vous utilisez.
// "strict": true : active les vérifications de type strictes.
// Consultez la documentation officielle de TypeScript pour connaître toutes les options de configuration disponibles : https://www.typescriptlang.org/tsconfig



