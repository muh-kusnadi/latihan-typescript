export interface Person {
    name: string;
    age: number;
}

export class Employee implements Person {
    constructor(public name: string, public age: number, public position: string) {}
}
