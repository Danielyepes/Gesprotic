<?php

include "../../php/conect.php";

$id = $_GET["id"];

$conection = Conection();

$query = "DELETE from `responsable` WHERE id = $id";

mysqli_query($conection, $query);

header("location: ../../../index.html");
