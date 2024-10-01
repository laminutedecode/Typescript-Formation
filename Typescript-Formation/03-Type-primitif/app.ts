// TypeScript offre une prise en charge des types primitifs qui correspond étroitement à celle de JavaScript. Voici une explication détaillée des types primitifs les plus couramment utilisés avec TypeScript :

// number : Le type number est utilisé pour représenter les valeurs numériques, y compris les nombres entiers et à virgule flottante. Par exemple :

let age: number = 30;
let price: number = 9.99;


// string : Le type string est utilisé pour représenter les valeurs de texte. Les chaînes de caractères sont entourées de guillemets simples ('') ou doubles (""). Par exemple :

let nom: string = "John";
let message: string = 'Hello, TypeScript!';

// boolean : Le type boolean représente les valeurs de vérité (vrai ou faux). Par exemple :

let isLogged: boolean = true;
let hasPermission: boolean = false;

// null et undefined : TypeScript inclut les types null et undefined pour représenter l'absence de valeur. Par exemple :

let data: null = null;
let value: undefined = undefined;

// symbol : Le type symbol représente les identifiants uniques et immuables. Il est souvent utilisé comme clé d'une propriété d'objet lorsque cette clé doit être unique. Par exemple :
const id: symbol = Symbol("id");


// bigint : TypeScript prend également en charge le type bigint, qui représente des entiers arbitrairement grands. Il est introduit dans ECMAScript 2020 et est utilisé lorsque les nombres dépassent la plage de number. Par exemple :

// let bigNombre: bigint = 9007199254740991n;


// Ces types primitifs peuvent être utilisés pour annoter les variables et les paramètres de fonction, ce qui permet à TypeScript de détecter les erreurs de typage lors de la compilation. Par exemple, si vous assignez une valeur de type incorrect à une variable typée, TypeScript émettra une erreur. Par ailleurs, TypeScript utilise l'inférence de type pour déduire le type d'une variable lorsque vous ne spécifiez pas explicitement le type.

// En utilisant les types primitifs de TypeScript, vous pouvez renforcer la sûreté du code en détectant les erreurs potentielles à l'étape de compilation, en améliorant ainsi la qualité et la robustesse de vos programmes.