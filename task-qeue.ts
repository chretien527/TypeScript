export class TaskQueue {
    private queue: (() => Promise<void>)[] = [];
    private running = false;

    add(task: () => Promise<void>): void {
        this.queue.push(task);

        if (!this.running) {
            this.process();
        }
    }

    private async process(): Promise<void> {
        this.running = true;

        while (this.queue.length > 0) {
            const task = this.queue.shift();

            if (task) {
                await task();
            }
        }

        this.running = false;
    }
}e