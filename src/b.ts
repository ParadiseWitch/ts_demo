import { Provider } from "./provider";

// FIXME 注入值不应该在生产者(bean)上，而应该在注入的装饰器上
@Provider('b', [10])

export class B {
  p: number;
  constructor(p: number) {
    this.p = p;
  }

  getP() {
    return this.p;
  }
}

