-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Хост: localhost
-- Время создания: Дек 04 2020 г., 08:16
-- Версия сервера: 8.0.22
-- Версия PHP: 7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `play_list_project`
--

-- --------------------------------------------------------

--
-- Структура таблицы `tracks_list`
--

CREATE TABLE `tracks_list` (
  `id` int NOT NULL,
  `performer` varchar(200) NOT NULL,
  `track` varchar(200) NOT NULL,
  `genre` varchar(50) NOT NULL,
  `year` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `tracks_list`
--

INSERT INTO `tracks_list` (`id`, `performer`, `track`, `genre`, `year`) VALUES
(1, 'Rammstein', 'Du hast', 'Industrial Rock', 1997),
(2, 'Rammstein', 'Sonne', 'Industrial Rock', 2001),
(3, 'Rammstein', 'Ich Will', 'Rock', 2001),
(4, 'Rammstein', 'Ohne Dich', 'Rock', 2004),
(5, 'Rammstein', 'Mutter', 'Rock', 2001),
(6, 'Rammstein', 'Zwitter', 'Rock', 2001),
(7, 'AC/DC', 'Can I Sit Next To You Girl', 'Hard Rock', 1974),
(10, 'AC/DC', 'High Voltage', 'Hard Rock', 1975),
(11, 'AC/DC', 'Dirty Deeds Done Dirt Cheap', 'Hard Rock', 1976),
(12, 'Wardruna', 'Kvitravn', 'Neofolk', 2020),
(13, 'Wardruna', 'Skald', 'Neofolk', 2018),
(14, 'Wardruna', 'Raido', 'Neofolk', 2018),
(15, 'Wardruna', 'Vardlokk', 'Neofolk', 2018),
(16, 'Wardruna', 'Fehu', 'Neofolk', 2018),
(17, 'Wardruna', 'Vindavia', 'Neofolk', 2018),
(18, 'Wardruna', 'Sonatorrek', 'Neofolk', 2018),
(19, 'Wardruna', 'Helvegen', 'Neofolk', 2018),
(20, 'Wardruna', 'Voluspa', 'Neofolk', 2018),
(21, 'Wardruna', 'Gravbakkjen', 'Neofolk', 2018),
(22, 'Scorpions', 'I\'m Goin\' Mad\r\n', 'Hard Rock', 1972),
(23, 'Scorpions', 'It All Depends\r\n', 'Hard Rock', 1972),
(24, 'Scorpions', 'Leave Me\r\n', 'Hard Rock', 1972),
(25, 'Scorpions', 'In Search Of The Peace Of Mind\r\n', 'Hard Rock', 1972),
(26, 'Scorpions', 'Inheritance\r\n', 'Hard Rock', 1972),
(27, 'Scorpions', 'Action\r\n', 'Hard Rock', 1972),
(28, 'Scorpions', 'Lonesome Crow\r\n', 'Hard Rock', 1972),
(29, 'ABBA', 'Mamma Mia\r\n', 'Pop', 1975),
(30, 'ABBA', 'Hey, Hey Helen\r\n', 'Pop', 1975),
(31, 'ABBA', 'Tropical Loveland\r\n', 'Pop', 1975),
(32, 'ABBA', 'Man In The Middle\r\n', 'Pop', 1975),
(33, 'ABBA', 'SOS', 'Pop', 1975),
(34, 'ABBA', 'Bang-A-Boomerang\r\n', 'Pop', 1975),
(35, 'ABBA', 'Rock Me\r\n', 'Pop', 1975),
(36, 'ABBA', 'Intermezzo No.1\r\n', 'Pop', 1975),
(37, 'ABBA', 'So Long\r\n', 'Pop', 1975),
(38, 'ABBA', 'Crazy World\r\n', 'Pop', 1975);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `tracks_list`
--
ALTER TABLE `tracks_list`
  ADD UNIQUE KEY `id` (`id`) USING BTREE;

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `tracks_list`
--
ALTER TABLE `tracks_list`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
