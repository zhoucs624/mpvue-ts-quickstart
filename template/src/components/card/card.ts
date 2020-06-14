import { Vue, Component, Prop } from 'vue-property-decorator';
import debugFactory from '@/utils/debug';

const debug = debugFactory('log:Comp/CompB');

// 必须使用装饰器的方式来指定component
@Component({
  // props: {
  //   text: String
  // }
})
class CompB extends Vue {
  @Prop({ default: '1' }) //注意用法！
  text!: string;

  ver = 1;

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

export default CompB;
