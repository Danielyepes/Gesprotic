<?php

include "../../php/conect.php";

$link = Conection();
$array = array();

$id = $_POST["id"];

$sql = "SELECT * FROM proyecto  WHERE id = $id";
$result = mysqli_query($link, $sql) or die(mysqli_error($link));
while ($field = mysqli_fetch_array($result)) {
    $id = $field["id"];
    $titulo = $field["titulo"];
    
    $id_organizacion = $field["id_organizacion"];
    $sqlOrg = "SELECT * FROM organizacion  WHERE id =  $id_organizacion";
    $resultOrg = mysqli_query($link, $sqlOrg) or die(mysqli_error($link));
    $fieldOrg = mysqli_fetch_array($resultOrg);
    $id_organizacion = utf8_encode($fieldOrg["nombre"]);
    $array[] = array(
        'id' => $id,
        'titulo' => $titulo,
        'id_organizacion' => $id_organizacion,

    );
}
$json_string = json_encode($array, JSON_UNESCAPED_UNICODE);
echo $json_string;
