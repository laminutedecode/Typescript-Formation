"use strict";
// Les types personnalisés en TypeScript vous permettent de définir des types spécifiques à votre application. Vous pouvez créer des types personnalisés à l'aide des mots-clés type et interface pour décrire des structures de données complexes ou des combinaisons de types.
const p = { x: 10, y: 20 };
function getUser(id) {
    return {
        id: id,
        name: "John Doe",
        email: "john@example.com"
    };
}
function updateStatus(id, status) {
    // ...
}
// Les types personnalisés (type) ne peuvent pas être étendus ou implémentés. Ils sont souvent utilisés pour définir des combinaisons de types ou des types d'union plus complexes.
// Compatibilité : Les interfaces sont ouvertes à l'extension, ce qui signifie qu'elles peuvent être étendues en ajoutant de nouvelles propriétés. Lorsqu'une interface est utilisée, le type doit correspondre à la structure complète de l'interface.
// Les types personnalisés (type) sont fermés à l'extension, ce qui signifie que chaque utilisation du type doit correspondre exactement à la structure du type personnalisé.
// Utilisation préférentielle : Les interfaces sont généralement utilisées lorsque vous définissez la forme d'un objet ou d'un contrat entre différentes parties du code.
// Les types personnalisés (type) sont souvent utilisés pour créer des combinaisons de types, des types d'union, des alias de types et des types complexes qui ne peuvent pas être exprimés uniquement avec des interfaces.
// Dans la plupart des cas, vous pouvez choisir d'utiliser une interface ou un type personnalisé (type) en fonction de vos besoins spécifiques. Il est courant d'utiliser les interfaces pour décrire des structures de données et les types personnalisés pour définir des combinaisons de types ou des types plus complexes. Cependant, il convient de noter que les interfaces et les types personnalisés peuvent être utilisés de manière interchangeable dans de nombreux cas.
