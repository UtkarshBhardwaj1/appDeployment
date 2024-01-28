require('dotenv').config()
const express= require('express')
const app= express()
const port=4000

app.get('/', (req, res)=>{

    res.send("Hello this is server!!")
})

app.get("/facebook", (req, res)=>{
    res.send('Utkarshdotcom')
})

app.get('/login', (req, res)=>{
    res.send('<h1>Welcome to site</h1>')
})

app.get('/instagram', (req,res)=>{
    res.send('<h1>Welcome to instagram!!</h1>')
})

app.listen(process.env.port, ()=>{
    console.log(`Listening.....${port}`)
})