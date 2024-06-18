// function riskyOperation(): void {
//     throw new Error("Something went wrong!");
// }

// try {
//     riskyOperation();
// } catch (error: unknown) {
//     if (error instanceof Error) {
//         console.error("An error occurred:", error.message);
//     } else {
//         console.error("An unknown error occurred");
//     }
// }

class CustomError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "CustomError";
    }
}

function riskyOperation(): void {
    throw new CustomError("Something went wrong in the risky operation!");
}

try {
    riskyOperation();
} catch (error) {
    if (error instanceof CustomError) {
        console.error("CustomError caught:", error.message);
    } else if (error instanceof Error) {
        console.error("Standard error caught:", error.message);
    } else {
        console.error("An unknown error occurred");
    }
}
