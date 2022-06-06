-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!
/* para workbench - local - desenvolvimento */
drop database desbrava_seven;

create database desbrava_seven;

use desbrava_seven;

create table usuario (
id_usuario int primary key auto_increment,
nome_usuario varchar(45) not null,
email varchar(45) not null unique,
senha varchar(45) not null);

select*from usuario;

create table especialidade (
id_especialidade int primary key auto_increment,
nome_especialidade varchar(45) not null);

insert into especialidade values
(null,'Cães'), (null,'Fogueiras'), (null,'Pioneiria'),
(null,'Computaçao'), (null,'Ecologia'), (null,'temperança'),
(null,'Coraçao'), (null,'Felinos'), (null,'Escultura'),
(null,'Tubarões'), (null,'Nós'), (null,'Acampamento'),
(null,'Mordomia'), (null,'Aves'), (null,'Répteis'),
(null,'Orçamento'), (null,'Excurcionismo'), (null,'Libras'),
(null,'Astronimia'), (null,'Cidadania'), (null,'Braile'),
(null,'Ciclismo'), (null,'Culinaria'), (null,'Digestão'),
(null,'Insetos'), (null,'Física'), (null,'Pacíficador'),
(null,'Sementes');

select*from especialidade;

create table classe (
id_classe int primary key auto_increment,
nome_classe varchar(45) not null);

insert into classe values
(null,'amigo'),
(null,'companheiro'),
(null,'pesquisador'),
(null,'pioneiro'),
(null,'excurcionista'),
(null,'guia');

select*from classe;

create table requisito (
fk_classe int,
foreign key (fk_classe) references classe (id_classe),
fk_especialidade int,
foreign key (fk_especialidade) references especialidade (id_especialidade),
primary key (fk_especialidade, fk_classe));

select* from requisito;

insert into requisito values
(1,1),(1,2),(1,3),(1,4),(1,5),(1,23),(1,27),
(2,5),(2,6),(2,4),(2,7),(2,3),(2,8),(2,11),(2,14),(2,17),(2,28),
(3,22),(3,6),(3,28),(3,11),(3,13),(3,25),(3,17),(3,19),(3,20),
(4,12),(4,27),(4,14),(4,10),(4,5),(4,6),(4,24),(4,1),(4,11),(4,7),(4,16),(4,20),(4,8),
(5,9),(5,7),(5,5),(5,26),(5,1),(5,23),(5,4),(5,6),(5,8),(5,12),
(6,25),(6,21),(6,24),(6,11),(6,12),(6,15),(6,18),(6,13);

select e.nome_especialidade, c.nome_classe 
from requisito inner join especialidade as e on id_especialidade = fk_especialidade
inner join classe as c on id_classe = fk_classe  where nome_classe = 'amigo';

create table faixa (
fk_usuario int,
foreign key (fk_usuario) references usuario (id_usuario),
fk_especialidade int,
foreign key (fk_especialidade) references especialidade (id_especialidade),
primary key (fk_usuario, fk_especialidade));

select*from faixa;

select u.nome_usuario, e.nome_especialidade
 from faixa
 inner join usuario as u on id_usuario = fk_usuario
 inner join especialidade as e on id_especialidade = fk_especialidade;


select distinct(c.nome_classe), count(e.nome_especialidade) as qtd_especialidade
from usuario as u 
inner join faixa as f on id_usuario = f.fk_usuario
inner join especialidade as e on id_especialidade = f.fk_especialidade
inner join requisito as r  on id_especialidade = r.fk_especialidade
inner join classe as c on id_classe = r.fk_classe where id_usuario = 2 group by c.id_classe;


-- select c.nome_classe, e.nome_especialidade
-- from usuario as u 
-- inner join faixa as f on id_usuario = f.fk_usuario
-- inner join especialidade as e on id_especialidade = f.fk_especialidade
-- inner join requisito as r  on id_especialidade = r.fk_especialidade
-- inner join classe as c on id_classe = r.fk_classe
-- where id_usuario = 1 and id_classe = 1;