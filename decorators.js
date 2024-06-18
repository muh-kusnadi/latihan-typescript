"use strict";
// function logClass(constructor: Function) {
//     console.log(`Class ${constructor.name} is being created`);
// }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// @logClass
// class Greeter {
//     greeting: string;
//     constructor(message: string) {
//         this.greeting = message;
//     }
//     greet() {
//         return `Hello, ${this.greeting}`;
//     }
// }
// let greeter = new Greeter("world");
// console.log(greeter.greet());
// function logProperty(target: any, propertyKey: string) {
//     let value = target[propertyKey];
//     const getter = () => value;
//     const setter = (newVal: string) => {
//         console.log(`Changing value of ${propertyKey} from ${value} to ${newVal}`);
//         value = newVal;
//     };
//     Object.defineProperty(target, propertyKey, {
//         get: getter,
//         set: setter,
//         enumerable: true,
//         configurable: true
//     });
// }
// class User {
//     @logProperty
//     public name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
// }
// const user = new User("Alice");
// user.name = "Bob"; 
// console.log(user.name);
// function logMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor): void {
//     const originalMethod = descriptor.value;
//     descriptor.value = function (...args: any[]) {
//         console.log(`Method ${propertyKey} is called`);
//         return originalMethod.apply(this, args);
//     };
// }
// class SimpleCalculator {
//     @logMethod
//     add(a: number, b: number): number {
//         return a + b;
//     }
// }
// const calculator = new SimpleCalculator();
// console.log(calculator.add(2, 3));
function logParameter(target, propertyKey, parameterIndex) {
    console.log(`Log parameter on ${propertyKey} at position ${parameterIndex}`);
}
class Greeter {
    constructor(message) {
        this.greeting = message;
    }
    greet(name) {
        return `Hello, ${name}`;
    }
}
__decorate([
    __param(0, logParameter),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], Greeter.prototype, "greet", null);
let greeter = new Greeter("world");
greeter.greet("John"); // Output: Log parameter on greet at position 0
