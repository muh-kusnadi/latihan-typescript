// function logClass(constructor: Function) {
//     console.log(`Class ${constructor.name} is being created`);
// }

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

function logParameter(target: any, propertyKey: string, parameterIndex: number) {
    console.log(`Log parameter on ${propertyKey} at position ${parameterIndex}`);
}

class Greeter {
    greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }

    greet(@logParameter name: string): string {
        return `Hello, ${name}`;
    }
}

let greeter = new Greeter("world");
greeter.greet("John"); // Output: Log parameter on greet at position 0
