<template>
  <div
    class="ExtUI"
    v-if="isShowing"
  >
    <p>
      {{users}}
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import User from '../User';

@Component
class UI extends Vue {
  private users: User[] = [];
  get isShowing(): boolean {
    return this.users.length > 0;
  }
}
export default UI;
</script>

<style scoped>
.ExtUI {
  display: flex;
}
</style>