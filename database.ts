export class Database<T extends { id: number }> {
    private items: T[] = [];

    create(item: T): T {
        this.items.push(item);
        return item;
    }

    findById(id: number): T | undefined {
        return this.items.find(item => item.id === id);
    }

    findAll(): T[] {
        return [...this.items];
    }

    update(id: number, updatedData: Partial<T>): T | null {
        const item = this.findById(id);

        if (!item) return null;

        Object.assign(item, updatedData);
        return item;
    }

    delete(id: number): boolean {
        const index = this.items.findIndex(item => item.id === id);

        if (index === -1) return false;

        this.items.splice(index, 1);
        return true;
    }
}