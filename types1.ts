export interface User {
    id: number;
    username: string;
    password: string;
    role: "admin" | "user";
}

export interface Product {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
}