drop database if exists burger_db;

create database burger_db;

use burger_db;

create table burgers (
    id integer auto_increment,
    burger_name varchar(50),
    devoured boolean,
    primary key (id)
);

