<?php 

include "../php/conect.php";

foreach($_POST as $key => $clave){
    $asignacion = "\$" . $key . "='" . $clave . "';";
    eval($asignacion);
    echo $asignacion;
}

$conection = Conection();

$query = "INSERT INTO `requisito`(`id`, `nombre`, `criterio_aceptacion`, `descripcion`, `metrica`, `prioridad`)
        ";

