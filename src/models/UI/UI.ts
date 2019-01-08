import User from '../User';
import Vue from 'vue/dist/vue.min.js';
import UIvue from './vueUI.vue';

class UI {
  private isShowing: boolean = false;
  private vm: Vue | false;

  constructor() {
    const $UIdiv: HTMLDivElement = document.createElement('div');
    $UIdiv.style.position = 'absolute';
    const $wrapper = document.getElementById('page_wrap');
    if ($wrapper) {
      $wrapper.appendChild($UIdiv);

      // Vue.config.productionTip = true;
      this.vm = new Vue({
        render: (h) => h(UIvue),
      }).$mount($UIdiv);
    } else {
      this.vm = false;
    }
  }

  public showUsers(users: User[]) {
    if (this.vm) {
      this.vm.$children.forEach((inst) => {
        // @ts-ignore: custom function and we cant add it in vue.d.ts
        inst.setUsers(users);
      });
    }
  }
}

export default UI;
