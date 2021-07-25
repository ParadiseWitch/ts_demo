// a.ts
import { Container } from './container';
import { Inject } from './inject';
import { Provider } from './provider';
import { B } from './b';


@Provider('a')
export class A {
  @Inject()
  b: B | undefined;

  getB(): B | undefined {
    return this.b;
  }
  getBp() {
    return this.getB()?.getP();
  }

}



