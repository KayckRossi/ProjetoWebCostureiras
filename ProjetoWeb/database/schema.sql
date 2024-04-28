--mysql -u root -p

create database Banco_costureira;
use Banco_costureira;

create table produto(
id_produto int primary key not null auto_increment,
nome_produto varchar(255),
valor double
);

create table cliente(
id_cliente int primary key not null auto_increment,
nome_cliente varchar(255),
telefone varchar(30),
senha VARCHAR(255),
endereco varchar(255),
medidas double,

foreign key (id_endereco) references endereco(id_endereco)
);

-- CREATE TABLE usuario(
-- id_usuario INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
-- nome VARCHAR(255),
-- senha VARCHAR(255),
-- telefone VARCHAR(20),
-- endereco VARCHAR(255)
-- );

create table usuario(
id_usuario int primary key not null auto_increment,
nome varchar(255),
senha varchar(255)
);


create table pedido(
id_pedido int primary key not null auto_increment,
id_cliente int not null,
id_produto int not null,
quantidade_produto int not null,
valor_unidade double not null,
valor_total double not null,
forma_pagamento varchar(255),
data_retirada varchar(255),
status_pedido varchar(255) not null,

foreign key (id_cliente) references cliente(id_cliente),
foreign key (id_produto) references produto(id_produto)
);
