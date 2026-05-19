export function logger(req: string): void {
    console.log(`[LOG]: ${req}`);
}

export function errorHandler(error: unknown): void {
    if (error instanceof Error) {
        console.error(`[ERROR]: ${error.message}`);
    } else {
        console.error("[ERROR]: Unknown error");
    }
}