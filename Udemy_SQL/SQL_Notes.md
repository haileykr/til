# The Ultimate MySQL Bootcamp: Go from SQL Beginner to Expert
<br/>

### 1. Introduction and 5 Minutes of SQL
<br/>

#### 5. 5 Minutes of MySQL
* https://www.w3schools.com/sql/trysql.asp?filename=trysql_op_or

* SELECT * FROM customers;
* SELECT * FROM orders;
* SELECT * FROM products  ORDER BY Price DESC;

* More Complex Code!
```SQL
SELECT
    customerName,
    COUNT(*) AS 'number of orders'
FROM customers
INNER JOIN orders
    ON orders.customerID = customers.customerID
GROUP BY customers.customerID;
```
<br/>

### 2. Getting Started: Overview+Installation
<br/>

#### 9. What is a Database?
* What is a Database?
    * A collection of data
    * A method of accessing & manipulating data
* Database vs. Database Management System (DMS)
* Your App => DBMS => Database
* "DBMS => Database" are often called as "Database"
    * EX. PostgreSQL  => MySQL
    * EX. Oracle Database  => SQLite

* SO, WHat is a Database?!?!??!?
    * "A Structured Set of COmputerized Data with an Accessible Interface" <Br/>

#### 10. SQL vs. MySQL
* SQL (Structured Query Language): the language we use to "talk" to our databases
* Working with MySQL(one of the DMS) is mainly using SQL

* EXAMPLES of Relational DMS - MySQL, SQLite, PostgreSQL, Oracle, and Many Others

* MySQL and PostgreSQL - both use the same syntax

* There are *slight* differences in syntax
* There is the SQL Standard online, and various  *DMS* have slight variations of those!!

* Two Takeaways
    * Once you learn SQL, it's pretty easy to switch to another DB that uses SQL
    * What makes databases (DBMS) unique are the features they offer, not the language
<br/>

#### 11. Installing MySQL - WATCH BEFORE INSTALLING
* Slides - http://webdev.slides.com/coltsteele/mysql-97#/

* Three Installation Options - on a PC, on a Mac, on CLoud9

* CLoud9 - what Colt will be using in the course
* His Recommenadation - Use Cloud9 to follow along in the course, then install on your local machine once you finish!!
<br/>

#### 12. Now using GoormIDE instead of Cloud9
* https://gist.github.com/nax3t/2773378c4d1bada8d66d12f4d5210248

* `mysql-ctl start`
* `mysql-ctl stop`
* `mysql-ctl cli`
* `exit`
* `Ctrl - C`

* How to source a SQL file on GoormIDE
    * Make a File inside the main folder
    * Go to the folder where the file you wanna run is

    * `mysql-ctl cli`
    * `use cat_app`
    * `source query.sql`
<br />

#### 17. Windows Installation
* MySQL Installer
* Root Password ~> set it to something easy to Remember!
* MySQL Command Line Client
<br/>

### 3. Create New Databases and Tables
<br/>

#### 19. Create Databases
* `mysql-ctl start` ~> starts the database server
* `show databases` ~> list all the databases you have on the server
* `CREATE DATABASE <name>; `

* VSCode Extension for MySQL and How to Use It
donghwa-kim.github.io/mysql_vs.html

* Practice
```SQL
show databases;
CREATE DATABASE hello_world_db;
```
<br/>

#### 20. Drop databases
* `DROP DATABASE <name>`
<br />

#### 21. Use dbs
* `USE <name>`
* `SELECT database();` : shows the current db
<br />

#### 22. Intro to tables
* A database is just a bunch of *tables* at least in a relational db
* Tables hold the data!
* Tables: are collections of related data held in a sturctured format within db

* Quick example using CAT
* Table - columns (headers)
* Talbe - rows (the actual data)
<br/>

#### 26. The Basic DataTypes
* Cat Table Structure
|  Name  |     Breed     |  Age  |
| :----: | :-----------: | :---: |
|  Blue  | Scottish Fold |   1   |
| Rocket |    Persian    |   3   |
| Monty  |     Tabby     |  10   |
|  Sam   |   Munchkin    |   2   |

* the type of data at each col should be consistent!!

