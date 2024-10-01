// Définition de l'enum `Month` avec les mois de l'année
enum Month {
  January = 1,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December
}

// Définition de la fonction `nombreJoursDansMois` avec un paramètre de type `Month`
function nombreJoursDansMois(month: Month): number {
  switch (month) {
    case Month.January:
    case Month.March:
    case Month.May:
    case Month.July:
    case Month.August:
    case Month.October:
    case Month.December:
      return 31;
    case Month.April:
    case Month.June:
    case Month.September:
    case Month.November:
      return 30;
    case Month.February:
      return 28; // Supposons une année non bissextile pour simplifier l'exemple
    default:
      throw new Error('Mois invalide');
  }
}

// Exemple d'utilisation de la fonction
const month = Month.March;
const days = nombreJoursDansMois(month);

console.log(`Le mois ${Month[month]} a ${days} jours.`);


// Dans cet exercice, nous définissons un enum Month qui représente les mois de l'année. Chaque mois est associé à une valeur numérique. Ensuite, nous définissons une fonction nombreJoursDansMois qui prend en paramètre un mois de type Month. À l'aide d'une instruction switch, nous déterminons le nombre de jours dans le mois en fonction de la valeur du paramètre month.

// Lorsque vous exécutez le code, vous devriez obtenir le nombre de jours dans le mois spécifié (dans cet exemple, le mois de mars a 31 jours). Le nom du mois est obtenu à partir de l'enum Month en utilisant Month[month].