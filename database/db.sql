-- creando la base de datos
CREATE DATABASE crudnodejs;

-- USANDO LA BASE DE DATOS
USE crudnodejs;

--creando la tabla
CREATE TABLE login(
    id  INT(6) UNSIGNED PRIMARY KEY AUTOINCREMENT,
    nombre VARCHAR(255) NOT NULL,
    apellido VARCHAR(255) NOT NULL,
    usuario VARCHAR(255) NOT NULL,
    contraseña INTEGER NOT NULL,
);
--para mostrar las tablas
SHOW TABLES;
--para desciribir las tablas
DESCRIBE CUSTOMER;