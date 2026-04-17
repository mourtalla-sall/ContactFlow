<?php
// Login à la base de donnée avec des variables, faciles a modifié si changement de mot de passe ou de db

namespace ContactFlow\Database;


class Database {
    private static $instance;
    private \PDO $pdo;

    private function __construct() {
        $this->pdo = new \PDO(
            "mysql:host=mourtalla-sall.students-laplateforme.io;dbname=mourtalla-sall_ContactFlow;charset=utf8",
            'contactFlow',
            '7!2p3of9B',
            [\PDO::ATTR_ERRMODE => \PDO::ERRMODE_EXCEPTION]
        );
    }

    public static function getInstance() {
        if (self::$instance === NULL) {
            self::$instance = new Database();
        }
        return self::$instance;
    }
    public function getConnexion(): \PDO{
        return $this->pdo;
    }
}




?>