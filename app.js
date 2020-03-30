//aplicacion principal
//usando express creo un servidor

const express = require('express');             //solicito express desde node_modules
const app = express();                          //instancio a express para utilizar los metodos

const morgan = require('morgan');               //solicito a morgan para crear un logger
const bodyparser = require('body-parser');      //solicito body parser para poder manejar jsons

//setiings
app.set('port',process.env.PORT||3000);         //solicito el metodo set de express para declarar una variable de tipo port

//middlewares
//app.use(morgan('dev'));                         //solicito el metodo use de express para utilizar el middleware de morgan en modo desarrollo
//app.use(bodyparser.json());                     //solicito el metodo use de express para utilizar el middleware body-parser y asi usar el formato json

//routes
require('./user.js')(app);                      //mando traer de user.js una ruta

app.listen(app.get('port'),()=>{                //ejecuto el servidor y le indico el numero de puerto
    console.log('server on port 3000');         //si se cumple que se imprima en consola que el servidor se encuentra trabajando en el puerto 3000
});
