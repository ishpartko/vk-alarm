import User from './models/User';
import ExtInterface from './models/UI/ExtInterface';

/**
 * @class App
 */
class App {
  /**
   *Creates an instance of App.
   * @memberof App
   */

  public builUI(): void {
    setInterval(() => {
      const $existingAlarmInterface = document.getElementById(
        'AlarmUserExtension'
      );
      if ($existingAlarmInterface === null) {
        let $usersList: HTMLCollection = document.getElementsByClassName(
          'ChatSettingsMembersWidget__list'
        );
        if (
          window.location.pathname === '/im' && // User on page of conversations
          window.location.search.search('sel=') >= 0 && // User selected the dialog
          $usersList.length === 1 // We could see the list of users
        ) {
          // Creating an Interface
          const $pageTabList: HTMLCollectionOf<
            HTMLUListElement
          > = document.getElementsByClassName(
            'ChatSettingsMenu'
          ) as HTMLCollectionOf<HTMLUListElement>;
          const inter = new ExtInterface($pageTabList[0]);
        }
      }
    }, 1000);
  }
}

export default new App();
