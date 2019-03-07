<?php

include "../../php/conect.php";

$link = Conection();
$array = array();
$requisitos = array();

$id = $_POST["id_proyecto"];

$sql = "SELECT * FROM alcance WHERE id_proyecto = $id";
$result = mysqli_query($link, $sql) or die(mysqli_error($link));
$field = mysqli_fetch_array($result);

    $id_reach = $field["id"];
    $descripcion_alcance = $field["descripcion"];
    $limitaciones = $field["limitaciones"];
    $hipotesis = $field["hipotesis"];

    $array[] = array(
        'id_reach' => $id_reach,
        'descripcion' => $descripcion_alcance,
        'limitaciones' => $limitaciones,
        'hipotesis' => $hipotesis,
    );

    $id_alcance = $field["id"];

$sql1 = "SELECT * FROM alcance_requisito where id_alcance = $id_alcance";
$result1 = mysqli_query($link, $sql1) or die(mysqli_error($link));
while ($field1 = mysqli_fetch_array($result1)){

    $id_req = $field1["id_requisito"];

    $sqlreq = "SELECT * FROM requisito WHERE id = $id_req";
    $resultreq = mysqli_query($link, $sqlreq) or die(mysqli_error($link));
    while ($fieldreq = mysqli_fetch_array($resultreq)){
        $id = $fieldreq["id"];
        $nombre = $fieldreq["nombre"];

        $requisitos[] =  array(
            'id_req' => $id,
            'nombre' => $nombre,
        );
        
    }
}

$array[] = array( "array" => $requisitos);

$json_string = json_encode($array, JSON_UNESCAPED_UNICODE);
echo $json_string;
