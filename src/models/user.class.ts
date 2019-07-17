export class User {
    constructor(public firstName?: string, public lastName?: string,public userName?:string) {
        this.firstName = firstName ? firstName : ""
        this.lastName = lastName ? lastName : ""
        this.userName = userName ? userName : ""
    }
}