<?php
include 'Primera_contexion.php'; /*añade la primera coneccion*/ 

// Obtener datos del formulario
$correo = $_POST['correo'];
$contrasena = $_POST['contrasena'];

// Hashear contraseña
$contrasenaHash = password_hash($contrasena, PASSWORD_DEFAULT);

// Preparar consulta SQL
$sql = "INSERT INTO usuario (correo, contrasena) VALUES (?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $correo, $contrasenaHash);
/*
if ($stmt->execute()) {
    echo "Registro exitoso";
} else {
    echo "Error: " . $stmt->error;
}
*/
if ($stmt->execute()) {
    header("Location: /paginas_test/votacionUni.html");
    exit();
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
