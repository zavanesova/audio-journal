DROP DATABASE IF EXISTS blog_db;
CREATE DATABASE blog_db;
USE blog_db;

CREATE TABLE user
 (
id int NOT NULL AUTO_INCREMENT,
user_name varchar(255) NOT NULL,
user_password VARCHAR(20) NOT NULL,
	PRIMARY KEY (id)
);
