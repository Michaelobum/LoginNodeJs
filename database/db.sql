-- creando la base de datos
CREATE DATABASE crudnodejs;

-- USANDO LA BASE DE DATOS
USE crudnodejs;

--creando la tabla
CREATE TABLE login(
    id  INT(6) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(255) NOT NULL,
    apellido VARCHAR(255) NOT NULL,
    usuario VARCHAR(255) NOT NULL,
    contraseña VARCHAR (25) NOT NULL,
);
--para mostrar las tablas
SHOW TABLES;
--para desciribir las tablas
DESCRIBE CUSTOMER;