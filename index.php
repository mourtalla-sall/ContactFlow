<?php
require_once __DIR__ . '/vendor/autoload.php';
use ContactFlow\Controller\Controller;

$toto = new Controller();
$form = $toto->addContact();
var_dump($_POST);

if(isset($_GET['toto'])){
    echo json_encode('toto');
}


?>