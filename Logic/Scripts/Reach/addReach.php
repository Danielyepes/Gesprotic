<?php

include "../../php/conect.php";

$id =  $_POST["id"];

foreach ($_POST as $key => $clave) {
    if($key != "reachSelect"){
        $asignacion = "\$" . $key . "='" . $clave . "';";
        eval($asignacion);
    }
}

$conection = Conection();

$id_alcance = 0;
if($id != 0){
    $sql = "SELECT * FROM alcance WHERE id = $id";
    $result = mysqli_query($conection, $sql) or die(mysqli_error($conection));
    $field = mysqli_fetch_array($result);
    
    $id_alcance = $field["id"];
}

if($id_alcance != 0){

    $query = "UPDATE `alcance` SET `descripcion`='$descripcion_alcance', `limitaciones`='$limitaciones', `hipotesis`='$hipotesis',
            `id_proyecto`=$id_proyecto WHERE id= $id_alcance";

    mysqli_query($conection, $query);

}else{
    $query = "INSERT INTO `alcance`(`descripcion`, `limitaciones`, `hipotesis`, `id_proyecto`)
            VALUES ('$descripcion_alcance',
            '$limitaciones',
            '$hipotesis',
            $id_proyecto)";

    mysqli_query($conection, $query);
}

if(isset($_POST["reachSelect"])){
    if(search_exist_requirement($conection,$id_alcance,"alcance_requisito","id_alcance") >= 1){
        $sql = "DELETE FROM alcance_requisito WHERE id_alcance = $id_alcance";
        mysqli_query($conection, $sql) or die(mysqli_error($conection));


        foreach($_POST["reachSelect"] as $key => $clave){
            $query = "INSERT INTO `alcance_requisito`(`id_alcance`, `id_requisito`)values($id_alcance,'$clave')";
            mysqli_query($conection,$query);
        }
    }else{        
        foreach($_POST["reachSelect"] as $key => $clave){
                $query = "INSERT INTO `alcance_requisito`(`id_alcance`, `id_requisito`)values($id_alcance,'$clave')";
                mysqli_query($conection,$query);
        }
    }
}

echo "do_it";

function search_exist_requirement($conection,$value_field,$tabla,$field){
    $sql = "SELECT COUNT(id) FROM $tabla WHERE $field = $value_field";
    $result = mysqli_query($conection, $sql) or die(mysqli_error($conection));
    $field = mysqli_fetch_array($result);


    return $field["COUNT(id)"];

}