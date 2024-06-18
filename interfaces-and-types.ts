// interface Person {
//     name: string;
//     age: number;
// }
// const john: Person = {
//     name: "John Doe",
//     age: 25
// };
// console.log(john);

// interface Address {
//     street: string;
//     city: string;
//     country: string;
// }
// interface User {
//     username: string;
//     email: string;
//     address: Address;
// }
// const user: User = {
//     username: "alice123",
//     email: "alice@example.com",
//     address: {
//         street: "123 Main St",
//         city: "Wonderland",
//         country: "Fantasy"
//     }
// };
// console.log(user);

// interface Person {
//     name: string;
//     age?: number;
// }
// const jane: Person = {
//     name: "Jane Doe"
// };
// console.log(jane);

interface Car {
    readonly brand: string;
    model: string;
}
const myCar: Car = {
    brand: "Toyota",
    model: "Corolla"
};
console.log(myCar);
// myCar.brand = "Honda";
// myCar.model = "Civic";
// console.log(myCar);
