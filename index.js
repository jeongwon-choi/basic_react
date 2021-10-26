//백엔드 시작점 라우터 만들기

const express = require('express')
const app = express()
const port = 5000

//몽고DB연결

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://Ogong:ogong1234@basicreact.5wikd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))

app.get('/', (req, res) => {res.send('Hello World! 안녕하세요 ~! ')})

app.listen(port, () => {console.log(`Example app listening at http://localhost:${port}`)})