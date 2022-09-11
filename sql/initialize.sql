DROP TABLE IF EXISTS customers, trades;

CREATE TABLE customers (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(50),
    PRIMARY KEY (id));
    
CREATE TABLE trades (
    id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    title VARCHAR(50),
    retail_price VARCHAR(50),
    PRIMARY KEY (id),
    FOREIGN KEY (user_id)
    REFERENCES customers (id)
    ON DELETE CASCADE);
    
    INSERT INTO customers
    (first_name, last_name, email)
    VALUES
    ("James","Butt", "test1@test.com"),
    ("Josephine","Darakjy", "test2@test.com"),
    ("Art","Venere", "test3@test.com");
    
    INSERT INTO trades
    (title, retail_price, user_id)
    VALUES
    ("Metal Gear","9.99", 1),
    ("Mickey Mousecapades","19.99", 2),
    ("Earthworm Jim","54.99", 3);