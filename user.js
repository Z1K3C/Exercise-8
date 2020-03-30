//declaro rutas para nuestras API
//se recomienda usar una API por query a nuestra base de datos

const user = require('./connection.js');    //mando llamar a connection.js para poder utilizar sus metodos

module.exports = function(app){             //de esta manera exportare la funcion generada a continuacion
    app.get('/',(req,res)=>{                //monto una ruta en localhost:3000/"AQUI SE VACIARA LA INFORMACION DE ESTA FUNCION"
        user.getdata((err,ressql)=>{        //de connection.js utilizo el metodo get el cual tiene un query
            res.status(200).send("<div>" + ressql[0] + "</div><div>" + ressql[1] + "</div>");   //de la respuesta obtenida de connection.js la imprimo en pantalla
        });
    });
};