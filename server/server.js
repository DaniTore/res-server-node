require('./config/config')

const express = require('express')
const app = express();


const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', function(req, res) {
    res.json('Hello World')
})

app.get('/usuarios', function(req, res) {
    res.json('get usuarios')
})

app.post('/usuarios', function(req, res) {

    let body = req.body;
    if (body.name === undefined) {
        res.status(400).json({
            mensanje: false
        })
    } else {
        res.json({
            persona: body
        })
    }

})

app.put('/usuario/:id', function(req, res) {

    let id = req.params.id;
    res.json({
        id
    })
})

app.delete('/deleteusuarios', function(req, res) {
    res.json('delete usuarios')
})

app.listen(process.env.PORT, () => {
    console.log('Escuchando el puerto: ', 3000);
})