* Numeric Types -  INT, SMALLINT, TINYINT, MEDIUMINT, BIGINT, DECIMAL, NUMERIC, FLOAT, DOUBLE, BIT
* String Types - CHAR, VARCHAR, BINARY, VARBINARY, BLOB, TINYBLOB, MEDIUMBLOB, LONGBLOB, TEXT, TINYTEXT, MEDIUMTEXT, LONGTEXT, ENUM
* Date Types - DATE, DATETIME, TIMESTAMP, TIME,YEAR

* For most of the times, you only use A part of them
    * Numeric Types - start with INT
    * String Types - start with VARCHAR

* varchar (variable-length string)
    * between 1 - 255 characters

* let's do
    * Name - VARCHAR(100)
    * Breed - VARCHAR(100)
    * Age - INT
<br/>

#### 28. Basic Datatypes Challenge
* draw a tweets table!
    * Username - VARCHAR(15)
    * Tweet_Content - VARCHAR(140)
    * Number_of_Favorites - INT
<br/>

#### 30. Creating Your Own Table
* Boilerplate:
```sql
CREATE TABLE tablename
    (
        column_name data_type,
        column_name data_type
    );
```

* EXAMPLE↓
```sql
CREATE TABLE cats
    (
        name VARCHAR(100),
        age INT
    );
```
* NOTE - USE PLURALS FOR TABLE NAMES
```sql
CREATE DATABASE cat_app
USE cat_app;
CREATE TABLE cats (
    name VARCHAR(100),
    age INT
);
```
<br />

#### 32. How do we know if it worked?
```sql
SHOW tables;
SHOW COLUMNS FROM <tablename>;
DESC <tablename>;
```
<br/>

#### 34. Drop Tables
```sql
DROP TABLE <tablename>;
```
<br />

#### 36. Make your own table challenge
* Create a pastries table with name and quantity
```sql
CREATE TABLE pastries(
    name VARCHAR(50),
    quantity INT,
);

SHOW COLUMNS FROM pastries;

DROP TABLE pastries;
```
<br />

### 4. Inserting Data (And a couple of Other Things)
<Br />

#### 39. Insert Data
* Basic Syntax
```sql
INSERT INTO cats(name, age)
VALUES ('Jetson', 7);
```
* when you write actual sql files, this way is preferred (on top of doing it in one line is also possible)
```sql
INSERT INTO cats
            (NAME,
            age)
VALUES      ("jetson",
            7);
```
* Our Practice
```sql
CREATE TABLE cats (name VARCAHR(50),age INT);

INSERT INTO cats(name, age)
VALUES('Blue',1);

INSERT INTO cats(age,name) VALUES(11,'Garfield');
```
<br />

#### 41. Super Quick Intro to SELECT
```sql
SELECT * FROM cats;
```
<br/>

#### 43. Multiple INSERT
```sql
INSERT INTO CATS(name, age)
VALUES ('Charlie', 10)
        , ('Sadie', 3)
        , ('Lazy Bear', 1);
```
<br/>

#### 45. Insert Challenge
```sql
CREATE TABLE people(first_name VARCHAR(20), last_name VARCHAR(20), age INT);

INSERT INTO people (first_name, last_name, age)
VALUES ('Tina', 'Belcher', 13);

INSERT INTO people (last_name, age, first_name)
VALUES ('Belcher', 42, 'Bob');

INSERT INTO people (first_name,last_name, age)
VALUES ('Linda', 'Belcher', 45)
        , ('Phillip', 'Frond', 38)
        , ('Calvin', 'Fischoeder', 70);

```
<br />

#### 49+50. MySQL Warnings
* If Errors are shown instead of Warnings,
```sql
set sql_mode = '';
```

```sql
SHOW WARNINGS;
```
<BR/>

#### 52. NULL and NOT_NULL
* NULL: VALUE IS NOT KNOWN

* EXAMPLE
```sql
INSERT INTO cats(name)
VALUES('Alabama');

INSERT INTO cats()
VALUES();
```
* In order to prevent something to be NULL,
```sql
CREATE TABLE cats2
(
    name VARCHAR(100) NOT NULL
    ,age INT NOT NULL
);
```
* Now
    * without name, it will be the default value - currently empty string
    * without age it will be the default value currently 0
<br/>

