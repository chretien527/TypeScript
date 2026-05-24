type Context = {
  data: any;
};

type Middleware = (ctx: Context, next: () => Promise<void>) => Promise<void>;

export class MiddlewarePipeline {
  private middlewares: Middleware[] = [];

  use(mw: Middleware) {
    this.middlewares.push(mw);
  }

  async run(initialData: any) {
    const ctx: Context = { data: initialData };

    let index = -1;

    const dispatch = async (i: number): Promise<void> => {
      if (i <= index) return;
      index = i;

      const mw = this.middlewares[i];
      if (!mw) return;

      await mw(ctx, () => dispatch(i + 1));
    };

    await dispatch(0);
    return ctx;
  }
}