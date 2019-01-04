(function() {
  document.body.style.border = '5px solid red';
  class User {
    id: string;
    name: string;
    online: string | true;
    marker: string = '&#10071;';
    constructor(
      id: string = undefined,
      name: string = undefined,
      online: string | true = true
    ) {
      this.id = id;
      this.name = name;
      this.online = online;
    }

    getAlertText() {
      return '@' + this.id + ' (' + this.marker + ')';
    }
  }

  try {
    var users: User[] = [];

    function activate() {
      setTimeout(function() {
        console.log('activate');
        var $usersList = document.getElementsByClassName(
          'ChatSettingsMembersWidget__list'
        );
        var $usersData = $usersList[0].getElementsByClassName('Entity__main');
        if ($usersData.length >= 1) {
          console.log($usersData);

          let user = null;
          for (var i = 0; i < $usersData.length; i++) {
            var $user = $usersData[i];

            var $userInfo = ($user.getElementsByClassName(
              'Link'
            ) as unknown) as HTMLElementTagNameMap['a'];
            var $description = $user.getElementsByClassName(
              'Entity__description'
            );
            user = new User();
            user.id = $userInfo[0].href.match(
              /(?:https:\/\/vk\.com\/)([a-zA-Z_1-90.]+)/
            )[1];
            user.name = $userInfo[0].firstChild.textContent;
            user.online =
              $description[0].textContent === 'online'
                ? true
                : $description[0].textContent;
            users.push(user);
          }
          console.log(users);
        }
      }, 2000);
    }

    console.log('init done');
    var $membersButton = document.getElementsByClassName(
      '_im_chat_members im-page--members'
    );
    console.log($membersButton);
    if ($membersButton.length >= 1) {
      $membersButton[0].addEventListener('click', activate);
    }
  } catch (error) {
    console.error(error);
  }
})();