#### 54. Setting Default Vals
* To set Default Value
```sql
CREATE TABLE cats3
    (
        name VARCHAR(100) DEFAULT  'a',
        age INT DEFAULT 99
    );

INSERT INTO cats3() VALUES();
// 'a', 99
// here you can still set thigns to be NULL

CREATE TABLE cats4
    (
        name VARCHAR(100) NOT NULL DEFAULT 'a',
        age INT NOT NULL DEFAULT 99
    );

// NULL is not allowed AND you have default values!

```
<br />

#### 56. A Primer On Primary Keys
* currently duplicate values can be inserted in tables
* Though we want to identify  different data!
* How Do We Make Each Unique??
    * CatID
    * Primary Key

* PRIMARY KEY - UNIQUE IDENTIFIER!

* EXAMPLE
```SQL
CREATE TABLE unique_cats (cat_id INT NOT NULL
                        , name VARCHAR(100)
                        , age INT
                        , PRIMARY KEY (cat_id))
```

```SQL
INSERT INTO unique_cats(cat_id, name, age) VALUES(1, "Fred", 23);
```

* Generate cat_id Automatically
```SQL
CREATE TABLE unique_cats2 (cat_id INT NOT NULL AUTO_INCREMENT
                        ,name VARCHAR(100)
                        ,age INT
                        ,PRIMARY KEY (cat_id));
```

```sql
INSERT INTO unique_cats2(name, age)  VALUES('BlueSteele',4);
//cat_id automatically given
```
<br/>

#### 58. Table Constraints Practice
* define an Employees table, with the following fields
    * id - number (auto increment), mandatory, primary key
    * last_name - text, mandatory
    * first_name - text, mandatory
    * middle_name - text, not mandatory
    * age - number, mandatory
    * current_status - text, mandatory, defaults to 'employed'
```SQL
CREATE TABLE employees(
    id INT NOT NULL AUTO_INCREMENT
    , last_name VARCHAR(30) NOT NULL
    , first_name VARCHAR(30) NOT NULL
    , middle_name VARCHAR(30)
    , age INT NOT NULL
    , current_status VARCHAR(30) NOT NULL DEFAULTS 'employed'
    , PRIMARY KEY(id)
);
```
<br/>

### 5. CRUD COMMANDS
<br />

#### 62. Intro to CRUD!!
* Create
    * INSERT INTO
* Read
* Update
* Delete
* will be what we'll focus on!
<br/>

#### 64. Preparing Our DATA
* let's start with a clean state..

* `DROP TABLE cats`

* We will have
```sql
CREATE TABLE cats
(
    cat_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY
    name VARCHAR(100),
    breed VARCHAR(100),
    age INT,
);

INSERT INTO cats(name, breed, age)
VALUES ('Ringo', 'Tabby', 4)
        ,('Cindy', 'Maine Coon', 10)
        ,('Dumbledore', 'Maine Coon', 11)
        ,('Egg', 'Persian', 4)
        ,('Misty', 'Tabby', 13)
        ,('George Michael','Ragdol', 9)
        ,('Jackson', 'Sphynx', 7);
```
<br />

#### 66. Official Introduction to SELECT
* Read
    * How do we search data?
    
```SQL
SELECT * FROM cats;
SELECT name FROM cats;

SELECT name, age FROM cats;
SELECT cat_id, name, age FROM cats;
//order matters
```
<br/>

#### 68. Intro to WHERE!
```sql
SELECT * FROM cats WHERE age = 4;
SELECT * FROM cats WHERE name='George Michael';
SELECT * FORM cats WHERE name='GEORGE MICHAEL';
//both work
```
<br/>

#### 73. Intro to Aliases
* Aliases - Easier to read results
* Changes how the data is displayed!
```sql
SELECT cat_id AS id, name FROM cats;
```
<br/>

#### 75. The UPDATE Command
```sql
UPDATE cats SET breed='Shorthair'
WHERE breed='Tabby';
UPDATE cats SET age=14 WHERE name='Misty';
```
* A good rule of thumb - try SELECTing before you UPDATE
<Br />

#### 80. Introduction to DELETE 
```sql
DELETE FROM cats WHERE name='Egg';
DELETE FROM cats; //deletes everything!be careful
```
<br />

