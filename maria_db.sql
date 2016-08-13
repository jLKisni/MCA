-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Apr 06, 2016 at 09:15 AM
-- Server version: 5.6.17-log
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `maria_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE IF NOT EXISTS `admin` (
  `admin_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `lastname` varchar(30) NOT NULL,
  `username` varchar(40) NOT NULL,
  `password` varchar(300) NOT NULL,
  PRIMARY KEY (`admin_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`admin_id`, `name`, `lastname`, `username`, `password`) VALUES
(2, 'Rene', 'Macalisang', 'user', '8277e0910d750195b448797616e091ad'),
(4, 'John Louise', 'Berdida', 'jLkisni', '3f6e0d3aeb6c403803a8ddf4c93678a7');

-- --------------------------------------------------------

--
-- Table structure for table `checkout`
--

CREATE TABLE IF NOT EXISTS `checkout` (
  `check_out_id` int(11) NOT NULL AUTO_INCREMENT,
  `room_number` varchar(10) NOT NULL,
  `check_out_name` varchar(50) NOT NULL,
  `check_out_indate` date NOT NULL,
  `check_out_roomrate` double NOT NULL,
  `check_out_room_class` varchar(15) NOT NULL,
  `check_out_room_type` varchar(15) NOT NULL,
  `check_out_applicant_type` varchar(20) NOT NULL,
  `check_out_exp_date` date NOT NULL,
  `check_out_totalrent` double NOT NULL,
  `check_out_totalutility` double NOT NULL,
  `check_out_penalty` double NOT NULL,
  `check_out_discount` double NOT NULL,
  `check_out_totalpayment` double NOT NULL,
  `check_out_amountpaid` double NOT NULL,
  `check_out_balance` double NOT NULL,
  `room_id` int(11) NOT NULL,
  `occu_ai_id` int(11) NOT NULL,
  `admin` varchar(255) NOT NULL,
  PRIMARY KEY (`check_out_id`),
  KEY `room_id` (`room_id`),
  KEY `occu_ai_id` (`occu_ai_id`),
  KEY `room_id_2` (`room_id`,`occu_ai_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `checkout`
--

INSERT INTO `checkout` (`check_out_id`, `room_number`, `check_out_name`, `check_out_indate`, `check_out_roomrate`, `check_out_room_class`, `check_out_room_type`, `check_out_applicant_type`, `check_out_exp_date`, `check_out_totalrent`, `check_out_totalutility`, `check_out_penalty`, `check_out_discount`, `check_out_totalpayment`, `check_out_amountpaid`, `check_out_balance`, `room_id`, `occu_ai_id`, `admin`) VALUES
(1, '2A-2', 'Kristelle', '0000-00-00', 2500, 'Dorm', 'Aircon', 'Relocator', '0000-00-00', 0, -4, 0, 0, -2004, -2004, 0, 515, 20, 'John');

-- --------------------------------------------------------

--
-- Table structure for table `contract`
--

CREATE TABLE IF NOT EXISTS `contract` (
  `contract_id` int(11) NOT NULL AUTO_INCREMENT,
  `contract_term` varchar(100) NOT NULL,
  `contract_start` date NOT NULL,
  `contract_end` date NOT NULL,
  `duration_until` date NOT NULL,
  `application_type` varchar(10) NOT NULL,
  `relocator_company` varchar(200) NOT NULL,
  `room_number` varchar(10) NOT NULL,
  `occu_ai_id` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  PRIMARY KEY (`contract_id`),
  KEY `room_number` (`room_number`),
  KEY `occu_ai_id` (`occu_ai_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=20 ;

--
-- Dumping data for table `contract`
--

INSERT INTO `contract` (`contract_id`, `contract_term`, `contract_start`, `contract_end`, `duration_until`, `application_type`, `relocator_company`, `room_number`, `occu_ai_id`, `status`) VALUES
(5, '', '2016-02-29', '2016-04-05', '2016-03-17', 'Relocator', 'cca', '2A-2', 5, 0),
(6, '', '2016-02-23', '2016-04-04', '2016-03-24', 'Relocator', 'JPMorgan', '2A-1', 6, 0),
(7, '', '2016-02-26', '2016-03-15', '2016-03-11', 'Relocator', 'WiPro', '2A-5', 7, 0),
(8, '', '2016-02-09', '2016-04-05', '2016-03-17', 'Relocator', 'JPMorgan', '2A-6', 8, 0),
(9, '', '2016-02-26', '2016-04-05', '2016-04-19', 'Relocator', 'WiPro', '2A-2', 9, 0),
(10, '', '2016-02-29', '2016-04-04', '2016-03-18', 'Bed Spacer', '', '2A-1', 10, 0),
(11, '', '2016-03-11', '2016-03-15', '2016-04-04', 'Relocator', 'JPMorgan', '2A-5', 12, 0),
(12, '', '2016-03-14', '2016-04-04', '2016-04-18', 'Relocator', 'WiPro', '2A-3', 13, 0),
(13, '', '2016-03-09', '2016-04-04', '2016-04-24', 'Bed Spacer', '', '2A-1', 14, 0),
(14, '', '0000-00-00', '2016-04-04', '0000-00-00', 'Bed Spacer', '', '2A-1', 15, 0),
(15, '', '0000-00-00', '2016-04-04', '0000-00-00', 'Bed Spacer', '', '2A-3', 16, 0),
(16, '', '0000-00-00', '2016-04-04', '0000-00-00', 'Bed Spacer', '', '2A-1', 17, 0),
(17, '', '2016-04-04', '2016-04-05', '2016-05-04', 'Relocator', 'JPMorgan', '2A-6', 18, 0),
(18, '', '2016-04-05', '2016-04-05', '2016-05-04', 'Relocator', 'Convergys', '2A-4', 19, 0),
(19, '', '0000-00-00', '2016-04-05', '0000-00-00', 'Relocator', 'JPMorgan', '2A-2', 20, 0);

-- --------------------------------------------------------

--
-- Table structure for table `deleted`
--

CREATE TABLE IF NOT EXISTS `deleted` (
  `dep_id` int(11) NOT NULL AUTO_INCREMENT,
  `amount` double NOT NULL,
  `occu_ai_id` int(11) NOT NULL,
  `room_number` varchar(10) NOT NULL,
  `contract_id` int(11) NOT NULL,
  PRIMARY KEY (`dep_id`),
  KEY `contract_id` (`contract_id`),
  KEY `room_number` (`room_number`),
  KEY `occu_ai_id` (`occu_ai_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `deposit`
--

CREATE TABLE IF NOT EXISTS `deposit` (
  `dep_id` int(11) NOT NULL AUTO_INCREMENT,
  `amount` float NOT NULL,
  `room_number` varchar(10) NOT NULL,
  `occu_ai_id` int(11) NOT NULL,
  `contract_id` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  `dep_name` varchar(50) NOT NULL,
  `datedeposit` date NOT NULL,
  `datepaid` date NOT NULL,
  PRIMARY KEY (`dep_id`),
  KEY `room_numer` (`room_number`),
  KEY `occu_ai_id` (`occu_ai_id`),
  KEY `contract_id` (`contract_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `deposit`
--

INSERT INTO `deposit` (`dep_id`, `amount`, `room_number`, `occu_ai_id`, `contract_id`, `status`, `dep_name`, `datedeposit`, `datepaid`) VALUES
(1, 2000, '2A-2', 20, 19, 0, 'Kristelle', '2016-04-05', '2016-04-05');

-- --------------------------------------------------------

--
-- Table structure for table `light_bill`
--

CREATE TABLE IF NOT EXISTS `light_bill` (
  `light_id` int(11) NOT NULL AUTO_INCREMENT,
  `last_reading` int(11) NOT NULL,
  `current_reading` int(11) NOT NULL,
  `utility_usage` double NOT NULL,
  `rate_per_kilowatts` double NOT NULL,
  `payable` double NOT NULL,
  `occu_ai_id` int(11) NOT NULL,
  `room_number` varchar(11) NOT NULL,
  `contract_id` int(11) NOT NULL,
  PRIMARY KEY (`light_id`),
  KEY `contract_id` (`contract_id`),
  KEY `occu_ai_id` (`occu_ai_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=41 ;

--
-- Dumping data for table `light_bill`
--

INSERT INTO `light_bill` (`light_id`, `last_reading`, `current_reading`, `utility_usage`, `rate_per_kilowatts`, `payable`, `occu_ai_id`, `room_number`, `contract_id`) VALUES
(6, 2, 55, 21, 22, 462, 5, '2A-2', 5),
(7, 32, 55, 21, 32, 672, 6, '2A-1', 6),
(8, 32, 55, 0, 0, 0, 7, '2A-5', 7),
(9, 32, 55, 21, 25, 525, 8, '2A-6', 8),
(10, 25, 55, 25, 12.5, 312.5, 9, '2A-2', 9),
(11, 2, 5, 3, 2, 6, 10, '2A-1', 10),
(12, 2, 5, 3, 2, 6, 10, '2A-1', 10),
(13, 32, 55, 21, 32, 672, 8, '2A-6', 8),
(14, 23, 222, 197, 32, 6304, 8, '2A-6', 8),
(15, 23, 55, 30, 12, 360, 8, '2A-6', 8),
(16, 22, 55, 31, 3, 93, 8, '2A-6', 8),
(17, 22, 35, 11, 44, 484, 12, '2A-5', 11),
(18, 0, 0, 0, 0, 0, 13, '2A-3', 12),
(19, 23, 55, 30, 32, 960, 9, '2A-2', 9),
(20, 0, 0, 0, 0, 0, 9, '2A-2', 9),
(21, 32, 55, 17, 3, 51, 9, '2A-2', 9),
(22, 0, 0, 0, 0, 0, 9, '2A-2', 9),
(23, 0, 0, 0, 0, 0, 13, '2A-3', 12),
(24, 0, 0, 0, 0, 0, 14, '2A-1', 13),
(25, 0, 0, 0, 0, 0, 9, '2A-2', 9),
(26, 0, 0, 0, 0, 0, 9, '2A-2', 9),
(27, 0, 0, 0, 0, 0, 15, '2A-1', 14),
(28, 0, 0, 0, 0, 0, 17, '2A-1', 16),
(29, 23, 55, 27, 22, 594, 16, '2A-3', 15),
(30, 0, 0, 0, 0, 0, 17, '2A-1', 16),
(31, 0, 0, 0, 0, 0, 17, '2A-1', 16),
(32, 0, 0, 0, 0, 0, 17, '2A-1', 16),
(33, 23, 55, 30, 2, 60, 17, '2A-1', 16),
(34, 23, 55, 27, 2, 54, 17, '2A-1', 16),
(35, 5, 5, 0, 0, 0, 18, '2A-6', 17),
(36, 5, 32, 0, 0, 0, 18, '2A-6', 17),
(37, 2, 55, 51, 3, 153, 18, '2A-6', 17),
(38, 0, 55, 32, 5, 160, 18, '2A-6', 17),
(39, 0, 0, 0, 0, 0, 19, '2A-4', 18),
(40, 25, 55, 28, 32, 896, 20, '2A-2', 19);

-- --------------------------------------------------------

--
-- Table structure for table `occupant_app_info`
--

CREATE TABLE IF NOT EXISTS `occupant_app_info` (
  `occu_ai_id` int(11) NOT NULL AUTO_INCREMENT,
  `occu_ai_name` varchar(200) NOT NULL,
  `occu_ai_birthdate` date NOT NULL,
  `occu_ai_contact_no` varchar(11) NOT NULL,
  `occu_ai_curr_address` varchar(200) NOT NULL,
  `occu_ai_city` varchar(20) NOT NULL,
  `occu_ai_province` varchar(50) NOT NULL,
  `occu_ai_zip_code` int(11) NOT NULL,
  `occu_ai_ownrent` varchar(10) NOT NULL,
  `occu_ai_monthlypaymentorrent` double NOT NULL,
  `occu_ai_howlong` varchar(50) NOT NULL,
  `occu_ai_previousAddress` varchar(100) NOT NULL,
  `occu_ai_previous_ownrent` varchar(50) NOT NULL,
  `occu_ai_previousmonthlypayment` double NOT NULL,
  `occu_ai_previoushowlong` varchar(50) NOT NULL,
  PRIMARY KEY (`occu_ai_id`),
  KEY `occu_ai_id` (`occu_ai_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=21 ;

--
-- Dumping data for table `occupant_app_info`
--

INSERT INTO `occupant_app_info` (`occu_ai_id`, `occu_ai_name`, `occu_ai_birthdate`, `occu_ai_contact_no`, `occu_ai_curr_address`, `occu_ai_city`, `occu_ai_province`, `occu_ai_zip_code`, `occu_ai_ownrent`, `occu_ai_monthlypaymentorrent`, `occu_ai_howlong`, `occu_ai_previousAddress`, `occu_ai_previous_ownrent`, `occu_ai_previousmonthlypayment`, `occu_ai_previoushowlong`) VALUES
(5, 'dianara', '2016-02-17', '092566564', 'cca', 'cebu', 'rft', 4574, '', 0, '', '', '', 0, ''),
(6, 'John', '2016-02-23', '123465789', 'Mambaling', 'Cebu', 'City', 6000, '', 0, '', '', '', 0, ''),
(7, 'Kitty', '2016-02-17', '09326595885', 'Cebu', 'Cebu', 'Cebu', 6000, '', 0, '', '', '', 0, ''),
(8, 'Ken', '2016-02-11', '09326590864', 'Mambaling', '', '', 0, '', 0, '', '', '', 0, ''),
(9, 'Kitty', '2016-02-18', '1234567', 'asdasdas', 'asd', 'asd', 1123, 'asd', 0, 'asd', 'asd', '', 0, ''),
(10, 'diane', '2016-02-18', '0956476454', 'cebu', '', '', 0, '', 0, '', '', '', 0, ''),
(11, 'chai', '0000-00-00', '', '', '', '', 0, '', 0, '', '', '', 0, ''),
(12, 'John', '1992-03-11', '0932659650', 'Mambaling', 'Cebu', 'Ceb', 6000, '', 0, '', '', '', 0, ''),
(13, 'chai choi', '1995-07-08', '', '', '', '', 0, '', 0, '', '', '', 0, ''),
(14, 'chaichoi jkooo', '0000-00-00', '', '', '', '', 0, '', 0, '', '', '', 0, ''),
(15, 'Ae Gwapito', '0000-00-00', '', '', '', '', 0, '', 0, '', '', '', 0, ''),
(16, 'Ae gwapito', '0000-00-00', '', '', '', '', 0, '', 0, '', '', '', 0, ''),
(17, 'Ae Gwapito', '0000-00-00', '', '', '', '', 0, '', 0, '', '', '', 0, ''),
(18, 'John', '0000-00-00', '093259559', 'Mambaling', '', '', 0, '', 0, '', '', '', 0, ''),
(19, 'Akoka', '0000-00-00', '', '', '', '', 0, '', 0, '', '', '', 0, ''),
(20, 'Kristelle', '2016-04-05', '46546465', 'asdsa', 'asd', 'asd', 346, '', 0, '', '', '', 0, '');

-- --------------------------------------------------------

--
-- Table structure for table `occupant_co_info2`
--

CREATE TABLE IF NOT EXISTS `occupant_co_info2` (
  `occu_coi_id` int(11) NOT NULL AUTO_INCREMENT,
  `occu_coi_name` varchar(100) NOT NULL,
  `occu_coi_birthdate` date NOT NULL,
  `occu_coi_ssn` varchar(100) NOT NULL,
  `occu_coi_phone` varchar(11) NOT NULL,
  `occu_coi_curr_address` varchar(100) NOT NULL,
  `occu_coi_add_city` varchar(50) NOT NULL,
  `occu_coi_add_province` varchar(100) NOT NULL,
  `occu_coi_zipcode` int(11) NOT NULL,
  `occu_coi_ownrent` varchar(20) NOT NULL,
  `occu_coi_monthlypaymentorrent` double NOT NULL,
  `occu_coi_howlong` varchar(100) NOT NULL,
  `occu_coi_prev_address` varchar(100) NOT NULL,
  `occu_coi_city` varchar(50) NOT NULL,
  `occu_coi_province` varchar(100) NOT NULL,
  `occu_coi_address_zipcode` int(11) NOT NULL,
  `occu_coi_ownedrented` varchar(20) NOT NULL,
  `occu_coi_address_monthlypayment` double NOT NULL,
  `occu_coi_address_howlong` varchar(20) NOT NULL,
  `occu_ai_id` int(11) NOT NULL,
  PRIMARY KEY (`occu_coi_id`),
  KEY `occu_ai_id` (`occu_ai_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=21 ;

--
-- Dumping data for table `occupant_co_info2`
--

INSERT INTO `occupant_co_info2` (`occu_coi_id`, `occu_coi_name`, `occu_coi_birthdate`, `occu_coi_ssn`, `occu_coi_phone`, `occu_coi_curr_address`, `occu_coi_add_city`, `occu_coi_add_province`, `occu_coi_zipcode`, `occu_coi_ownrent`, `occu_coi_monthlypaymentorrent`, `occu_coi_howlong`, `occu_coi_prev_address`, `occu_coi_city`, `occu_coi_province`, `occu_coi_address_zipcode`, `occu_coi_ownedrented`, `occu_coi_address_monthlypayment`, `occu_coi_address_howlong`, `occu_ai_id`) VALUES
(5, '', '0000-00-00', '', '', '', '', '', 0, '', 0, '', '', '', '', 0, '', 0, '', 5),
(6, '', '0000-00-00', '', '', '', '', '', 0, '', 0, '', '', '', '', 0, '', 0, '', 6),
(7, '', '0000-00-00', '', '', '', '', '', 0, '', 0, '', '', '', '', 0, '', 0, '', 7),
(8, '', '0000-00-00', '', '', '', '', '', 0, '', 0, '', '', '', '', 0, '', 0, '', 8),
(9, '', '0000-00-00', '', '', '', '', '', 0, '', 0, '', '', '', '', 0, '', 0, '', 9),
(10, '', '0000-00-00', '', '', '', '', '', 0, '', 0, '', '', '', '', 0, '', 0, '', 10),
(11, '', '0000-00-00', '', '', '', '', '', 0, '', 0, '', '', '', '', 0, '', 0, '', 11),
(12, '', '0000-00-00', '', '', '', '', '', 0, '', 0, '', '', '', '', 0, '', 0, '', 12),
(13, '', '0000-00-00', '', '', '', '', '', 0, '', 0, '', '', '', '', 0, '', 0, '', 13),
(14, '', '0000-00-00', '', '', '', '', '', 0, '', 0, '', '', '', '', 0, '', 0, '', 14),
(15, '', '0000-00-00', '', '', '', '', '', 0, '', 0, '', '', '', '', 0, '', 0, '', 15),
(16, '', '0000-00-00', '', '', '', '', '', 0, '', 0, '', '', '', '', 0, '', 0, '', 16),
(17, '', '0000-00-00', '', '', '', '', '', 0, '', 0, '', '', '', '', 0, '', 0, '', 17),
(18, '', '0000-00-00', '', '', '', '', '', 0, '', 0, '', '', '', '', 0, '', 0, '', 18),
(19, '', '0000-00-00', '', '', '', '', '', 0, '', 0, '', '', '', '', 0, '', 0, '', 19),
(20, '', '0000-00-00', '', '', '', '', '', 0, '', 0, '', '', '', '', 0, '', 0, '', 20);

-- --------------------------------------------------------

--
-- Table structure for table `occupant_emerg_contact`
--

CREATE TABLE IF NOT EXISTS `occupant_emerg_contact` (
  `occu_ec_id` int(11) NOT NULL AUTO_INCREMENT,
  `occu_ec_nameofperson` varchar(100) NOT NULL,
  `occu_ec_address` varchar(100) NOT NULL,
  `occu_ec_city` varchar(50) NOT NULL,
  `occu_ec_province` varchar(100) NOT NULL,
  `occu_ec_zipcode` int(11) NOT NULL,
  `occu_ec_phone` varchar(11) NOT NULL,
  `occu_ec_relationship` varchar(50) NOT NULL,
  `occu_ai_id` int(11) NOT NULL,
  PRIMARY KEY (`occu_ec_id`),
  KEY `occu_ai_id` (`occu_ai_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=21 ;

--
-- Dumping data for table `occupant_emerg_contact`
--

INSERT INTO `occupant_emerg_contact` (`occu_ec_id`, `occu_ec_nameofperson`, `occu_ec_address`, `occu_ec_city`, `occu_ec_province`, `occu_ec_zipcode`, `occu_ec_phone`, `occu_ec_relationship`, `occu_ai_id`) VALUES
(5, '', '', '', '', 0, '', '', 5),
(6, '', '', '', '', 0, '', '', 6),
(7, '', '', '', '', 0, '', '', 7),
(8, '', '', '', '', 0, '', '', 8),
(9, '', '', '', '', 0, '', '', 9),
(10, '', '', '', '', 0, '', '', 10),
(11, '', '', '', '', 0, '', '', 11),
(12, '', '', '', '', 0, '', '', 12),
(13, '', '', '', '', 0, '', '', 13),
(14, '', '', '', '', 0, '', '', 14),
(15, '', '', '', '', 0, '', '', 15),
(16, '', '', '', '', 0, '', '', 16),
(17, '', '', '', '', 0, '', '', 17),
(18, '', '', '', '', 0, '', '', 18),
(19, '', '', '', '', 0, '', '', 19),
(20, '', '', '', '', 0, '', '', 20);

-- --------------------------------------------------------

--
-- Table structure for table `occupant_emp_info`
--

CREATE TABLE IF NOT EXISTS `occupant_emp_info` (
  `occu_ei_id` int(11) NOT NULL AUTO_INCREMENT,
  `occu_ei_curr_employer` varchar(200) NOT NULL,
  `occu_ei_emp_address` varchar(100) NOT NULL,
  `occu_ei_howlong` varchar(50) NOT NULL,
  `occu_ei_phone` varchar(11) NOT NULL,
  `occu_ei_email` varchar(100) NOT NULL,
  `occu_ei_timeofshift` varchar(50) NOT NULL,
  `occu_ei_city` varchar(30) NOT NULL,
  `occu_ei_province` varchar(100) NOT NULL,
  `occu_ei_zipcode` int(11) NOT NULL,
  `occu_ei_position` varchar(50) NOT NULL,
  `occu_ei_hourlysalary` double NOT NULL,
  `occu_ei_dayofsched` varchar(100) NOT NULL,
  `occu_ai_id` int(11) NOT NULL,
  PRIMARY KEY (`occu_ei_id`),
  KEY `occo_ai_id` (`occu_ai_id`),
  KEY `occu_ai_id` (`occu_ai_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=21 ;

--
-- Dumping data for table `occupant_emp_info`
--

INSERT INTO `occupant_emp_info` (`occu_ei_id`, `occu_ei_curr_employer`, `occu_ei_emp_address`, `occu_ei_howlong`, `occu_ei_phone`, `occu_ei_email`, `occu_ei_timeofshift`, `occu_ei_city`, `occu_ei_province`, `occu_ei_zipcode`, `occu_ei_position`, `occu_ei_hourlysalary`, `occu_ei_dayofsched`, `occu_ai_id`) VALUES
(5, '', '', '', '', '', '', '', '', 0, '', 0, '', 5),
(6, '', '', '', '', '', '', '', '', 0, '', 0, '', 6),
(7, '', '', '', '', '', '', '', '', 0, '', 0, '', 7),
(8, '', '', '', '', '', '', '', '', 0, '', 0, '', 8),
(9, '', '', '', '', '', '', '', '', 0, '', 0, '', 9),
(10, '', '', '', '', '', '', '', '', 0, '', 0, '', 10),
(11, '', '', '', '', '', '', '', '', 0, '', 0, '', 11),
(12, 'Convergys', 'Congergys', '', '', '', '', '', '', 0, '', 0, '', 12),
(13, '', '', '', '', '', '', '', '', 0, '', 0, '', 13),
(14, '', '', '', '', '', '', '', '', 0, '', 0, '', 14),
(15, '', '', '', '', '', '', '', '', 0, '', 0, '', 15),
(16, '', '', '', '', '', '', '', '', 0, '', 0, '', 16),
(17, '', '', '', '', '', '', '', '', 0, '', 0, '', 17),
(18, '', '', '', '', '', '', '', '', 0, '', 0, '', 18),
(19, '', '', '', '', '', '', '', '', 0, '', 0, '', 19),
(20, '', '', '', '', '', '', '', '', 0, '', 0, '', 20);

-- --------------------------------------------------------

--
-- Table structure for table `occupant_regis_occupant`
--

CREATE TABLE IF NOT EXISTS `occupant_regis_occupant` (
  `occu_reg_id` int(11) NOT NULL AUTO_INCREMENT,
  `occu_reg_name1` varchar(100) NOT NULL,
  `occu_reg_name2` varchar(50) NOT NULL,
  `occu_reg_name3` varchar(50) NOT NULL,
  `occu_reg_name4` varchar(50) NOT NULL,
  `occu_reg_address1` varchar(100) NOT NULL,
  `occu_reg_address2` varchar(100) NOT NULL,
  `occu_reg_address3` varchar(100) NOT NULL,
  `occu_reg_address4` varchar(100) NOT NULL,
  `occu_reg_age1` int(11) NOT NULL,
  `occu_reg_age2` int(11) NOT NULL,
  `occu_reg_age3` int(11) NOT NULL,
  `occu_reg_age4` int(11) NOT NULL,
  `occu_reg_phone1` varchar(11) NOT NULL,
  `occu_reg_phone2` varchar(12) NOT NULL,
  `occu_reg_phone3` varchar(12) NOT NULL,
  `occu_reg_phone4` varchar(12) NOT NULL,
  `occu_reg_date` date NOT NULL,
  `occu_ai_id` int(11) NOT NULL,
  PRIMARY KEY (`occu_reg_id`),
  KEY `occu_ai_id` (`occu_ai_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=21 ;

--
-- Dumping data for table `occupant_regis_occupant`
--

INSERT INTO `occupant_regis_occupant` (`occu_reg_id`, `occu_reg_name1`, `occu_reg_name2`, `occu_reg_name3`, `occu_reg_name4`, `occu_reg_address1`, `occu_reg_address2`, `occu_reg_address3`, `occu_reg_address4`, `occu_reg_age1`, `occu_reg_age2`, `occu_reg_age3`, `occu_reg_age4`, `occu_reg_phone1`, `occu_reg_phone2`, `occu_reg_phone3`, `occu_reg_phone4`, `occu_reg_date`, `occu_ai_id`) VALUES
(5, '', '', '', '', '', '', '', '', 0, 0, 0, 0, '', '', '', '', '0000-00-00', 5),
(6, '', '', '', '', '', '', '', '', 0, 0, 0, 0, '', '', '', '', '0000-00-00', 6),
(7, '', '', '', '', '', '', '', '', 0, 0, 0, 0, '', '', '', '', '0000-00-00', 7),
(8, '', '', '', '', '', '', '', '', 0, 0, 0, 0, '', '', '', '', '0000-00-00', 8),
(9, '', '', '', '', '', '', '', '', 0, 0, 0, 0, '', '', '', '', '0000-00-00', 9),
(10, '', '', '', '', '', '', '', '', 0, 0, 0, 0, '', '', '', '', '0000-00-00', 10),
(11, '', '', '', '', '', '', '', '', 0, 0, 0, 0, '', '', '', '', '0000-00-00', 11),
(12, '', '', '', '', '', '', '', '', 0, 0, 0, 0, '', '', '', '', '0000-00-00', 12),
(13, '', '', '', '', '', '', '', '', 0, 0, 0, 0, '', '', '', '', '0000-00-00', 13),
(14, '', '', '', '', '', '', '', '', 0, 0, 0, 0, '', '', '', '', '0000-00-00', 14),
(15, '', '', '', '', '', '', '', '', 0, 0, 0, 0, '', '', '', '', '0000-00-00', 15),
(16, '', '', '', '', '', '', '', '', 0, 0, 0, 0, '', '', '', '', '0000-00-00', 16),
(17, '', '', '', '', '', '', '', '', 0, 0, 0, 0, '', '', '', '', '0000-00-00', 17),
(18, '', '', '', '', '', '', '', '', 0, 0, 0, 0, '', '', '', '', '0000-00-00', 18),
(19, '', '', '', '', '', '', '', '', 0, 0, 0, 0, '', '', '', '', '0000-00-00', 19),
(20, '', '', '', '', '', '', '', '', 0, 0, 0, 0, '', '', '', '', '0000-00-00', 20);

-- --------------------------------------------------------

--
-- Table structure for table `other_bill`
--

CREATE TABLE IF NOT EXISTS `other_bill` (
  `other_id` int(11) NOT NULL AUTO_INCREMENT,
  `last_reading` int(11) NOT NULL,
  `current_reading` int(11) NOT NULL,
  `utility_usage` double NOT NULL,
  `rate_per_kilowatts` double NOT NULL,
  `payable` double NOT NULL,
  `occu_ai_id` int(11) NOT NULL,
  `room_number` varchar(11) NOT NULL,
  `contract_id` int(11) NOT NULL,
  PRIMARY KEY (`other_id`),
  KEY `contract_id` (`contract_id`),
  KEY `occu_ai_id` (`occu_ai_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=41 ;

--
-- Dumping data for table `other_bill`
--

INSERT INTO `other_bill` (`other_id`, `last_reading`, `current_reading`, `utility_usage`, `rate_per_kilowatts`, `payable`, `occu_ai_id`, `room_number`, `contract_id`) VALUES
(6, 0, 0, 0, 0, 0, 5, '2A-2', 5),
(7, 22, 55, 31, 32, 992, 6, '2A-1', 6),
(8, 322, 555, 212, 32, 6784, 7, '2A-5', 7),
(9, 32, 555, 501, 12, 6012, 8, '2A-6', 8),
(10, 32, 54, 20, 12.5, 250, 9, '2A-2', 9),
(11, 3, 10000, 9997, 6, 59982, 10, '2A-1', 10),
(12, 3, 10000, 9997, 6, 59982, 10, '2A-1', 10),
(13, 22, 55, 30, 23, 690, 8, '2A-6', 8),
(14, 0, 0, 0, 0, 0, 8, '2A-6', 8),
(15, 33, 55, 20, 32, 640, 8, '2A-6', 8),
(16, 55, 222, 165, 3, 495, 8, '2A-6', 8),
(17, 32, 55, 21, 3, 63, 12, '2A-5', 11),
(18, 0, 0, 0, 0, 0, 13, '2A-3', 12),
(19, 0, 0, 0, 0, 0, 9, '2A-2', 9),
(20, 0, 0, 0, 0, 0, 9, '2A-2', 9),
(21, 0, 0, 0, 0, 0, 9, '2A-2', 9),
(22, 0, 0, 0, 0, 0, 9, '2A-2', 9),
(23, 0, 0, 0, 0, 0, 13, '2A-3', 12),
(24, 0, 0, 0, 0, 0, 14, '2A-1', 13),
(25, 0, 0, 0, 0, 0, 9, '2A-2', 9),
(26, 0, 0, 0, 0, 0, 9, '2A-2', 9),
(27, 0, 0, 0, 0, 0, 15, '2A-1', 14),
(28, 0, 0, 0, 0, 0, 17, '2A-1', 16),
(29, 0, 0, 0, 0, 0, 16, '2A-3', 15),
(30, 0, 0, 0, 0, 0, 17, '2A-1', 16),
(31, 0, 0, 0, 0, 0, 17, '2A-1', 16),
(32, 0, 0, 0, 0, 0, 17, '2A-1', 16),
(33, 0, 0, 0, 0, 0, 17, '2A-1', 16),
(34, 0, 0, 0, 0, 0, 17, '2A-1', 16),
(35, 0, 0, 0, 0, 0, 18, '2A-6', 17),
(36, 2, 5, 0, 0, 0, 18, '2A-6', 17),
(37, 0, 0, 0, 0, 0, 18, '2A-6', 17),
(38, 0, 0, 0, 0, 0, 18, '2A-6', 17),
(39, 0, 0, 0, 0, 0, 19, '2A-4', 18),
(40, 5, 65, 58, 5, 290, 20, '2A-2', 19);

-- --------------------------------------------------------

--
-- Table structure for table `payment`
--

CREATE TABLE IF NOT EXISTS `payment` (
  `pay_id` int(11) NOT NULL AUTO_INCREMENT,
  `pay_date` date NOT NULL,
  `due_date` date NOT NULL,
  `monthbill` date NOT NULL,
  `pay_amount` double NOT NULL,
  `previous_balance` int(11) NOT NULL,
  `balance` double NOT NULL,
  `total_bill` double NOT NULL,
  `status` int(2) NOT NULL,
  `occu_ai_id` int(11) NOT NULL,
  `contract_id` int(11) NOT NULL,
  `rental_id` int(11) NOT NULL,
  `water_id` int(11) NOT NULL,
  `light_id` int(11) NOT NULL,
  `other_id` int(11) NOT NULL,
  PRIMARY KEY (`pay_id`),
  KEY `water_id` (`water_id`),
  KEY `light_id` (`light_id`),
  KEY `other_id` (`other_id`),
  KEY `rental_id` (`rental_id`),
  KEY `occu_ai_id` (`occu_ai_id`),
  KEY `contract_id` (`contract_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=28 ;

--
-- Dumping data for table `payment`
--

INSERT INTO `payment` (`pay_id`, `pay_date`, `due_date`, `monthbill`, `pay_amount`, `previous_balance`, `balance`, `total_bill`, `status`, `occu_ai_id`, `contract_id`, `rental_id`, `water_id`, `light_id`, `other_id`) VALUES
(17, '2016-03-17', '2016-03-16', '2016-03-17', 5000, 0, -2404, 2596, 1, 9, 9, 21, 21, 21, 21),
(18, '2016-03-16', '2016-03-16', '2016-03-16', 2500, 0, 0, 2500, 1, 13, 12, 23, 23, 23, 23),
(19, '2016-03-17', '2016-03-19', '2016-03-17', 1000, 0, 1300, 2300, 0, 14, 13, 24, 24, 24, 24),
(20, '2016-04-04', '2016-03-18', '2016-03-17', 2500, 0, 0, 2500, 1, 9, 9, 26, 26, 26, 26),
(21, '2016-03-19', '2016-03-21', '2016-03-19', 1100, 0, 1200, 2300, 0, 15, 14, 27, 27, 27, 27),
(22, '2016-04-04', '2016-03-09', '2016-04-04', 0, 0, 0, 2360, 1, 17, 16, 28, 28, 28, 28),
(23, '0000-00-00', '2016-04-05', '2016-04-04', 0, 0, 0, 3094, 0, 16, 15, 29, 29, 29, 29),
(24, '0000-00-00', '2016-04-13', '2016-04-04', 0, 0, 0, 2354, 0, 17, 16, 34, 34, 34, 34),
(25, '2016-04-04', '2016-05-09', '2016-04-04', 0, 0, 0, 8508.9, 0, 18, 17, 35, 35, 35, 35),
(26, '2016-04-05', '2016-04-08', '2016-04-05', 2500, 0, 0, 2500, 1, 19, 18, 39, 39, 39, 39),
(27, '2016-04-05', '2016-05-03', '2016-04-05', 3690, 0, -4, 3686, 1, 20, 19, 40, 40, 40, 40);

-- --------------------------------------------------------

--
-- Table structure for table `rental_bill`
--

CREATE TABLE IF NOT EXISTS `rental_bill` (
  `rental_id` int(11) NOT NULL AUTO_INCREMENT,
  `last_reading` int(11) NOT NULL,
  `current_reading` int(11) NOT NULL,
  `utility_usage` double NOT NULL,
  `rate_per_kilowatts` double NOT NULL,
  `payable` double NOT NULL,
  `occu_ai_id` int(11) NOT NULL,
  `room_number` varchar(11) NOT NULL,
  `contract_id` int(11) NOT NULL,
  PRIMARY KEY (`rental_id`),
  KEY `contract_id` (`contract_id`),
  KEY `occu_ai_id` (`occu_ai_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=41 ;

--
-- Dumping data for table `rental_bill`
--

INSERT INTO `rental_bill` (`rental_id`, `last_reading`, `current_reading`, `utility_usage`, `rate_per_kilowatts`, `payable`, `occu_ai_id`, `room_number`, `contract_id`) VALUES
(6, 0, 0, 0, 0, 2500, 5, '2A-2', 5),
(7, 0, 0, 0, 0, 2300, 6, '2A-1', 6),
(8, 0, 0, 0, 0, 2500, 7, '2A-5', 7),
(9, 0, 0, 0, 0, 2500, 8, '2A-6', 8),
(10, 0, 0, 0, 0, 2500, 9, '2A-2', 9),
(11, 0, 0, 0, 0, 2300, 10, '2A-1', 10),
(12, 0, 0, 0, 0, 2300, 10, '2A-1', 10),
(13, 0, 0, 0, 0, 2500, 8, '2A-6', 8),
(14, 0, 0, 0, 0, 2500, 8, '2A-6', 8),
(15, 0, 0, 0, 0, 2500, 8, '2A-6', 8),
(16, 0, 0, 0, 0, 2500, 8, '2A-6', 8),
(17, 0, 0, 0, 0, 2500, 12, '2A-5', 11),
(18, 0, 0, 0, 0, 2500, 13, '2A-3', 12),
(19, 0, 0, 0, 0, 2500, 9, '2A-2', 9),
(20, 0, 0, 0, 0, 2500, 9, '2A-2', 9),
(21, 0, 0, 0, 0, 2500, 9, '2A-2', 9),
(22, 0, 0, 0, 0, 2500, 9, '2A-2', 9),
(23, 0, 0, 0, 0, 2500, 13, '2A-3', 12),
(24, 0, 0, 0, 0, 2300, 14, '2A-1', 13),
(25, 0, 0, 0, 0, 2500, 9, '2A-2', 9),
(26, 0, 0, 0, 0, 2500, 9, '2A-2', 9),
(27, 0, 0, 0, 0, 2300, 15, '2A-1', 14),
(28, 0, 0, 0, 0, 2300, 17, '2A-1', 16),
(29, 0, 0, 0, 0, 2500, 16, '2A-3', 15),
(30, 0, 0, 0, 0, 2300, 17, '2A-1', 16),
(31, 0, 0, 0, 0, 2300, 17, '2A-1', 16),
(32, 0, 0, 0, 0, 2300, 17, '2A-1', 16),
(33, 0, 0, 0, 0, 2300, 17, '2A-1', 16),
(34, 0, 0, 0, 0, 2300, 17, '2A-1', 16),
(35, 0, 0, 0, 0, 2500, 18, '2A-6', 17),
(36, 0, 0, 0, 0, 2500, 18, '2A-6', 17),
(37, 0, 0, 0, 0, 2500, 18, '2A-6', 17),
(38, 0, 0, 0, 0, 2500, 18, '2A-6', 17),
(39, 0, 0, 0, 0, 2500, 19, '2A-4', 18),
(40, 0, 0, 0, 0, 2500, 20, '2A-2', 19);

-- --------------------------------------------------------

--
-- Table structure for table `rooms`
--

CREATE TABLE IF NOT EXISTS `rooms` (
  `room_id` int(11) NOT NULL AUTO_INCREMENT,
  `room_typeA` varchar(50) NOT NULL,
  `rate` double NOT NULL,
  `no_of_occupant` int(11) NOT NULL,
  `status1` int(11) NOT NULL,
  `room_typeB` varchar(20) NOT NULL,
  `room_number` varchar(10) NOT NULL,
  `partial_delete` int(11) NOT NULL,
  PRIMARY KEY (`room_id`),
  KEY `room_number` (`room_number`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=520 ;

--
-- Dumping data for table `rooms`
--

INSERT INTO `rooms` (`room_id`, `room_typeA`, `rate`, `no_of_occupant`, `status1`, `room_typeB`, `room_number`, `partial_delete`) VALUES
(514, 'Dorm', 2300, 1, 0, 'Aircon', '2A-1', 0),
(515, 'Dorm', 2500, 1, 0, 'Aircon', '2A-2', 0),
(516, 'Dorm', 2500, 1, 0, 'Aircon', '2A-3', 0),
(517, 'Dorm', 2500, 1, 0, 'Aircon', '2A-6', 0),
(518, 'Dorm', 2500, 1, 0, 'Aircon', '2A-4', 0),
(519, 'Dorm', 2500, 1, 0, 'Aircon', '2A-5', 0);

-- --------------------------------------------------------

--
-- Table structure for table `water_bill`
--

CREATE TABLE IF NOT EXISTS `water_bill` (
  `water_id` int(11) NOT NULL AUTO_INCREMENT,
  `last_reading` int(11) NOT NULL,
  `current_reading` int(11) NOT NULL,
  `utility_usage` double NOT NULL,
  `rate_per_kilowatts` double NOT NULL,
  `payable` double NOT NULL,
  `occu_ai_id` int(11) NOT NULL,
  `room_number` varchar(11) NOT NULL,
  `contract_id` int(11) NOT NULL,
  PRIMARY KEY (`water_id`),
  KEY `occu_ai_id` (`occu_ai_id`),
  KEY `contract_id` (`contract_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=41 ;

--
-- Dumping data for table `water_bill`
--

INSERT INTO `water_bill` (`water_id`, `last_reading`, `current_reading`, `utility_usage`, `rate_per_kilowatts`, `payable`, `occu_ai_id`, `room_number`, `contract_id`) VALUES
(6, 0, 0, 0, 0, 0, 5, '2A-2', 5),
(7, 22, 55, 31, 32, 992, 6, '2A-1', 6),
(8, 322, 555, 212, 32, 6784, 7, '2A-5', 7),
(9, 32, 555, 501, 12, 6012, 8, '2A-3', 8),
(10, 32, 54, 20, 12.5, 250, 9, '2A-2', 9),
(11, 3, 10000, 9997, 6, 59982, 10, '2A-1', 10),
(12, 3, 10000, 9997, 6, 59982, 10, '2A-1', 10),
(13, 22, 55, 30, 23, 690, 8, '2A-6', 8),
(14, 0, 0, 0, 0, 0, 8, '2A-6', 8),
(15, 33, 55, 20, 32, 640, 8, '2A-6', 8),
(16, 55, 222, 165, 3, 495, 8, '2A-6', 8),
(17, 32, 55, 21, 3, 63, 12, '2A-5', 11),
(18, 0, 0, 0, 0, 0, 13, '2A-4', 12),
(19, 0, 0, 0, 0, 0, 9, '2A-2', 9),
(20, 0, 0, 0, 0, 0, 9, '2A-2', 9),
(21, 0, 0, 0, 0, 0, 9, '2A-2', 9),
(22, 0, 0, 0, 0, 0, 9, '2A-2', 9),
(23, 0, 0, 0, 0, 0, 13, '2A-3', 12),
(24, 0, 0, 0, 0, 0, 14, '2A-1', 13),
(25, 0, 0, 0, 0, 0, 9, '2A-2', 9),
(26, 0, 0, 0, 0, 0, 9, '2A-2', 9),
(27, 0, 0, 0, 0, 0, 15, '2A-1', 14),
(28, 0, 0, 0, 0, 0, 17, '2A-1', 16),
(29, 0, 0, 0, 0, 0, 16, '2A-3', 15),
(30, 0, 0, 0, 0, 0, 17, '2A-1', 16),
(31, 0, 0, 0, 0, 0, 17, '2A-1', 16),
(32, 0, 0, 0, 0, 0, 17, '2A-1', 16),
(33, 0, 0, 0, 0, 0, 17, '2A-1', 16),
(34, 0, 0, 0, 0, 0, 17, '2A-1', 16),
(35, 0, 0, 0, 0, 0, 18, '2A-2', 17),
(36, 2, 5, 0, 0, 0, 18, '2A-2', 17),
(37, 0, 0, 0, 0, 0, 18, '2A-2', 17),
(38, 0, 0, 0, 0, 0, 18, '2A-2', 17),
(39, 0, 0, 0, 0, 0, 19, '2A-4', 18),
(40, 5, 65, 58, 5, 290, 20, '2A-2', 19);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `checkout`
--
ALTER TABLE `checkout`
  ADD CONSTRAINT `checkout_ibfk_1` FOREIGN KEY (`room_id`) REFERENCES `rooms` (`room_id`),
  ADD CONSTRAINT `checkout_ibfk_2` FOREIGN KEY (`occu_ai_id`) REFERENCES `occupant_app_info` (`occu_ai_id`);

--
-- Constraints for table `contract`
--
ALTER TABLE `contract`
  ADD CONSTRAINT `contract_ibfk_1` FOREIGN KEY (`occu_ai_id`) REFERENCES `occupant_app_info` (`occu_ai_id`);

--
-- Constraints for table `deleted`
--
ALTER TABLE `deleted`
  ADD CONSTRAINT `deleted_ibfk_1` FOREIGN KEY (`occu_ai_id`) REFERENCES `contract` (`contract_id`),
  ADD CONSTRAINT `deleted_ibfk_2` FOREIGN KEY (`room_number`) REFERENCES `contract` (`room_number`),
  ADD CONSTRAINT `deleted_ibfk_3` FOREIGN KEY (`contract_id`) REFERENCES `contract` (`contract_id`);

--
-- Constraints for table `light_bill`
--
ALTER TABLE `light_bill`
  ADD CONSTRAINT `light_bill_ibfk_1` FOREIGN KEY (`occu_ai_id`) REFERENCES `occupant_app_info` (`occu_ai_id`),
  ADD CONSTRAINT `light_bill_ibfk_2` FOREIGN KEY (`contract_id`) REFERENCES `contract` (`contract_id`);

--
-- Constraints for table `occupant_emerg_contact`
--
ALTER TABLE `occupant_emerg_contact`
  ADD CONSTRAINT `occupant_emerg_contact_ibfk_1` FOREIGN KEY (`occu_ai_id`) REFERENCES `occupant_app_info` (`occu_ai_id`);

--
-- Constraints for table `occupant_emp_info`
--
ALTER TABLE `occupant_emp_info`
  ADD CONSTRAINT `occupant_emp_info_ibfk_1` FOREIGN KEY (`occu_ai_id`) REFERENCES `occupant_app_info` (`occu_ai_id`),
  ADD CONSTRAINT `occupant_emp_info_ibfk_2` FOREIGN KEY (`occu_ai_id`) REFERENCES `occupant_app_info` (`occu_ai_id`),
  ADD CONSTRAINT `occupant_emp_info_ibfk_3` FOREIGN KEY (`occu_ai_id`) REFERENCES `occupant_app_info` (`occu_ai_id`);

--
-- Constraints for table `occupant_regis_occupant`
--
ALTER TABLE `occupant_regis_occupant`
  ADD CONSTRAINT `occupant_regis_occupant_ibfk_1` FOREIGN KEY (`occu_ai_id`) REFERENCES `occupant_app_info` (`occu_ai_id`),
  ADD CONSTRAINT `occupant_regis_occupant_ibfk_2` FOREIGN KEY (`occu_ai_id`) REFERENCES `occupant_app_info` (`occu_ai_id`);

--
-- Constraints for table `other_bill`
--
ALTER TABLE `other_bill`
  ADD CONSTRAINT `other_bill_ibfk_1` FOREIGN KEY (`occu_ai_id`) REFERENCES `occupant_app_info` (`occu_ai_id`),
  ADD CONSTRAINT `other_bill_ibfk_2` FOREIGN KEY (`contract_id`) REFERENCES `contract` (`contract_id`);

--
-- Constraints for table `payment`
--
ALTER TABLE `payment`
  ADD CONSTRAINT `payment_ibfk_1` FOREIGN KEY (`rental_id`) REFERENCES `rental_bill` (`rental_id`),
  ADD CONSTRAINT `payment_ibfk_2` FOREIGN KEY (`water_id`) REFERENCES `water_bill` (`water_id`),
  ADD CONSTRAINT `payment_ibfk_3` FOREIGN KEY (`light_id`) REFERENCES `light_bill` (`light_id`),
  ADD CONSTRAINT `payment_ibfk_4` FOREIGN KEY (`other_id`) REFERENCES `other_bill` (`other_id`),
  ADD CONSTRAINT `payment_ibfk_5` FOREIGN KEY (`occu_ai_id`) REFERENCES `occupant_app_info` (`occu_ai_id`),
  ADD CONSTRAINT `payment_ibfk_6` FOREIGN KEY (`contract_id`) REFERENCES `contract` (`contract_id`);

--
-- Constraints for table `rental_bill`
--
ALTER TABLE `rental_bill`
  ADD CONSTRAINT `rental_bill_ibfk_1` FOREIGN KEY (`occu_ai_id`) REFERENCES `occupant_app_info` (`occu_ai_id`),
  ADD CONSTRAINT `rental_bill_ibfk_2` FOREIGN KEY (`contract_id`) REFERENCES `contract` (`contract_id`);

--
-- Constraints for table `water_bill`
--
ALTER TABLE `water_bill`
  ADD CONSTRAINT `water_bill_ibfk_1` FOREIGN KEY (`occu_ai_id`) REFERENCES `occupant_app_info` (`occu_ai_id`),
  ADD CONSTRAINT `water_bill_ibfk_2` FOREIGN KEY (`contract_id`) REFERENCES `contract` (`contract_id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
