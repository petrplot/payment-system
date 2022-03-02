const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const { PORT, DB_URL } = require('./config')
const router = require('./routes')
const app = express()

app.use(express.json())
app.use(cors())
app.use('/api', router)

const serverStart = async() => {
    try {
        await mongoose.connect(DB_URL,{ 
            useUnifiedTopology: true,
            useNewUrlParser: true, 
        },()=>console.log('Соединение с базой установленно!'))
        app.listen(PORT,()=>{
            console.log('Сервер запущен на порту:', PORT);
        })
            
    } catch (e) {
        console.log(e);
    }
}

serverStart()