### 6. CRUD Challenge
* Spring Cleaning - The Annual Closet Inventory
* Create a new database shirts_db
* Create a new table called shirts
```sql
CREATE DATABASE shirts_db;
USE shirts_db;
CREATE TABLE shirts
    (
        shirt_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY
        , article VARCHAR(20)
        , color VARCHAR(20)
        , shirt_size VARCHAR(1)
        , last_worn INT

    );

INSERT INTO shirts(article, color, shirt_size, last_worn)
VALUES ('t-shirt', 'white', 'S', 10),
('t-shirt', 'green', 'S', 200),
('polo shirt', 'black', 'M', 10),
('tank top', 'blue', 'S', 50),
('t-shirt', 'pink', 'S', 0),
('polo shirt', 'red', 'M', 5),
('tank top', 'white', 'S', 200),
('tank top', 'blue', 'M', 15)

INSERT INTO shirts(article, color, shirt_size, last_worn)
VALUES ('polo shirt', 'purple', 'M', 50);

SELECT article, color FROM shirts;

SELECT article, color, shirt_size, last_worn FROM shirts WHERE shirt_size = 'M';

UPDATE shirts SET shirt_size='L' WHERE article='polo shirt';

UPDATE shirts SET last_worn=0 WHERE last_worn=15;

UPDATE shirts SET shirt_size='XS', color='off white' WHERE color='white'

DELETE FROM shirts WHERE last_worn=200;

DELETE FROM shirts WHERE article='tank top';

DELETE FROM shirts;

DROP TABLE shirts;
```

### 7. The World of String Functions
<br/>

#### 97. Running SQL Files
* source filename.sql
<br/>

#### 99. Loading Our Books Data
```sql
DROP DATABASE IF EXISTS book_shop;

CREATE DATABASE book_shop;

USE book_shop;

CREATE TABLE books 
	(
		book_id INT NOT NULL AUTO_INCREMENT,
		title VARCHAR(100),
		author_fname VARCHAR(100),
		author_lname VARCHAR(100),
		released_year INT,
		stock_quantity INT,
		pages INT,
		PRIMARY KEY(book_id)
	);

INSERT INTO books (title, author_fname, author_lname, released_year, stock_quantity, pages)
VALUES
('The Namesake', 'Jhumpa', 'Lahiri', 2003, 32, 291),
('Norse Mythology', 'Neil', 'Gaiman',2016, 43, 304),
('American Gods', 'Neil', 'Gaiman', 2001, 12, 465),
('Interpreter of Maladies', 'Jhumpa', 'Lahiri', 1996, 97, 198),
('A Hologram for the King: A Novel', 'Dave', 'Eggers', 2012, 154, 352),
('The Circle', 'Dave', 'Eggers', 2013, 26, 504),
('The Amazing Adventures of Kavalier & Clay', 'Michael', 'Chabon', 2000, 68, 634),
('Just Kids', 'Patti', 'Smith', 2010, 55, 304),
('A Heartbreaking Work of Staggering Genius', 'Dave', 'Eggers', 2001, 104, 437),
('Coraline', 'Neil', 'Gaiman', 2003, 100, 208),
('What We Talk About When We Talk About Love: Stories', 'Raymond', 'Carver', 1981, 23, 176),("Where I'm Calling From: Selected Stories", 'Raymond', 'Carver', 1989, 12, 526),
('White Noise', 'Don', 'DeLillo', 1985, 49, 320),
('Cannery Row', 'John', 'Steinbeck', 1945, 95, 181);

```

<br/>

#### 101. Working with CONCAT
* CONCAT : Combine Data For Cleaner Output
* MySQL String Functions
` CONCAT(column, anotherColumn)`

```sql
SELECT author_fname, author_lname FROM books;

SELECT 
    CONCAT (autho_fname, ' ',  author_lname);
    AS 'full name'
FROM books;

SELECT author_fname AS first, author_lname AS last,
    CONCAT (author_fname, ' ', author_lname) AS full
FROM books
```
* CONCAT_WS: Concat with separator
```sql
SELECT
    CONCAT_WS(' - ', title, author_fname, author_lname)
FROM books;
```
<br/>

#### 103. Introducing SUBSTRING
* SUBSTRING: Work with parts of strings
```sql
SELECT SUBSTRING('Hello World', 1, 5);
//'Hello'
SELECT SUBSTRING('Hello World', 7); //World

SELECT SUBSTRING('Hello World', -3);//rld

SELECT CONCAT(SUBSTRING(title, 5), '...') AS 'first_few_title' FROM books;
```
<br/>

