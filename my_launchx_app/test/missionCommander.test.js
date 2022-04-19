const MissionCommander = require("../app/missionCommander");

describe("Esto es una suite de pruebas",() =>{
    test('Caso de prueba 1', () => {
        //Aqui tu puedes usar el codigo como lo deseas utilizar
        const Jose = new MissionCommander('Jose Luis')
        //validar el resultado esperado
        //expect(Jose.name).toBe('Ana'); //Validada con error
        expect(Jose.name).toBe('Jose Luis'); //Validada con exito
    })
})