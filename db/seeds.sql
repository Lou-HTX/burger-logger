-- INSERT INTO table_name (column_name, column_name)VALUES("add_this_to_database");
-- INSERT INTO burgers (Burger_Name)VALUES("Texas Burger");

INSERT INTO burgers(burger_name) VALUES ("NOLA Burger");
INSERT INTO burgers(burger_name) VALUES ("Chicago Burger");
INSERT INTO burgers(burger_name) VALUES ("Houston Burger");

SELECT * FROM burgers;

update burgers
set burger_name = 'Exhaust Pipe'
where id = 1; 

update burgers
set burger_name = 'Big Bore Kit'
where id = 2; 

update burgers
set burger_name = 'Carburetor'
where id = 3; 

update burgers
set burger_name = 'Reeds'
where id = 4; 

update burgers
set burger_name = 'Intake'
where id = 5; 

update burgers
set burger_name = 'Jets'
where id = 6; 