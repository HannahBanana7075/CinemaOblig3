/*
source 1 https://www.w3schools.com/sql/sql_create_table.asp
source 2 https://github.com/DATA1700/13-motorvogn-7-ukeoppgaver/blob/master/src/main/resources/schema.sql
 */

CREATE TABLE IF NOT EXISTS `tickets`
(
    id INTEGER AUTO_INCREMENT NOT NULL,
    movie VARCHAR(255) NOT NULL,
    amount VARCHAR(255) NOT NULL,
    firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255) NOT NULL,
    phoneNumber VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

