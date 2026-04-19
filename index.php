<?php
require_once __DIR__ . '/vendor/autoload.php';
use ContactFlow\Controller\Controller;

$toto = new Controller(); 

$json = file_get_contents('php://input');
$data = json_decode($json, true);

if (is_null($data)) {
    $data = $_POST;
}

//  détecte un vrai GET (body vide)
if (empty($json) && empty($_POST)) {
    echo $toto->getContact();
    exit;
}

if (!isset($data['firstName'], $data['lastName'], $data['email'], $data['telephone'])) {
    echo json_encode(['error' => 'Tous les champs sont requis']);
    exit;
}

$firstName = htmlspecialchars(trim($data['firstName']));
$lastName = htmlspecialchars(trim($data['lastName']));
$email = htmlspecialchars(trim($data['email']));
$telephone = htmlspecialchars(trim($data['telephone']));

echo $toto->addContact($firstName, $lastName, $email, $telephone);