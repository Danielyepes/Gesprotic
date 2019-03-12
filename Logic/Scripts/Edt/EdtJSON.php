<?php

include "../../php/conect.php";

$link = Conection();
$array = array();

$id_alcance = $_POST["id_alcance"];

$sql = "SELECT * FROM alcance_edt WHERE id_alcance = $id_alcance";
$result = mysqli_query($link, $sql) or die(mysqli_error($link));
while ($field = mysqli_fetch_array($result)){
    $id_edt = $field["id_edt"];

    $sql1 = "SELECT * FROM edt where id = $id_edt";
    $result1 = mysqli_query($link, $sql1) or die(mysqli_error($link));
    $field1 = mysqli_fetch_array($result1);

    $nombre = $field1["nombre"];
    $edt = $field1["edt"];
    $id = $field1["id"];

    $array[] = array(
        'id' => $id,
        'nombre' => $nombre,
        'edt' => $edt
    );

}



$json_string = json_encode($array, JSON_UNESCAPED_UNICODE);
echo $json_string;
