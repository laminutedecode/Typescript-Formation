Installation de TypeScript : Tout d'abord, vous devez installer TypeScript sur votre machine. Vous pouvez le faire en utilisant le gestionnaire de packages npm (Node Package Manager) en exécutant la commande suivante dans votre terminal :

npm install -g typescript

Cela installe TypeScript globalement sur votre système.

Initialisation du projet : Après avoir installé TypeScript, vous pouvez initialiser un nouveau projet TypeScript en créant un répertoire pour votre projet et en vous déplaçant dans ce répertoire via le terminal. Ensuite, exécutez la commande suivante pour créer un fichier de configuration TypeScript (tsconfig.json) :npm 

tsc --init

Cela génère un fichier tsconfig.json avec des options de configuration par défaut.

Configuration du fichier tsconfig.json : Le fichier tsconfig.json est utilisé pour configurer les options de compilation TypeScript pour votre projet. Vous pouvez l'ouvrir et ajuster les options en fonction des besoins de votre projet. Voici quelques options courantes que vous pouvez configurer :


Compilation du code TypeScript : Une fois que vous avez configuré le fichier tsconfig.json, vous pouvez compiler votre code TypeScript en exécutant simplement la commande suivante dans le terminal :


tsc

Cela va compiler tous les fichiers TypeScript du répertoire source (rootDir) selon les options de configuration spécifiées dans le fichier tsconfig.json. Les fichiers JavaScript compilés seront générés dans le répertoire de sortie (outDir) spécifié.

Utilisation des fichiers TypeScript dans votre projet : Une fois que le code TypeScript est compilé en JavaScript, vous pouvez utiliser les fichiers JavaScript générés dans votre projet. Vous pouvez les inclure dans votre page HTML ou les importer dans d'autres fichiers JavaScript, selon votre configuration de module.

Suivi des modifications automatiques : Si vous souhaitez que TypeScript surveille automatiquement les modifications de vos fichiers TypeScript et les recompile à chaque modification, vous pouvez exécuter la commande suivante dans le terminal :

tsc --watch

Cela démarrera le mode de surveillance, où TypeScript surveillera les modifications des fichiers TypeScript et recompilera automatiquement le code lorsque des modifications sont détectées.

