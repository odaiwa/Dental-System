-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 31, 2022 at 08:35 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `clinicdb`
--

-- --------------------------------------------------------

--
-- Stand-in structure for view `all_doctors`
-- (See below for the actual view)
--
CREATE TABLE `all_doctors` (
`firstName` varchar(30)
,`lastName` varchar(30)
,`email` varchar(45)
,`userId` int(11)
);

-- --------------------------------------------------------

--
-- Table structure for table `apointments`
--

CREATE TABLE `apointments` (
  `id` int(11) NOT NULL,
  `roomId` int(11) DEFAULT NULL,
  `doc_pat_id` int(11) DEFAULT NULL,
  `done` smallint(6) DEFAULT NULL,
  `startTreatmentTime` datetime DEFAULT NULL,
  `endTreatmentTime` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `apointments`
--

INSERT INTO `apointments` (`id`, `roomId`, `doc_pat_id`, `done`, `startTreatmentTime`, `endTreatmentTime`) VALUES
(1, 1, 2, 0, '2022-07-13 15:56:57', '2022-07-28 12:56:57');

-- --------------------------------------------------------

--
-- Table structure for table `doctors`
--

CREATE TABLE `doctors` (
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `doctors`
--

INSERT INTO `doctors` (`id`) VALUES
(6),
(6),
(9),
(9),
(10),
(10);

-- --------------------------------------------------------

--
-- Table structure for table `doc_pat`
--

CREATE TABLE `doc_pat` (
  `DoctorId` int(11) NOT NULL,
  `PatientId` int(11) NOT NULL,
  `ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `doc_pat`
--

INSERT INTO `doc_pat` (`DoctorId`, `PatientId`, `ID`) VALUES
(6, 12, 1),
(6, 14, 2);

-- --------------------------------------------------------

--
-- Stand-in structure for view `get_all_apointments`
-- (See below for the actual view)
--
CREATE TABLE `get_all_apointments` (
`DFNAME` varchar(30)
,`DLNAME` varchar(30)
,`PFNAME` varchar(30)
,`PLNAME` varchar(30)
,`startTreatmentTime` datetime
,`endTreatmentTime` datetime
,`roomName` varchar(20)
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `get_all_doctors`
-- (See below for the actual view)
--
CREATE TABLE `get_all_doctors` (
`firstName` varchar(30)
,`lastName` varchar(30)
,`email` varchar(45)
,`userId` int(11)
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `get_all_nurses`
-- (See below for the actual view)
--
CREATE TABLE `get_all_nurses` (
`FIRSTNAME` varchar(30)
,`LASTNAME` varchar(30)
,`userId` int(11)
,`email` varchar(45)
,`VALUE` varchar(20)
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `get_all_patients`
-- (See below for the actual view)
--
CREATE TABLE `get_all_patients` (
`FIRSTNAME` varchar(30)
,`LASTNAME` varchar(30)
,`userId` int(11)
,`email` varchar(45)
,`VALUE` varchar(20)
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `get_patient_doctor`
-- (See below for the actual view)
--
CREATE TABLE `get_patient_doctor` (
`Doctor First Name` varchar(30)
,`Doctor last name` varchar(30)
,`email` varchar(45)
,`firstname` varchar(30)
,`lastname` varchar(30)
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `get_users_with_details`
-- (See below for the actual view)
--
CREATE TABLE `get_users_with_details` (
`FIRSTNAME` varchar(30)
,`LASTNAME` varchar(30)
,`ROLE` int(11)
,`DATEOFBIRTH` date
,`VALUE` varchar(20)
);

-- --------------------------------------------------------

--
-- Table structure for table `patient`
--

CREATE TABLE `patient` (
  `id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `patient`
--

INSERT INTO `patient` (`id`) VALUES
(12),
(14);

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `ID` int(11) NOT NULL,
  `Value` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `role`
--

INSERT INTO `role` (`ID`, `Value`) VALUES
(1, 'Doctor'),
(2, 'Patient'),
(3, 'Nurse'),
(4, 'Admin');

-- --------------------------------------------------------

--
-- Table structure for table `rooms`
--

CREATE TABLE `rooms` (
  `id` int(11) NOT NULL,
  `roomName` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `rooms`
--

INSERT INTO `rooms` (`id`, `roomName`) VALUES
(4, 'ARD'),
(2, 'Rome'),
(1, 'Room');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `username` varchar(20) NOT NULL,
  `password` char(128) NOT NULL,
  `firstName` varchar(30) NOT NULL,
  `lastName` varchar(30) NOT NULL,
  `userID` int(11) NOT NULL,
  `email` varchar(45) DEFAULT NULL,
  `dateOfBirth` date DEFAULT NULL,
  `role` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`username`, `password`, `firstName`, `lastName`, `userID`, `email`, `dateOfBirth`, `role`) VALUES
('moshiko', '8493ce9a85a452088be658631708cc193b072763f07cf234f06adcefeb4ee569ddf9f69a2cd3f4484435f339c33aea50f99b5324e38a2129cc1da59f9c473207', 'Mishe', 'Ofnik', 1, '0', '0000-00-00', 1),
('moshiko1', '8493ce9a85a452088be658631708cc193b072763f07cf234f06adcefeb4ee569ddf9f69a2cd3f4484435f339c33aea50f99b5324e38a2129cc1da59f9c473207', 'Mishe', 'Ofnik', 2, '0', '0000-00-00', 1),
('moshiko12', '8493ce9a85a452088be658631708cc193b072763f07cf234f06adcefeb4ee569ddf9f69a2cd3f4484435f339c33aea50f99b5324e38a2129cc1da59f9c473207', 'Mishe', 'Ofnik', 3, '0', '1970-01-01', 1),
('moshiko123', '8493ce9a85a452088be658631708cc193b072763f07cf234f06adcefeb4ee569ddf9f69a2cd3f4484435f339c33aea50f99b5324e38a2129cc1da59f9c473207', 'Mishe', 'Ofnik', 4, '0', '1970-01-01', 1),
('moshiko1233', '8493ce9a85a452088be658631708cc193b072763f07cf234f06adcefeb4ee569ddf9f69a2cd3f4484435f339c33aea50f99b5324e38a2129cc1da59f9c473207', 'Mishe', 'Ofnik', 5, '0', '1970-01-01', 1),
('mohiko1233', '8493ce9a85a452088be658631708cc193b072763f07cf234f06adcefeb4ee569ddf9f69a2cd3f4484435f339c33aea50f99b5324e38a2129cc1da59f9c473207', 'Mishe', 'Ofnik', 6, '0', '1970-01-01', 2),
('mohiko12313', '8493ce9a85a452088be658631708cc193b072763f07cf234f06adcefeb4ee569ddf9f69a2cd3f4484435f339c33aea50f99b5324e38a2129cc1da59f9c473207', 'Mishe', 'Ofnik', 7, '0', '1970-01-01', 2),
('mohiko212313', '8493ce9a85a452088be658631708cc193b072763f07cf234f06adcefeb4ee569ddf9f69a2cd3f4484435f339c33aea50f99b5324e38a2129cc1da59f9c473207', 'Mishe', 'Ofnik', 8, '0', '1970-01-01', 2),
('mohiko2112313', '8493ce9a85a452088be658631708cc193b072763f07cf234f06adcefeb4ee569ddf9f69a2cd3f4484435f339c33aea50f99b5324e38a2129cc1da59f9c473207', 'Mishe', 'Ofnik', 9, '0', '1970-01-01', 1),
('mohiko21152313', '8493ce9a85a452088be658631708cc193b072763f07cf234f06adcefeb4ee569ddf9f69a2cd3f4484435f339c33aea50f99b5324e38a2129cc1da59f9c473207', 'Mishe', 'Ofnik', 10, '0', '1970-01-01', 1),
('abed', '123456', 'abed', 'wattad', 12, NULL, '1992-02-02', 2),
('dsfnfds', '8493ce9a85a452088be658631708cc193b072763f07cf234f06adcefeb4ee569ddf9f69a2cd3f4484435f339c33aea50f99b5324e38a2129cc1da59f9c473207', 'jgfd', 'hfgd', 14, '0', '2022-07-20', 2),
('ddsadsadsa', '8493ce9a85a452088be658631708cc193b072763f07cf234f06adcefeb4ee569ddf9f69a2cd3f4484435f339c33aea50f99b5324e38a2129cc1da59f9c473207', 'sadsadsa', 'dsadsadsa', 15, '0', '2022-07-05', 4),
('dsadsadsa', '8493ce9a85a452088be658631708cc193b072763f07cf234f06adcefeb4ee569ddf9f69a2cd3f4484435f339c33aea50f99b5324e38a2129cc1da59f9c473207', 'sadsadsa', 'dsadsadsa', 16, '0', '2022-07-12', 4),
('asdadasdsad', '8493ce9a85a452088be658631708cc193b072763f07cf234f06adcefeb4ee569ddf9f69a2cd3f4484435f339c33aea50f99b5324e38a2129cc1da59f9c473207', 'sadsadad', 'dsadadasd', 17, 'asdasd@gmail.com', '2022-07-19', 4),
('sadsaddsa', '8493ce9a85a452088be658631708cc193b072763f07cf234f06adcefeb4ee569ddf9f69a2cd3f4484435f339c33aea50f99b5324e38a2129cc1da59f9c473207', 'asdsad', 'dsadsadsa', 18, 'dsadsadsa@gmail.com', '2022-07-05', 4);

--
-- Triggers `users`
--
DELIMITER $$
CREATE TRIGGER `add_new_doc_pat_trg` AFTER INSERT ON `users` FOR EACH ROW IF NEW.role = 2 then 
	insert into `patient` (id) values (NEW.userId);
ELSEIF NEW.role = 1 then 
	insert into `doctors` (id) values (NEW.userId);
END IF
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Structure for view `all_doctors`
--
DROP TABLE IF EXISTS `all_doctors`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `all_doctors`  AS SELECT `users`.`firstName` AS `firstName`, `users`.`lastName` AS `lastName`, `users`.`email` AS `email`, `users`.`userID` AS `userId` FROM (`doctors` join `users` on(`doctors`.`id` = `users`.`userID`)) GROUP BY `users`.`firstName`, `users`.`lastName`, `users`.`userID``userID`  ;

-- --------------------------------------------------------

--
-- Structure for view `get_all_apointments`
--
DROP TABLE IF EXISTS `get_all_apointments`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `get_all_apointments`  AS SELECT `d`.`firstName` AS `DFNAME`, `d`.`lastName` AS `DLNAME`, `p`.`firstName` AS `PFNAME`, `p`.`lastName` AS `PLNAME`, `ap`.`startTreatmentTime` AS `startTreatmentTime`, `ap`.`endTreatmentTime` AS `endTreatmentTime`, `r`.`roomName` AS `roomName` FROM ((((`doc_pat` join `users` `d` on(`d`.`userID` = `doc_pat`.`DoctorId`)) join `users` `p` on(`doc_pat`.`PatientId` = `p`.`userID`)) join `apointments` `ap` on(`ap`.`doc_pat_id` = `doc_pat`.`ID`)) join `rooms` `r` on(`r`.`id` = `ap`.`roomId`)) WHERE `ap`.`done` <> 11  ;

-- --------------------------------------------------------

--
-- Structure for view `get_all_doctors`
--
DROP TABLE IF EXISTS `get_all_doctors`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `get_all_doctors`  AS SELECT `users`.`firstName` AS `firstName`, `users`.`lastName` AS `lastName`, `users`.`email` AS `email`, `users`.`userID` AS `userId` FROM (`doctors` join `users` on(`doctors`.`id` = `users`.`userID`)) GROUP BY `users`.`firstName`, `users`.`lastName`, `users`.`userID``userID`  ;

-- --------------------------------------------------------

--
-- Structure for view `get_all_nurses`
--
DROP TABLE IF EXISTS `get_all_nurses`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `get_all_nurses`  AS SELECT `users`.`firstName` AS `FIRSTNAME`, `users`.`lastName` AS `LASTNAME`, `users`.`userID` AS `userId`, `users`.`email` AS `email`, `role`.`Value` AS `VALUE` FROM (`users` join `role` on(`users`.`role` = `role`.`ID` and `role`.`Value` = 'Nurse'))  ;

-- --------------------------------------------------------

--
-- Structure for view `get_all_patients`
--
DROP TABLE IF EXISTS `get_all_patients`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `get_all_patients`  AS SELECT `users`.`firstName` AS `FIRSTNAME`, `users`.`lastName` AS `LASTNAME`, `users`.`userID` AS `userId`, `users`.`email` AS `email`, `role`.`Value` AS `VALUE` FROM (`users` join `role` on(`users`.`role` = `role`.`ID` and `role`.`Value` = 'Patient'))  ;

-- --------------------------------------------------------

--
-- Structure for view `get_patient_doctor`
--
DROP TABLE IF EXISTS `get_patient_doctor`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `get_patient_doctor`  AS SELECT `u`.`firstName` AS `Doctor First Name`, `u`.`lastName` AS `Doctor last name`, `u`.`email` AS `email`, `u1`.`firstName` AS `firstname`, `u1`.`lastName` AS `lastname` FROM ((`users` `u` join `users` `u1`) join `doc_pat` `dp` on(`dp`.`DoctorId` = `u`.`userID` and `dp`.`PatientId` = `u1`.`userID` and `u`.`userID` <> `u1`.`userID`))  ;

-- --------------------------------------------------------

--
-- Structure for view `get_users_with_details`
--
DROP TABLE IF EXISTS `get_users_with_details`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `get_users_with_details`  AS SELECT `users`.`firstName` AS `FIRSTNAME`, `users`.`lastName` AS `LASTNAME`, `users`.`role` AS `ROLE`, `users`.`dateOfBirth` AS `DATEOFBIRTH`, `role`.`Value` AS `VALUE` FROM (`users` join `role` on(`users`.`role` = `role`.`ID`))  ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `apointments`
--
ALTER TABLE `apointments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `roomId` (`roomId`),
  ADD KEY `apointments_ibfk_2` (`doc_pat_id`);

--
-- Indexes for table `doctors`
--
ALTER TABLE `doctors`
  ADD KEY `fk_doctor_id` (`id`);

--
-- Indexes for table `doc_pat`
--
ALTER TABLE `doc_pat`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `fk_pat_pat_id` (`PatientId`),
  ADD KEY `fk_doc_doc_id` (`DoctorId`);

--
-- Indexes for table `patient`
--
ALTER TABLE `patient`
  ADD KEY `fk_patient_id` (`id`);

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `ID` (`ID`),
  ADD KEY `ID_2` (`ID`);

--
-- Indexes for table `rooms`
--
ALTER TABLE `rooms`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IX_Room_NAME` (`roomName`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userID`),
  ADD KEY `role` (`role`),
  ADD KEY `userid` (`userID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `apointments`
--
ALTER TABLE `apointments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `doc_pat`
--
ALTER TABLE `doc_pat`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `role`
--
ALTER TABLE `role`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `rooms`
--
ALTER TABLE `rooms`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `userID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `apointments`
--
ALTER TABLE `apointments`
  ADD CONSTRAINT `apointments_ibfk_1` FOREIGN KEY (`roomId`) REFERENCES `rooms` (`id`),
  ADD CONSTRAINT `apointments_ibfk_2` FOREIGN KEY (`doc_pat_id`) REFERENCES `doc_pat` (`ID`);

--
-- Constraints for table `doctors`
--
ALTER TABLE `doctors`
  ADD CONSTRAINT `fk_doctor_id` FOREIGN KEY (`id`) REFERENCES `users` (`userID`);

--
-- Constraints for table `doc_pat`
--
ALTER TABLE `doc_pat`
  ADD CONSTRAINT `fk_doc_doc_id` FOREIGN KEY (`DoctorId`) REFERENCES `doctors` (`id`),
  ADD CONSTRAINT `fk_pat_pat_id` FOREIGN KEY (`PatientId`) REFERENCES `patient` (`id`);

--
-- Constraints for table `patient`
--
ALTER TABLE `patient`
  ADD CONSTRAINT `fk_patient_id` FOREIGN KEY (`id`) REFERENCES `users` (`userID`);

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`role`) REFERENCES `role` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
