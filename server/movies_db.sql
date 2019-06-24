CREATE DATABASE IF NOT EXISTS movies_db;

USE movies_db;

CREATE TABLE IF NOT EXISTS movies (
  id MEDIUMINT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30),
  popularity INTEGER,
  release_date INTEGER,
  PRIMARY KEY (id)
);


INSERT INTO movies (title,popularity,release_date) VALUE ('hello', 9.7, 10);

