import { Component, Vue } from 'vue-property-decorator';
import debugFactory from '@/utils/debug';

const debug = debugFactory('page2:Index');

// 必须使用装饰器的方式来指定component
@Component
class Index extends Vue {
  ver = 1

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
