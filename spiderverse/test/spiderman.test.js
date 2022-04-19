const Spiderman = require('./../app/spiderman.js')
describe("Unit Tests for Spiderman class", () => {
    test('1) Create an spiderman object', () => {
        //Aqui escribimos el código que queremos usal tal cual
        //quiero poder instancian un objeto Spiderman con esta infrmacion
        const andrewGarfield = new Spiderman("Spiderman Sony",31,"Andrew Garfield", 2, "Sony")
        const tomHolland = new Spiderman("Spiderman Marvel", 25, "Tom Holland", 5, "Marvel")
        //Validamos que este código funcione de la forma esperada
        expect(andrewGarfield.name).toBe("Spiderman Sony")
        expect(andrewGarfield.age).toBe(31)
        expect(andrewGarfield.actor).toBe("Andrew Garfield")
        expect(andrewGarfield.movies).toBe(2)
        expect(andrewGarfield.studio).toBe("Sony")
        expect(tomHolland.getInfo).toBe(`Hey, I'm Tom Holland from Marvel studio`)
    });
  })