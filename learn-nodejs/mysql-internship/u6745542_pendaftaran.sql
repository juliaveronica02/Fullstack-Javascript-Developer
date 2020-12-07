-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 24, 2020 at 03:14 PM
-- Server version: 10.3.25-MariaDB
-- PHP Version: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `u6745542_pendaftaran`
--

-- --------------------------------------------------------

--
-- Table structure for table `Admin`
--

CREATE TABLE `Admin` (
  `id` int(255) NOT NULL,
  `username` varchar(50) NOT NULL,
  `email` varchar(70) NOT NULL,
  `phone` bigint(14) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Admin`
--

INSERT INTO `Admin` (`id`, `username`, `email`, `phone`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'bill', 'bill@gmail.com', 1234567790, '$2b$12$d0w7pmBXUyQePCnD8UkSsuO', '2020-11-17', '2020-11-17'),
(2, 'bill123', 'bill123@gmail.com', 1234567791, '$2b$12$bpbYNSFVCrdzWq5ocnfXwOC', '2020-11-17', '2020-11-17'),
(3, 'bill12', 'bill12@gmail.com', 12345677911, '$2b$12$YlQSGX5hGFj5qxSwD9uPGOR4hdTglDHGB2n3zrDJ8PZypGO9lFK0e', '2020-11-17', '2020-11-17');

-- --------------------------------------------------------

--
-- Table structure for table `banner130`
--

CREATE TABLE `banner130` (
  `id` int(11) NOT NULL,
  `images` varchar(255) NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `banner130`
--

INSERT INTO `banner130` (`id`, `images`, `createdAt`, `updatedAt`) VALUES
(1, 'public/images/banner130/2020-11-24T01:22:45.397ZDayklinCuciPiring5L(Super Premium).png', '2020-11-24', '2020-11-24');

-- --------------------------------------------------------

--
-- Table structure for table `banner400`
--

CREATE TABLE `banner400` (
  `id` int(11) NOT NULL,
  `images` varchar(255) NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `banner400`
--

INSERT INTO `banner400` (`id`, `images`, `createdAt`, `updatedAt`) VALUES
(1, 'public/images/banner400/2020-11-24T01:31:26.836ZDayklinCuciPiring5L(Super Premium).png', '2020-11-24', '2020-11-24');

-- --------------------------------------------------------

--
-- Table structure for table `Berita`
--

CREATE TABLE `Berita` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `imageURL` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL,
  `written` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Berita`
--

INSERT INTO `Berita` (`id`, `title`, `imageURL`, `description`, `createdAt`, `updatedAt`, `written`, `email`) VALUES
(1, 'Lorem Ipsum Generator', 'public/images/2020-11-21T01:46:06.806Z81QnGdrGwsL._UL1500_.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat. Tellus mauris a diam maecenas sed enim ut. Turpis egestas pretium aenean pharetra magna ac placerat. Bibendum at varius vel pharetra vel turpis. Aenean sed adipiscing diam donec adipiscing tristique risus nec. Sodales neque sodales ut etiam sit amet nisl purus. Tristique risus nec feugiat in fermentum posuere urna. A pellentesque sit amet porttitor eget dolor morbi. Pellentesque nec nam aliquam sem et. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Feugiat nisl pretium fusce id velit ut. Vulputate mi sit amet mauris commodo quis imperdiet. Nisi vitae suscipit tellus mauris. Non pulvinar neque laoreet suspendisse interdum. Parturient montes nascetur ridiculus mus mauris. Tortor at risus viverra adipiscing at in. Turpis tincidunt id aliquet risus feugiat in ante metus dictum.\n\nAmet purus gravida quis blandit turpis cursus in hac. Id velit ut tortor pretium viverra. Dictum sit amet justo donec enim diam vulputate. Sed nisi lacus sed viverra tellus in hac habitasse platea. Eu ultrices vitae auctor eu. Dignissim suspendisse in est ante. Libero justo laoreet sit amet cursus sit amet dictum. Integer enim neque volutpat ac tincidunt vitae. Ut tortor pretium viverra suspendisse. Duis tristique sollicitudin nibh sit. Ornare massa eget egestas purus viverra accumsan.\n\nConvallis aenean et tortor at risus viverra adipiscing at. Lorem dolor sed viverra ipsum nunc aliquet. Bibendum est ultricies integer quis auctor. Phasellus faucibus scelerisque eleifend donec pretium vulputate. Mi quis hendrerit dolor magna eget est lorem ipsum. Quam vulputate dignissim suspendisse in est ante in nibh. Purus sit amet luctus venenatis lectus magna fringilla urna. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Varius morbi enim nunc faucibus a pellentesque sit. Orci eu lobortis elementum nibh tellus molestie nunc. Augue mauris augue neque gravida in fermentum. In aliquam sem fringilla ut morbi. Bibendum est ultricies integer quis auctor elit sed vulputate. Senectus et netus et malesuada fames ac turpis egestas. In hendrerit gravida rutrum quisque non. Suspendisse ultrices gravida dictum fusce ut. Nunc sed blandit libero volutpat sed cras ornare arcu dui. Augue mauris augue neque gravida in fermentum.\n\nNascetur ridiculus mus mauris vitae ultricies leo integer. Adipiscing elit pellentesque habitant morbi tristique senectus et netus. Est placerat in egestas erat imperdiet. Mattis nunc sed blandit libero volutpat. Imperdiet proin fermentum leo vel orci porta non pulvinar neque. Lacus sed turpis tincidunt id. Volutpat est velit egestas dui id. Id leo in vitae turpis massa sed elementum tempus. Consequat semper viverra nam libero justo laoreet. Scelerisque felis imperdiet proin fermentum leo vel.\n\nCommodo ullamcorper a lacus vestibulum sed arcu. Mauris cursus mattis molestie a iaculis at erat. Habitant morbi tristique senectus et. Amet consectetur adipiscing elit duis. Nibh mauris cursus mattis molestie. Lobortis elementum nibh tellus molestie. Eget duis at tellus at. Eget egestas purus viverra accumsan in nisl. Ut lectus arcu bibendum at varius vel pharetra. Duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat.', '2020-11-21', '2020-11-21', 'Bill', 'bill123@gmail.com'),
(2, '', '', '', '2020-11-23', '2020-11-23', '', 'berita1@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `EMarketing`
--

CREATE TABLE `EMarketing` (
  `id` int(11) NOT NULL,
  `email` varchar(70) DEFAULT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `EMarketing`
--

INSERT INTO `EMarketing` (`id`, `email`, `createdAt`, `updatedAt`) VALUES
(1, 'berita1@gmail.com', '2020-11-23', '2020-11-23'),
(2, NULL, '2020-11-24', '2020-11-24'),
(3, 'teslogin1@gmail.com', '2020-11-24', '2020-11-24'),
(4, 'teslogin1@gmail.com', '2020-11-24', '2020-11-24'),
(5, 'iniemail@gmail.com', '2020-11-24', '2020-11-24'),
(6, 'asd@gmail.com', '2020-11-24', '2020-11-24'),
(7, 'asd@gmail.com', '2020-11-24', '2020-11-24');

-- --------------------------------------------------------

--
-- Table structure for table `User`
--

CREATE TABLE `User` (
  `id` int(255) NOT NULL,
  `username` varchar(50) NOT NULL,
  `email` varchar(70) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone` bigint(14) NOT NULL,
  `ttl` text NOT NULL,
  `gender` text NOT NULL,
  `role` varchar(15) NOT NULL,
  `kota` varchar(50) NOT NULL,
  `productInterest` varchar(255) NOT NULL,
  `createdAt` date NOT NULL DEFAULT current_timestamp(),
  `updatedAt` date NOT NULL DEFAULT current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `User`
--

INSERT INTO `User` (`id`, `username`, `email`, `password`, `phone`, `ttl`, `gender`, `role`, `kota`, `productInterest`, `createdAt`, `updatedAt`) VALUES
(1, 'bill', 'bill@gmail.com', '$2b$12$ZZAdFUPB4Cb/o01BfPXAHOKgZutv1q.BLtaGED5ps2YJW62YaQvnu', 12345677913, '01 Januari 2001', 'Laki-laki', 'Member', 'Jakarta', 'Shoes', '2020-11-23', '2020-11-24'),
(2, 'zuzu1', 'zuzu11@gmail.com', '$2b$12$cdAEaiDc5ZQSfUsDPoKJf.A/Mv6T8.6GHqCyqwfcUyayL0HhYSd4m', 82210781111, 'surabaya, 20-agustus-2000', 'Laki-laki', 'Member', 'Bogor', 'shoes', '2020-11-23', '2020-11-23'),
(3, 'teslogin1', 'teslogin1@gmail.com', '$2b$12$5nDkuFhUh9IQ4UxAAcfECuXGqpo2Hlmnrl0ZFCqPij4JWm1Pre0U2', 81212121212, 'Bogor, 12 Agustus 2000', 'laki-laki', 'member', 'Bandung', 'tas', '2020-11-23', '2020-11-23');

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE `Users` (
  `Fullname` varchar(50) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Password` varchar(20) NOT NULL,
  `Phone` bigint(20) NOT NULL,
  `Role` varchar(50) NOT NULL,
  `Kota` varchar(50) NOT NULL,
  `id` int(11) NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Users`
--

INSERT INTO `Users` (`Fullname`, `Email`, `Password`, `Phone`, `Role`, `Kota`, `id`, `createdAt`, `updatedAt`) VALUES
('Bill', 'Bill@gmail.com', '$2b$12$WJWkhDXqvJKlG', 123456789, 'Member', 'Jakarta', 0, '0000-00-00', '0000-00-00'),
('tes', 'tes@gmail.com', '$2b$12$EVZbf9BV1It4I', 82210781111, 'Member', 'Bogor', 0, '0000-00-00', '0000-00-00'),
('dummy', 'myDummy@gmail.com', '$2b$12$G.t51XzWmZrav', 822107812121, 'member', 'Aceh Barat', 0, '0000-00-00', '0000-00-00'),
('test validasi', 'ade@gmail.com', '$2b$12$/hDSifTuJGFRm', 822107812121, 'member', 'Aceh Besar', 0, '0000-00-00', '0000-00-00'),
('dummy1', 'dummy1@gmail.com', '$2b$12$YlP.yhXueO26b', 122430208772, 'member', 'Jakarta Pusat', 0, '0000-00-00', '0000-00-00'),
('login', 'login@gmail.com', '$2b$12$9odf6eWQ9ykt1', 82210781111, 'Member', 'Bogor', 0, '0000-00-00', '0000-00-00'),
('hello', 'hello123@gmail.com', '$2b$12$WtxJjAjhPHP1p', 1234567891, 'Member', 'Jakarta', 0, '0000-00-00', '0000-00-00'),
('helloworld', 'helloworld@gmail.com', '$2b$12$tSBUScOdVXzAk', 1234567891, 'Member', 'Jakarta', 0, '0000-00-00', '0000-00-00'),
('helloworld12', 'helloworld12@gmail.com', '$2b$12$SndPsYY6H7CN4', 1234567891, 'Member', 'Jakarta', 0, '0000-00-00', '0000-00-00'),
('helloworldd', 'helloworldd@gmail.com', '$2b$12$fRWwmEjmNLjfW', 1234567891, 'Member', 'Jakarta', 0, '0000-00-00', '0000-00-00'),
('helloworldd1', 'helloworldd1@gmail.com', '$2b$12$Yf4Lvc7XhQQOi', 12345678911, 'Member', 'Jakarta', 0, '2020-11-17', '2020-11-17');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Admin`
--
ALTER TABLE `Admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `banner130`
--
ALTER TABLE `banner130`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `banner400`
--
ALTER TABLE `banner400`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Berita`
--
ALTER TABLE `Berita`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `EMarketing`
--
ALTER TABLE `EMarketing`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `User`
--
ALTER TABLE `User`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Admin`
--
ALTER TABLE `Admin`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `banner130`
--
ALTER TABLE `banner130`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `banner400`
--
ALTER TABLE `banner400`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `Berita`
--
ALTER TABLE `Berita`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `EMarketing`
--
ALTER TABLE `EMarketing`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `User`
--
ALTER TABLE `User`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
