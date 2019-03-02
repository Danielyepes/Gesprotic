<?php

include "../../php/conect.php";

$link = Conection();
$array = array();

$sql = "SELECT * FROM alcance";
$result = mysqli_query($link, $sql) or die(mysqli_error($link));
while ($field = mysqli_fetch_array($result)) {
    $descripcion = $field["descripcion"];
    $id = $field["id"];
    $id_proyecto = $field["id_proyecto"];
    $hipotesis = $field["hipotesis"];
    $limitaciones = $field["limitaciones"];

    $array[] = array(
        'id' => $id,
        'id_proyecto' => $id_proyecto,
        'descripcion' => $descripcion,
        'hipotesis' => $hipotesis,
        'limitaciones' => $limitaciones,

    );
}
$json_string = json_encode($array, JSON_UNESCAPED_UNICODE);
echo $json_string;
