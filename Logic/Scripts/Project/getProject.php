<?php

include "../../php/conect.php";

$link = Conection();
$array = array();

$id = $_POST["id"];

$sql = "SELECT * FROM proyecto  WHERE id = $id";
$result = mysqli_query($link, $sql) or die(mysqli_error($link));
while ($field = mysqli_fetch_array($result)) {
    $titulo = $field["titulo"];
    $id_organizacion = $field["id_organizacion"];
    $array[] = array(
        'titulo' => $titulo,
        'id_organizacion' => $id_organizacion,

    );
}
$json_string = json_encode($array, JSON_UNESCAPED_UNICODE);
echo $json_string;
