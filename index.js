const TelegramApi = require('node-telegram-bot-api')
const express = require('express')
const app = express()

const token = "5964085637:AAGbeOf7Z25bkHm7S-VnokTFpdE9wwAOnNY"
const bot = new TelegramApi(token,{polling:true})
app.use(express.json())
const cors = require('cors')
app.use(cors({origin:'*'}))
app.use(express.json())

bot.on('message',msg=>{
    bot.sendMessage('-1001863322422','test sem')
})
app.post('/post',(req,res)=>{
    console.log(req.body);
    bot.sendMessage(req.body.id,req.body.post)

})
app.get('/',(req,res)=>{
    console.log(req.body);
    res.send('get')
    // bot.sendMessage('-1001863322422','ready')

})


app.listen(5000,(console.log('server running 5000')))