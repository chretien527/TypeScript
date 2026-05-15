<?php

//Public Constructor
class User{
    public function __construct(public string $name){}
}

$user = new User("Sano"); // works everywhere

//Protected Constructor

class Base {
    protected function __constructor(){
        echo "Base constructor\n";
    }
}

class Child extends Base{
    public function __construct(){
        parent::__construct();
        echo "Child constructor\n";
    }
}

$obj = new Child(); // works
$newBase = new Base(); // Error: Cannot access protected constructor

//Private constructor

class singleton{
    private static $instance = null;

    private function __construct(){
        echo "Private constructor\n";
    }

    public static function getInstance(){
        if(self::$instance === null){
            self::$instance = new Singleton();
        }
        return self::$instance;
    } 
}

$obj1 = Singleton::getInstance() //works
$obj2 = new Singleton(); //Cannot access private constructor

?>