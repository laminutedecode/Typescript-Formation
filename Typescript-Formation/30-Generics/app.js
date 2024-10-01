"use strict";
// fonction generiques
function reverse(array) {
    return array.reverse();
}
const nb = [1, 2, 3, 4, 5, 6];
// :number[]
const nbReverse = reverse(nb);
//  :string[]
const str = ['Hello', "World"];
const strReverse = reverse(str);
// Classes generiques
class Container {
    constructor(value) {
        this.value = value;
    }
    getValue() {
        return this.value;
    }
}
const nbContainer = new Container(10);
console.log(nbContainer.getValue());
const stringContainer = new Container('hello');
console.log(stringContainer.getValue());
// class nbFetch implements DataFetcher<number>{
//     fetchData(): number{
//         // logique
//     }
// }
class strFetcher {
    fetchData() {
    }
}
