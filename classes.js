"use strict";
// class Person {
//     name: string;
//     age: number;
//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }
//     greet(): string {
//         return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//     }
// }
// const john = new Person("John Doe", 30);
// console.log(john.greet());
// const bob = new Person("Bob Smith", 25);
// console.log(bob.greet());
// class Employee {
//     public name: string;
//     private salary: number;
//     constructor(name: string, salary: number) {
//         this.name = name;
//         this.salary = salary;
//     }
//     public getDetails(): string {
//         return `Employee: ${this.name}, Salary: ${this.salary}`;
//     }
//     private calculateBonus(): number {
//         return this.salary * 0.1;
//     }
// }
// const emp = new Employee("Alice", 50000);
// console.log(emp.getDetails());
// console.log(emp.calculateBonus());
// class Rectangle {
//     private _width: number;
//     private _height: number;
//     constructor(width: number, height: number) {
//         this._width = width;
//         this._height = height;
//     }
//     get area(): number {
//         return this._width * this._height;
//     }
//     set width(value: number) {
//         if (value <= 0) {
//             throw new Error("Width must be greater than zero.");
//         }
//         this._width = value;
//     }
//     set height(value: number) {
//         if (value <= 0) {
//             throw new Error("Height must be greater than zero.");
//         }
//         this._height = value;
//     }
// }
// let rect = new Rectangle(5, 10);
// console.log(rect.area);
// rect.width = 6;
// console.log(rect.area);
// interface Animal {
//     name: string;
//     makeSound(): void;
// }
// class Dog implements Animal {
//     public name: string;
//     protected breed: string;
//     constructor(name: string, breed: string) {
//         this.name = name;
//         this.breed = breed;
//     }
//     public makeSound(): void {
//         console.log("Woof! Woof!");
//     }
//     protected getBreed(): string {
//         return this.breed;
//     }
// }
// class Labrador extends Dog {
//     constructor(name: string, breed: string) {
//         super(name, breed);
//     }
//     public fetch(): void {
//         console.log(`${this.name} is fetching the ball.`);
//     }
//     public showBreed(): void {
//         console.log(`${this.name} is a ${this.getBreed()}.`);
//     }
// }
// let myDog = new Labrador("Buddy", "Golden Retriever");
// myDog.makeSound();
// myDog.fetch();
// myDog.showBreed();
// console.log(myDog.breed);
