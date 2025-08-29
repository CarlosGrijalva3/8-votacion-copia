<?php


//$servername = "localhost";
//$username = "root"; // usuario por defecto de XAMPP
//$password = "";     // contraseña por defecto de XAMPP
//$dbname = "votacion";

$servername = "fdb1034.awardspace.net";
$username = "4667961_universidad"; 
$password = "xP?vzuHE10exkEOS";     
$dbname = "usuario";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}
//echo "¡Conectado exitosamente!";
?>
