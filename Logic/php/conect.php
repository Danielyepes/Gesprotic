<?php


function Conection() {

    $mysql_host = "localhost";
    $mysql_database = "gespro";
    $mysql_user = "root";
    $mysql_password = "";


    $link = mysqli_connect($mysql_host,$mysql_user,$mysql_password,$mysql_database);

    mysqli_set_charset($link,"utf-8");

    if (!($link))
    {
        echo "Error conectando a la base de datos.";
        exit();
    }

    return $link;
}