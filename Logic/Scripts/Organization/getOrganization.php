<?php

include "../../php/conect.php";

$link = Conection();
$array = array();

$id = $_POST["id"];

$sql = "SELECT * FROM organizacion  WHERE id = $id";
$result = mysqli_query($link, $sql) or die(mysqli_error($link));
while ($field = mysqli_fetch_array($result)) {
    $id = $field["id"];
    $nombre = $field["nombre"];
    $array[] = array(
        'id' => $id,
        'nombre' => $nombre,

    );
}
$json_string = json_encode($array, JSON_UNESCAPED_UNICODE);
echo $json_string;
