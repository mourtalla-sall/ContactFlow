<?php
namespace ContactFlow\Controller;

use ContactFlow\Model\Contact;

class Controller {
    private $contactModel;

    public function __construct() {
        $this->contactModel = new Contact();
    }

    function addContact() {
        $error = '';
        if (isset($_POST['submit'])) {
            $firstName = trim($_POST['firstName']); 
            $lastName = trim($_POST['lastName']);
            $email = trim($_POST['email']);
            $telephone = trim($_POST['telephone']) ;
          
            if (empty($firstName) || empty($lastName) || empty($email) || empty($telephone)) {
                $error = "Tous les champs sont requis";
          
            } else {
                if ($this->contactModel->createContact($firstName, $lastName, $email, $telephone)) {
                    // header("Location: index.php?page=login&success=1");
                    // exit();
                } else {
                    $error = "Erreur lors de l'enregistrement du contact";
                }
            }
        }
        return $error;
    }


    public function updateContact() {
    
        $error = '';
        $success = '';
        $contact = $this->contactModel-> getById(((int)$_GET['id']));

        if (isset($_POST['update_profile'])) {
            $firstName = trim($_POST['firstName']); 
            $lastName = trim($_POST['lastName']);
            $email = trim($_POST['email']);
            $telephone = trim($_POST['telephone']) ;

            if (empty($firstName) || empty($lastName) || empty($email) || empty($telephone)) {
                $error = "Tous les champs sont requis";
           
            } else {
                if ($this->contactModel->update(((int)$_GET['id']), $firstName, $lastName, $email, $telephone)) {
                    $success = "Contact mis à jour avec succès";
             
                } else {
                    $error = "Erreur lors de la mise à jour";
                }
            }
        }

        return ['contact' => $contact, 'error' => $error, 'success' => $success];
    }

     public function deleteContact() {
        $contactModel = new Contact();
        $contactModel->delete((int)$_GET['id']);
        // header('Location: index.php?page=admin/dashboard');
        // exit;
    }
}