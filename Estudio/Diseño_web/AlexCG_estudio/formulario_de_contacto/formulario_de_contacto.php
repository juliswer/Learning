<?php
    $destinatario = 'hola@alexcgdesign.com';
    // this is to de email where will be sent the message.
    $nombre = $_POST['nombre'];
    $asunto = $_POST['asunto'];
    $mensaje = $_POST['mensaje'];
    $email = $_POST['email'];

    $header = "Enviado desde la página de AlexCG Design";
    $mensajeCompleto = $mensaje . "\nAtentamente: " . $nombre;

    mail($destinatario, $asunto, $mensajeCompleto, $header);
    echo "<script>alert('correo enviado exitosamente')</script>";
    echo "<script>setTimeout(\"location.href="formulario_de_contacto.html"\", 1000)</script>";
?>