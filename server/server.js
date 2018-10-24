const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const path = require('path')

app.use('/', express.static(path.join('././client/dist')))

//app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))