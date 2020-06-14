import { Vue, Component } from 'vue-property-decorator';
import { AppUrls } from '@/utils/consts';
import debugFactory from '@/utils/debug';

import Card from '@/components/card/card'; // mpvue目前只支持的单文件组件
import CompB from '@/components/compb/compb'; // mpvue目前只支持的单文件组件

const debug = debugFactory('log:Index');

// 必须使用装饰器的方式来指定component
@Component({
  components: {
    Card,
    CompB, //注意，vue的组件在template中的用法，`CompB` 会被转成 `comp-b`
  }
})
class Index extends Vue {
  ver = 123
  AppUrls = AppUrls

  onShow(): void { // 小程序 hook
    debug('onShow');
  }

  mounted(): void { // vue hook
    debug('mounted');
  }

  log(): void {
    {{#router}}
    debug(this.$router, this.$route);
    {{/router}}
    debug('taped me');
  }
}

export default Index;
