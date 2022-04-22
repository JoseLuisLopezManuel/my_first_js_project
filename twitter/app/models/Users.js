class User{
    constructor(id, username, name, bio){
        this.id = id
        this.username = username
        this.name = name
        this.bio = bio
        this.dateCreated = new Date()
        this.LastUptade = new Date()
    }
    get getUsername(){
        return this.username
    }
    get getBio(){
        return this.bio
    }
    get getDateCreated(){
        return this.dateCreated
    }
    get getLastUptade(){
        return this.LastUptade
    }
    set setUsername(username){
        return this.username = username
    }
    set setBio(bio){
        return this.bio = bio
    }
}
module.exports = User