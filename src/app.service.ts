import { Injectable } from '@nestjs/common';
import { User } from './models/user.class';
import { UserService } from './user.service';

@Injectable()
export class AppService {

  constructor(private userService: UserService) {

  }

  getHello(): string {
    return 'Hello World!';
  }

  getUsers() {
    return JSON.stringify(this.userService.getUsers())
  }

  signIn(userName) {
    console.log(userName)
    let res = this.userService.authUser(new User("", "", userName))
    if (res.state) {
      let user = this.userService.getUserByUserName(userName)
      return JSON.stringify(
        {
          status: 1,
          message: "user found",
          data: user
        }
      )
    } else
      return JSON.stringify(
        {
          status: -1,
          message: "not found"
        }
      )
  }

  signUp(user: User) {
    let res = this.userService.pushToUsers(user)
    if (res)
      return JSON.stringify({
        status: 1,
        message: "user added successfully",
        data: user

      })
    else
      return JSON.stringify({
        status: -1,
        message: "user name already exist ",

      })
  }
}
