<template>
  <div
    id="ExtUI"
    v-if="isShowing"
  >
    <div
      class="ExtUI_minimised"
      v-if="settings.controlls.isHidePressed"
    >
      <button
        class="controlls__button"
        @click="settings.controlls.isHidePressed = false"
        data-title="Развернуть"
      >[]</button>
    </div>
    <div
      class="ExtUI_full"
      v-else
    >
      <div class="settings">
        <div class="settings__target">
          <label
            v-for="option in settings.target.options"
            :key="option.value"
          >
            <input
              type="radio"
              name="target"
              :value="option.value"
              v-model="settings.target.value"
            >
            {{option.label}}
          </label>
        </div>

        <div class="controlls">
          <button
            class="controlls__button"
            @click="settings.controlls.isHidePressed = true"
            data-title="Скрыть"
          >_</button>
          <button
            class="controlls__button"
            @click="settings.controlls.isCrossPressed = true"
            data-title="Закрыть"
          >X</button>
        </div>
      </div>

      <textarea
        class="filteredUserList"
        readonly
        v-model="filteredUserList"
      ></textarea>
    </div>

  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import User from '../User';

interface Settings {
  target: {
    value: number
    options: Array<{
      label: string,
      value: number,
    }>;
  };
  controlls: {
    isCrossPressed: boolean;
    isHidePressed: boolean;
  };
}

@Component({
  methods: {
    setUsers(users: User[]) {
      this.$data.users = users;
      this.$data.settings.controlls.isCrossPressed = false;
    }
  }
})
class UI extends Vue {
  private users: User[] = [];
  private settings: Settings = {
    target: {
      value: 0,
      options: [
        {
          label: 'Все',
          value: 0,
        }, {
          label: 'Пользователи ONLINE',
          value: 1,
        }, {
          label: 'Пользователи OFFLINE',
          value: 2,
        }]
    },
    controlls: {
      isCrossPressed: false,
      isHidePressed: false,
    }
  };

  get isShowing(): boolean {
    return this.users.length > 0 && !this.settings.controlls.isCrossPressed;
  }

  get filteredUsers(): User[] {
    switch (this.settings.target.value) {
      case 0:
        return this.users;
      case 1:
        return this.users.filter((item) => {
          return item.online === true;
        });
      case 2:
        return this.users.filter((item) => {
          return item.online !== true;
        });
      default:
        return this.users;
    }
  }

  get filteredUserList() {
    let usersList = '';
    const filteredUsers = this.filteredUsers;
    filteredUsers.forEach((user) => {
      usersList += user.getAlertText;
    })
    return usersList;
  }
}
export default UI;
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.ExtUI_full,
.ExtUI_minimised {
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 0px;
  right: 60px;
  z-index: 100000;
  background-color: #fff;
  padding: 5px 5px 20px;
  border: #5b88bd 5px solid;
  border-radius: 10px;
}

.ExtUI_full {
  width: 50%;
  height: 50%;
}

.settings__target {
  display: flex;
  flex-direction: column;
}

.filteredUserList {
  width: 100%;
  height: 100%;
  resize: none;
}

.settings {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.controlls {
  position: relative;
  display: flex;
}

.controlls__button:hover::after {
  content: attr(data-title);
  position: absolute; /* Абсолютное позиционирование */
  left: -50%;
  top: -100%; /* Положение подсказки */
  z-index: 1; /* Отображаем подсказку поверх других элементов */
  background: rgba(255, 255, 230, 0.9); /* Полупрозрачный цвет фона */
  font-family: Arial, sans-serif; /* Гарнитура шрифта */
  font-size: 11px; /* Размер текста подсказки */
  padding: 5px 10px; /* Поля */
  border: 1px solid #333; /* Параметры рамки */
}
</style>