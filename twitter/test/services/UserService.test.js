const UserService = require('./../../app/services/UserService.js')

describe("Test for UserService", ()=>{
    test("1. Create a new user using the userService", () =>{
        const user = UserService.create(1,"Jose Luis", "Jose")
        expect(user.username).toBe("Jose Luis")
        expect(user.name).toBe("Jose")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    })
    test("2. Get all user data in a list", () =>{
        const user = UserService.create(1,"Jose Luis", "Jose")
        const userInfoInList = UserService.getInfo(user)
        expect(userInfoInList[0]).toBe(1)
        expect(userInfoInList[1]).toBe("Jose Luis")
        expect(userInfoInList[2]).toBe("Jose")
        expect(userInfoInList[3]).toBe("Sin bio")
    })
    test("3. Add methodo static UptadeUserUsername", () =>{
        const user = UserService.create(1,"Jose Luis", "Jose")
        UserService.updateUserUsername(user, "JOSELUIS")
        expect(user.username).toBe("JOSELUIS")
    })
})