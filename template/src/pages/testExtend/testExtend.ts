import { Component, Mixins } from 'vue-property-decorator';
import debugFactory from '@/utils/debug';

import BaseComp from './base';

const debug = debugFactory('log:Index');

// 必须使用装饰器的方式来指定component
@Component
class Index extends Mixins(BaseComp) {
  testFun2(): void {
    console.log('testFun2');
  }
  onShow(): void { // 小程序 hook
    debug('onShow');
  }

  mounted(): void { // vue hook
    debug('mounted');
  }
}

export default Index;
