const express = require('express')
const data = require('./data.json')
const app = express()
const port = 3000
app.use(express.json())

app.get('/data', (req, res) => {
    let result = {}
    data.forEach(el => {
        if (!result.h) {
            result.h = Object.keys(el)
        } 
        if (!result.d) {
            result.d = [Object.values(el)]
        } else {
            result.d.push(Object.values(el))
        }
    })
    res.status(200).json(result)
})

app.listen(port, () => {
    console.log(`app listening to http://localhost:${port}`)
})