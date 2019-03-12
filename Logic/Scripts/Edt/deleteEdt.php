<?php

include "../../php/conect.php";

$id = $_GET["id"];

$conection = Conection();
//alcance edt table
$query = "DELETE from `alcance_edt` WHERE id_edt = $id";
mysqli_query($conection, $query);

//edt table
$queryedt = "DELETE from `edt` WHERE id = $id";
mysqli_query($conection, $queryedt);

header("location: ../../../index.html");
