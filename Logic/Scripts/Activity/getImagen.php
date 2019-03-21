<?php

include "../../php/conect.php";

$id_proyecto = $_POST["id_proyecto"];

$link = Conection();

$query = "SELECT * FROM `imagen_secuencia_act` WHERE id_proyecto = $id_proyecto ";
$result = mysqli_query($link,$query);
$field = mysqli_fetch_array($result);

echo $field["imagen"];