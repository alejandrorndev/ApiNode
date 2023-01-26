const express = require('express')

const mysql = require('mysql')

const myconn = require('express-myconnection')

const app = express()
 

//se requiere el archivo routes
const routes = require('./routes')


//configuracion de puertos
app.set('port', process.env.PORT || 9000)


const dbOptions = {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'root123',
    database: 'libros'
}


app.use(myconn(mysql, dbOptions, 'single'))
//middlewares para que entienda los datos como se manejan
app.use(express.json())


//rutas ´para la api
// app.get('/', (req, res)=>{
//     res.send('hello world')
// })


app.use('/API', routes)
//app.use('/API/insertarLibros ', routes)


//servidor corriendo
app.listen(app.get('port'), ()=>{
    console.log('server running on port: ', app.get('port'))
})