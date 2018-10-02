<?php

include "../php/conect.php";

$link = Conection();
$array = array();

$id = $_POST["id"];

$sql = "SELECT * FROM requisito  WHERE id = $id";
$result = mysqli_query($link, $sql) or die(mysqli_error($link));
while ($field = mysqli_fetch_array($result)) {
    $nombre = $field["nombre"];
    $criterio_aceptacion = $field["criterio_aceptacion"];
    $descripcion = $field["descripcion"];
    $metrica = $field["metrica"];
    $prioridad = $field["prioridad"];
    $array[] = array(
        'nombre' => $nombre,
        'criterio_aceptacion' => $criterio_aceptacion,
        'descripcion' => $descripcion,
        'metrica' => $metrica,
        'prioridad' => $prioridad,
    );
}
$json_string = json_encode($array, JSON_UNESCAPED_UNICODE);
echo $json_string;
