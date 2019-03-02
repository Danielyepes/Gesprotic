<?php

include "../../php/conect.php";

$link = Conection();
$array = array();

$id = $_GET["id_proyecto"];

$sql = "SELECT * FROM alcance WHERE id_proyecto = $id";
$result = mysqli_query($link, $sql) or die(mysqli_error($link));
$field = mysqli_fetch_array($result);

$id_alcance = $field["id"];

$sql1 = "SELECT * FROM alcance_requisito where id_alcance = $id_alcance";
$result1 = mysqli_query($link, $sql1) or die(mysqli_error($link));
while ($field1 = mysqli_fetch_array($result1)){

    $id_req = $field1["id_requisito"];

    $array[] = array(
        'id_req' => $id_req

    );
}
$json_string = json_encode($array, JSON_UNESCAPED_UNICODE);
echo $json_string;
