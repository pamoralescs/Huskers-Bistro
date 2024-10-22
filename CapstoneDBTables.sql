USE Group12;

DROP TABLE IF EXISTS OrderItems;
DROP TABLE IF EXISTS CartOrder;
DROP TABLE IF EXISTS Cart;
DROP TABLE IF EXISTS Item;
DROP TABLE IF EXISTS Customer;

CREATE TABLE Customer (
	customerId INT NOT NULL PRIMARY KEY IDENTITY(1,1),
	firstName VARCHAR(20) NOT NULL,
	lastName VARCHAR(20) NOT NULL,
	email VARCHAR(50) NOT NULL,
	phoneNumber VARCHAR(15) NOT NULL,
	password VARCHAR(20) NOT NULL
);

CREATE TABLE Item (
	itemId INT NOT NULL PRIMARY KEY IDENTITY(1,1),
	itemName VARCHAR(20) NOT NULL,
	category VARCHAR(20) NOT NULL,
	price DECIMAL(18,2) NOT NULL,
	image VARCHAR(50) NOT NULL,
	description VARCHAR(255) NOT NULL
);

CREATE TABLE Cart (
	cartId INT NOT NULL PRIMARY KEY IDENTITY(1,1),
	itemId INT NOT NULL,
	FOREIGN KEY (itemId) REFERENCES Item(itemId)
);

INSERT INTO Item (itemName, category, price, image, description) VALUES ('Veggie Burger', 'Burger', 12.00, 'VeggieBurger.jpeg', 'Enjoy our Veggie Burger, a wholesome blend of mushrooms, peppers, and onions, served on a toasted whole-grain bun.');
INSERT INTO Item (itemName, category, price, image, description) VALUES ('Single Burger', 'Burger', 10.00, 'SingleBurger.jpeg', 'Classic single patty burger. Simple but delicious!');
INSERT INTO Item (itemName, category, price, image, description) VALUES ('Double Burger', 'Burger', 14.25, 'DoubleBurger.jpeg', 'Similar to the Single Burger but with twice the patties and twice the deliciousness!');
INSERT INTO Item (itemName, category, price, image, description) VALUES ('Western Burger', 'Burger', 14.00, 'WesternBurger.jpeg', 'A tasty burger loaded with BBQ sauce, onion rings, and cheddar cheese.');
INSERT INTO Item (itemName, category, price, image, description) VALUES ('BLT Burger', 'Burger', 13.75, 'BLTBurger.jpeg', 'Bacon. Lettuce. Tomato. served with a delicious beef patty! Enough said.');
INSERT INTO Item (itemName, category, price, image, description) VALUES ('Nacho Burger', 'Burger', 14.00, 'NachoBurger.jpeg', 'One of the most intricute items on the menu, tortilla chips, jalepenos, tomato, with sour cream and nacho cheese lathered on top!');
INSERT INTO Item (itemName, category, price, image, description) VALUES ('Mushroom Burger', 'Burger', 14.75, 'MushroomBurger.jpeg', 'Savor the earthy richness of our Mushroom Burger, topped with melted Swiss cheese and some healthy greens!');

