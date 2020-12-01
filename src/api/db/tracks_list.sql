-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Хост: localhost
-- Время создания: Апр 16 2019 г., 19:56
-- Версия сервера: 5.7.14
-- Версия PHP: 7.3.2RC1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `music_app`
--

-- --------------------------------------------------------

--
-- Структура таблицы `tracks_list`
--

CREATE TABLE `tracks_list` (
  `id` int(11) NOT NULL,
  `performer` varchar(200) NOT NULL,
  `track` varchar(200) NOT NULL,
  `genre` varchar(50) NOT NULL,
  `year` int(11) NOT NULL
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
(11, 'AC/DC', 'Dirty Deeds Done Dirt Cheap', 'Hard Rock', 1976);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
