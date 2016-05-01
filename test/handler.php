<?php
$indicator = true;
if ($_POST['name']) {
    $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
}
if ($_POST['phone_number']) {
    $phone_number = filter_input(INPUT_POST, 'phone_number');
}
if ($_POST['email']) {
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
}
if (!isset($name) || !isset($phone_number)) {
    $indicator = false;
}
if ($indicator) {
    $receiver = 'info@fayvideo.com';
    $message = "Данные о заказе: \n\n 1) Имя: " . $name . "; \n 2) Номер телефона: " . $phone_number . ";";
    if (!empty($email)) {
        $message = $message . "\n 3) E-mail: " . $email . ";";
    }
    if (mail($receiver, 'Новая заявка', $message, 'Content-Type: text/html; charset=\"utf-8\"')) {
        echo json_encode(array('success' => true, 'answer' => 'Ваша заявка принята. Наш Менеджер свяжется с Вами в течение 10 минут;'));
    } else {
        echo json_encode(array('success' => false, 'answer' => 'К сожалению, Вашу заявку не удалось отправить. Пожалуйста, попробуйте позже;'));
    }
} else {
    echo json_encode(array('success' => false, 'answer' => 'К сожалению, Вашу заявку не удалось отправить. Пожалуйста, попробуйте позже;'));
}