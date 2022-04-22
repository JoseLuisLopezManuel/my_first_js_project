const UserService = require('./../services/UserService.js')
class UserView{
    static createUser(payload){
        if(payload == null){
            return {error : "El payload no existe"}
        }
    }
}
module.exports = UserView