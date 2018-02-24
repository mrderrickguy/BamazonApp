DROP DATABASE bamazon;

CREATE DATABASE Bamazon;

 USE Bamazon;
 CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  item VARCHAR(100) NOT NULL,
  department VARCHAR(45) NOT NULL,
  price decimal(10, 2) null,
  quantity INT default 0,
  PRIMARY KEY (id)
);


INSERT INTO products (item, department, price, quantity)
VALUES("Shoes","Footware",99,10),
("Towels","Bathroom",25,12),
("TV","Electronics",500,2),
("Tablets","Tech",109,1),
("Gum","Snack",1,0),
("Rake","Garden",15,4),
("Table","Funiture",75,5),
("Pants","Mens",35,80),
("Dress","Womens",80,100),
("Stove","Kitchen",400,3);

SELECT * FROM products;