INSERT INTO Item (itemName, category, price, image, description) VALUES ('Fried Chicken', 'Sandwich', 12.35, 'FriedChicken.JPEG', 'Crispy fried chicken breast, served on a soft bun with lettuce and mayo.');
INSERT INTO Item (itemName, category, price, image, description) VALUES ('BLT', 'Sandwich', 11.00, 'BLTSand.jpeg', 'Classic BLT with crispy bacon, fresh lettuce, and tomato on toasted bread.');
INSERT INTO Item (itemName, category, price, image, description) VALUES ('Pulled Chicken', 'Sandwich', 12.00, 'PulledChicken.jpeg', 'Slow-cooked pulled chicken in a tangy sauce, served on a toasted roll.');
INSERT INTO Item (itemName, category, price, image, description) VALUES ('Meatball Sub', 'Sandwich', 12.50, 'MeatBall.jpeg', 'Hearty meatballs smothered in marinara sauce, topped with melted cheese on a sub.');
INSERT INTO Item (itemName, category, price, image, description) VALUES ('French Dip', 'Sandwich', 14.00, 'FrenchDip.jpeg', 'Thinly sliced roast beef on a French roll, served with a side of beef au jus for dipping.');
INSERT INTO Item (itemName, category, price, image, description) VALUES ('Philly', 'Sandwich', 13.25, 'Philly.jpeg', 'Philadelphia cheesesteak with thinly sliced steak, onions, peppers, and melted cheese.');
INSERT INTO Item (itemName, category, price, image, description) VALUES ('Reuben', 'Sandwich', 12.25, 'Reuben.jpeg', 'Grilled Reuben with corned beef, Swiss cheese, sauerkraut, and Russian dressing on rye.');

INSERT INTO Item (itemName, category, price, image, description) VALUES ('Margherita Pizza','Pizza', 13.25, 'MargheritaPizza.jpeg', 'Thin crust, fresh mozzarella, chopped tomatoes with garlic and vinagerette drizzled on top!');
INSERT INTO Item (itemName, category, price, image, description) VALUES ('Pepperoni Pizza', 'Pizza', 13.00, 'PepperoniPizza.jpeg', 'A classic combination of tomato sauce, cheese, and pepperoni that has been around for decades.');
INSERT INTO Item (itemName, category, price, image, description) VALUES ('Hawaiian Pizza','Pizza', 13.25, 'HawaiianPizza.jpeg', 'Enjoy our Hawaiian Pizza topped with juicy pineapple, layered with ham slices, and a generous amount of mozzarella on a crispy crust!');
INSERT INTO Item (itemName, category, price, image, description) VALUES ('Taco Pizza','Pizza', 14.75, 'TacoPizza.jpeg', 'Taste the bold flavors of our Taco Pizza, featuring spicy ground beef, fresh salsa, cheddar cheese, and a nice scoop of sour cream!');
INSERT INTO Item (itemName, category, price, image, description) VALUES ('Meat Lovers Pizza','Pizza', 17.50, 'MeatLoversPizza.jpeg', 'Covered with sausage, chicken, and pepperoni, this is the dream for a protein filled pizza!');
INSERT INTO Item (itemName, category, price, image, description) VALUES ('BBQ Chicken Pizza', 'Pizza', 16.75, 'BBQChickenPizza.jpeg', 'Layered with our homemade BBQ sauce, tender grilled chicken, red onions, and gooey mozzarella on a golden crust!');
INSERT INTO Item (itemName, category, price, image, description) VALUES ('Supreme Pizza', 'Pizza', 16.00, 'SupremePizza.jpeg', 'Our classic supreme will have your tastebuds jumping with joy. Indulge in our delicious pepperoni, peppers, onions, mushrooms, and olives, all in one!');
INSERT INTO Item (itemName, category, price, image, description) VALUES ('Veggie Pizza', 'Pizza', 13.00, 'VeggiePizza.jpeg', 'Covered in all the greens you could imagine, this pizza is filled with all sorts of vegetables and is quite the healthy choice!');

INSERT INTO Item (itemName, category, price, image, description) VALUES ('French Fries','Side', 4.00, 'FrenchFries.jpeg', 'Crispy golden french fries, perfectly seasoned with a blend of sea salt and a hint of cracked black pepper!');
INSERT INTO Item (itemName, category, price, image, description) VALUES ('Onion Rings','Side', 4.25, 'OnionRings.jpeg', 'Thick cut onion rings, coated in a light, crispy batter and fried to a perfect golden brown!');
INSERT INTO Item (itemName, category, price, image, description) VALUES ('Mixed Fruit','Side', 3.50, 'MixedFruit.jpeg', 'Enjoy a refreshing combination of ripe strawberries, sweet melon, tangy pineapple, and plump blueberries all selected carefully for peak taste!');
INSERT INTO Item (itemName, category, price, image, description) VALUES ('Mixed Vegetables','Side', 3.00, 'MixedVegetables.jpeg', 'This delightful side features, lightly steamed broccoli, carrots, bell peppers, and zucchini, each chosen for their freshness and flavor!');

