import { A } from './a';
import { Container } from './container';
import { load } from './load';

// 初始化 IOC 容器，扫描文件
const container = Container.getInstance();

load(container);

console.log(container);


const a: A = container.get('a');
console.log(a); // A => { b: B { p: 10 } }
console.log(container.get('b')); //B { p: 10 }
console.log(a.getBp()); 

