<?php

namespace ContactFlow\Model;

use ContactFlow\Database;

use \PDO;

class Contact {

    private $pdo;

    public function __construct() {
        $db = Database::getInstance();
        $this->pdo = $db->getConnexion();
    }

    private function securityInput($input) {
        return trim(htmlspecialchars($input));
    }

    public function createContact($firstName, $lastName, $email, $telephone ) {
        $data = $this->pdo->prepare('INSERT INTO contact (firstName, lastName, email, telephone) VALUES (:firstName, :lastName, :email, :telephone,)');
        $data->bindValue(':firstName', $this->securityInput($firstName), PDO::PARAM_STR);
        $data->bindValue(':lastName', $this->securityInput($lastName), PDO::PARAM_STR);
        $data->bindValue(':email', $this->securityInput($email), PDO::PARAM_STR);
        $data->bindValue(':telephone', $this->securityInput($telephone), PDO::PARAM_INT);
   
        return $data->execute();
    }

    public function getAll() {
        $data = $this->pdo->prepare('SELECT * FROM  contact ');
        $data->execute();
        return $data->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getById($id) {
        $data = $this->pdo->prepare('SELECT * FROM contact WHERE id = :id');
        $data->bindValue(':id', $id, PDO::PARAM_INT);
        $data->execute();
        return $data->fetch(PDO::FETCH_ASSOC);
    }

    public function update($id, $firstName, $lastName, $email, $telephone ) {
        $data = $this->pdo->prepare('UPDATE contact SET firstName=:firstName, lastName=:lastName, email=:email, telephone=:telephone, WHERE id=:id');
        $data->bindValue(':firstName', $this->securityInput($firstName), PDO::PARAM_STR);
        $data->bindValue(':lastName', $this->securityInput($lastName), PDO::PARAM_STR);
        $data->bindValue(':email', $this->securityInput($email), PDO::PARAM_STR);
        $data->bindValue(':telephone', $this->securityInput($telephone), PDO::PARAM_INT);

        $data->bindValue(':id', $id,PDO::PARAM_INT);

        return $data->execute();
    }

    public function delete($id) {
        $data = $this->pdo->prepare('DELETE FROM contact WHERE id = :id');
        $data->bindValue(':id', $id, PDO::PARAM_INT);
        return $data->execute();
    }

    public function count() {
        return $this->pdo->query('SELECT COUNT(*) FROM contact')->fetchColumn();
    }
}
?>
