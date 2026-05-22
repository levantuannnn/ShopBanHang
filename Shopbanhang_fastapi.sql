CREATE DATABASE fastapi;
USE fastapi;

CREATE TABLE users (
    user_id INT NOT NULL AUTO_INCREMENT,
    age INT DEFAULT NULL,
    sdt VARCHAR(15) DEFAULT NULL,
    name VARCHAR(100) DEFAULT NULL,

    PRIMARY KEY (user_id)
);

CREATE TABLE product (
    product_id INT NOT NULL AUTO_INCREMENT,
    user_id INT DEFAULT NULL,
    gia INT DEFAULT NULL,
    image_url VARCHAR(255) DEFAULT NULL,

    PRIMARY KEY (product_id),

    CONSTRAINT fk_product_user
    FOREIGN KEY (user_id)
    REFERENCES users(user_id)
);

INSERT INTO users(name, age, sdt)
VALUES
('Tuan', 21, '0988888888'),
('An', 22, '0977777777');

INSERT INTO product(user_id, gia, image_url)
VALUES
(1, 100000, 'iphone.png'),
(1, 200000, 'laptop.png'),
(2, 500000, 'pc.png');

SELECT * FROM users;

SELECT * FROM product;

SELECT 
    p.product_id,
    u.name,
    p.gia,
    p.image_url
FROM product p
JOIN users u
ON p.user_id = u.user_id;