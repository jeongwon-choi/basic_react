//백엔드 시작점 라우터 만들기

const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser')
const { User } = require('./models/User')

//어플리케이션 데이터를 분석해서 가져올수있게
app.use(bodyParser.urlencoded({extends:true}))
//어플리케이션 json타입을 분석해서 가져올수있게
app.use(bodyParser.json())

//몽고DB연결

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://Ogong:ogong1234@basicreact.5wikd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))

app.get('/', (req, res) => {res.send('Hello World! 안녕하세요 ~! ')})

app.post('/register',(req,res)=>{
    //회원가입 필요 정보 client에서 가져오면
    //그것들을 DB에 넣어 준다

    const user = new User(req.body)

    user.save((err,userInfo)=>{
        if(err) return res.json({success:false, err})
        return res.status(200).json({
            success:true
        })
    });

})

app.listen(port, () => {console.log(`Example app listening at http://localhost:${port}`)})