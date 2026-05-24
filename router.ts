type Handler<T = any> = (params: T) => any;

export class Router {
  private routes = new Map<string, Handler>();

  get(path: string, handler: Handler) {
    this.routes.set(`GET:${path}`, handler);
  }

  post(path: string, handler: Handler) {
    this.routes.set(`POST:${path}`, handler);
  }

  handle(method: string, path: string, params: any) {
    const key = `${method}:${path}`;
    const handler = this.routes.get(key);

    if (!handler) {
      throw new Error("Route not found");
    }

    return handler(params);
  }
}