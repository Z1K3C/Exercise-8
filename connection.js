//Aqui se encuentra el metodo de conexion a la base de datos y algunos querys

const mssql = require('mssql');                           //solicito mssql desde node_modules
const dbconfig = {                                        //declaro un arreglo con la informacion de la conexion a la base de datos
  server: "localhost",
  user: "sa",
  password: "otrogato",
  database: "EXAMPLE",
  port: 1433,
  options: {
    encrypt: false
  }
};
var conn = new mssql.ConnectionPool(dbconfig);            //creo una nueva conexion y le inserto los parametros
let usermodel = {};                                       //declaro una variable el cual incluira metodos

usermodel.getdata = (callback)=>{                         //declaro el metodo getdata
  conn.connect(function(err){                             //abro la conexion
    if(err){                                              //si me genera un error lo imprimo en la consola
      console.log(err);
      throw err;
    }
    else{                                                 //si no hay error...
      var req = new mssql.Request(conn);                  //declaro un request
      req.query(                                          //desde el request solicito el metodo query
        "SELECT * FROM [EXAMPLE].[dbo].[MAIN_R]"         //como parametro me solicita el query el cual es un script de SQL
        ,(err,res)=>{                                   
          if(err){                                        //si me genera un error lo imprimo en la consola
            console.log(err);
            throw err;
          }
          else{                                           //si no hay error...
            var myjson = []                               //creo un nuevo json con solo los datos
            for(var i=0;i<res.recordset.length;i++){
              myjson[i] = res.recordset[i]["TEMPERATURE"]
            }
            //console.log(myjson);
            callback(null,myjson);                        //mando el dato del nuevo json por el callback
          }
          conn.close();                                   //cierro la conexion
      });
    };
  });
};

module.exports = usermodel;                               //exporto todos los metodos almacenados en usermodel
//usermodel.getdata();