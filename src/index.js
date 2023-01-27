const express = require('express');
const morgan = require('morgan');
const mysql = require('mysql');
const myconnection = require('express-myconnection');
const path = require('path');
const app = express();
//importando rutas
const customerRoutes = require ('./routes/loginRoute');

//configuraciones
app.set('port', process.env.PORT || 3000); //elige los puertos que estén disponibles, en caos de no haber es 3000
app.set('views engine', 'ejs'); //ejs es un motor de plantilla 
app.set ('views', path.join(__dirname, 'views', ));//unimos directorios
//middlewares sirven para obtener lo que hace el servidor
app.use (morgan('dev'));
app.use(express.urlencoded({ extended:false }));
//CONEXION A LA BASE DE DATOS
app.use (myconnection(mysql, {
  host: 'localhost',
  user: 'root',
  password: '1204',
  port: '3306',
  database: 'crudnodejs'
}, 'single'));
//rutas del servidor
app.use('/', customerRoutes);

//staticfiles SIRVE PARA DARLE MAS SAZÓN A LA PÁGINA
app.use (express.static(path.join(__dirname, 'public',  )));
app.use('/data_lib', express.static(path.join(__dirname, 'data_lib')));
//sirve para poner a escuchar al servidor
app.listen(app.get ('port'),() => {
   console.log('Server started on http://localhost:3000');
});