/**
 * @export
 * @class User
 */
export default class User {
  public id: string | null;
  public name: string | null;
  public online: string | true;
  public marker: string = '&#10071;';

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
    online: string | true = true,
  ) {
    this.id = id;
    this.name = name;
    this.online = online;
  }

  /**
   * @returns {string}
   * @memberof User
   */
  public get getAlertText(): string {
    return '@' + this.id + ' (' + this.marker + ')';
  }
}
