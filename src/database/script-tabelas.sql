-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!
/* para workbench - local - desenvolvimento */
create database desbrava_seven;

use desbrava_seven;

create table usuario (
id_usuario int primary key auto_increment,
nome_usuario varchar(45) not null,
email varchar(45) not null unique,
senha varchar(45) not null);

create table especialidade (
id_especialidade int primary key auto_increment,
nome_especialidade varchar(45) not null);

create table requisito (
fk_usuario int,
foreign key (fk_usuario) references usuario (id_usuario),
fk_especialidade int,
foreign key (fk_especialidade) references especialidade (id_especialidade),
primary key (fk_usuario, fk_especialidade));
