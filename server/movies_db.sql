DROP DATABASE movies_db;
CREATE DATABASE movies_db;

USE movies_db;

CREATE TABLE IF NOT EXISTS movies (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30),
  PRIMARY KEY (id)
);


INSERT INTO movies (title) VALUE ('Finding Nemo');

