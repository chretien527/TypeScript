type Constructor<T> = new (...args: any[]) => T;

export class Container {
  private services = new Map<string, any>();

  register<T>(key: string, value: T) {
    this.services.set(key, value);
  }

  registerClass<T>(key: string, clazz: Constructor<T>) {
    const instance = new clazz();
    this.services.set(key, instance);
  }

  resolve<T>(key: string): T {
    if (!this.services.has(key)) {
      throw new Error(`Service not found: ${key}`);
    }
    return this.services.get(key);
  }
}