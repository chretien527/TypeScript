export class CacheManager<T> {
    private cache = new Map<
        string,
        {
            value: T;
            expiresAt: number;
        }
    >();

    set(key: string, value: T, ttl: number): void {
        this.cache.set(key, {
            value,
            expiresAt: Date.now() + ttl,
        });
    }

    get(key: string): T | null {
        const item = this.cache.get(key);

        if (!item) {
            return null;
        }

        if (Date.now() > item.expiresAt) {
            this.cache.delete(key);
            return null;
        }

        return item.value;
    }

    delete(key: string): boolean {
        return this.cache.delete(key);
    }

    clear(): void {
        this.cache.clear();
    }
}