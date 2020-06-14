import { Vue, Component } from 'vue-property-decorator';
import debugFactory from '@/utils/debug';

const debug = debugFactory('log:App');

// 必须使用装饰器的方式来指定components
@Component({
  mpType: 'app', // mpvue特定
} as any)
class App extends Vue {
  // app hook
  onLaunch(): void {
    const opt = this.$root.$mp.appOptions;
    debug('onLaunch', opt);
  }

  onShow(): void {
    debug('onShow');
  }

  onHide(): void {
    debug('onHide');
  }

  mounted(): void { // vue hook
    debug('mounted');
  }
}

export default App;
