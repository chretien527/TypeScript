import { User } from "./types";

export class AuthService {
    private loggedInUsers: Set<number> = new Set();

    login(user: User, password: string): boolean {
        if (user.password === password) {
            this.loggedInUsers.add(user.id);
            return true;
        }

        return false;
    }

    logout(userId: number): void {
        this.loggedInUsers.delete(userId);
    }

    isAuthenticated(userId: number): boolean {
        return this.loggedInUsers.has(userId);
    }
}