const User = require('./../models/Users.js')

class UserService{
    static create(id, username,name){
        return new User(id, username,name,"Sin bio")
    }
    static getInfo(User){
        return [User.id,User.username,User.name, User.bio]
    }
    static updateUserUsername(User, newUsername){
        return User.username = newUsername
    }
    static getAllUsernames([user1, user2, user3]){
        return [user1.username, user2.username, user3.username]
    }
}
module.exports= UserService