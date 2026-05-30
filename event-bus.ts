type Listener<T> = (data: T) => void;

export class EventBus {
    private events = new Map<string, Listener<any>[]>();

    on<T>(event: string, callback: Listener<T>): void {
        const listeners = this.events.get(event) || [];

        listeners.push(callback);

        this.events.set(event, listeners);
    }

    emit<T>(event: string, data: T): void {
        const listeners = this.events.get(event);

        if (!listeners) {
            return;
        }

        listeners.forEach(listener => listener(data));
    }

    off(event: string): void {
        this.events.delete(event);
    }
}