#### 105. Introducing REPLACE
* REPLACE : Replace parts of strings
~> case-sensitive

```sql
SELECT REPLACE('Hello World', 'l', 'r');
SELECT REPLACE(title, 'e', '3') FROM books;
```
<br />

#### 107. Using REVERSE
```sql
SELECT REVERSE('meow meow);
```
<br />

#### 109. Working with CHAR LENGTH
* CHAR_LENGTH: Counts how many characters there are
```sql
SELECT  author_lname, CHAR_LENGTH(author_lname) AS length FROM books;
```
* Use SQL Formatter For Prettier Style!
<br />

#### 111. Changing Case with UPPER and LOWER 
* UPPER(), LOWER() to Change a Character Case
```sql
SELECT LOWER('Hello World');
```
<br />

#### 115. String Function Challenge
```sql
SELECT UPPER(REVERSE('Why does my cat look at me with such hatred?'));

SELECT 
    REPLACE(title, ' ', '->') AS TITLE
FROM books;

SELECT author_lname AS forwards, REVERSE(author_lname) AS backwards FROM books;

SELECT UPPER( CONCAT(author_lname,' ',author_fname)) AS 'full name in caps'FROM books;

SELECT CONCAT(title, ' was released in ', released_year) AS blurb
FROM books;

SELECT title,CHAR_LENGTH(title) AS 'character count' FROM books;

SELECT CONCAT(SUBSTRING(title, 1, 10),'...') AS  'short title', CONCAT(author_lname, ',',author_fname) AS author, CONCAT( stock_quantity' in stock') AS quantity
FROM books;
```
<br />

### 8. Refining Our Selections
<br />

#### 118. Seed Data: Adding A Couple New Books
```sql
INSERT INTO books
    (title, author_fname, author_lname, released_year, stock_quantity, pages)
    VALUES ('10% Happier', 'Dan', 'Harris', 2014, 29, 256), 
           ('fake_book', 'Freida', 'Harris', 2001, 287, 428),
           ('Lincoln In The Bardo', 'George', 'Saunders', 2017, 1000, 367);
```
<br />

#### 120. Using DISTINCT
```sql
SELECT DISTINCT author_lname FROM books;
```
~> shows only the unique value

```sql
SELECT DISTINCT author_fname, author_lname FROM books;
```
<br/>

#### 122. Sorting Data with ORDER BY
```sql
SELECT author_lname FROM books ORDER BY author_lname;
```
* Order by Ascending order by default vs. [DESC]
```sql
SELECT title,  author_fname,author_lname
FROM books ORDER BY 2 ;
//order by author_fname
```
* Order by multiple column criteria
```sql
SELECT author_fname, title FROM books ORDER BY author_fname, title;
```
<br/>

#### 124. Using LIMIT
* specifies how many data we want back!
```sql
SELECT title FROM books  LIMIT 10;

SELECT title, released_year FROM books
ORDER BY released_year DESC LIMIT 5;

SELECT title, released_year FROM books
ORDER BY released_year LIMIT 5 10;
```
<BR/>

#### 126. Better Searches w/ LIKE!!
* Syntax
```sql
WHERE author_fname LIKE '%da%';
```

* % : WildCard
```sql
SELECT title, author_fname FROM books WHERE author_fname  LIKE '%da%';
```
<br/>

#### 128. LIKE Part 2: More WildCards
* _: exactly one character

```sql
SELECT * FROM books WHERE stock_quantity LIKE '____';
```

* To look for something with those wildcards, use '\%' or '\_'!!
<br />

#### 131. Refining Selections
```sql
SELECT title FROM books WHERE title LIKE '%stories%';

SELECT title ,  pages FROM books ORDER BY pages DESC LIMIT 1 ; 

SELECT CONCAT(title,' - ',released_year) AS summary FROM books ORDER BY released_year DESC LIMIT 3;

SELECT title, author_lname FROM books WHERE author_lname LIKE '% %';

SELECT title,released_year,   stock_quantity AS stock FROM books ORDER BY stock_quantity LIMIT 3

SELECT title, author_lname 
FROM books
ORDER BY author_lname, title

SELECT 
    UPPER(CONCAT("MY FAVORITE AUTHOR IS ", author_fname," ", author_lname,"!")) AS yell
FROM books
ORDER BY author_lname;
```