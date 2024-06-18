// interface User {
//     name: string;
//     age: number;
//     email: string;
// }

// function updateUser(user: User, fieldsToUpdate: Partial<User>) {
//     return { ...user, ...fieldsToUpdate };
// }

// const user1: User = {
//     name: "John",
//     age: 25,
//     email: "john@example.com"
// };

// const updatedUser = updateUser(user1, { age: 26 });
// console.log(updatedUser);

// interface User {
//     name: string;
//     age?: number;
//     email?: string;
// }

// const user2: Required<User> = {
//     age: 30,
//     email: "alice@example.com"
// };

// console.log(user2);

// interface User {
//     name: string;
//     age: number;
//     email: string;
// }

// const user3: Readonly<User> = {
//     name: "Bob",
//     age: 40,
//     email: "bob@example.com"
// };

// user3.age = 41;

// type Role = "admin" | "user" | "guest";

// interface UserPermissions {
//     canEdit: boolean;
//     canView: boolean;
// }

// const permissions: Record<Role, UserPermissions> = {
//     admin: { canEdit: true, canView: true },
//     user: { canEdit: false, canView: true },
//     guest: { canEdit: false, canView: false },
// };

// console.log(permissions);

// interface User {
//     name: string;
//     age: number;
//     email: string;
// }

// type UserContactInfo = Pick<User, "name" | "email">;

// const userContact: UserContactInfo = {
//     name: "Charlie",
//     email: "charlie@example.com"
// };
// console.log(userContact);

// interface User {
//     name: string;
//     age: number;
//     email: string;
// }

// type UserWithoutEmail = Omit<User, "email">;

// const userWithoutEmail: UserWithoutEmail = {
//     name: "Dave",
//     age: 35
// };

// console.log(userWithoutEmail);

// type AllColors = "red" | "green" | "blue" | "yellow";
// type PrimaryColors = Exclude<AllColors, "yellow">;

// const primaryColor: PrimaryColors = "yellow";
// console.log(primaryColor);

// type AllColors = "red" | "green" | "blue" | "yellow";
// type PrimaryColors = Extract<AllColors, "red" | "blue">;

// const primaryColor: PrimaryColors = "green";
// console.log(primaryColor);

// type MaybeNumber = number | null | undefined;
// type DefiniteNumber = NonNullable<MaybeNumber>;

// const DefiniteNumber: DefiniteNumber = null;
// console.log(DefiniteNumber);