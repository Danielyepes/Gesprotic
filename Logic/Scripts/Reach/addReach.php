<?php

include "../../php/conect.php";

foreach ($_POST as $key => $clave) {
    if($key != "reachSelect"){
        $asignacion = "\$" . $key . "='" . $clave . "';";
        eval($asignacion);
    }
}

$conection = Conection();

$query = "INSERT INTO `alcance`(`descripcion`, `limitaciones`, `hipotesis`, `id_proyecto`)
        VALUES ('$descripcion_alcance',
        '$limitaciones',
        '$hipotesis',
        $id_proyecto)";

mysqli_query($conection, $query);
echo $query;
echo mysqli_sqlstate($conection);

$sql = "SELECT * FROM alcance ORDER BY id desc";
$result = mysqli_query($conection, $sql) or die(mysqli_error($conection));
$field = mysqli_fetch_array($result);

$id_alcance = $field["id"];

if(isset($_POST["reachSelect"])){
    foreach($_POST["reachSelect"] as $key => $clave){
            $query = "INSERT INTO `alcance_requisito`(`id_alcance`, `id_requisito`)values($id_alcance,'$clave')";
            mysqli_query($conection,$query);
    }
}

echo "do_it";
echo mysqli_sqlstate($conection);