INSERT INTO Item (itemName, category, price, image, description) VALUES ('House Salad','SoupSalad', 4.00, 'HouseSalad.jpeg', 'Enjoy a delightful mix of romaine lettuce, juicy cherry tomatoes, fresh cucumber, and crunchy croutons, topped with shredded carrots and red onions!');
INSERT INTO Item (itemName, category, price, image, description) VALUES ('Ceasar Salad','SoupSalad', 5.00, 'CeasarSalad.jpeg', 'A delicious blend of romaine lettuce, tossed with crunchy homemade croutons, freshly grated parmeson cheese, topped with our rich and creamy ceasar dressing!');
INSERT INTO Item (itemName, category, price, image, description) VALUES ('Wedge','SoupSalad', 8.00, 'WedgeSalad.jpeg', 'Crisp iceberg lettuce wedge topped with blue cheese dressing, bacon bits, and diced tomatoes.');
INSERT INTO Item (itemName, category, price, image, description) VALUES ('Cobb Salad','SoupSalad', 12.00, 'CobbSalad.jpeg', 'Classic Cobb with grilled chicken, avocado, bacon, blue cheese, eggs, and mixed greens.');
INSERT INTO Item (itemName, category, price, image, description) VALUES ('Tomato Basil Soup','SoupSalad', 5.25, 'TomatoBasil.jpeg', ' A velvety blend of ripe tomatoes and fresh basil, enriched with a touch of cream, offering a smooth and rich taste!');
INSERT INTO Item (itemName, category, price, image, description) VALUES ('Clam Chowder','SoupSalad', 8.25, 'ClamChowder.jpeg', 'Creamy New England clam chowder, rich with clams, potatoes, and aromatic vegetables.');
INSERT INTO Item (itemName, category, price, image, description) VALUES ('Loaded Potato Soup','SoupSalad', 5.50, 'LoadedPotatos.jpeg', 'This rich, comforting soup is packed with tender chunks of potato, savory bacon, and sharp cheddar cheese all combined together in a creamy base!');

INSERT INTO Item (itemName, category, price, image, description) VALUES ('Mozzerella Sticks','Appetizer', 7.50, 'MozSticks.jpeg', 'Golden fried mozzarella sticks served with a side of marinara dipping sauce.');
INSERT INTO Item (itemName, category, price, image, description) VALUES ('Cheese Curds','Appetizer', 6.50, 'CheeseCurds.jpeg', 'Lightly breaded and fried cheese curds, crispy on the outside and gooey inside.');
INSERT INTO Item (itemName, category, price, image, description) VALUES ('Pretzel Bites','Appetizer', 6.75, 'PretzelBites.jpeg', 'Soft and chewy pretzel bites served warm with a creamy cheese dip.');
INSERT INTO Item (itemName, category, price, image, description) VALUES ('Fried Pickles','Appetizer', 7.00, 'FriedPickles.jpeg', 'Crispy fried pickles with a tangy dill flavor, paired with ranch dressing');
INSERT INTO Item (itemName, category, price, image, description) VALUES ('Sliders','Appetizer', 13.50, 'Sliders.jpeg', 'Mini burgers with juicy patties, cheddar cheese, and pickles on toasted buns.');
INSERT INTO Item (itemName, category, price, image, description) VALUES ('Garlic Dough Balls','Appetizer', 10.00, 'DoughBalls.jpeg', 'Soft dough balls toped with our husker made garlic butter.');