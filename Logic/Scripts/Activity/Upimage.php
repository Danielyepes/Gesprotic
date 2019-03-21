<?php

include "../../php/conect.php";

$id_proyecto = $_POST["id_proyecto"];

$link = Conection();

$foto=$_FILES["diagram"]["name"];
$ruta=$_FILES["diagram"]["tmp_name"];
$nombre_foto = str_replace(" ","",$foto);
$destino="img/".date("dMYHis").$nombre_foto;

$query = "SELECT COUNT(`id`) FROM `imagen_secuencia_act` WHERE 1 ";
$result = mysqli_query($link,$query);
$field = mysqli_fetch_array($result);

$contador = $field["COUNT(`id`)"];

if($contador > 0){

    $query = "DELETE FROM `imagen_secuencia_act` WHERE 1";
    
                mysqli_query($link,$query);

    $query = "INSERT INTO `imagen_secuencia_act`( `imagen`, `id_proyecto`) VALUES
                ('$destino',
                '$id_proyecto')";
    
                mysqli_query($link,$query);
}

copy($ruta,$destino);

echo "<script>alert('Imagen guardada');;</script>";

header("location:../../../tiempo.html");