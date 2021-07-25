// load.ts
import * as fs from 'fs';
import { CLASS_KEY } from './provider';
import { Container } from './container';

export function load(container: Container) { // container 为全局的 IoC 容器
  // TODO bean扫描路径，应为根目录递归
  const list = fs.readdirSync('./src/');
  console.log(list);
  
  for (const file of list) {
    if (/\.ts$/.test(file)) { // 扫描 ts 文件
      const exports = require(`./${file}`);
      for (const m in exports) {
        const module = exports[m];
        if (typeof module === 'function') {
          const metadata = Reflect.getMetadata(CLASS_KEY, module);
          // 注册实例
          if (metadata) {            
            container.bind(metadata.id, module, metadata.args)
          }
        }
      }
    }
  }
}
