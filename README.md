# Exceptionaire-MEAN

Steps to clone run the application

1) Download zip or clone the repo.
2) Setup database
    - Start mysql server
    - CREATE DATABASE test;
    - use test;
    - CREATE TABLE employee(
        id INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL,
        contact VARCHAR(100) NOT NULL,
        PRIMARY KEY ( id )
        );

3)  Open terminal in root folder of projest (Exceptionaire-MEAN)
4)  Enter command- npm start
5)  open url: http://localhost:3000/