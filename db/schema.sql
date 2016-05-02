
DROP DATABASE IF EXISTS obie;
CREATE DATABASE obie;

USE obie;

-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'users'
--
-- ---

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` INT AUTO_INCREMENT,
  `name` VARCHAR(20) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `password` VARCHAR(100),
  `house_id` INT,
  `previous_houses` VARCHAR(100),
  `user_image_url` VARCHAR(200),
  `is_landlord` TINYINT DEFAULT 0,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'houses'
--
-- ---

DROP TABLE IF EXISTS `houses`;

CREATE TABLE `houses` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(30) NOT NULL DEFAULT 'NULL',
  `code` VARCHAR(15) NOT NULL,
  `address` VARCHAR(200),
  `landlord_id` INT,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'chores'
-- 
-- ---

DROP TABLE IF EXISTS `chores`;
    
CREATE TABLE `chores` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT,
  `name` VARCHAR(30) NOT NULL,
  `category` VARCHAR(20) NOT NULL,
  `completed` TINYINT NOT NULL DEFAULT 0,
  `due_date` DATE NULL,
  `house_id` INT NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'messages'
-- 
-- ---

DROP TABLE IF EXISTS `messages`;
    
CREATE TABLE `messages` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `text` MEDIUMTEXT NOT NULL,
  `house_id` INT NOT NULL,
  `time` DATETIME NOT NULL,
  `is_landlord_chat` TINYINT NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'bills'
-- 
-- ---

DROP TABLE IF EXISTS `bills`;
    
CREATE TABLE `bills` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `total` FLOAT NOT NULL,
  `name` VARCHAR(30) NULL,
  `due_date` DATE NOT NULL,
  `date_paid` DATE NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'payments'
-- 
-- ---

DROP TABLE IF EXISTS `payments`;
    
CREATE TABLE `payments` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `bill_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  `amount` FLOAT NOT NULL,
  `paid` TINYINT NOT NULL DEFAULT 0,
  `date_paid` DATE NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `users` ADD FOREIGN KEY (house_id) REFERENCES `houses` (`id`);
ALTER TABLE `houses` ADD FOREIGN KEY (landlord_id) REFERENCES `users` (`id`);
ALTER TABLE `chores` ADD FOREIGN KEY (user_id) REFERENCES `users` (`id`);
ALTER TABLE `messages` ADD FOREIGN KEY (user_id) REFERENCES `users` (`id`);
ALTER TABLE `messages` ADD FOREIGN KEY (house_id) REFERENCES `houses` (`id`);
ALTER TABLE `bills` ADD FOREIGN KEY (user_id) REFERENCES `users` (`id`);
ALTER TABLE `payments` ADD FOREIGN KEY (bill_id) REFERENCES `bills` (`id`);
ALTER TABLE `payments` ADD FOREIGN KEY (user_id) REFERENCES `users` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `houses` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `chores` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `messages` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `bills` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `payments` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

INSERT INTO `houses` (`id`,`name`,`code`) VALUES
(1,'Landlord houses', 'QWERTY123');

INSERT INTO `houses` (`id`,`name`,`code`) VALUES
(2,'less fun houses', '12345');

-- INSERT INTO `users` (`id`,`name`,`password`,`house_id`) VALUES
-- ('','','','');
INSERT INTO `users` (name, house_id, email) VALUES
('Joey Holland', 1, 'joey@yahoo.com');

INSERT INTO `users` (name, house_id, email) VALUES
('Justin Mancherje', 1, 'justin@yahoo.com');

INSERT INTO `users` (name, house_id, email) VALUES
('Lyly Nguyen', 1, 'lyly@yahoo.com');

-- INSERT INTO `users` (`id`,`name`,`password`,`house_id`) VALUES
-- (2, 'Nick Kneafsey','nice', 1);

-- INSERT INTO `users` (`id`,`name`,`password`,`house_id`) VALUES
-- (3, 'Lyly Nguyen','password', 2);

-- INSERT INTO `users` (`id`,`name`,`password`,`house_id`) VALUES
-- (4, 'Justin Mancherje','123', 2);


-- INSERT INTO `houses` (`id`,`name`) VALUES
-- ('','');


-- INSERT INTO `chores` (`id`,`user_id`,`name`,`category`,`completed`,`dueDate`,`house_id`) VALUES
-- ('','','','','','','');

INSERT INTO `chores` (`user_id`,`name`,`category`,`completed`,`due_date`,`house_id`) VALUES
(1,'feed dog','pets',0,'2016-01-29', 1);

-- INSERT INTO `messages` (`id`,`user_id`,`text`,`house_id`) VALUES
-- ('','','','');

INSERT INTO `messages` (`id`,`user_id`,`text`,`house_id`,`time`) VALUES
(1, 1,'helllo',1, NOW());

INSERT INTO `messages` (`id`,`user_id`,`text`,`house_id`,`time`) VALUES
(2, 3,'hey guys',2, NOW());


-- INSERT INTO `bills` (`id`,`user_id`,`total`,`name`,`dueDate`,`datePaid`) VALUES
-- ('','','','','','');
INSERT INTO `bills` (`id`,`user_id`,`total`,`name`,`due_date`,`date_paid`) VALUES
(1,1,200,'water bills','2016-01-29', null);

INSERT INTO `bills` (`id`,`user_id`,`total`,`name`,`due_date`,`date_paid`) VALUES
(2,2,300,'electric bills','2016-01-29', null);

INSERT INTO `bills` (`id`,`user_id`,`total`,`name`,`due_date`,`date_paid`) VALUES
(3,2,100,'terminator','2016-01-29', null);

-- INSERT INTO `payments` (`id`,`bill_id`,`user_id`,`amount`,`paid`,`datePaid`) VALUES
-- ('','','','','','');

INSERT INTO `payments` (`id`,`bill_id`,`user_id`,`amount`,`paid`,`date_paid`) VALUES
(1,1,2,200,0,null);

INSERT INTO `payments` (`id`,`bill_id`,`user_id`,`amount`,`paid`,`date_paid`) VALUES
(2,1,2,400,1,null);

INSERT INTO `payments` (`id`,`bill_id`,`user_id`,`amount`,`paid`,`date_paid`) VALUES
(3,2,1,300,0,null);

INSERT INTO `payments` (`id`,`bill_id`,`user_id`,`amount`,`paid`,`date_paid`) VALUES
(4,3,1,100,1,null);


