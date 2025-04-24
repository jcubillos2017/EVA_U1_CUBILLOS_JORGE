<?php

header('Content-Type: application/json');

try {
    // URL de la API externa
    $apiUrl = 'https://ciisa.coningenio.cl/v1/services/';

    // Inicializar cURL
    $ch = curl_init($apiUrl);

    // Configurar opciones de cURL
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false); // Deshabilitar verificación SSL si es necesario

    // Ejecutar la solicitud
    $response = curl_exec($ch);

    // Verificar si hubo errores
    if (curl_errno($ch)) {
        throw new Exception('Error en la solicitud cURL: ' . curl_error($ch));
    }

    // Obtener el código de respuesta HTTP
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

    // Cerrar cURL
    curl_close($ch);

    // Verificar el código de respuesta
    if ($httpCode !== 200) {
        throw new Exception("Error en la API externa. Código de respuesta: $httpCode");
    }

    // Enviar la respuesta de la API externa al cliente
    echo $response;

} catch (Exception $e) {
    // Manejo de errores
    echo json_encode([
        'error' => true,
        'message' => $e->getMessage()
    ]);
}