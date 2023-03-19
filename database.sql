-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data

-- CREATE DATABASE "fs-react-shopping";

-- Table structure

CREATE TABLE cart (
	id SERIAL PRIMARY KEY,
	name varchar(80) not null,
	quantity DECIMAL(16, 2) not null,
	unit varchar(20) 
);

INSERT INTO cart (name, quantity, unit)
VALUES ('test', 5.5, 'test unit');

--select * from cart