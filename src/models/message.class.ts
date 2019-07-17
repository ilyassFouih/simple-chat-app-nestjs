import { User } from "./user.class";

export class Message {

    constructor(public message?: string, public user?: User) {
        this.message = message ? message : ""
        this.user = user ? user : new User();
    }
}