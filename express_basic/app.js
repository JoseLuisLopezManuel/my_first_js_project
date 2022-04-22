//Usando objeto express
const express = require('express')
//App de express
const app = express()
//Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000

//path inicial, respondera a la url localhost:3000
app.get('/',(req, res) => {
    res.send('Hello World!')
})
//localhost:3000/launchx
app.get('/launchx',(req, res) => {
    res.send('Bienvenidos a launchX')
})

//Regresando un objeto
//localhost:3000/explorersInNode
app.get('/explorersInNode',(req,res) => {
    const explorer = {name : 'Explorer', msg: 'hello'}
    res.send(explorer)
})

//Con esto inicializamos esta app
app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
})