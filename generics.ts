// function identity<T>(arg: T): T {
//     return arg;
// }

// let output1 = identity<string>("myString");
// let output2 = identity<number>(123);
// console.log(output1);
// console.log(output2);

// function getArray<T>(items: T[]): T[] {
//     return new Array<T>().concat(items);
// }

// let numberArray = getArray<number>([1, 2, 3]);
// let stringArray = getArray<string>(["a", "b", "c"]);

// console.log(numberArray);
// console.log(stringArray);

// class GenericNumber<T> {
//     zeroValue: T;
//     add: (x: T, y: T) => T;

//     constructor(zeroValue: T, add: (x: T, y: T) => T) {
//         this.zeroValue = zeroValue;
//         this.add = add;
//     }
// }

// let myGenericNumber = new GenericNumber<number>(0, (x, y) => x + y);

// console.log(myGenericNumber.add(5, 10));

// interface Pair<T, U> {
//     first: T;
//     second: U;
// }

// let numberStringPair: Pair<number, string> = { first: 1, second: "one" };
// console.log(numberStringPair);

// function loggingIdentity<T extends { length: number }>(arg: T): T {
//     console.log(arg.length);
//     return arg;
// }

// loggingIdentity("Hello");
// loggingIdentity([1, 2, 3]);

function createArray<T = string>(length: number, value: T): T[] {
    return Array(length).fill(value);
}

let stringArray = createArray(3, "hello");
let numberArray = createArray<number>(3, 42);
console.log(stringArray);
console.log(numberArray);
