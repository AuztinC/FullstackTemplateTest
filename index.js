const pg = require('pg')
const client = new pg.Client('postgres://localhost/fullstack_template_db')
const express = require('express')
const app = express()
const path = require('path')

app.get('/', (req,res,next)=>{
    res.sendFile( path.join(__dirname + '/index.html') )
})

const reactApp = path.join(__dirname, 'dist/main.js')

app.get('/dist/main.js', (req, res, next)=>{
    res.sendFile( reactApp )
})

const init = async()=>{
    await client.connect()
    console.log("connected to db")
    const SQL = `
        SQL SETUP AND SEED
    `

    const port = process.env.PORT || 3000;
    app.listen(port, ()=>{
        console.log(`listening on ${port}`)
    })
}
init()