-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 30-05-2019 a las 20:19:24
-- Versión del servidor: 10.1.39-MariaDB
-- Versión de PHP: 7.3.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `heroesdatabasefinal`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `heros`
--

CREATE TABLE `heros` (
  `name` varchar(255) NOT NULL,
  `biography` varchar(500) NOT NULL,
  `avatar` varchar(255) NOT NULL,
  `birth` varchar(25) NOT NULL,
  `category` varchar(255) NOT NULL,
  `creator` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `heros`
--

INSERT INTO `heros` (`name`, `biography`, `avatar`, `birth`, `category`, `creator`, `createdAt`, `updatedAt`) VALUES
('Aquaman', 'El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.\r\n', 'aquaman.png', '1941-11-01 00:00:00', 'hero', 'DC', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('Batman', 'Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.\r\n', 'batman.png', '1939-05-01 00:00:00', 'Hero', 'DC', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('Capitan America', 'Origen de un experimento que potencia las capacidades fisicas del ser humano, de ahi su ilimitada resistencia y fuerza.Su simbolo es su escudo fabricado por el material mas resistente del planeta(Vibranium).\r\n', 'capitanAmerica.jpg', '1941-03-01 00:00:00', 'hero', 'Marvel', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('Catwoman', 'Catwoman es un personaje ficticio creado por Bill Finger y Bob Kane que aparece en los cómics estadounidenses publicados por DC Comics, en asociación con el superhéroe Batman. El personaje hizo su debut como \"el gato\" en Batman # 1, y su nombre real es Selina Kyle.', 'catWoman.jpg', '1990-10-10 00:00:00', 'Hero', 'DC', '2019-05-29 10:03:44', '2019-05-29 10:03:44'),
('Ciclope', 'Cíclope es un miembro de una subespecie de humanos conocidos como mutantes, que nacen con habilidades sobrehumanas. Cíclope puede emitir potentes rayos de energía de sus ojos.', 'ciclope.png', '1977-01-01 00:00:00', 'Hero', 'Marvel', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('Daredevil', 'Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiación a niveles superhumanos, en el accidente que tuvo cuando era niño. A pesar de su ceguera, puede \\\"ver\\\" a través de un \\\"sexto sentido\\\" que le sirve como un radar similar al de los murciélagos.\r\n', 'daredevil.png', '1964-01-01 00:00:00', 'hero', 'Marvel', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('Fantastic', 'Sr. Fantástico es un superhéroe de ficción que aparece en los cómics estadounidenses publicados por Marvel Comics. El personaje es miembro fundador de los Cuatro Fantásticos.', 'fantastic.png', '1963-07-01 00:00:00', 'hero', 'Marvel', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('Flash', 'Nueve meses después de que el laboratorio S.T.A.R. explotara, Barry despierta del coma y descubre que tiene el poder de la súper velocidad. Con la ayuda de su nuevo equipo, Barry, denominado ahora `Flash\', luchará contra el crimen en Ciudad Central.', 'flash.png', '1964-09-01 00:00:00', 'Hero', 'DC', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('Hulk', 'Su principal poder es su capacidad de aumentar su fuerza hasta niveles prácticamente ilimitados a la vez que aumenta su furia. Dependiendo de qué personalidad de Hulk esté al mando en ese momento (el Hulk Banner es el más débil, pero lo compensa con su in', 'hulk.png', '1962-05-01 00:00:00', 'Hero', 'Marvel', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('Iron Man ', 'Iron Man es un superhéroe ficticio que aparece en los cómics estadounidenses publicados por Marvel Comics. El personaje fue co-creado por el escritor y editor Stan Lee, desarrollado por el guionista Larry Lieber y diseñado por los artistas Don Heck y Jack Kirby.', 'ironman.jpg', '1962-10-01 00:00:00', 'hero', 'Marvel', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('Joker', 'Es un psicopata asesino alimentado de los recuerdos de su infancia y la falta del amor demostrado por sus parientes. Tiene la habilidad de calcular todas las posibilidades en un asesinato y poder tender trampas en el.\r\n', 'joker.png', '1940-10-01 00:00:00', 'Villain', 'DC', '0000-00-00 00:00:00', '2019-05-30 17:02:06'),
('La Cosa', 'El personaje es miembro fundador de los Cuatro Fantásticos. Thing fue creado por el escritor y editor Stan Lee y el artista Jack Kirby, y apareció por primera vez en The Fantastic Four  (noviembre de 1961).El personaje es conocido por su característica apariencia rocosa, su sentido del humor y su famoso grito de batalla «¡es hora de pelear!» o «¡es la hora de las tortas!', 'laCosa.jpg', '1976-01-01 00:00:00', 'Hero', 'Marvel', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('Linterna Verde', 'Poseedor del anillo de poder que posee la capacidad de crear manifestaciones de luz sólida mediante la utilización del pensamiento. Es alimentado por la Llama Verde (revisada por escritores posteriores como un poder místico llamado Starheart), una llama m', 'linterna-verde.png', '1940-06-01 00:00:00', 'Hero', 'DC', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('Nick Fury', 'Nicholas \"Nick\" Fury, más conocido como Nick Fury, es un personaje ficticio que aparece en los cómics estadounidenses publicados por Marvel Comics. Creado por el escritor / artista Jack Kirby y el escritor Stan Lee, Fury apareció por primera vez en Sgt', 'nickFury.jpg', '1960-12-11 00:00:00', 'Hero', 'Marvel', '2019-05-29 10:35:28', '2019-05-29 10:35:28'),
('Spider-Man', 'Tras ser mordido por una araña radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes. La fuerza de Spider-Man le permite levantar 10 toneladas o más. Gracias a esta gran fuerza Spider-Man puede realiza', 'spiderman.png', '1962-08-01 00:00:00', 'hero', 'Marvel', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('Superman', 'La historia original de Superman relata que nació con el nombre de Kal-El en el planeta Krypton; su padre, el científico Jor-El, y su madre Lara Lor-Van, lo enviaron en una nave espacial con destino a la Tierra cuando era un niño, momentos antes de la destrucción de su planeta. Fue descubierto y adoptado por Jonathan Kent y Martha Kent, una pareja de granjeros de Smallville, Kansas, que lo criaron con el nombre de Clark Kent y le inculcaron un estricto código moral. ', 'superman.jpg', '1984-05-01 00:00:00', 'hero', 'DC', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('Thor', 'Thor, cuyo nombre completo es Thor Odinson, conocido como Donald Blake en la tierra como su identidad secreta, es un superhéroe y príncipe-guerrero asgardiano, el dios del Trueno, y un protector auto-proclamado de la Tierra. Thor, posteriormente, se volvi', 'thor.jpg', '1990-09-17 00:00:00', 'Hero', 'Marvel', '2019-05-29 09:48:23', '2019-05-29 09:48:23'),
('Wolverine', 'En el universo ficticio de Marvel, Wolverine posee poderes regenerativos que pueden curar cualquier herida, por mortal que ésta sea, además ese mismo poder hace que sea inmune a cualquier enfermedad existente en la Tierra y algunas extraterrestres . Posee', 'wolverine.png', '1974-11-01 00:00:00', 'hero', 'Marvel', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('Wonder woman', 'Diana, hija de dioses y princesa de las amazonas, nunca ha salido de su isla. Un día, en el contexto de la Primera Guerra Mundial, un piloto americano se estrella en su isla y Diana salva su vida; el piloto le explica que se está desarrollando una gran guerra que puede devastar el mundo, y Diana parte a la batalla.', 'missWonderman.jpg', '1973-02-01 00:00:00', 'Hero', 'DC', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `heros`
--
ALTER TABLE `heros`
  ADD PRIMARY KEY (`name`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
