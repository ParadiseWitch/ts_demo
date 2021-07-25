import { A } from './a';
import { Container } from './container';
import { load } from './load';
import { Provider } from './provider';

// 初始化 IOC 容器，扫描文件
const container = Container.getIntance();

load(container);

console.log(container);


const a: A = container.get('a');
console.log(container.get('a')); // A => { b: B { p: 10 } }
console.log(container.get('b')); //B { p: 10 }
console.log(a.getBp()); 

