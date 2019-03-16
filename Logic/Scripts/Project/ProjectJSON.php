<?php

include "../../php/conect.php";

$link = Conection();
$array = array();

$sql = "SELECT * FROM proyecto  WHERE 1";
$result = mysqli_query($link, $sql) or die(mysqli_error($link));
while ($field = mysqli_fetch_array($result)) {
    $id = $field["id"];
    $titulo = $field["titulo"];
    
    $id_organizacion = $field["id_organizacion"];
    $sqlOrg = "SELECT * FROM organizacion  WHERE id =  $id_organizacion";
    $resultOrg = mysqli_query($link, $sqlOrg) or die(mysqli_error($link));
    $fieldOrg = mysqli_fetch_array($resultOrg);
    $id_organizacion = $fieldOrg["nombre"];

    $id_responsable = $field["id_responsable"];
    $sqlResp = "SELECT * FROM responsable  WHERE id =  $id_responsable";
    $resultResp = mysqli_query($link, $sqlResp) or die(mysqli_error($link));
    $fieldResp = mysqli_fetch_array($resultResp);
    $id_responsable = utf8_encode($fieldResp["nombre"]);

    $array[] = array(
        'id' => $id,
        'titulo' => $titulo,
        'id_organizacion' => $id_organizacion,
        'id_responsable' => $id_responsable,
        

    );
}
$json_string = json_encode($array, JSON_UNESCAPED_UNICODE);
echo $json_string;
