<?php
    define("DBHOST", "localhost");
    define("DBUSER", "root");
    define("PASSWORD", "");
    define("DB", "taqueria");

    function connect(){
        $conexion = mysqli_connect(DBHOST, DBUSER, PASSWORD, DB);
        if(!$conexion){
            mysqli_error();
            echo "Error al conectarse a la base";
        }
        return $conexion;
    }
?>