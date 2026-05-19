import { ApiResponse } from "./types";

export async function fakeApiCall<T>(
    data: T,
    delay: number = 1000
): Promise<ApiResponse<T>> {

    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                success: true,
                data
            });
        }, delay);
    });
}