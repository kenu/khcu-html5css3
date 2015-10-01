GRANT ALL PRIVILEGES ON khcu.* TO okuser@localhost
 IDENTIFIED BY 'okdude' WITH GRANT OPTION;

create database khcu;

create table khcu.board (
  id int not null auto_increment primary key,
  name varchar(50),
  email varchar(100),
  message text);

insert into khcu.board (name, email, message) 
values ('kenu', 'kenuheo@khcu.ac.kr', '게시판 내용입니다.');
