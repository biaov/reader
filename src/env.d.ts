/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

type ToUnionOfFunction<T> = T extends any ? (x: T) => any : never
/**
 * 联合类型转为交叉类型
 */
type UnionToIntersection<T> = ToUnionOfFunction<T> extends (x: infer P) => any ? P : never

declare module 'vite-plugin-eslint'
