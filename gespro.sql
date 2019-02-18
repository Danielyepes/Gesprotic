-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 18-02-2019 a las 05:33:55
-- Versión del servidor: 10.1.37-MariaDB
-- Versión de PHP: 7.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `gespro`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `actividad`
--

CREATE TABLE `actividad` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `descripcion` varchar(1000) NOT NULL,
  `estado` int(10) NOT NULL,
  `duracion_estimada` float NOT NULL,
  `fecha_inicio` varchar(50) NOT NULL,
  `fecha_fin` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `actividad`
--

INSERT INTO `actividad` (`id`, `nombre`, `descripcion`, `estado`, `duracion_estimada`, `fecha_inicio`, `fecha_fin`) VALUES
(1, 'dsdshj', 'dfjk', 0, 50, '2018-12-10', '2019-1-29');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `actividad_recurso`
--

CREATE TABLE `actividad_recurso` (
  `id` int(11) NOT NULL,
  `id_actividad` int(11) NOT NULL,
  `id_recurso` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alcance`
--

CREATE TABLE `alcance` (
  `id` int(11) NOT NULL,
  `descripcion` varchar(200) NOT NULL,
  `edt` varchar(2000) NOT NULL,
  `limitaciones` varchar(2000) NOT NULL,
  `id_proyecto` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alcance_edt`
--

CREATE TABLE `alcance_edt` (
  `id` int(11) NOT NULL,
  `id_alcance` int(11) NOT NULL,
  `id_edt` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alcance_entregable`
--

CREATE TABLE `alcance_entregable` (
  `id` int(11) NOT NULL,
  `id_entregable` int(11) NOT NULL,
  `id_alcance` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alcance_requisito`
--

CREATE TABLE `alcance_requisito` (
  `id` int(11) NOT NULL,
  `id_alcance` int(11) NOT NULL,
  `id_requisito` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `coste_actividad`
--

CREATE TABLE `coste_actividad` (
  `id` int(11) NOT NULL,
  `estimacion_analoga` double NOT NULL,
  `estimacion_parametrica` double NOT NULL,
  `estimacion_perl` double NOT NULL,
  `total_estimacion` double NOT NULL,
  `id_actividad` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `coste_x_actividad`
--

CREATE TABLE `coste_x_actividad` (
  `id` int(11) NOT NULL,
  `id_actividad` int(11) NOT NULL,
  `id_coste_actividad` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cronograma`
--

CREATE TABLE `cronograma` (
  `id` int(11) NOT NULL,
  `titulo` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cronograma_actividad`
--

CREATE TABLE `cronograma_actividad` (
  `id` int(11) NOT NULL,
  `id_actividad` int(11) NOT NULL,
  `id_cronograma` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `edt`
--

CREATE TABLE `edt` (
  `id` int(11) NOT NULL,
  `nombre` varchar(200) NOT NULL,
  `edt` varchar(4000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `entregable`
--

CREATE TABLE `entregable` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `criterio_aceptacion` varchar(1000) NOT NULL,
  `estado` varchar(50) NOT NULL,
  `id_proyecto` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `entregables_actividad`
--

CREATE TABLE `entregables_actividad` (
  `id` int(11) NOT NULL,
  `id_actividad` int(11) NOT NULL,
  `id_entregable` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `entregable_hito`
--

CREATE TABLE `entregable_hito` (
  `id` int(11) NOT NULL,
  `id_entregable` int(11) NOT NULL,
  `id_hito` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `hito`
--

CREATE TABLE `hito` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `descripcion` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `organizacion`
--

CREATE TABLE `organizacion` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `organizacion`
--

INSERT INTO `organizacion` (`id`, `nombre`) VALUES
(1, 'Universidad de Cartagena'),
(2, 'nueva');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `presupuesto`
--

CREATE TABLE `presupuesto` (
  `id` int(11) NOT NULL,
  `risk_cost` double NOT NULL,
  `id_coste_actividad` int(11) NOT NULL,
  `total` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proyecto`
--

CREATE TABLE `proyecto` (
  `id` int(11) NOT NULL,
  `titulo` varchar(200) NOT NULL,
  `id_organizacion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `proyecto`
--

INSERT INTO `proyecto` (`id`, `titulo`, `id_organizacion`) VALUES
(3, 'Nuevo proyecto', 1),
(4, 'Nuevo proyecto1', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `recurso`
--

CREATE TABLE `recurso` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `valor` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `requisito`
--

CREATE TABLE `requisito` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `criterio_aceptacion` varchar(50) NOT NULL,
  `descripcion` varchar(50) NOT NULL,
  `metrica` varchar(50) NOT NULL,
  `prioridad` varchar(50) NOT NULL,
  `id_proyecto` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `requisito`
--

INSERT INTO `requisito` (`id`, `nombre`, `criterio_aceptacion`, `descripcion`, `metrica`, `prioridad`, `id_proyecto`) VALUES
(3, 'nuevo requisito', 'criterio', 'Descripcion', 'metrica', 'Media', 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `riesgo`
--

CREATE TABLE `riesgo` (
  `id` int(11) NOT NULL,
  `nombre` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `riesgos_`
--

CREATE TABLE `riesgos_` (
  `id` int(11) NOT NULL,
  `id_riesgo` int(11) NOT NULL,
  `id_riesgo_item` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `risk_item`
--

CREATE TABLE `risk_item` (
  `id` int(11) NOT NULL,
  `id_actividad` int(11) NOT NULL,
  `causa_origen` varchar(100) NOT NULL,
  `descripcion` varchar(200) NOT NULL,
  `prioridad` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `stakeholder`
--

CREATE TABLE `stakeholder` (
  `id` int(11) NOT NULL,
  `nombre` varchar(80) NOT NULL,
  `dependencia` varchar(50) NOT NULL,
  `id_proeycto` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `actividad`
--
ALTER TABLE `actividad`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `actividad_recurso`
--
ALTER TABLE `actividad_recurso`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_actividad` (`id_actividad`),
  ADD KEY `id_recurso` (`id_recurso`);

--
-- Indices de la tabla `alcance`
--
ALTER TABLE `alcance`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id_proyecto` (`id_proyecto`);

--
-- Indices de la tabla `alcance_edt`
--
ALTER TABLE `alcance_edt`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_edt` (`id_edt`),
  ADD KEY `id_alcance` (`id_alcance`);

--
-- Indices de la tabla `alcance_entregable`
--
ALTER TABLE `alcance_entregable`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `alcance_requisito`
--
ALTER TABLE `alcance_requisito`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_alcance` (`id_alcance`),
  ADD KEY `id_requisito` (`id_requisito`);

--
-- Indices de la tabla `coste_actividad`
--
ALTER TABLE `coste_actividad`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `coste_x_actividad`
--
ALTER TABLE `coste_x_actividad`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `cronograma`
--
ALTER TABLE `cronograma`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `cronograma_actividad`
--
ALTER TABLE `cronograma_actividad`
  ADD KEY `id_actividad` (`id_actividad`),
  ADD KEY `id_cronograma` (`id_cronograma`);

--
-- Indices de la tabla `edt`
--
ALTER TABLE `edt`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `entregable`
--
ALTER TABLE `entregable`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `entregables_actividad`
--
ALTER TABLE `entregables_actividad`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_actividad` (`id_actividad`),
  ADD KEY `id_entregable` (`id_entregable`);

--
-- Indices de la tabla `entregable_hito`
--
ALTER TABLE `entregable_hito`
  ADD KEY `id_entregable` (`id_entregable`),
  ADD KEY `id_hito` (`id_hito`);

--
-- Indices de la tabla `hito`
--
ALTER TABLE `hito`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `organizacion`
--
ALTER TABLE `organizacion`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `presupuesto`
--
ALTER TABLE `presupuesto`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `proyecto`
--
ALTER TABLE `proyecto`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_organizacion` (`id_organizacion`);

--
-- Indices de la tabla `recurso`
--
ALTER TABLE `recurso`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `requisito`
--
ALTER TABLE `requisito`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `riesgo`
--
ALTER TABLE `riesgo`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `riesgos_`
--
ALTER TABLE `riesgos_`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_riesgo` (`id_riesgo`),
  ADD KEY `id_riesgo_item` (`id_riesgo_item`);

--
-- Indices de la tabla `risk_item`
--
ALTER TABLE `risk_item`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_actividad` (`id_actividad`);

--
-- Indices de la tabla `stakeholder`
--
ALTER TABLE `stakeholder`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `actividad`
--
ALTER TABLE `actividad`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `actividad_recurso`
--
ALTER TABLE `actividad_recurso`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `alcance`
--
ALTER TABLE `alcance`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `alcance_edt`
--
ALTER TABLE `alcance_edt`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `alcance_entregable`
--
ALTER TABLE `alcance_entregable`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `alcance_requisito`
--
ALTER TABLE `alcance_requisito`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `coste_actividad`
--
ALTER TABLE `coste_actividad`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `coste_x_actividad`
--
ALTER TABLE `coste_x_actividad`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `cronograma`
--
ALTER TABLE `cronograma`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `edt`
--
ALTER TABLE `edt`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `entregable`
--
ALTER TABLE `entregable`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `entregables_actividad`
--
ALTER TABLE `entregables_actividad`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `hito`
--
ALTER TABLE `hito`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `organizacion`
--
ALTER TABLE `organizacion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `presupuesto`
--
ALTER TABLE `presupuesto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `proyecto`
--
ALTER TABLE `proyecto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `recurso`
--
ALTER TABLE `recurso`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `requisito`
--
ALTER TABLE `requisito`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `riesgo`
--
ALTER TABLE `riesgo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `riesgos_`
--
ALTER TABLE `riesgos_`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `actividad_recurso`
--
ALTER TABLE `actividad_recurso`
  ADD CONSTRAINT `actividad_recurso_ibfk_1` FOREIGN KEY (`id_actividad`) REFERENCES `actividad` (`id`),
  ADD CONSTRAINT `actividad_recurso_ibfk_2` FOREIGN KEY (`id_recurso`) REFERENCES `recurso` (`id`);

--
-- Filtros para la tabla `alcance_edt`
--
ALTER TABLE `alcance_edt`
  ADD CONSTRAINT `alcance_edt_ibfk_1` FOREIGN KEY (`id_edt`) REFERENCES `edt` (`id`),
  ADD CONSTRAINT `alcance_edt_ibfk_2` FOREIGN KEY (`id_alcance`) REFERENCES `alcance` (`id`);

--
-- Filtros para la tabla `alcance_requisito`
--
ALTER TABLE `alcance_requisito`
  ADD CONSTRAINT `alcance_requisito_ibfk_1` FOREIGN KEY (`id_alcance`) REFERENCES `alcance` (`id`),
  ADD CONSTRAINT `alcance_requisito_ibfk_2` FOREIGN KEY (`id_requisito`) REFERENCES `requisito` (`id`);

--
-- Filtros para la tabla `cronograma_actividad`
--
ALTER TABLE `cronograma_actividad`
  ADD CONSTRAINT `cronograma_actividad_ibfk_1` FOREIGN KEY (`id_actividad`) REFERENCES `actividad` (`id`),
  ADD CONSTRAINT `cronograma_actividad_ibfk_2` FOREIGN KEY (`id_cronograma`) REFERENCES `cronograma` (`id`);

--
-- Filtros para la tabla `entregables_actividad`
--
ALTER TABLE `entregables_actividad`
  ADD CONSTRAINT `entregables_actividad_ibfk_1` FOREIGN KEY (`id_actividad`) REFERENCES `actividad` (`id`),
  ADD CONSTRAINT `entregables_actividad_ibfk_2` FOREIGN KEY (`id_entregable`) REFERENCES `entregable` (`id`);

--
-- Filtros para la tabla `entregable_hito`
--
ALTER TABLE `entregable_hito`
  ADD CONSTRAINT `entregable_hito_ibfk_1` FOREIGN KEY (`id_entregable`) REFERENCES `entregable` (`id`),
  ADD CONSTRAINT `entregable_hito_ibfk_2` FOREIGN KEY (`id_hito`) REFERENCES `hito` (`id`);

--
-- Filtros para la tabla `proyecto`
--
ALTER TABLE `proyecto`
  ADD CONSTRAINT `proyecto_ibfk_1` FOREIGN KEY (`id_organizacion`) REFERENCES `organizacion` (`id`);

--
-- Filtros para la tabla `riesgos_`
--
ALTER TABLE `riesgos_`
  ADD CONSTRAINT `riesgos__ibfk_1` FOREIGN KEY (`id_riesgo`) REFERENCES `riesgo` (`id`),
  ADD CONSTRAINT `riesgos__ibfk_2` FOREIGN KEY (`id_riesgo_item`) REFERENCES `risk_item` (`id`);

--
-- Filtros para la tabla `risk_item`
--
ALTER TABLE `risk_item`
  ADD CONSTRAINT `risk_item_ibfk_1` FOREIGN KEY (`id_actividad`) REFERENCES `actividad` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
