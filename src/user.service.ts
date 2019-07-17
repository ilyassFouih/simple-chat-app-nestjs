import { Injectable } from '@nestjs/common';
import { User } from './models/user.class';

@Injectable()
export class UserService {

    private users: User[] = []


    authUser(user:User):{state:boolean,user?:User}{
        if(this.checkUserNameExist(user)){
            return {state:true,user:user}
        }else 
            return {state:false}
    }

    getUsers(): User[] {
        return this.users
    }

    pushToUsers(user: User):boolean {
        let res = this.checkUserNameExist(user)
        if(!res){
            this.users.push(user)
            return true
        }else 
        return false
    }

    checkUserNameExist(user: User): boolean {
        let found = false
        this.users.forEach(item => {
            if (user.userName === item.userName)
                found = true
        })

        return found
    }

    getUserByUserName(userName) {
        let user:User=null
        this.users.forEach(item => {
            if ( item.userName===userName)
                user= item
        })
        return user
       
    }

}
