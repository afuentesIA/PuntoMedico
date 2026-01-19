<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit(0);
}

// Configuración de PayPal SANDBOX con cuentas reales de prueba
$paypal_client_id = "AeA4Zz0Mq-1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a";
$paypal_secret = "EC1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a";
$paypal_url = "https://api.sandbox.paypal.com";

// Cuenta de PayPal para recibir pagos (SANDBOX)
$business_account = "sb-43j7ln1234567@business.example.com";

if ($_POST['action'] == 'create_order') {
    $total = floatval($_POST['total']);
    
    $data = [
        'intent' => 'CAPTURE',
        'purchase_units' => [[
            'amount' => [
                'currency_code' => 'MXN',
                'value' => number_format($total, 2, '.', '')
            ],
            'description' => 'Renta de equipos médicos - Punto Médico',
            'payee' => [
                'email_address' => $business_account
            ]
        ]],
        'application_context' => [
            'brand_name' => 'Punto Médico',
            'user_action' => 'PAY_NOW',
            'shipping_preference' => 'NO_SHIPPING'
        ]
    ];
    
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $paypal_url . '/v2/checkout/orders');
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Content-Type: application/json',
        'Authorization: Basic ' . base64_encode($paypal_client_id . ':' . $paypal_secret),
        'PayPal-Request-Id: ' . uniqid()
    ]);
    
    $response = curl_exec($ch);
    $http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
    
    if ($http_code == 200 || $http_code == 201) {
        echo $response;
    } else {
        echo json_encode(['error' => 'Error creating order: ' . $response]);
    }
    
} elseif ($_POST['action'] == 'capture_order') {
    $order_id = $_POST['order_id'];
    
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $paypal_url . '/v2/checkout/orders/' . $order_id . '/capture');
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Content-Type: application/json',
        'Authorization: Basic ' . base64_encode($paypal_client_id . ':' . $paypal_secret)
    ]);
    
    $response = curl_exec($ch);
    $http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
    
    if ($http_code == 200 || $http_code == 201) {
        echo $response;
    } else {
        echo json_encode(['error' => 'Error capturing order: ' . $response]);
    }
    
} elseif ($_POST['action'] == 'process_card') {
    // Simulación de pago con tarjeta hacia una cuenta real
    $card_data = $_POST['card_data'];
    $total = floatval($_POST['total']);
    
    // Validación básica de tarjeta
    if (strlen($card_data['number']) != 16) {
        echo json_encode(['success' => false, 'error' => 'Número de tarjeta inválido']);
        exit;
    }
    
    // Simular procesamiento con gateway de pago
    // EN PRODUCCIÓN: Aquí se conectaría con Stripe, Mercado Pago, etc.
    $transaction_id = 'TXN_' . time() . '_' . rand(1000, 9999);
    
    // Simular pago exitoso (90% de éxito)
    if (rand(1, 10) <= 9) {
        echo json_encode([
            'success' => true,
            'transaction_id' => $transaction_id,
            'amount' => $total,
            'message' => 'Pago procesado exitosamente'
        ]);
    } else {
        echo json_encode([
            'success' => false,
            'error' => 'Transacción rechazada por el banco'
        ]);
    }
    
} else {
    echo json_encode(['error' => 'Acción no válida']);
}
?>