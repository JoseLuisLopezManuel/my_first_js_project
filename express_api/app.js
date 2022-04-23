//Usando objeto express
const express = require('express')
//App de express
const app = express()
app.use(express.json()) //Indicamos que usaremos JSON
//Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000

//ENDPOINT
//Routers 
// Metodos HTTP, GET, POST, PUT, DELETE
app.get('/v1/explorers',(req,res) => {
    console.log(`Api Explorers GET ALL requests ${new Date()}`)
    const explorer1= {id: 1, name: "Jose1"}
    const explorer2= {id: 1, name: "Jose2"}
    const explorer3= {id: 1, name: "Jose3"}
    const explorer4= {id: 1, name: "Jose4"}
    const explorer5= {id: 1, name: "Jose5"}
    const explorers = [explorer1,explorer2,explorer3,explorer4,explorer5]
    //HTTP CODE STATUS: 200
    res.status(200).json(explorers)
})

app.get('/v1/explorers/:id',(req,res) => {
    console.log(`GET BY ID Explorers VI API ${new Date()}`)
    console.log(`Getting explorer with id ${req.params.id}`)
    const explorer1= {id: 1, name: "Jose1"}
    const explorer2= {id: 2, name: "Jose2"}
    const explorer3= {id: 3, name: "Jose3"}
    const explorer4= {id: 4, name: "Jose4"}
    const explorer5= {id: 5, name: "Jose5"}
    const explorers = [explorer1,explorer2,explorer3,explorer4,explorer5]
    //HTTP CODE STATUS: 200
    res.status(200).json(explorers[0])
})

//Agregar
app.post('/v1/explorers',(req, res) => {
    console.log(`Api Explorers POST reques ${new Date()}`)
    //Agregar la lógica para persistir
    const requestBody = req.body //Parámetros de un cliente
    console.log(req.body)
    res.status(201).json({message: "Created"})
})

app.put('/v1/explorers/:id', (req,res) =>{
    console.log(`PUT Explorers VI API ${new Date()}`)
    console.log(`Update explorer with id ${req.params.id}`)
    //Agregar la lógica para actualizar
    const requestBody = req.body //Párametros de un cliente
    res.status(200).json({message:"Actualizado exitosamente"})
})
//Con esto inicializamos esta app
app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`)
})
