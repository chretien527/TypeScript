<?php

class MyClass{
    public $name;
    public $age;

    public function __construct($name, $age=18){
        $this->name = $name;
        $this->age = $age;
    }
}

$obj = new MyClass("Sano");
echo $obj->name;
echo $obj->age;

?>