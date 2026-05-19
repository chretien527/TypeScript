import { User } from "./types";

export class AdminManager {

    deleteUser(users: User[], userId: number): User[] {
        return users.filter(user => user.id !== userId);
    }

    promoteUser(user: User): User {
        user.role = "admin";
        return user;
    }
}