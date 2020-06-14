import { Vue, Component } from 'vue-property-decorator';
import Card from '@/components/card/card';
import { AppUrls } from '@/utils/consts';
import debugFactory from '@/utils/debug';

const debug = debugFactory('log:PackageA/Index');
// 必须使用装饰器的方式来指定component
@Component({
  components: {
    Card,
  },
})
class Index extends Vue {
  AppUrls = AppUrls;
  ver = 123;

  onShow(): void {
    // 小程序 hook
    debug('onShow');
  }

  mounted(): void {
    // vue hook
    debug('mounted');
  }
}

export default Index;
