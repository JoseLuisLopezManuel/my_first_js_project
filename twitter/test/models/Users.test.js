const User = require('./../../app/models/Users.js')

describe("Unit test for Users class", () => {
    test('Create an Users object', () => {
        //Se invoca el código que se va a usar en el app
        const User1 = new User(1,"Jose Luis", "Jose", "Bio", "DateCreated", "LastUpdate")
        //Aqui validas los resultados de ese código
        //Esta es una comparacion que va a igualar el valor de la izquiere con el valor de la derecha (valor esperado)
        expect(User1.id).toBe(1)
        expect(User1.username).toBe("Jose Luis")
        expect(User1.name).toBe("Jose")
        expect(User1.bio).toBe("Bio")
        expect(User1.dateCreated).not.toBeUndefined()
        expect(User1.LastUptade).not.toBeUndefined()
    
    })
})