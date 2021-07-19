CREATE TABLE `raha`.`user`  (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL UNIQUE,
  `password` varchar(255) NOT NULL,
  `role` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE = MyISAM CHARACTER SET = utf8 COLLATE = utf8_general_ci;


CREATE TABLE `raha`.`request`  (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `user` int UNSIGNED not NULL,
  `dt` timestamp not null DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE = MyISAM CHARACTER SET = utf8 COLLATE = utf8_general_ci;