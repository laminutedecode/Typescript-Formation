// Définition de l'interface `Student`
interface Student {
  name: string;
  age: number;
  grade: number;
}

// Création d'objets étudiant conformes à l'interface `Student`
const student1: Student = {
  name: 'Alice',
  age: 20,
  grade: 85
};

const student2: Student = {
  name: 'Bob',
  age: 22,
  grade: 90
};

// Affichage des informations des étudiants
console.log('Informations étudiant 1:');
console.log('Nom:', student1.name);
console.log('Âge:', student1.age);
console.log('Note:', student1.grade);

console.log('Informations étudiant 2:');
console.log('Nom:', student2.name);
console.log('Âge:', student2.age);
console.log('Note:', student2.grade);


// Dans cet exercice, nous définissons une interface Student qui spécifie les propriétés name, age et grade. Ensuite, nous créons deux objets student1 et student2 qui respectent cette interface en définissant les valeurs correspondantes pour chaque propriété.

// Ensuite, nous affichons les informations des étudiants en accédant aux propriétés de chaque objet étudiant (student1.name, student1.age, student1.grade, etc.).

// Lorsque vous exécutez le code, vous devriez obtenir les informations des étudiants affichées dans la console.

// Cet exercice vous permet de comprendre comment créer et utiliser des interfaces avec TypeScript pour définir la structure des objets. Vous pouvez personnaliser l'exercice en ajoutant d'autres propriétés à l'interface Student ou en créant plus d'objets étudiant pour pratiquer davantage avec les interfaces de TypeScript.