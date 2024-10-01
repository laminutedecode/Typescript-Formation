

// fonction generiques

function reverse<T>(array : T[]) : T[]{
    return array.reverse()
}

const nb = [1,2,3,4,5,6]

// :number[]
const nbReverse = reverse(nb)

//  :string[]
const str = ['Hello', "World"]

const strReverse = reverse(str)


// Classes generiques

class Container<T> {
    private value: T;


    constructor(value: T){
        this.value = value;
    }

    getValue() : T {
        return this.value
    }
}


const nbContainer = new Container<number>(10)

console.log(nbContainer.getValue());


const stringContainer = new Container<string>('hello')

console.log(stringContainer.getValue());


// Interface generique


interface DataFetcher<T> {
    fetchData(): T;
}

// class nbFetch implements DataFetcher<number>{
//     fetchData(): number{
//         // logique
//     }
// }


class strFetcher implements DataFetcher<string>{
    fetchData(): string {
        
    }
}