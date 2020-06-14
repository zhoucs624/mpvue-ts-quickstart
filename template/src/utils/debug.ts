type IDebugFactoryType = 'log' | 'warn' | 'error' | 'info'

export default function debugFactory(name: string, type: IDebugFactoryType = 'log') {
  return function (...args: any[]): void {
    console[type].apply(console, [name, ... args]);
  };
}
