/**
 * @export
 * @class User
 */
export default class User {
  id: string | null;
  name: string | null;
  online: string | true;
  marker: string = '&#10071;';

  /**
   *Creates an instance of User.
   * @param {string|null} [id=null]
   * @param {string|null} [name=null]
   * @param {(string | true)} [online=true]
   * @memberof User
   */
  constructor(
    id: string | null = null,
    name: string | null = null,
    online: string | true = true
  ) {
    this.id = id;
    this.name = name;
    this.online = online;
  }

  /**
   * @returns {string}
   * @memberof User
   */
  getAlertText(): string {
    return '@' + this.id + ' (' + this.marker + ')';
  }
}
