<?php
    require "config.php";
    $conexion = connect();
    if(!$conexion)
    {
        $response = 'Hubo un error en la conexion';
    }else{
        function asignar($input)
        {
            $input = (isset($_POST[$input]) && $_POST[$input] != "")? $_POST[$input] : false;
            if($input == false)
                $response = 'ERROR: No has introducido un dato requerido';
            return $input;
        }

        $nombre = asignar("nombre");
        $precio = asignar("precio");
        $info = asignar("info");

       if($nombre && $precio && $info)
       {
            $sql = "INSERT INTO tacos (nombre, precio, info)
            VALUES ('$nombre', '$precio', '$info')";
            $res = mysqli_query($conexion, $sql);
            $id = mysqli_insert_id($conexion);
            if(!$res)
            {
                $response = "No se pudo insertar el taco D:";
            } else{
                $response = "Taco insertado :D gracias a dios";
            }
       }else{
            if(!$nombre)
            {
                $response = "No se especificó el nombre";
            }else if ( !$precio){
                $response = "No se especificó el precio";
            }else if ( !$info){
                $response = "No se especificó la info";
       }
    }
    };
    echo json_encode($response)
?>                    