import { Vue } from 'vue-property-decorator';

declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}

declare module 'Vue/types/vue' {
  interface Vue {
    $mp: Record<string, unknown>;
    {{#router}}
    $router: Record<string, unknown>;
    $route: Record<string, unknown>;
    {{/router}}
  }
}
