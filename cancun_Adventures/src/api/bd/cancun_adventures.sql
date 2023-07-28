-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 10-07-2023 a las 16:52:29
-- Versión del servidor: 8.0.31
-- Versión de PHP: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `cancun_adventures`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cart`
--

DROP TABLE IF EXISTS `cart`;
CREATE TABLE IF NOT EXISTS `cart` (
  `id` int NOT NULL AUTO_INCREMENT,
  `tour_id` int NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `tour_id` (`tour_id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `cart`
--

INSERT INTO `cart` (`id`, `tour_id`, `created_at`) VALUES
(1, 2, '2023-07-06 22:38:44');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tours`
--

DROP TABLE IF EXISTS `tours`;
CREATE TABLE IF NOT EXISTS `tours` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_spanish_ci NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `short_description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci,
  `img` varchar(255) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci,
  `schedule` varchar(255) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `includes` text COLLATE utf8mb4_spanish_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `tours`
--

INSERT INTO `tours` (`id`, `name`, `price`, `short_description`, `img`, `description`, `schedule`, `includes`) VALUES
(1, 'Chichen Itza', '200.00', 'Travel in style and comfort aboard a deluxe bus to Chichen Itza, one of the New Seven Wonders of the World.', 'chichen.jpg', 'Travel in style and comfort aboard a deluxe bus to Chichen Itza, one of the New Seven Wonders of the World and a can’t-miss part of your Cancun or Riviera Maya vacation. Follow your expert guide through the hallowed grounds of this ancient Mayan city and prepare to be enthralled by world-class landmarks like the iconic Temple of Kukulcan, the Observatory, more pyramids and other impressive temples. Then refuel with an authentic Yucatec buffet lunch, refresh at a cenote (freshwater sinkhole), and enjoy more food and drinks along the way for a truly exclusive adventure.', '08:00 AM - 05:00 PM', ''),
(2, 'Tulum', '180.00', 'In this Tulum Jungle Maya tour, you’ll get the best of two worlds as culture and adventure come together.', 'tulum.jpg', 'In this Tulum Jungle Maya tour, you’ll get the best of two worlds as culture and adventure come together. Explore the mysterious Maya ruins of Tulum, and later go explore the jungle and choose from thrilling activities such as zip lining, rappelling, riding a 4x4 and, of course, dipping in the cool crystal-clear waters of a cenote (freshwater sinkhole) to snorkel or just swim.', '08:00 AM - 06:00 PM', ''),
(9, 'Isla Mujeres', '150.00', 'Explore the beauty of the Mexican Caribbean turquoise waters of the little island town of Isla Mujeres.', 'isla-mujeres.jpg', 'Embark on a fabulous adventure as you take a luxury sail on a catamaran from Cancun to the colorful slice of paradise that is Isla Mujeres. Explore the beauty of the Mexican Caribbean during your cruise across breathtaking turquoise waters before you lose yourself in the winding streets of the little island town of Isla Mujeres. Soak up the picturesque beauty and inspiring beaches, and end your journey with a sail back to Cancun over open-bar drinks and a gourmet lunch to round out a delightful day.', '10:00 AM - 07:00 PM', ''),
(3, 'Cozumel', '165.00', 'Welcome to the Cozumel Island Tour, an unforgettable journey through one of Mexico\'s most beautiful destinations.', 'cozumel.jpg\r\n', 'Welcome to the Cozumel Island Tour, an unforgettable journey through one of Mexico\'s most beautiful destinations. Cozumel, located in the crystal-clear waters of the Caribbean Sea, offers a unique blend of natural wonders, rich cultural heritage, and thrilling adventures.\r\n\r\nOur tour begins as we set sail from the mainland on a comfortable ferry, allowing you to admire the stunning views of the turquoise ocean. Once we arrive on the island, our expert local guide will greet you and provide fascinating insights into Cozumel\'s history, traditions, and ecological significance.', '08:00 AM - 06:00 PM', ''),
(4, 'Xcaret', '220.00', 'Fall in love with Cancun, more than 50 attractions surrounded by jungle, underground rivers, and the Sea.', 'xcaret.jpg', 'Fall in love with Mexico in more than 50 attractions surrounded by jungle, underground rivers, and the Caribbean Sea. Enjoy typical Mexican dances, Pre-Hispanic archaeological vestiges, and the Xcaret México Espectacular presentation.', '09:00 AM - 05:00 PM', ''),
(5, 'Xplor', '230.00', 'Freedom begins when the whole jungle is open for you to explore and the wild adventure cant wait!', 'xplor.jpg', 'Freedom begins when the whole jungle is open for you to explore. From the tallest zip-lines in Playa del Carmen and Riviera Maya to the center of the Earth. An adventure park where everything is included, so you’re free to discover the road ahead and try as many activities as you want, as many times as you want!', '09:00 AM - 05:00 PM', ''),
(6, 'Xelha', '190.00', 'Live an unparalleled day in a place considered one of the most beautiful natural wonders around the globe. ', 'xelha.jpg', 'Live an unparalleled day in a place considered one of the most beautiful natural wonders around the globe. Xel-Há Park offers one of the best experiences in the heart of the Riviera Maya. Have unlimited snorkeling at its splendid cove and swim by its river, cenotes, and hidden bays. Here, you will discover that heaven is closer than you think.', '09:00 AM - 05:00 PM', ''),
(7, 'Xavage', '190.00', 'Xavage is a new thrill park in Cancun and a great place to have an adventure and challenges.', 'xavage.jpg', 'Xavage is a new thrill park in Cancun and a great place to have an adventure. An exciting day is waiting for you, where you experience adrenaline or just having a great day hanging out, trying new activities. At Xavage, you can live an adventure on your way since you can try every activity as many times as you want.', '09:00 AM - 05:00 PM', ''),
(8, 'Xenotes', '0.00', 'You’ve heard about the incredible sinkholes of the Yucatan Peninsula, now immerse yourself into their fresh waters.', 'xenotes.jpg', 'You’ve heard about the incredible sinkholes of the Yucatan Peninsula, now immerse yourself into their fresh waters with the Xenotes Cancun tour. This full-day adventure is the ultimate definition of refreshing fun, as youll get to explore four different types of sinkholes in beautiful natural surroundings.', '09:00 AM - 05:00 PM', '');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
