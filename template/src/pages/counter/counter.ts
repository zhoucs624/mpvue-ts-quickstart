import { Component, Vue } from 'vue-property-decorator';
import { AppUrls } from '@/utils/consts';
import debugFactory from '@/utils/debug';

import store from './store';
const debug = debugFactory('log:Page/Counter');

@Component
export default class Counter extends Vue {
  AppUrls = AppUrls;
  // computed
  get count(): number {
    return store.state.count;
  }

  increment(): void {
    debug('hello4');
    store.commit('increment');
  }

  decrement(): void {
    store.commit('decrement');
  }
}
