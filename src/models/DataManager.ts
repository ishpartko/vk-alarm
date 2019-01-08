import User from './User';

class DataManager {
  private users: User[] | false = false;

  public getVKusers() {
    const $usersList: HTMLCollection = document.getElementsByClassName(
      'ChatSettingsMembersWidget__list',
    );

    if ($usersList.length > 0) {
      this.processMoreUsersButton();
      const $usersData: HTMLCollection = $usersList[0].getElementsByClassName(
        'Entity__main',
      );
      this.users = this.parseDataFromVK($usersData);
    }
    return this.users;
  }

  /**
   * @private
   * @param {HTMLCollection} $usersData
   * @returns {(User[] | false)}
   * @memberof App
   */
  private parseDataFromVK($usersData: HTMLCollection): User[] | false {
    const users: User[] = [];
    if ($usersData.length >= 1) {
      let user = null;
      for (let i = 0; i < $usersData.length; i++) {
        const $user = $usersData[i];

        const $userInfo: HTMLCollectionOf<
          HTMLElementTagNameMap['a']
        > = $user.getElementsByClassName('Link') as HTMLCollectionOf<
          HTMLElementTagNameMap['a']
        >;
        const $description = $user.getElementsByClassName(
          'Entity__description',
        );

        user = new User();
        if ($userInfo.length > 0) {
          const id = $userInfo[0].href.match(
            /(?:https:\/\/vk\.com\/)([a-zA-Z_1-90.]+)/,
          );
          id !== null ? (user.id = id[1]) : false;
        }

        if ($userInfo[0].firstChild) {
          user.name = $userInfo[0].firstChild.textContent;
        }
        if (
          $description[0].textContent !== null &&
          $description[0].textContent !== 'online'
        ) {
          user.online = $description[0].textContent;
        }
        users.push(user);
      }
      return users;
    }
    return false;
  }

  private processMoreUsersButton(): void {
    const $moreButton: HTMLCollectionOf<
      HTMLElement
    > = document.getElementsByClassName(
      'ChatSettingsMembersWidget__more',
    ) as HTMLCollectionOf<HTMLElement>;

    if ($moreButton.length > 0) {
      $moreButton[0].click();
      this.processMoreUsersButton();
    }
  }
}

export default new DataManager();
