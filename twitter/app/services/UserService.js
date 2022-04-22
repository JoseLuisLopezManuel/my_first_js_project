const User = require('./../models/Users.js')

class UserService{
    static create(id, username,name){
        return new User(id, username,name,"Sin bio")
    }
    static getInfo(User){
        return [User.ida,User.username,User.name, User.bio]
    }
    static updateUserUsername(User, newUsername){
        return User.username = newUsername
    }
}
module.exports= UserService