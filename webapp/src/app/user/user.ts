/**
 * Created by hejunji on 13/12/2016.
 */
export class User{
  constructor(
    public id?: string,
    public username?: string,
    public password?: string,
    public accessToken?:string,
    public email?: string){
  }
}
