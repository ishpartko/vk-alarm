import User from '../User';
import Vue from 'vue';
import UIvue from './vueUI.vue';

class UI {
  private isShowing: boolean = false;
  private vm: Vue;

  constructor($UInode: HTMLDivElement) {
    this.vm = new Vue({
      render: (h) => h(UIvue),
    }).$mount($UInode);
  }

  public showUsers(users: User[]) {
    this.vm.$children.forEach((inst) => {
      inst.$data.users = users;
    });
    // if (!this.isShowing) {
    //   let allUsers = '';
    //   for (let i = 0; i < users.length; i++) {
    //     allUsers += ' ' + users[i].getAlertText();
    //   }
    //   console.log(allUsers);

    //   const $textArea: HTMLTextAreaElement = document.createElement('textarea');
    //   $textArea.value = allUsers;
    //   this.$UInode.appendChild($textArea);
    //   this.isShowing = true;
    // }
  }
}

export default UI;
